<script setup lang="ts">

const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};
</script>

<template>
    <!-- Sidebar Navigation -->
<aside class="bg-sky-800 fixed top-0 h-screen w-[250px] z-50 shadow-sm"> 
   
    <nav class="flex flex-col space-y-7">
      <button 
        @click="scrollToSection('about')"
        class="text-left px-4 py-2 hover:bg-gray-100 border-none transition-colors duration-200"
      >
        About
      </button>
      <button 
        @click="scrollToSection('experience')"
        class="text-left px-4 py-2 hover:bg-gray-100 border-none transition-colors duration-200"
      >
        Experience
      </button>
      <button 
        @click="scrollToSection('projects')"
        class="text-left px-4 py-2 hover:bg-gray-100 border-none transition-colors duration-200"
      >
        Projects
      </button>
      <button 
        @click="scrollToSection('skills')"
        class="text-left px-4 py-2 hover:bg-gray-100 border-none transition-colors duration-200"
      >
        Skills
      </button>
      <button 
        @click="scrollToSection('contact')"
        class="text-left px-4 py-2 hover:bg-gray-100 border-none transition-colors duration-200"
      >
        Contact
      </button>
    </nav>
</aside> 
</template>
