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
import LoadingScreen from '../components/Loading/Loadingscreen.vue'

const isLoading = ref(true)
const loadingProgress = ref(0)
const loadingMessage = ref('Loading your portfolio...')
const avatarUrl = new URL('/picture/avatar.png', import.meta.url).href // import because logo-url direct linking doesnt work

onMounted(() => {
  // Simulate loading progress
  const interval = setInterval(() => {
    loadingProgress.value += 20
    if (loadingProgress.value >= 100) {
      clearInterval(interval)
      setTimeout(() => {
        isLoading.value = false
      }, 500) // Add a small delay before hiding
    }
  }, 200)
})
</script>
