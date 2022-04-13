<script setup lang="ts">
const props = defineProps<{
  name: string
}>()
const getCurrentSortImg = () => {
  return new URL(`../assets/images/bottles/${props.name}.png`, import.meta.url)
    .href
}
</script>

<template>
  <div class="relative flex flex-col justify-end items-center">
    <img class="" :src="getCurrentSortImg()" alt="" />
    <img
      class="absolute flex left-4 right-0 -bottom-6 -z-10"
      src="@/assets/images/bottles/shadow.svg"
      alt=""
    />
  </div>
</template>
