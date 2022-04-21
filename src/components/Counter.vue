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
      :class="['text-2xl text-gradient',{'cursor-not-allowed': modelValue <= 0}]"
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
      class="text-2xl text-gradient"
      @click="emit('update:modelValue', incrementValue(modelValue))"
    >
      +
    </button>
  </div>
</template>
<style>
.text-gradient {
  background: linear-gradient(253.4deg, #8F51FF 8.24%, #FF1B60 87.82%);
  background-clip: text;
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent; 
  -moz-background-clip: text;
  -moz-text-fill-color: transparent;
}
</style>