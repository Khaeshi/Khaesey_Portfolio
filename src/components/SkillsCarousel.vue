<template>
  <div class="w-full overflow-hidden bg-white dark:bg-neutral-800 rounded-2xl p-4 shadow-lg">
    <!-- Mobile and Tablet View (Swiper) -->
    <swiper
      v-if="!isLargeScreen"
      :modules="[SwiperAutoplay, SwiperFreeMode]"
      :slides-per-view="'auto'"
      :space-between="32"
      :loop="true"
      :free-Mode="{
        enabled: true,
        momentum: true,
        momentumRatio: 0.5,
        momentumVelocityRatio: 0.5,
        momentumBounce: false,
      }"
      :speed="3000"
      :auto-play="{
        delay: 0,
        disableOnInteraction: false,
      }"
      class="skills-swiper"
    >
      <swiper-slide v-for="skill in skills" :key="skill.name" class="sm:!w-auto md:!w-auto">
        <div class="flex flex-col items-center min-w-[100px]">
          <img :src="skill.icon" :alt="skill.name" class="w-16 h-16 mb-2 object-contain" />
          <span class="font-semibold text-neutral-700 dark:text-neutral-300">{{ skill.name }}</span>
        </div>
      </swiper-slide>
    </swiper>

    <!-- Desktop View (Static Grid) -->
    <div v-else class="grid grid-cols-6 gap-8 py-4">
      <div v-for="skill in skills" :key="skill.name" class="flex flex-col items-center">
        <img :src="skill.icon" :alt="skill.name" class="w-16 h-16 mb-2 object-contain" />
        <span class="font-semibold text-neutral-700 dark:text-neutral-300">{{ skill.name }}</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay, FreeMode } from 'swiper/modules'
import { ref, onMounted, onUnmounted } from 'vue'
import 'swiper/css'
import 'swiper/css/free-mode'
import LaravelLogo from '../assets/icons/Laravel-Logo.png'
import VueLogo from '../assets/icons/Vue-Logo.png'
import TailwindLogo from '../assets/icons/Tailwindcss-Logo.png'
import PhpLogo from '../assets/icons/PHP-Logo.png'
import MySqlLogo from '../assets/icons/mySQL-Logo.png'
import GitLogo from '../assets/icons/Git-Logo.png'

const SwiperAutoplay = Autoplay
const SwiperFreeMode = FreeMode

const isLargeScreen = ref(false)

const checkScreenSize = () => {
  isLargeScreen.value = window.innerWidth >= 1024 // lg breakpoint
}

onMounted(() => {
  checkScreenSize()
  window.addEventListener('resize', checkScreenSize)
})

onUnmounted(() => {
  window.removeEventListener('resize', checkScreenSize)
})

interface Skill {
  name: string
  icon: string
}

const skills: Skill[] = [
  { name: 'Laravel', icon: LaravelLogo },
  { name: 'Vue.js', icon: VueLogo },
  { name: 'Tailwind CSS', icon: TailwindLogo },
  { name: 'PHP', icon: PhpLogo },
  { name: 'MySQL', icon: MySqlLogo },
  { name: 'Git', icon: GitLogo },
]
</script>

<style scoped>
.skills-swiper {
  padding: 1rem 0;
  overflow: visible;
}

:deep(.swiper-wrapper) {
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}

:deep(.swiper-slide) {
  transition: transform 0.3s ease;
}

:deep(.swiper-slide:hover) {
  transform: scale(1.05);
}
</style>
