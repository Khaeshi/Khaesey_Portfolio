<template>
  <div class="intro-background min-h-screen overflow-x-hidden">
    <!-- Main Content -->
    <main class="ml-[400px] w-[calc(100%-400px)] bg-sky-100">
      <section id="about" class="about min-h-screen flex items-center justify-center px-8">
        <div class="animate-slidein max-w-4xl w-full text-center">
          <h2 class="text-4xl font-extrabold heading-font text-sky-600 mb-4">
            Khaesey Angel G. Tablante
          </h2>
          <p class="text-lg text-gray-600 mb-8">
            I'm a passionate
            <span class="font-semibold text-sky-500">Fullstack Developer</span> with a keen eye for
            creating beautiful and functional web applications. With expertise in modern web
            technologies, I strive to build solutions that not only meet technical requirements but
            also provide exceptional user experiences.
          </p>
        </div>
      </section>
      <section id="experience" class="min-h-screen py-20 px-8">
        <ExperienceBox title="Experience" icon="fas fa-briefcase">
          <Experience />
        </ExperienceBox>
        <ExperienceBox title="Education" icon="fas fa-graduation-cap">
          <EducationList />
        </ExperienceBox>
      </section>
      <section id="projects" class="min-h-screen py-16 px-8">
        <h1 class="text-3xl font-bold mb-8 text-gray-800">Projects</h1>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- Project 1 -->
          <div
            class="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            <div class="p-6">
              <h3 class="text-xl font-bold text-gray-800 mb-2">E-Commerce Platform</h3>
              <p class="text-gray-600 mb-4">
                A full-featured e-commerce platform with user authentication, product management,
                and payment integration.
              </p>
              <div class="flex flex-wrap gap-2 mb-4">
                <span class="px-3 py-1 bg-sky-100 text-sky-600 rounded-full text-sm">Laravel</span>
                <span class="px-3 py-1 bg-sky-100 text-sky-600 rounded-full text-sm">Vue.js</span>
                <span class="px-3 py-1 bg-sky-100 text-sky-600 rounded-full text-sm">MySQL</span>
                <span class="px-3 py-1 bg-sky-100 text-sky-600 rounded-full text-sm"
                  >Tailwind CSS</span
                >
              </div>
              <div class="flex gap-4">
                <a href="#" class="text-sky-600 hover:text-sky-700 font-medium">View Demo →</a>
                <a href="#" class="text-sky-600 hover:text-sky-700 font-medium">Source Code →</a>
              </div>
            </div>
          </div>

          <!-- Project 2 -->
          <div
            class="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            <div class="p-6">
              <h3 class="text-xl font-bold text-gray-800 mb-2">Task Management System</h3>
              <p class="text-gray-600 mb-4">
                A collaborative task management system with real-time updates, team collaboration,
                and progress tracking.
              </p>
              <div class="flex flex-wrap gap-2 mb-4">
                <span class="px-3 py-1 bg-sky-100 text-sky-600 rounded-full text-sm">Node.js</span>
                <span class="px-3 py-1 bg-sky-100 text-sky-600 rounded-full text-sm">Express</span>
                <span class="px-3 py-1 bg-sky-100 text-sky-600 rounded-full text-sm">MongoDB</span>
                <span class="px-3 py-1 bg-sky-100 text-sky-600 rounded-full text-sm"
                  >Socket.io</span
                >
              </div>
              <div class="flex gap-4">
                <a href="#" class="text-sky-600 hover:text-sky-700 font-medium">View Demo →</a>
                <a href="#" class="text-sky-600 hover:text-sky-700 font-medium">Source Code →</a>
              </div>
            </div>
          </div>

          <!-- Project 3 -->
          <div
            class="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            <div class="p-6">
              <h3 class="text-xl font-bold text-gray-800 mb-2">Portfolio Website</h3>
              <p class="text-gray-600 mb-4">
                A modern, responsive portfolio website showcasing projects and skills with smooth
                animations.
              </p>
              <div class="flex flex-wrap gap-2 mb-4">
                <span class="px-3 py-1 bg-sky-100 text-sky-600 rounded-full text-sm">Vue.js</span>
                <span class="px-3 py-1 bg-sky-100 text-sky-600 rounded-full text-sm"
                  >TypeScript</span
                >
                <span class="px-3 py-1 bg-sky-100 text-sky-600 rounded-full text-sm"
                  >Tailwind CSS</span
                >
                <span class="px-3 py-1 bg-sky-100 text-sky-600 rounded-full text-sm">Vite</span>
              </div>
              <div class="flex gap-4">
                <a href="#" class="text-sky-600 hover:text-sky-700 font-medium">View Demo →</a>
                <a href="#" class="text-sky-100 hover:text-sky-700 font-medium">Source Code →</a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="skills" class="min-h-screen py-16 px-8">
        <h1 class="text-3xl font-bold mb-8">Skills</h1>
        <SkillsCarousel />
      </section>
      <section id="contact" class="min-h-screen py-16 px-8">
        <h1 class="text-3xl font-bold mb-8 text-gray-800">Contact</h1>
        <ContactForm />
      </section>
    </main>
  </div>
</template>

<script setup lang="ts">
import Experience from '../components/ExperienceList.vue'
import EducationList from '../components/EducationList.vue'
import SkillsCarousel from '../components/SkillsCarousel.vue'
import ContactForm from '../components/ContactForm.vue'
import ExperienceBox from '../components/ExperienceBox.vue'
</script>
