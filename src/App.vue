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

body {
  font-family: 'Poppins', sans-serif;
  overflow-x: hidden;
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
}
</style>
