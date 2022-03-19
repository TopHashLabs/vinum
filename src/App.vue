<script setup lang="ts">
import { useWeb3 } from '@/composables/useWeb3'

const { web3, handleLogin, isConnected, isRightChain } = useWeb3()
provide('web3', web3)
// provide('contract', contract)
handleLogin()
</script>

<template>
  <router-view />
</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Poppins', sans-serif;
  overflow-x: hidden;
}

h1,
h2 {
  font-family: 'Poppins', sans-serif;
}

:root {
  --accent-color: #42139b;
  --primary-color: #fff;
  --secondary-color: #000;
  --border: 0.09rem #e4e4e4 solid;
}

@media all and (min-width: 1025px) {
  #app {
    font-size: 1.25vw;
  }
}

@media (max-width: 480px) {
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    width: 100%;
    position: relative;
    font-family: 'Poppins', sans-serif;
    overflow-x: hidden;
  }

  :root {
    --accent-color: #42139b;
    --primary-color: #fff;
    --secondary-color: #000;
  }
}
</style>
