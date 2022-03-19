<script setup lang="ts">
defineProps({
  modelValue: [String, Number],
  label: String,
  placeholder: String,
  type: String,
  disabled: Boolean,
  icon: String,
  errors: {
    type: Array,
    default: () => {
      return []
    }
  }
})

const getEventValue = (evt: Event) => {
  return (evt.target as HTMLInputElement).value
}
</script>

<template>
  <div class="relative">
    <label
      :for="label"
      class="block pb-1 font-semibold cursor-pointer text-gray-700"
      >{{ label }}</label
    >
    <div class="relative rounded-md shadow-sm">
      <input
        :id="label"
        :value="modelValue"
        :disabled="disabled"
        @input="$emit('update:modelValue', getEventValue($event))"
        ref="input"
        class="block w-full pr-10 pl-2 h-12 border-2 border-gray-300 font-medium text-base text-gray-900 placeholder-gray-400 transition-all caret-blue-600 rounded-md"
        :class="
          errors.length
            ? 'focus:border-transparent  focus:ring-red-600 border-red-600'
            : 'focus:border-transparent focus:ring-blue-500 hover:ring-gray-900 hover:border-gray-900'
        "
        :type="type"
        :placeholder="placeholder"
      />
    </div>
    <div
      v-if="icon"
      @click="$emit('iconClick')"
      class="absolute bottom-2 right-2 text-gray-400 transirion-all hover:cursor-pointer hover:text-black"
    >
      <BaseIcon :name="icon" size="lg" />
    </div>
    <ul
      v-if="errors.length"
      class="absolute left-0 -bottom-6 font-medium text-sm text-red-600"
    >
      <li v-for="(error, idx) in errors" :key="idx">{{ error }}</li>
    </ul>
  </div>
</template>
