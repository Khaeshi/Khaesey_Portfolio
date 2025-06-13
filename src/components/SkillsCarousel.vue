<template>
  <div class="w-full overflow-hidden bg-white dark:bg-neutral-800 rounded-2xl p-4 shadow-lg">
    <swiper
      :modules="[SwiperAutoplay, SwiperPagination]"
      :slides-per-view="'auto'"
      :space-between="32"
      :loop="true"
      :autoplay="{
        delay: 0,
        disableOnInteraction: false,
      }"
      :speed="3000"
      :pagination="{
        clickable: true,
      }"
      class="skills-swiper"
    >
      <swiper-slide v-for="skill in skills" :key="skill.name" class="!w-auto">
        <div class="flex flex-col items-center min-w-[100px]">
          <img :src="skill.icon" :alt="skill.name" class="w-16 h-16 mb-2 object-contain" />
          <span class="font-semibold text-neutral-700 dark:text-neutral-300">{{ skill.name }}</span>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import LaravelLogo from '../assets/icons/Laravel-Logo.png'
import VueLogo from '../assets/icons/Vue-Logo.png'
import TailwindLogo from '../assets/icons/Tailwindcss-Logo.png'
import PhpLogo from '../assets/icons/PHP-Logo.png'
import MySqlLogo from '../assets/icons/mySQL-Logo.png'
import GitLogo from '../assets/icons/Git-Logo.png'

const SwiperAutoplay = Autoplay
const SwiperPagination = Pagination

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
}

:deep(.swiper-pagination) {
  bottom: -5px;
}

:deep(.swiper-pagination-bullet) {
  background: theme('colors.primary.500');
  opacity: 0.5;
}

:deep(.swiper-pagination-bullet-active) {
  opacity: 1;
}

:deep(.swiper-slide) {
  transition: transform 0.3s ease;
}

:deep(.swiper-slide:hover) {
  transform: scale(1.1);
}
</style>
