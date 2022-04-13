import { formatUnits } from '@ethersproject/units'
import { defineStore } from 'pinia'
import networks from '@/helpers/networks.json'
import { getInstance } from '@snapshot-labs/lock/plugins/vue3'
import { useLocalStorage } from '@/composables/useLocalStorage'
import { Web3Provider } from '@ethersproject/providers'
import { useContract } from '@/store/contract'
const { setStorageItem, getStorageItem } = useLocalStorage()

const DEFAULT_NETWORK: string = process.env.DEFAULT_CHAIN_ID ?? ''
const DEFAULT_CHAIN_ID: number = Number(DEFAULT_NETWORK)

export interface Web3State {
  auth: any
  account: string
  network: number
  authLoading: boolean
  profile: any
  walletConnectType: any
  isTrezor: boolean
  isRightChain: boolean
  isConnected: boolean
}

export const useWeb3 = defineStore('web3', {
  state: (): Web3State => {
    return {
      auth: {},
      account: '',
      network: networks[DEFAULT_NETWORK],
      authLoading: false,
      profile: null,
      walletConnectType: null,
      isTrezor: false,
      isRightChain: true,
      isConnected: getStorageItem('isConnected') ?? false
    }
  },
  actions: {
    async login(): Promise<void> {
      let connector = window.ethereum ? 'injected' : 'walletconnect'
      this.isTrezor = connector === 'trezor'
      this.auth = getInstance()
      this.authLoading = true
      await this.auth.login(connector)

      if (this.auth.provider) {
        this.auth.web3 = new Web3Provider(this.auth.provider, 'any')
        await this.loadProvider()
      }
      this.authLoading = false
    },
    logout(): void {
      this.auth = getInstance()
      this.auth.logout()
      this.account = ''
      this.profile = null
      this.isTrezor = false
      setStorageItem('isConnected', false)
      this.isConnected = false
    },
    async loadProvider(): Promise<any> {
      try {
        if (
          this.auth.provider.removeAllListeners &&
          !this.auth.provider.isTorus
        )
          this.auth.provider.removeAllListeners()
        if (this.auth.provider.on) {
          this.auth.provider.on('chainChanged', async (chainId) => {
            this.handleChainChanged(parseInt(formatUnits(chainId, 0)))
          })
          this.auth.provider.on('accountsChanged', async (accounts) => {
            if (accounts.length !== 0) {
              this.account = accounts[0]
              await this.login()
            } else {
              this.logout()
            }
          })
        }
        console.log('Provider', this.auth.provider)
        let network, accounts
        try {
          const connector = this.auth.provider.connectorName
          if (connector === 'gnosis') {
            const { chainId: safeChainId, safeAddress } =
              this.auth.web3.provider.safe
            network = { chainId: safeChainId }
            accounts = [safeAddress]
          } else {
            ;[network, accounts] = await Promise.all([
              this.auth.web3.getNetwork(),
              this.auth.web3.listAccounts()
            ])
          }
        } catch (e) {
          console.log(e)
        }
        console.log('Network', network)
        console.log('Accounts', accounts)
        this.handleChainChanged(network.chainId)
        const acc = accounts.length > 0 ? accounts[0] : null

        this.account = acc
        this.walletConnectType = this.auth.provider.wc?.peerMeta?.name || null

        setStorageItem('isConnected', true)
        this.isConnected = true
      } catch (e) {
        this.account = ''
        this.profile = null
        return Promise.reject(e)
      }
    },
    async handleChainChanged(chainId: number) {
      const contract = useContract()

      if (!networks[chainId]) {
        networks[chainId] = {
          ...networks[DEFAULT_NETWORK],
          chainId,
          name: 'Unknown',
          network: 'unknown',
          unknown: true
        }
      }
      this.network = networks[chainId]
      this.isRightChain = chainId === DEFAULT_CHAIN_ID ? true : false
      // if (this.isRightChain) {
      //   await contract.loadContractData()
      // }
    },
    async switchNetwork(): Promise<void> {
      if (window.ethereum) {
        const hexString = DEFAULT_CHAIN_ID.toString(16)
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
  }
})
