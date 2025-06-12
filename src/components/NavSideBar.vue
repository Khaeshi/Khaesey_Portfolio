<script setup lang="ts">
import Avatar from './Avatar.vue'
import { ref, onMounted, onUnmounted, watch } from 'vue'

const isCollapsed = ref(false)
const isMobileOpen = ref(false)

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
    class="fixed top-4 left-4 z-50 md:hidden bg-sky-950 text-white p-2 rounded focus:outline-none"
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
    class="fixed inset-0 bg-black bg-opacity-40 z-40 md:hidden"
    @click="isMobileOpen = false"
  ></div>

  <!-- Sidebar Navigation -->
  <aside
    :class="[
      'fixed top-0 h-screen z-50 shadow-sm transition-all duration-300 bg-sky-950',
      isCollapsed ? 'md:w-[100px] w-[80vw]' : 'md:w-[400px] w-[80vw]',
      'md:z-40',
      // Mobile: slide in/out
      isMobileOpen ? 'left-0' : 'left-[-100vw]',
      'md:left-0',
      'md:block',
      'md:transition-none',
    ]"
    style="transition-property: left, width, background-color"
  >
    <!-- Close button (mobile only) -->
    <button
      v-if="isMobileOpen"
      class="absolute top-4 right-4 z-50 md:hidden text-white text-3xl focus:outline-none"
      @click="isMobileOpen = false"
    >
      &times;
    </button>
    <div :class="['flex justify-center transition-all duration-300 ease-in-out scale-100']">
      <Avatar />
    </div>
    <nav class="flex flex-col space-y-7 px-3 py-10">
      <button
        @click="scrollToSection('about')"
        class="text-left text-white px-8 py-2 hover:text-gray-500 border-none transition-colors duration-200 rounded flex items-center"
      >
        <i class="fas fa-user text-lg"></i>
        <span class="ml-2">About</span>
      </button>
      <button
        @click="scrollToSection('experience')"
        class="text-left text-white px-8 py-2 hover:text-gray-500 border-none transition-colors duration-200 rounded flex items-center"
      >
        <i class="fas fa-briefcase text-lg"></i>
        <span class="ml-2">Experience</span>
      </button>
      <button
        @click="scrollToSection('projects')"
        class="text-left text-white px-8 py-2 hover:text-gray-500 border-none transition-colors duration-200 rounded flex items-center"
      >
        <i class="fas fa-code text-lg"></i>
        <span class="ml-2">Projects</span>
      </button>
      <button
        @click="scrollToSection('skills')"
        class="text-left text-white px-8 py-2 hover:text-gray-500 border-none transition-colors duration-200 rounded flex items-center"
      >
        <i class="fas fa-tools text-lg"></i>
        <span class="ml-2">Skills</span>
      </button>
      <button
        @click="scrollToSection('contact')"
        class="text-left text-white px-8 py-2 hover:text-gray-500 border-none transition-colors duration-200 rounded flex items-center"
      >
        <i class="fas fa-envelope text-lg"></i>
        <span class="ml-2">Contact</span>
      </button>
    </nav>
  </aside>
</template>
