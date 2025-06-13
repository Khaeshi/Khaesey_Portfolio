<script setup lang="ts">
import { useTheme } from '../stores/theme'
import sunIcon from '../assets/icons/sun.png'
import moonIcon from '../assets/icons/moon.png'

defineProps<{
  isCollapsed?: boolean
}>()

defineOptions({
  name: 'ProfileAvatar',
})

const { isDark, toggleTheme } = useTheme()
</script>

<template>
  <div class="flex flex-col items-center py-4 sm:py-8 md:py-12 lg:py-20">
    <div class="relative">
      <!-- Theme Toggle Button -->
      <button
        @click="toggleTheme"
        class="absolute md:bottom-1 md:left-3 lg:bottom-4 lg:left-4 z-10 sm:p-4 md:p-1 rounded-full bg-white dark:bg-neutral-800 shadow-lg hover:shadow-xl transition-all duration-300 border border-neutral-200 dark:border-neutral-700 hover:border-primary-500/50 group"
      >
        <img
          :src="isDark ? sunIcon : moonIcon"
          :alt="isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'"
          class="w-6 h-6 group-hover:scale-110 transition-transform duration-300"
        />
      </button>
      <!-- Outer decorative border -->
      <div
        class="absolute -inset-2 rounded-full bg-gradient-to-r from-primary-500 to-accent-500 opacity-25 blur-sm"
      ></div>
      <!-- Inner border -->
      <div class="absolute rounded-full bg-neutral-900"></div>
      <!-- Avatar container -->
      <div
        class="relative w-32 h-32 sm:w-45 sm:h-45 md:w-48 md:h-48 lg:w-60 lg:h-60 rounded-full overflow-hidden"
      >
        <img src="/picture/avatar.png" alt="Profile Picture" class="w-full h-full object-cover" />
      </div>
    </div>
    <h2 class="text-lg sm:text-xl pt-2 sm:pt-4 font-bold text-primary-400">
      Khaesey Angel Tablante
    </h2>
    <p class="text-sm sm:text-base text-secondary-400">Fullstack Developer</p>
  </div>
</template>
