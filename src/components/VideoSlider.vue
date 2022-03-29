<template>
  <carousel :items-to-show="itemsToShow" :autoplay="2000" :wrap-around="true">
    <slide v-for="video in videos" :key="video">
      <video
        autoplay
        muted
        loop
        preload="metadata"
        :src="getVideo(video)"
        class="h-[40.5rem] transition-all cursor-pointer mobile:w-[100vw] mobile:h-auto"
      ></video>
    </slide>
  </carousel>
</template>

<script setup lang="ts">
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'
const videos = [
  'red-blue',
  'red-pink',
  'red-purple',
  'rose-blue',
  'rose-pink',
  'rose-sparkling',
  'white-blue',
  'white-purple',
  'white-red',
  'white-sparkling'
]

function getVideo(name) {
  // const path = `/assets/videos/${name}.mp4`;
  // const modules = import.meta.globEager("/assets/videos/*.mp4");

  return new URL(`../assets/videos/${name}.mp4`, import.meta.url).href
}
const itemsToShow = ref(3)
window.innerWidth > 480 ? (itemsToShow.value = 3) : (itemsToShow.value = 1)
</script>
