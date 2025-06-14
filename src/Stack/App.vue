<template>
  <div class="w-screen overflow-x-hidden scrollbar-hide">
    <LoadingScreen
      :is-loading="isLoading"
      :logo-url="avatarUrl"
      :progress-percentage="loadingProgress"
      :progress-message="loadingMessage"
    />
    <NavSideBar />
    <HomeLayout />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import NavSideBar from '../components/NavSideBar.vue'
import HomeLayout from './HomeLayout.vue'
import LoadingScreen from '../components/Loading/LoadingScreen.vue'

const isLoading = ref(true)
const loadingProgress = ref(0)
const loadingMessage = ref('Initializing...')
const avatarUrl = new URL('/picture/avatar.png', import.meta.url).href

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
      }, 500)
    }
  }

  // Start the animation
  requestAnimationFrame(updateProgress)
})
</script>
