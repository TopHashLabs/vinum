<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    color: string
  }>(),
  {
    color: 'white'
  }
)
function getImageUrl(name: string): string {
  return new URL(
    `../../assets/images/social/${props.color}/${name}.svg`,
    import.meta.url
  ).href
}
</script>

<template>
  <ul class="flex items-center space-x-[22px]">
    <li
      class="cursor-pointer hover:transform hover:scale-125 hover:transition-transform hover:duration-300"
    >
      <img :src="getImageUrl('twitter')" alt="" />
    </li>
    <li
      class="cursor-pointer hover:transform hover:scale-125 hover:transition-transform hover:duration-300"
    >
      <a href="" target="_blank">
        <img :src="getImageUrl('opensea')" alt="" />
      </a>
    </li>
    <li
      class="cursor-pointer hover:transform hover:scale-125 hover:transition-transform hover:duration-300"
    >
      <a href="" target="_blank">
        <img :src="getImageUrl('telegram')" alt="" />
      </a>
    </li>
    <li
      class="cursor-pointer hover:transform hover:scale-125 hover:transition-transform hover:duration-300"
    >
      <a href="" target="_blank">
        <img :src="getImageUrl('dao')" alt="" />
      </a>
    </li>
  </ul>
</template>
