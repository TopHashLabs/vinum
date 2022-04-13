<script setup lang="ts">
</script>

<template>
  <div class="max-w-[1418px] px-16 mobile:px-6 mx-auto">
    <Header />
    <router-view />
  </div>
  <Footer />
</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Inter', sans-serif;
  font-weight: 400;
  color: #fff;
  background-color: #101010;
}
body,
html {
  position: relative;
  overflow-x: hidden;
  max-width: 100%;
}
</style>
