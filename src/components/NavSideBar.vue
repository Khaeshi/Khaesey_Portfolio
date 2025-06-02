<script setup lang="ts">
import Avatar from './Avatar.vue';

const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};
</script>

<template>
    <!-- Sidebar Navigation -->
<aside class="bg-sky-950 fixed top-0 h-screen w-[400px] z-50 shadow-sm"> 
  <div>
    <Avatar/>
  </div>
   
    <nav class="flex flex-col space-y-7 px-3 py-10">
      <button 
        @click="scrollToSection('about')"
        class="text-left px-8 py-2 hover:bg-gray-100 border-none transition-colors duration-200 rounded"
      >
        About
      </button>
      <button 
        @click="scrollToSection('experience')"
        class="text-left px-8 py-2 hover:bg-gray-100 border-none transition-colors duration-200 rounded"
      >
        Experience
      </button>
      <button 
        @click="scrollToSection('projects')"
        class="text-left px-8 py-2 hover:bg-gray-100 border-none transition-colors duration-200 rounded"
      >
        Projects
      </button>
      <button 
        @click="scrollToSection('skills')"
        class="text-left px-8 py-2 hover:bg-gray-100 border-none transition-colors duration-200 rounded"
      >
        Skills
      </button>
      <button 
        @click="scrollToSection('contact')"
        class="text-left px-8 py-2 hover:bg-gray-100 border-none transition-colors duration-200 rounded"
      >
        Contact
      </button>
    </nav>
</aside> 
</template>
