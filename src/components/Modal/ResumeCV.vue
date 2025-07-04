<template>
  <div
    v-if="props.modelValue"
    class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60"
  >
    <div class="bg-white dark:bg-neutral-900 rounded-lg p-6 max-w-3xl w-full relative">
      <button
        @click="closeModal"
        class="absolute top-2 right-2 text-2xl text-gray-500 hover:text-red-500"
        aria-label="Close"
      >
        &times;
      </button>
      <template v-if="isMobile">
        <img :src="resumeImgPath" alt="Resume" class="w-full h-auto rounded" />
      </template>
      <template v-else>
        <iframe :src="resumePdfPath" class="w-full h-[70vh] rounded" frameborder="0"></iframe>
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, defineProps, defineEmits, onMounted } from 'vue'

const props = defineProps<{ modelValue: boolean }>()
const emit = defineEmits(['update:modelValue'])

const baseUrl = import.meta.env.BASE_URL
const resumePdfPath = `${baseUrl}resume/Resume_Khaesey_Angel_Tablante.pdf`
const resumeImgPath = `${baseUrl}resume/Resume.png`

const isMobile = ref(false)
function checkMobile() {
  // User agent check
  const ua = navigator.userAgent
  const isMobileUA = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(ua)
  // Screen width check
  const isSmallScreen = window.innerWidth < 768
  isMobile.value = isMobileUA || isSmallScreen
}
onMounted(() => {
  checkMobile()
  window.addEventListener('resize', checkMobile)
})

function closeModal() {
  emit('update:modelValue', false)
}
</script>
