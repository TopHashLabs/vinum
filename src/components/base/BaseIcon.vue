<script setup lang="ts">
import { computed, onMounted } from 'vue'
import feather from 'feather-icons'
const props = defineProps({
  name: { type: String, required: true },
  size: {
    type: String,
    default: 'md',
    validator: (val: string): boolean => {
      return ['xxs', 'xs', 'sm', 'md', 'lg', 'xl'].includes(val)
    }
  },
  filled: { type: Boolean, default: false }
})

const iconSize = computed(() => {
  switch (props.size) {
    case 'xxs':
      return '8'
    case 'xs':
      return '12'
    case 'sm':
      return '16'
    case 'lg':
      return '24'
    case 'xl':
      return '28'
    default:
      return '20'
  }
})
const fill = computed(() => (props.filled ? 'currentColor' : 'none'))
onMounted(() => feather.replace())
</script>

<template>
  <div class="base-icon inline-block">
    <i :data-feather="name" :width="iconSize" :height="iconSize" :fill="fill" />
  </div>
</template>
