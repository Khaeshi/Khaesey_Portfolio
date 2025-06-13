<template>
  <div class="w-full overflow-hidden bg-sky-50 rounded-2xl p-4">
    <div class="flex animate-scroll">
      <div class="flex space-x-8">
        <!-- First set of skills -->
        <div
          v-for="skill in skills"
          :key="skill.name"
          class="flex flex-col items-center min-w-[100px]"
        >
          <img :src="skill.icon" :alt="skill.name" class="w-16 h-16 mb-2 object-contain" />
          <span class="font-semibold text-gray-700">{{ skill.name }}</span>
        </div>
        <!-- Duplicate set for seamless scrolling -->
        <div
          v-for="skill in skills"
          :key="'dup-' + skill.name"
          class="flex flex-col items-center min-w-[100px]"
        >
          <img :src="skill.icon" :alt="skill.name" class="w-16 h-16 mb-2 object-contain" />
          <span class="font-semibold text-gray-700">{{ skill.name }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import LaravelLogo from '../assets/icons/Laravel-Logo.png'
import VueLogo from '../assets/icons/Vue-Logo.png'
import TailwindLogo from '../assets/icons/Tailwindcss-Logo.png'
import PhpLogo from '../assets/icons/PHP-Logo.png'
import MySqlLogo from '../assets/icons/mySQL-Logo.png'
import GitLogo from '../assets/icons/Git-Logo.png'

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
.animate-scroll {
  animation: scroll 30s linear infinite;
}

@keyframes scroll {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}

/* Pause animation on hover */
.animate-scroll:hover {
  animation-play-state: paused;
}
</style>
