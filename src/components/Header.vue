<script setup lang="ts">
const navOpen = ref<boolean>(false)
function toggleNav(): void {
  navOpen.value = !navOpen.value
}
function closeNav(): void {
  navOpen.value = false
}
</script>
<template>
  <div
    :class="[
      'flex items-center justify-between py-[18px]  mobile:items-start mobile:py-3 max-w-[1110px] mobile:max-w-full',
      {
        'fixed z-50 bg-main inset-0 mobile:px-6': navOpen
      }
    ]"
  >
    <img
      src="@/assets/images/logo.png"
      class="h-[26px] mobile:h-[36px] z-[60]"
      alt=""
    />
    <div
      @click="toggleNav"
      class="hidden mobile:flex w-10 h-10 rounded-full bg-gray cursor-pointer justify-center items-center"
    >
      <div
        :class="[
          'flex flex-col items-center justify-center transition-all',
          { 'space-y-[3.33px]': !navOpen }
        ]"
      >
        <div
          :class="[
            'duration-500 w-5 h-[2.22px] bg-white rounded-2xl',
            { 'transform rotate-45 translate-y-0.5': navOpen }
          ]"
        ></div>
        <div
          :class="[
            'duration-500 w-5 h-[2.22px] bg-white rounded-2xl',
            { 'transform opacity-0': navOpen }
          ]"
        ></div>
        <div
          :class="[
            'duration-500 w-5 h-[2.22px] bg-white rounded-2xl',
            { 'transform -rotate-45 -translate-y-0.5': navOpen }
          ]"
        ></div>
      </div>
    </div>
    <div
      :class="[
        'text-sm opacity-100 flex mobile:flex-col mobile:justify-between mobile:absolute mobile:left-[-100%] mobile:top-14 mobile:pt-12 mobile:h-screen mobile:px-5 z-50 bg-main mobile:font-semibold mobile:text-xl mobile:transition-all mobile:duration-500',
        {
          'mobile:opacity-0': !navOpen,
          'mobile:left-0 mobile:right-0': navOpen
        }
      ]"
    >
      <ul
        class="flex mobile:flex-col mobile:justify-between space-x-12 mobile:space-y-3 mobile:space-x-0"
      >
        <li class="cursor-pointer group">
          <a @click="closeNav" href="#about"> About </a>
          <div
            class="bg-white mobile:hidden h-px transition-all duration-500 w-0 group-hover:w-full"
          ></div>
        </li>
        <li class="w-full border border-[#333333] hidden mobile:block"></li>
        <li class="cursor-pointer group">
          <a @click="closeNav" href="#roadmap"> Roadmap </a>
          <div
            class="bg-white mobile:hidden h-px transition-all duration-500 w-0 group-hover:w-full"
          ></div>
        </li>
        <li class="w-full border border-[#333333] hidden mobile:block"></li>
        <li class="cursor-pointer group">
          <a @click="closeNav" href="#genesis"> Genesis </a>
          <div
            class="bg-white mobile:hidden h-px transition-all duration-500 w-0 group-hover:w-full"
          ></div>
        </li>
        <li class="w-full border border-[#333333] hidden mobile:block"></li>
        <li class="cursor-pointer group">
          <a @click="closeNav" href="#holder"> Holder </a>
          <div
            class="bg-white mobile:hidden h-px transition-all duration-500 w-0 group-hover:w-full"
          ></div>
        </li>
        <li class="w-full border border-[#333333] hidden mobile:block"></li>
        <li class="cursor-pointer group">
          <a @click="closeNav" href="#hiring"> Hiring </a>
          <div
            class="bg-white mobile:hidden h-px transition-all duration-500 w-0 group-hover:w-full"
          ></div>
        </li>
        <li class="w-full border border-[#333333] hidden mobile:block"></li>
        <li class="cursor-pointer group">
          <a @click="closeNav" href="#team"> Team </a>
          <div
            class="bg-white mobile:hidden h-px transition-all duration-500 w-0 group-hover:w-full"
          ></div>
        </li>
        <li class="w-full border border-[#333333] hidden mobile:block"></li>
      </ul>
      <SocialList
        class="hidden mobile:flex mobile:justify-center mobile:mb-32"
      />
    </div>
  </div>
</template>
