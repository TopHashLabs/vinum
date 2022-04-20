<script setup lang="ts">
const currentSlide = ref(1)
function selectSlide(slide) {
  currentSlide.value = slide
}
const sliderClasses = computed(() => {
  switch (currentSlide.value) {
    case 1:
      return `transform translate-x-[-1%]`
    case 2:
      return ` transform translate-x-[-35%]`
    case 3:
      return ` transform translate-x-[-68%]`
    default:
      return `transform translate-x-[-2%]`
  }
})
</script>
<template>
  <div>
    <div
      :class="`flex mobile:justify-between mobile:relative  mobile:w-[320%] transition-transform duration-500 ${sliderClasses}`"
    >
      <div class="w-full relative flex justify-center">
        <div class="absolute -left-6 mobile:left-8 bottom-10 flex flex-col">
          <div class="flex space-x-[5px] items-center">
            <BaseDiagram />
            <p class="italic">white / dry</p>
          </div>
          <div class="my-2 h-px bg-[#333333] w-56 mobile:w-32"></div>
          <p class="font-grotesk font-medium text-2xl mobile:text-lg">Riesling</p>
        </div>
        <Bottle name="blue" class="w-full" />
      </div>
      <div class="w-full relative flex justify-center">
        <div class="absolute -left-6 mobile:left-4 top-16 flex flex-col">
          <div class="flex space-x-[5px] items-center">
            <BaseDiagram  :currentValue="59" />
            <p class="italic">white / semi-dry</p>
          </div>
          <div class="my-2 h-px bg-[#333333] w-56 mobile:w-44"></div>
          <p class="font-grotesk font-medium text-2xl mobile:text-lg">Chardonnay</p>
        </div>
        <Bottle name="rose" class="w-full" />
      </div>
      <div class="w-full relative flex justify-center">
        <div
          class="absolute -right-6 mobile:right-0 top-10 flex flex-col items-end"
        >
          <div class="flex space-x-[5px] items-center">
            <BaseDiagram color="red" :currentValue="59" />
            <p class="italic">white / semi-sweet</p>
          </div>
          <div class="my-2 h-px bg-[#333333] w-56 mobile:w-48"></div>
          <p class="font-grotesk font-medium text-2xl mobile:text-lg">Chardonnay</p>
        </div>
        <Bottle name="red" class="w-full" />
      </div>
    </div>
    <div
      class="mobile:flex mobile:space-x-5 mobile:justify-center mobile:mt-10 hidden"
    >
      <button
        v-for="idx of 3"
        :key="idx"
        @click="selectSlide(idx)"
        :disabled="idx === currentSlide"
        :class="[
          'h-2 w-2 rounded-full border',
          idx === currentSlide
            ? 'bg-[#537FFF] border-[#537FFF]'
            : 'border-white'
        ]"
      ></button>
    </div>
  </div>
</template>
