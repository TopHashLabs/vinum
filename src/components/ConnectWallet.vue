<script setup lang="ts">
import { useWeb3 } from '@/store/web3'
import { shorten } from '@/helpers/utils'

const web3 = useWeb3()
const loading = ref(false)
async function handleLogin() {
  loading.value = true
  await web3.login('injected')
  loading.value = false
}

async function switchChain() {
  loading.value = true
  await web3.switchNetwork()
  loading.value = false
}

if (web3.isConnected) {
  handleLogin()
}
</script>

<template>
<div>
    <BaseButton
      v-if="!web3.isConnected"
      @click="handleLogin"
      :loading="loading"
      color="black"
      rounded
      circle
      block
      >Connect Wallet</BaseButton
    >
    <BaseButton
      v-else-if="!web3.isRightChain"
      @click="switchChain"
      :loading="loading"
      color="black"
      rounded
      block
      >Switch Network</BaseButton
    >
    <BaseButton
      disabled
      color="black"
      rounded
      block
      v-else
    >
      <span>
        {{ `Connected: ${shorten(web3.account)}` }}
      </span>
    </BaseButton>
  </div>
</template>
