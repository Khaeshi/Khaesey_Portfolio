<template>
  <Transition
    enter-active-class="transition-all duration-500 ease-out"
    enter-from-class="opacity-0 scale-95"
    enter-to-class="opacity-100 scale-100"
    leave-active-class="transition-all duration-500 ease-in"
    leave-from-class="opacity-100 scale-100"
    leave-to-class="opacity-0 scale-95"
  >
    <div
      v-if="isLoading"
      class="fixed inset-0 flex items-center justify-center z-[9999] bg-neutral-950/90 backdrop-blur-sm"
    >
      <div
        class="bg-white dark:bg-neutral-800 rounded-xl shadow-2xl p-6 sm:p-8 w-[90%] max-w-sm transform transition-all duration-500 ease-in-out"
      >
        <div class="flex items-center mb-6">
          <div class="relative">
            <div
              class="absolute -inset-2 rounded-full bg-gradient-to-r from-primary-500 to-accent-500 opacity-25 blur-sm animate-pulse"
            ></div>
            <img
              :src="logoUrl"
              :alt="logoAlt"
              class="h-12 w-12 sm:h-16 sm:w-16 rounded-full object-cover relative"
            />
          </div>
          <div class="ml-4">
            <h2 class="text-lg sm:text-xl font-bold text-neutral-800 dark:text-neutral-100">
              Loading...
            </h2>
            <p class="text-sm text-neutral-600 dark:text-neutral-400">{{ progressMessage }}</p>
          </div>
        </div>
        <div class="space-y-2">
          <div class="h-2 bg-neutral-200 dark:bg-neutral-700 rounded-full overflow-hidden">
            <div
              class="h-full bg-gradient-to-r from-primary-500 to-accent-500 rounded-full transition-all duration-300 ease-in-out"
              :style="{ width: progressPercentage + '%' }"
            ></div>
          </div>
          <div class="flex justify-between text-xs text-neutral-500 dark:text-neutral-400">
            <span>Loading</span>
            <span>{{ progressPercentage }}%</span>
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script setup lang="ts">
import { withDefaults } from 'vue'

defineOptions({
  name: 'LoadingScreen',
})

// Add prop validation with defaults
withDefaults(
  defineProps<{
    isLoading: boolean
    logoUrl: string
    logoAlt?: string
    progressPercentage: number
    progressMessage: string
  }>(),
  {
    isLoading: false,
    logoUrl: '',
    logoAlt: 'Loading...',
    progressPercentage: 0,
    progressMessage: 'Loading...',
  },
)
</script>

<style scoped>
.animate-pulse {
  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

@keyframes pulse {
  0%,
  100% {
    opacity: 0.25;
  }
  50% {
    opacity: 0.5;
  }
}
</style>
