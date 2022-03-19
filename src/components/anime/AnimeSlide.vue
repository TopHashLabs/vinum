<script setup lang="ts"></script>

<template>
  <transition name="slide" appear>
    <slot></slot>
  </transition>
</template>

<style scoped>
.slide-leave-active,
.slide-enter-active {
  transition: 1s;
}
.slide-enter {
  transform: translate(100%, 0);
}
.slide-leave-to {
  transform: translate(-100%, 0);
}
</style>
