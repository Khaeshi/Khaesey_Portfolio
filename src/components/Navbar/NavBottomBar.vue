<script setup lang="ts">
import ProfileModal from '../Modal/NavBottomProfile/ProfileModal.vue'
import { ref, onMounted, onUnmounted, watch, provide } from 'vue'

const isCollapsed = ref(false)
const isMenuOpen = ref(false)
const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}
const closeMenu = () => {
  isMenuOpen.value = false
}

provide('isCollapsed', isCollapsed)

const setSidebarWidth = () => {
  document.body.style.setProperty('--sidebar-width', isCollapsed.value ? '100px' : '400px')
}

const checkScreenSize = () => {
  isCollapsed.value = window.innerWidth < 768
  if (window.innerWidth >= 768) {
    isMenuOpen.value = false
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
    isMenuOpen.value = false
  }
}
</script>

<template>
  <nav
    class="fixed bottom-0 left-0 w-full bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 flex justify-around items-center py-2 z-50 md:hidden"
  >
    <!-- Button Layouts -->
    <button
      @click="scrollToSection('about')"
      class="flex flex-col gap-1 items-center text-gray-600 dark:text-gray-300 hover:text-blue-500"
    >
      <i
        class="fas fa-user md:text-lg lg:text-2xl group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors"
      />
      <span class="text-xs">About</span>
    </button>
    <button
      @click="scrollToSection('experience')"
      class="flex flex-col gap-1 items-center text-gray-600 dark:text-gray-300 hover:text-blue-500"
    >
      <i
        class="fas fa-briefcase md:text-lg lg:text-2xl group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors"
      />
      <span class="text-xs">Experience</span>
    </button>
    <button
      @click="scrollToSection('projects')"
      class="flex flex-col items-center text-gray-600 dark:text-gray-300 hover:text-blue-500"
    >
      <i
        class="fas fa-code md:text-lg lg:text-2xl group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors"
      />
      <span class="text-xs">Projects</span>
    </button>
    <button
      @click="scrollToSection('contact')"
      class="flex flex-col gap-1 items-center text-gray-600 dark:text-gray-300 hover:text-blue-500"
    >
      <i
        class="fas fa-envelope md:text-lg lg:text-2xl group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors"
      />
      <span class="text-xs">Contact</span>
    </button>
    <!-- Burger Menu Button -->
    <button
      @click="toggleMenu"
      class="flex flex-col gap-1 items-center text-gray-600 dark:text-gray-300 hover:text-blue-500"
      aria-label="Open more menu"
    >
      <i
        class="fas fa-bars md:text-lg lg:text-2xl group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors"
      />
      <span class="text-xs">Avatar</span>
    </button>
  </nav>
  <ProfileModal
    :open="isMenuOpen"
    @close="closeMenu"
    @navigate="
      (id) => {
        scrollToSection(id)
        closeMenu()
      }
    "
  />
</template>
