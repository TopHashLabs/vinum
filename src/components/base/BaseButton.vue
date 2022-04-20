<script setup lang="ts">
withDefaults(
  defineProps<{
    loading?: boolean
    disabled?: boolean
  }>(),
  {
    loading: false,
    disabled: false
  }
)
</script>
<template>
  <button
    :class="['p-0.5 cursor-pointer w-full rounded-full bg-gradient-to-tr to-[#8F51FF] from-[#FF1B60]',{'cursor-not-allowed': disabled}]"
  >
    <div
      class="bg-main rounded-full flex justify-center items-center py-2.5 text-base font-semibold"
    >
      <slot v-if="!loading" />
      <div v-else class="flex space-x-1">
        <span>Loading...</span>
        <div
          class="h-5 w-5 rounded-full bg-gradient-to-tr to-[#8F51FF] from-[#FF1B60] animate-spin"
        ></div>
      </div>
    </div>
  </button>
</template>
