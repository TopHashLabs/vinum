<template>
  <div
    :class="`relative rounded-full transform rotate-[5deg]  w-5 h-5 ${pieClasses}`"
  >
    <div
      class="absolute z-10 inset-0 w-[20.5px] h-[20.5px] rounded-full"
      :style="pieStyles"
    ></div>
  </div>
</template>

<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    currentValue?: number
    maxValue?: number
    color?: string
  }>(),
  {
    currentValue: 100,
    maxValue: 100,
    color: 'blue'
  }
)
const pieClasses = computed(() => {
  switch (props.color) {
    case 'blue':
      return `bg-gradient-to-tr to-[#18C8FF] from-[#0057FF]`
    case 'red':
      return `bg-gradient-to-tr to-[#FF2E4C] from-[#FF7116]`
    default:
      return `bg-gradient-to-tr to-[#18C8FF] from-[#0057FF]`
  }
})
const pieStyles = computed(() => {
  let valuePercent = (props.maxValue * props.currentValue) / 100
  let remainder = 100 - valuePercent

  return {
    background: `conic-gradient( #101010 0 ${remainder}%, transparent 0 ${valuePercent}% )`
  }
})
</script>
