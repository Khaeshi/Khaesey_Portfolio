<script setup lang="ts">
defineProps<{
  isCollapsed?: boolean
}>()

defineOptions({
  name: 'ProfileAvatar',
})
</script>

<template>
  <div class="flex flex-col items-center py-4 sm:py-8 md:py-12 lg:py-20">
    <div class="relative">
      <!-- Outer decorative border -->
      <div
        class="absolute -inset-2 rounded-full bg-gradient-to-r from-primary-500 to-accent-500 opacity-25 blur-sm"
      ></div>
      <!-- Inner border -->
      <div class="absolute rounded-full bg-neutral-900"></div>
      <!-- Avatar container -->
      <div
        class="relative w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-60 lg:h-60 rounded-full overflow-hidden"
      >
        <img src="/picture/avatar.png" alt="Profile Picture" class="w-full h-full object-cover" />
      </div>
    </div>
    <h2 class="text-lg sm:text-xl pt-2 sm:pt-4 font-bold text-primary-400">
      Khaesey Angel G. Tablante
    </h2>
    <p class="text-sm sm:text-base text-secondary-400">Fullstack Developer</p>
  </div>
</template>
