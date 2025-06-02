<template>
    <div class="w-full overflow-hidden bg-sky-50 rounded-2xl p-4">
      <div class="flex animate-scroll">
        <div class="flex space-x-8">
          <!-- First set of skills -->
          <div v-for="skill in skills" :key="skill.name" class="flex flex-col items-center min-w-[100px]">
            <img :src="skill.icon" :alt="skill.name" class="w-12 h-12 mb-2 object-contain" />
            <span class="font-semibold text-gray-700">{{ skill.name }}</span>
          </div>
          <!-- Duplicate set for seamless scrolling -->
          <div v-for="skill in skills" :key="'dup-' + skill.name" class="flex flex-col items-center min-w-[100px]">
            <img :src="skill.icon" :alt="skill.name" class="w-12 h-12 mb-2 object-contain" />
            <span class="font-semibold text-gray-700">{{ skill.name }}</span>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
    const skills = [
          { name: 'Laravel', icon: '/icons/laravel-logo.png' },
          { name: 'Vue.js', icon: '/icons/vue.png' },
          { name: 'HTML & CSS', icon: '/icons/html-css.png' },
          { name: 'Node.js', icon: '/icons/nodejs.png' },
          { name: 'Tailwind CSS', icon: '/icons/tailwind.png' },
          { name: 'REST APIs', icon: '/icons/api.png' },
          { name: 'PHP', icon: '/icons/php.png' },
          { name: 'MySQL', icon: '/icons/mysql.png' },
          { name: 'Git', icon: '/icons/git.png' },
          { name: 'Docker', icon: '/icons/docker.png' }
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