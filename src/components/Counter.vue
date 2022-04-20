<script setup lang="ts">
defineProps<{
  modelValue: number
}>()
const emit = defineEmits<{
  (e: 'update:modelValue', modelValue: number): void
}>()
function getValue(e: Event): number {
  return parseInt((e.target as HTMLInputElement).value)
}
function incrementValue(number: number): number {
  let value = number
  return ++value
}
function decrementValue(number: number): number {
  let value = number
  return --value
}
</script>

<template>
  <div
    class="flex justify-center items-center rounded-full py-2 w-full bg-[#1C1C1C]"
  >
    <button
      :class="['text-2xl text-transparent bg-clip-text bg-gradient-to-tr to-[#8F51FF] from-[#FF1B60]',{'cursor-not-allowed': modelValue <= 0}]"
      @click="emit('update:modelValue', decrementValue(modelValue))"
      :disabled="modelValue <= 0"
    >
      -
    </button>
    <input
      :value="modelValue"
      @input="emit('update:modelValue', getValue($event))"
      class="text-center hover:cursor-default w-[126px] text-2xl font-semibold bg-transparent outline-none"
      type="number"
      readonly
    />
    <button
      class="text-2xl text-transparent bg-clip-text bg-gradient-to-tr to-[#8F51FF] from-[#FF1B60]"
      @click="emit('update:modelValue', incrementValue(modelValue))"
    >
      +
    </button>
  </div>
</template>
