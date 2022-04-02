<script setup lang="ts"></script>

<template>
  <router-view />
</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html,body {
    font-family: 'Poppins', sans-serif;
    position: relative;
    overflow-x: hidden;
    max-width: 100%;
  }

h1,
h2 {
  font-family: 'Poppins', sans-serif;
}

@media all and (min-width: 1025px) {
  #app {
    font-size: 1.25vw;
  }
}
</style>
