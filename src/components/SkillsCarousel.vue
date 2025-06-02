<template>
    <div class="w-full overflow-hidden bg-sky-50 rounded-2xl p-4">
      <div class="flex animate-scroll">
        <div class="flex space-x-8">
          <!-- First set of skills -->
          <div v-for="skill in skills" :key="skill.name" class="flex flex-col items-center min-w-[100px]">
            <img :src="skill.icon" :alt="skill.name" class="w-16 h-16 mb-2 object-contain" />
            <span class="font-semibold text-gray-700">{{ skill.name }}</span>
          </div>
          <!-- Duplicate set for seamless scrolling -->
          <div v-for="skill in skills" :key="'dup-' + skill.name" class="flex flex-col items-center min-w-[100px]">
            <img :src="skill.icon" :alt="skill.name" class="w-16 h-16 mb-2 object-contain" />
            <span class="font-semibold text-gray-700">{{ skill.name }}</span>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
    interface Skill {
      name: string;
      icon: string;
    }

    const skills: Skill[] = [
          { name: 'Laravel', icon: '/icons/Laravel-Logo.png' },
          { name: 'Vue.js', icon: '/icons/Vue-Logo.png' },
          { name: 'Tailwind CSS', icon: '/icons/Tailwindcss-Logo.png' },
          { name: 'PHP', icon: '/icons/PHP-Logo.png' },
          { name: 'MySQL', icon: '/icons/mySQL-Logo.png' },
          { name: 'Git', icon: '/icons/Git-Logo.png' },
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