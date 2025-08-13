<script setup lang="ts">
import Avatar from '../ui/Avatar.vue'
import { ref, onMounted, onUnmounted, watch, provide } from 'vue'

const isCollapsed = ref(false)

provide('isCollapsed', isCollapsed)

const setSidebarWidth = () => {
  document.body.style.setProperty('--sidebar-width', isCollapsed.value ? '100px' : '400px')
}

const mediaQuery = window.matchMedia('(max-width: 767.98px)')
const checkScreenSize = () => {
  isCollapsed.value = mediaQuery.matches
}

onMounted(() => {
  checkScreenSize()
  setSidebarWidth()
  mediaQuery.addEventListener?.('change', checkScreenSize)
  mediaQuery.addListener?.(checkScreenSize)
})

onUnmounted(() => {
  mediaQuery.removeEventListener?.('change', checkScreenSize)
  mediaQuery.removeListener?.(checkScreenSize)
})

watch(isCollapsed, setSidebarWidth, { immediate: true })

const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}
</script>

<template>
  <!-- Sidebar Navigation -->
  <aside
    :class="[
      'fixed top-0 left-0 min-h-screen max-h-screen z-40 shadow-lg transition-all duration-300 bg-white dark:bg-neutral-900 border-r border-neutral-200 dark:border-neutral-800 flex flex-col',
      isCollapsed ? 'w-[100px]' : 'w-[320px]',
    ]"
    style="transition-property: transform, width, background-color; left: 0"
  >
    <div :class="['flex justify-center transition-all duration-300 ease-in-out scale-100']">
      <div class="flex flex-col items-center py-4 sm:py-8 md:py-12 lg:py-20">
        <div class="relative">
          <Avatar class="w-12 h-12 sm:w-32 sm:h-32 md:w-42 md:h-42 lg:w-60 lg:h-60" />
        </div>
        <h2 class="text-lg sm:text-xl pt-2 sm:pt-4 font-bold text-primary-400">
          Khaesey Angel Tablante
        </h2>
        <p class="text-sm sm:text-base text-secondary-400">Fullstack Developer</p>
      </div>
    </div>

    <nav class="flex flex-col space-y-8 px-4 py-6 overflow-y-auto flex-grow">
      <button
        @click="scrollToSection('about')"
        class="text-left text-neutral-600 dark:text-neutral-300 px-8 py-2 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-neutral-100 dark:hover:bg-neutral-800/50 border-none transition-all duration-200 rounded flex items-center group"
      >
        <i
          class="fas fa-user md:text-lg lg:text-2xl group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors"
        ></i>
        <span class="md:text-lg lg:text-2xl ml-2 px-1">About</span>
      </button>
      <button
        @click="scrollToSection('experience')"
        class="text-left text-neutral-600 dark:text-neutral-300 px-8 py-2 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-neutral-100 dark:hover:bg-neutral-800/50 border-none transition-all duration-200 rounded flex items-center group"
      >
        <i
          class="fas fa-briefcase md:text-lg lg:text-2xl group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors"
        ></i>
        <span class="md:text-lg lg:text-2xl ml-2 px-1">Experience</span>
      </button>
      <button
        @click="scrollToSection('projects')"
        class="text-left text-neutral-600 dark:text-neutral-300 px-8 py-2 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-neutral-100 dark:hover:bg-neutral-800/50 border-none transition-all duration-200 rounded flex items-center group"
      >
        <i
          class="fas fa-code md:text-lg lg:text-2xl group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors"
        ></i>
        <span class="md:text-lg lg:text-2xl ml-2">Projects & Skills</span>
      </button>
      <button
        @click="scrollToSection('contact')"
        class="text-left text-neutral-600 dark:text-neutral-300 px-8 py-2 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-neutral-100 dark:hover:bg-neutral-800/50 border-none transition-all duration-200 rounded flex items-center group"
      >
        <i
          class="fas fa-envelope md:text-lg lg:text-2xl group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors"
        ></i>
        <span class="md:text-lg lg:text-2xl ml-2 px-1">Contact</span>
      </button>
    </nav>
  </aside>
</template>
