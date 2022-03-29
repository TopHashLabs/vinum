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
    <div class="grid grid-cols-9 mobile:grid-cols-6">
      <ConnectWallet
        class="col-end-10 col-span-3 mobile:col-span-5 mobile:col-end-7"
      />
    </div>
    <div
      class="grid grid-cols-12 mobile:grid-cols-9 gap-y-4 absolute bottom-[24px] inset-x-0"
    >
      <div
        class="col-end-8 col-span-2 mobile:col-span-3 mobile:col-end-7 bg-[black] bg-opacity-25 rounded-full text-[#fff] text-xl mobile:text-xs p-4 mobile:p-2 text-center"
      >
        {{ `${contract.totalMinted} / ${contract.totalSupply}` }} Minted
      </div>
      <div
        class="col-end-8 col-span-2 mobile:col-span-3 mobile:col-end-7 flex justify-around bg-[black] bg-opacity-25 rounded-full text-[#fff] text-2xl mobile:text-lg p-4 mobile:p-2 text-center"
      >
        <button @click="amount--" :disabled="amount < 1">-</button>
        <span>{{ amount }}</span>
        <button @click="amount++">+</button>
      </div>
      <div
        class="col-end-8 col-span-2 mobile:col-span-3 mobile:col-end-7 bg-[black] bg-opacity-25 rounded-full"
      >
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
