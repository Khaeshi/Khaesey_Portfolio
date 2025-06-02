<template>
  <Transition
    enter-active-class="transition-opacity duration-500 ease-out"
    enter-from-class="opacity-0"
    enter-to-class="opacity-100"
    leave-active-class="transition-opacity duration-500 ease-in"
    leave-from-class="opacity-100"
    leave-to-class="opacity-0"
  >
    <div v-if="isLoading" class="fixed inset-0 flex items-center justify-center z-[9999] bg-gray-800 ">
      <div class="bg-white rounded-lg shadow-lg p-8 w-96 transform transition-all duration-500 ease-in-out">
        <div class="flex items-center mb-4">
          <img :src="logoUrl" :alt="logoAlt" class="h-12 w-auto mr-4">
          <h2 class="text-xl font-bold text-gray-800">Loading...</h2>
        </div>
        <div class="h-2.5 bg-gray-200 rounded-full mb-4 overflow-hidden">
          <div 
            class="h-full bg-green-500 rounded-full transition-all duration-300 ease-in-out"
            :style="{ width: progressPercentage + '%' }"
          ></div>
        </div>
        <p class="text-gray-600 text-center">{{ progressMessage }}</p>
      </div>
    </div>
  </Transition>
</template>

<script>
export default {
  props: {
    isLoading: {
      type: Boolean,
      default: false
    },
    logoUrl: {
      type: String,
      default: '' // Provide your logo URL here
    },
    logoAlt: {
      type: String,
      default: 'Logo'
    },
    progressPercentage: {
      type: Number,
      default: 0
    },
    progressMessage: {
      type: String,
      default: 'Please wait...'
    }
  }
};
</script>

<style scoped>
.progress-bar {
  height: 10px;
  background-color: #e0e0e0;
  border-radius: 5px;
  overflow: hidden;
}

.progress-bar-fill {
  height: 100%;
  background-color: #4CAF50;
  border-radius: 5px;
  transition: width 0.3s ease-in-out;
}

/* Fade transition */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* Optional: Add a scale effect */
.fade-enter-active .bg-white,
.fade-leave-active .bg-white {
  transition: all 0.5s ease;
}

.fade-enter-from .bg-white,
.fade-leave-to .bg-white {
  transform: scale(0.95);
  opacity: 0;
}
</style>