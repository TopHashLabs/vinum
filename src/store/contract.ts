// import { formatEther } from '@ethersproject/units'
import { defineStore } from 'pinia'
// import { useWeb3 } from '@/store/web3'
// import { Contract } from '@ethersproject/contracts'
// import contractArtifact from '../../../NFT-collection-contracts/artifacts/contracts/NFTCollection.sol/BUTTS.json'

export interface ContractState {
  totalSupply: number
  whitelistSaleSupply: number
  totalMinted: number
  whitelistSaleOpen: boolean
  publicSaleOpen: boolean
  price: number
  maxMint: number
  balance: number
}
// const CONTRACT_ADDRESS = process.env.CONTRACT_ADDRESS ?? ''
export const useContract = defineStore('contract', {
  state: (): ContractState => {
    return {
      totalSupply: 10000,
      whitelistSaleSupply: 5000,
      totalMinted: 0,
      whitelistSaleOpen: false,
      publicSaleOpen: false,
      price: 0,
      maxMint: 0,
      balance: 0
    }
  },
  actions: {
    // async loadContractData(): Promise<void> {
    //   const web3 = useWeb3()
    // const ABI = contractArtifact.abi
    // const readOnlyContract = new Contract(
    //   CONTRACT_ADDRESS,
    // ABI,
    //     web3.auth.web3
    //   )
    //   this.totalSupply =
    //     (await readOnlyContract.MAX_SUPPLY()).toNumber() ?? this.totalSupply
    //   this.whitelistSaleSupply =
    //     (await readOnlyContract.whitelistSaleSupply()).toNumber() ??
    //     this.whitelistSaleSupply
    //   this.totalMinted = (await readOnlyContract.tokenCount()).toNumber() ?? 0
    //   this.whitelistSaleOpen = await readOnlyContract.whitelistSaleOpen()
    //   this.price = Number(formatEther(await readOnlyContract.getCost(1)))
    //   this.balance = (await readOnlyContract.balanceOf(web3.account)).toNumber()
    //   this.publicSaleOpen = (
    //     await readOnlyContract.auctionSaleStartTime()
    //   ).toNumber()
    //     ? true
    //     : false
    //   if (this.publicSaleOpen) {
    //     this.subcribeAuctionPrice()
    //   } else {
    //     readOnlyContract.on('TogglePublicSaleOpen', (publicSaleOpen) => {
    //       this.publicSaleOpen = publicSaleOpen
    //     })
    //   }
    //   readOnlyContract.on('ChangeTokenCount', (tokenCount) => {
    //     this.totalMinted = tokenCount
    //   })
    //   if (this.whitelistSaleOpen) {
    //     this.maxMint = (
    //       await readOnlyContract.getMaxMint(web3.account)
    //     ).toNumber()
    //   }
    //   readOnlyContract.on('ToggleWhitelistSale', async (whitelistSaleOpen) => {
    //     this.whitelistSaleOpen = whitelistSaleOpen
    //     if (this.whitelistSaleOpen) {
    //       this.maxMint = (
    //         await readOnlyContract.getMaxMint(web3.account)
    //       ).toNumber()
    //     }
    //   })
    // },
    // async whitelistMint(amount: number): Promise<void> {
    //   const web3 = useWeb3()
    // const ABI = contractArtifact.abi
    // const signer = web3.auth.web3.getSigner()
    // const contract = new Contract(CONTRACT_ADDRESS, ABI, signer)
    // const price = await contract.getCost(amount)
    // const contractSigner = await contract.connect(signer)
    // try {
    //   const tx = await contractSigner.whitelistMint(amount, {
    //     value: price
    //   })
    //   await tx.wait()
    //   console.log(tx)
    //   this.maxMint = (await contract.getMaxMint(web3.account)).toNumber()
    //   this.balance = (await contract.balanceOf(web3.account)).toNumber()
    // } catch (e) {
    //   console.log(e)
    // }
    // },
    // async publicMint(amount: number): Promise<void> {
    //   const web3 = useWeb3()
    //   const ABI = contractArtifact.abi
    //   const signer = web3.auth.web3.getSigner()
    //   const contract = new Contract(CONTRACT_ADDRESS, ABI, signer)
    //   const price = await contract.getCost(amount)
    //   const contractSigner = await contract.connect(signer)
    //   try {
    //     const tx = await contractSigner.publicMint(amount, { value: price })
    //     await tx.wait()
    //     this.balance = (await contract.balanceOf(web3.account)).toNumber()
    //     console.log(tx)
    //   } catch (e) {
    //     console.log(e)
    //   }
    // }
  }
})
