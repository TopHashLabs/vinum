<script setup lang="ts">
import { useWeb3 } from '@/store/web3'
import { useContract } from '@/store/contract'

const web3 = useWeb3()
const contract = useContract()

const amount = ref(0)
const loading = ref(false)

async function mint(): Promise<void> {
  // if (contract.whitelistSaleOpen) {
  //   loading.value = true
  //   await contract.whitelistMint(amount.value)
  //   loading.value = false
  //   return
  // }
  // loading.value = true
  // await contract.publicMint(amount.value)
  // loading.value = false
}
</script>

<template>
  <div class="relative h-screen p-12 mobile:p-2">
    <img
      src="@/assets/images/bg-bottle.png"
      alt="background"
      class="absolute -z-10 inset-0 mobile:object-cover"
    />
    <div class="flex justify-end">
      <ConnectWallet />
    </div>
    <div
      class="flex flex-col space-y-2 w-48 mx-auto justify-center items-center absolute bottom-[24px] inset-x-0"
    >
      <div
        class="w-full bg-[black] bg-opacity-25 rounded-full text-[#fff] text-xl mobile:text-xs py-4 mobile:py-2 text-center"
      >
        {{ `${contract.totalMinted} / ${contract.totalSupply}` }} Minted
      </div>
      <div
        class="w-full flex justify-around bg-[black] bg-opacity-25 rounded-full text-[#fff] text-2xl mobile:text-lg py-4 mobile:py-2 text-center"
      >
        <button @click="amount--" :disabled="amount < 1">-</button>
        <span>{{ amount }}</span>
        <button @click="amount++">+</button>
      </div>
      <div class="w-full bg-[black] bg-opacity-25 rounded-full">
        <BaseButton
          @click="mint"
          :loading="loading"
          :disabled="
            (!contract.whitelistSaleOpen && !contract.publicSaleOpen) ||
            !web3.isConnected
          "
          block
        >
          <span class="uppercase text-[#fff] text-2xl mobile:text-lg">
            Mint
          </span>
        </BaseButton>
      </div>
    </div>
  </div>
</template>
