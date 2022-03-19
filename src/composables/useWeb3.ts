import { computed, ComputedRef, reactive } from 'vue'
import { Web3Provider } from '@ethersproject/providers'
// import { Contract } from '@ethersproject/contracts'
import { formatUnits } from '@ethersproject/units'
// import { formatEther } from '@ethersproject/units'
import { getInstance } from '@snapshot-labs/lock/plugins/vue3'
import networks from '@/helpers/networks.json'
import { useLocalStorage } from '@/composables/useLocalStorage'
// import contractArtifact from '../../../NFT-collection-contracts/artifacts/contracts/NFTCollection.sol/BUTTS.json'

export interface UseWeb3 {
  login(connector: string): Promise<void>
  logout(): void
  loadProvider(): Promise<any>
  handleChainChanged(chainId: number): Promise<void>
  switchNetwork(): Promise<void>
  web3: ComputedRef<Web3State>
  web3Account: ComputedRef<string>
  isRightChain: ComputedRef<boolean>
  isConnected: ComputedRef<boolean>
  handleLogin(): Promise<void>
  // contract: ComputedRef<ContractState>
  // loadContractData(): Promise<void>
  // whitelistMint(amount: number): Promise<void>
  // publicMint(amount: number): Promise<void>
}

export interface Web3State {
  account: string
  network: number
  authLoading: boolean
  profile: any
  walletConnectType: any
  isTrezor: boolean
  isRightChain: boolean
  isConnected: boolean
}

export interface ContractState {
  totalSupply: number
  totalMinted: number
  saleOpen: boolean
  price: number
  maxPerTx: number
  balance: number
}

let auth
//TODO: Replace id before using in mainnet
const defaultChainId = 3
const defaultNetwork = Object.keys(networks)[defaultChainId]
const { setStorageItem, getStorageItem } = useLocalStorage()
//TODO: Replace id before using in mainnet
// const CONTRACT_ADDRESS = '0xC51f5eb58a07B8579c97d0176A2F80Cd580158BB'
// const ABI = contractArtifact.abi

const state = reactive<Web3State>({
  account: '',
  network: networks[defaultNetwork],
  authLoading: false,
  profile: null,
  walletConnectType: null,
  isTrezor: false,
  isRightChain: true,
  isConnected: getStorageItem('isConnected') ?? false
})

export function useWeb3(): UseWeb3 {
  async function login(connector = 'injected'): Promise<void> {
    state.isTrezor = connector === 'trezor'
    auth = getInstance()
    state.authLoading = true
    await auth.login(connector)
    if (auth.provider.value) {
      auth.web3 = new Web3Provider(auth.provider.value, 'any')
      await loadProvider()
      // await loadContractData()
    }
    state.authLoading = false
  }

  function logout(): void {
    auth = getInstance()
    auth.logout()
    state.account = ''
    state.profile = null
    state.isTrezor = false
    setStorageItem('isConnected', false)
    state.isConnected = false
  }

  async function loadProvider(): Promise<any> {
    try {
      if (
        auth.provider.value.removeAllListeners &&
        !auth.provider.value.isTorus
      )
        auth.provider.value.removeAllListeners()
      if (auth.provider.value.on) {
        auth.provider.value.on('chainChanged', async (chainId) => {
          handleChainChanged(parseInt(formatUnits(chainId, 0)))
        })
        auth.provider.value.on('accountsChanged', async (accounts) => {
          if (accounts.length !== 0) {
            state.account = accounts[0]
            await login()
          } else {
            logout()
          }
        })
      }
      let network, accounts
      try {
        const connector = auth.provider.value?.connectorName
        if (connector === 'gnosis') {
          const { chainId: safeChainId, safeAddress } = auth.web3.provider.safe
          network = { chainId: safeChainId }
          accounts = [safeAddress]
        } else {
          ;[network, accounts] = await Promise.all([
            auth.web3.getNetwork(),
            auth.web3.listAccounts()
          ])
        }
      } catch (e) {
        console.log(e)
      }
      handleChainChanged(network.chainId)
      const acc = accounts.length > 0 ? accounts[0] : null

      state.account = acc
      state.walletConnectType = auth.provider.value?.wc?.peerMeta?.name || null

      setStorageItem('isConnected', true)
      state.isConnected = true
    } catch (e) {
      state.account = ''
      state.profile = null
      return Promise.reject(e)
    }
  }

  async function handleChainChanged(chainId: number) {
    if (!networks[chainId]) {
      networks[chainId] = {
        ...networks[defaultNetwork],
        chainId,
        name: 'Unknown',
        network: 'unknown',
        unknown: true
      }
    }
    state.network = networks[chainId]
    state.isRightChain = chainId === defaultChainId ? true : false
  }

  async function switchNetwork(): Promise<void> {
    if (window.ethereum) {
      const hexString = Number(defaultChainId).toString(16)
      try {
        await window.ethereum.request({
          method: 'wallet_switchEthereumChain',
          params: [{ chainId: '0x' + hexString }]
        })
      } catch (err) {
        console.log(err)
      }
    }
  }

  const contractState = reactive<ContractState>({
    totalSupply: 10000,
    totalMinted: 0,
    saleOpen: false,
    price: 0,
    maxPerTx: 20,
    balance: 0
  })

  // async function loadContractData(): Promise<void> {
  //   const readOnlyContract = new Contract(CONTRACT_ADDRESS, ABI, auth.web3)

  //   contractState.totalSupply =
  //   (await readOnlyContract.MAX_SUPPLY()).toNumber() ??
  //   contractState.totalSupply
  //   contractState.whitelistSaleSupply =
  //   (await readOnlyContract.whitelistSaleSupply()).toNumber() ??
  //   contractState.whitelistSaleSupply
  //   contractState.totalMinted =
  //   (await readOnlyContract.tokenCount()).toNumber() ?? 0
  //   contractState.whitelistSaleOpen = await readOnlyContract.whitelistSaleOpen()
  //   contractState.price = Number(formatEther(await readOnlyContract.getCost(1)))
  //   if (contractState.whitelistSaleOpen) {
  //     contractState.maxPerTx = (
  //       await readOnlyContract.maxPerTx()
  //       ).toNumber()
  //     }
  //     contractState.balance = (
  //       await readOnlyContract.balanceOf(state.account)
  //       ).toNumber()
  //       contractState.auctionSaleOpen = (
  //         await readOnlyContract.auctionSaleStartTime()
  //         ).toNumber()
  //         ? true
  //         : false

  //         readOnlyContract.on('ChangeTokenCount', (tokenCount) => {
  //           contractState.totalMinted = tokenCount
  //   })
  //   readOnlyContract.on('ToggleWhitelistSale', (whitelistSaleOpen) => {
  //     contractState.whitelistSaleOpen = whitelistSaleOpen
  //   })
  //   readOnlyContract.on('SetAuctionSaleStartTime', (timestamp) => {
  //     contractState.auctionSaleOpen = Number(timestamp) ? true : false
  //   })
  // }

  // async function mint(amount: number): Promise<void> {
  //   const signer = auth.web3.getSigner()
  //   const contract = new Contract(CONTRACT_ADDRESS, ABI, signer)
  //   const price = await contract.getCost(amount)
  //   const contractSigner = await contract.connect(signer)
  //   try {
  //     const tx = await contractSigner.publicMint(amount, { value: price })
  //     await tx.wait()
  //     console.log(tx)
  //     contractState.balance = (
  //       await readOnlyContract.balanceOf(state.account)
  //       ).toNumber()
  //   } catch (e) {
  //     console.log(e)
  //   }

  // }
  async function handleLogin(): Promise<void> {
    if (state.isConnected) {
      await login('injected')
    }
  }

  return {
    login,
    logout,
    loadProvider,
    handleChainChanged,
    switchNetwork,
    web3: computed(() => state),
    web3Account: computed(() => state.account),
    isRightChain: computed(() => state.isRightChain),
    isConnected: computed(() => state.isConnected),
    handleLogin
    // contract: computed(() => contractState),
    // loadContractData,
    // mint
  }
}
