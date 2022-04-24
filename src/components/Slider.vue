<script setup lang="ts">
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel';
</script>
<template>
  <div>
    <div
      class="mobile:hidden flex "
    >
      <div class="w-full relative flex justify-center">
        <div class="absolute left-12 mobile:left-2 bottom-10 flex flex-col">
          <div class="flex space-x-[5px] items-center">
            <BaseDiagram />
            <p class="italic mobile:text-xs">white / dry</p>
          </div>
          <div class="my-2 h-px bg-[#333333] w-36 mobile:w-32"></div>
          <p class="font-grotesk font-medium text-2xl mobile:text-lg">
            Riesling
          </p>
        </div>
        <Bottle name="blue" class="w-full" />
      </div>
      <div class="w-full relative flex justify-center">
        <div class="absolute -left-6 mobile:left-4 top-16 flex flex-col">
          <div class="flex space-x-[5px] items-center">
            <BaseDiagram :currentValue="59" />
            <p class="italic mobile:text-xs">white / semi-dry</p>
          </div>
          <div class="my-2 h-px bg-[#333333] w-56 mobile:w-44"></div>
          <p class="font-grotesk font-medium text-2xl mobile:text-lg">
            Chardonnay
          </p>
        </div>
        <Bottle name="rose" class="w-full" />
      </div>
      <div class="w-full relative flex justify-center">
        <div
          class="absolute right-2 mobile:right-0 top-10 flex flex-col items-end"
        >
          <div class="flex space-x-[5px] items-center">
            <BaseDiagram color="red" :currentValue="59" />
            <p class="italic mobile:text-xs">white / semi-sweet</p>
          </div>
          <div class="my-2 h-px bg-[#333333] w-48 mobile:w-48"></div>
          <p class="font-grotesk font-medium text-2xl mobile:text-lg">
            Chardonnay
          </p>
        </div>
        <Bottle name="red" class="w-full" />
      </div>
    </div>
    <Carousel :autoplay="3000" :wrap-around="true" :transition="900" class="mobile:block hidden">
      <Slide class="w-full relative flex justify-center">
        <div class="absolute left-2 bottom-10 flex flex-col">
          <div class="flex space-x-[5px] items-center">
            <BaseDiagram />
            <p class="italic mobile:text-xs">white / dry</p>
          </div>
          <div class="my-2 h-px bg-[#333333] w-36 mobile:w-32"></div>
          <p class="font-grotesk font-medium self-start text-lg">
            Riesling
          </p>
        </div>
        <Bottle name="blue" class="w-full" />
      </Slide>
      <Slide class="w-full relative flex justify-center">
        <div class="absolute left-0 top-16 flex flex-col">
          <div class="flex space-x-[5px] items-center">
            <BaseDiagram :currentValue="59" />
            <p class="text-xs">white / semi-dry</p>
          </div>
          <div class="my-2 h-px bg-[#333333] w-44"></div>
          <p class="font-grotesk font-medium text-lg self-start">
            Chardonnay
          </p>
        </div>
        <Bottle name="rose" class="w-full" />
      </Slide>
      <Slide class="w-full relative flex justify-center">
        <div
          class="absolute right-2 top-10 flex flex-col items-end"
        >
          <div class="flex space-x-[5px] items-center">
            <BaseDiagram color="red" :currentValue="59" />
            <p class="italic text-xs">white / semi-sweet</p>
          </div>
          <div class="my-2 h-px bg-[#333333] w-48 mobile:w-48"></div>
          <p class="font-grotesk font-medium text-lg ">
            Chardonnay
          </p>
        </div>
        <Bottle name="red" class="w-full" />
      </Slide>
    <template #addons>
      <Pagination />
    </template>
    </Carousel>
  </div>

</template>

<style>
</style>