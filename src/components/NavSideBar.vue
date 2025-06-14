<script setup lang="ts">
import Avatar from './Avatar.vue'
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
  <!-- Hamburger Icon (mobile only) -->
  <button
    class="fixed top-4 left-4 z-50 md:hidden bg-transparent-primary-900 text-primary-300 p-2 rounded focus:outline-none hover:bg-primary-800 transition-colors"
    @click="isMobileOpen = true"
    v-if="!isMobileOpen"
  >
    <svg class="w-8 h-8" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
    </svg>
  </button>

  <!-- Overlay (mobile only, when sidebar is open) -->
  <div
    v-if="isMobileOpen"
    class="fixed inset-0 bg-neutral-950/80 backdrop-blur-sm z-40 md:hidden"
    @click="isMobileOpen = false"
  ></div>

  <!-- Sidebar Navigation -->
  <aside
    :class="[
      'fixed top-0 min-h-screen max-h-screen z-50 shadow-lg transition-all duration-300 bg-white dark:bg-neutral-900 border-r border-neutral-200 dark:border-neutral-800 flex flex-col',
      isCollapsed ? 'md:w-[100px] w-[80vw]' : 'md:w-[320px] w-[80vw]',
      'md:z-40',
      // Mobile: slide in/out
      isMobileOpen ? 'left-0' : '-left-[80vw]',
      'md:left-0',
      'md:block',
      'md:transition-none',
    ]"
    style="transition-property: left, width, background-color"
  >
    <!-- Close button (mobile only) -->
    <button
      v-if="isMobileOpen"
      class="absolute top-4 right-4 z-50 md:hidden text-neutral-600 dark:text-neutral-400 hover:text-neutral-800 dark:hover:text-neutral-200 text-3xl focus:outline-none transition-colors"
      @click="isMobileOpen = false"
    >
      &times;
    </button>
    <div :class="['flex justify-center transition-all duration-300 ease-in-out scale-100']">
      <Avatar />
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
