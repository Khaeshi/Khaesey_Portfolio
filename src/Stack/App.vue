<template>
  <div class="w-full overflow-x-hidden scrollbar-hide">
    <LoadingScreen
      :is-loading="isLoading"
      :logo-url="avatarUrl"
      :progress-percentage="loadingProgress"
      :progress-message="loadingMessage"
    />
    <NavSideBar v-if="!isMobile" v-model="isMobileOpen" />
    <NavBottomBar v-else />
    <HomeLayout />
    <!-- icons thanks-->
    <div
      v-if="showSponsorModal"
      class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60"
    >
      <div class="bg-white dark:bg-neutral-900 rounded-lg p-6 max-w-md relative text-center">
        <button
          @click="showSponsorModal = false"
          class="absolute top-2 right-3 text-2xl text-gray-500 hover:text-red-500"
          aria-label="Close"
        >
          &times;
        </button>
        <h2 class="text-xl font-bold mb-2 dark:text-primary-400">Thanks to Icons8!</h2>
        <p class="mb-4 dark:text-secondary-100">
          Icons in this portfolio are provided by
          <a
            href="https://icons8.com"
            target="_blank"
            class="text-blue-600 underline dark:text-accent-400"
            >Icons8</a
          >
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import NavSideBar from '../components/Navbar/NavSideBar.vue'
import NavBottomBar from '../components/Navbar/NavBottomBar.vue'
import HomeLayout from './HomeLayout.vue'
import LoadingScreen from '../components/Loading/LoadingScreen.vue'

const isLoading = ref(true)
const loadingProgress = ref(0)
const loadingMessage = ref('Initializing...')
const avatarUrl = new URL('/picture/avatar.png', import.meta.url).href
const showSponsorModal = ref(false)

const isMobileOpen = ref(false)

const mediaQuery = window.matchMedia('(max-width: 767.98px)')
const isMobile = ref(mediaQuery.matches)

const handleResize = () => {
  isMobile.value = mediaQuery.matches
}

// Loading messages that change based on progress
const loadingMessages = [
  { threshold: 0, message: 'Initializing...' },
  { threshold: 20, message: 'Loading assets...' },
  { threshold: 40, message: 'Preparing components...' },
  { threshold: 65, message: 'Setting up layout...' },
  { threshold: 80, message: 'Almost there...' },
  { threshold: 100, message: 'Ready!' },
]

// Simulate realistic loading with variable speeds
onMounted(() => {
  mediaQuery.addEventListener?.('change', handleResize)
  // Fallback for older browsers
  mediaQuery.addListener?.(handleResize)

  let currentProgress = 0
  const totalDuration = 3000 // 3 seconds total
  const startTime = Date.now()

  const updateProgress = () => {
    const elapsed = Date.now() - startTime
    const progress = Math.min((elapsed / totalDuration) * 100, 100)

    // Update progress with easing
    currentProgress = Math.min(progress, 100)
    loadingProgress.value = Math.round(currentProgress)

    // Update loading message based on progress
    const currentMessage = loadingMessages
      .slice()
      .reverse()
      .find((msg) => currentProgress >= msg.threshold)
    if (currentMessage) {
      loadingMessage.value = currentMessage.message
    }

    // Continue animation if not complete
    if (currentProgress < 100) {
      requestAnimationFrame(updateProgress)
    } else {
      // Add a small delay before hiding
      setTimeout(() => {
        isLoading.value = false
        // Show sponsor modal after loading completes
        showSponsorModal.value = true
      }, 500)
    }
  }

  // Start the animation
  requestAnimationFrame(updateProgress)
})

onUnmounted(() => {
  mediaQuery.removeEventListener?.('change', handleResize)
  mediaQuery.removeListener?.(handleResize)
})
</script>
