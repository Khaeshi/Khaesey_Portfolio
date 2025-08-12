<script setup lang="ts">
//import Avatar from '../Avatar.vue'
import { ref, onMounted, onUnmounted, watch, provide } from 'vue'

const isCollapsed = ref(false)
const isMobileOpen = ref(false)

provide('isCollapsed', isCollapsed)

const setSidebarWidth = () => {
  document.body.style.setProperty('--sidebar-width', isCollapsed.value ? '100px' : '400px')
}

const checkScreenSize = () => {
  isCollapsed.value = window.innerWidth < 768
  if (window.innerWidth >= 768) {
    isMobileOpen.value = false
  }
}

onMounted(() => {
  checkScreenSize()
  setSidebarWidth()
  window.addEventListener('resize', checkScreenSize)
})

onUnmounted(() => {
  window.removeEventListener('resize', checkScreenSize)
})

watch(isCollapsed, setSidebarWidth, { immediate: true })

const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
  if (window.innerWidth < 768) {
    isMobileOpen.value = false
  }
}
</script>

<template>
  <nav
    class="fixed bottom-0 left-0 w-full bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 flex justify-around items-center py-2 z-50 md:hidden"
  >
    <!-- Example nav items, replace with your own -->
    <button
      @click="scrollToSection('about')"
      class="flex flex-col items-center text-gray-600 dark:text-gray-300 hover:text-blue-500"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        class="w-6 h-6 mb-1"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M3 12l2-2m0 0l7-7 7 7M13 5v6h6"
        />
      </svg>
      <span class="text-xs">About</span>
    </button>
    <button
      @click="scrollToSection('experience')"
      class="flex flex-col items-center text-gray-600 dark:text-gray-300 hover:text-blue-500"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        class="w-6 h-6 mb-1"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M5.121 17.804A13.937 13.937 0 0112 15c2.485 0 4.797.755 6.879 2.047M15 11a3 3 0 11-6 0 3 3 0 016 0z"
        />
      </svg>
      <span class="text-xs">Experience</span>
    </button>
    <button
      @click="scrollToSection('projects')"
      class="flex flex-col items-center text-gray-600 dark:text-gray-300 hover:text-blue-500"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        class="w-6 h-6 mb-1"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M8 17l4 4 4-4m0-5V3"
        />
      </svg>
      <span class="text-xs">Projects</span>
    </button>
    <button
      @click="scrollToSection('contact')"
      class="flex flex-col items-center text-gray-600 dark:text-gray-300 hover:text-blue-500"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        class="w-6 h-6 mb-1"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M17 8h2a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V10a2 2 0 012-2h2m4-4v12"
        />
      </svg>
      <span class="text-xs">Contact</span>
    </button>
  </nav>
</template>
