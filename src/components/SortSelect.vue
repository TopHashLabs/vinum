<script setup lang="ts">
import { Sort } from '@/types'

const props = defineProps<{
  options: Sort[]
}>()
const emit = defineEmits<{
  (e: 'select', sort: Sort): void
}>()

const selectedSort = ref<Sort>(props.options[0])

function getImageUrl(name: string): string {
  return new URL(`../assets/images/bottles/head/${name}.svg`, import.meta.url)
    .href
}
function selectSort(sort: Sort): void {
  selectedSort.value = sort
  emit('select', sort)
}
</script>

<template>
  <div class="flex mobile:flex-col justify-between items-center">
    <button
      @click="selectSort(option)"
      v-for="(option, idx) in options"
      :key="idx"
      :disabled="selectedSort === option"
      :class="[
        'rounded-full p-0.5',
        {
          'bg-gradient-to-tr to-[#8F51FF] from-[#FF1B60]':
            selectedSort === option
        }
      ]"
    >
      <div
        :class="[
          'bg-[#1C1C1C] rounded-full flex justify-center items-center text-base font-semibold',
          {
            'p-0.5': selectedSort !== option
          }
        ]"
      >
        <img class="inline-block px-4" :src="getImageUrl(option.img)" alt="" />
        <input
          :value="option.amount"
          :class="[
            'text-center w-8 text-base font-semibold bg-transparent outline-none',
            {
              'cursor-pointer': selectedSort !== option,
              'cursor-default': selectedSort === option
            }
          ]"
          type="number"
          readonly
        />
      </div>
    </button>
  </div>
</template>
