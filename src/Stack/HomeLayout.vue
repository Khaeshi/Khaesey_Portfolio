<template>
  <div class="intro-background min-h-screen overflow-x-hidden">
    <!-- Main Content -->
    <main class="ml-[250px] w-[calc(100%-250px)]">
      <section id="about" class="about bg-sky-950 min-h-screen flex items-center justify-center px-8">
        <div class="max-w-4xl w-full text-center">
          <h2 class="text-4xl font-extrabold heading-font text-sky-600 mb-4">Khaesey Angel G. Tablante</h2>
          <p class="text-lg text-gray-600 mb-8">
            I'm a passionate <span class="font-semibold text-sky-500">Fullstack Developer</span> with a keen eye for creating beautiful and functional web applications. With expertise in modern web technologies, I strive to build solutions that not only meet technical requirements but also provide exceptional user experiences.
          </p>
        </div>
      </section>
      <section id="experience" class="min-h-screen py-16 px-8">
        <h1 class="text-3xl font-bold mb-8">Experience</h1>
        <Experience />
      </section>
      <section id="education" class="min-h-screen py-16 px-8">
        <h1 class="text-3xl font-bold mb-8">Education</h1>
        <EducationList />
      </section>
      <section id="projects" class="min-h-screen py-16 px-8">
        <h1 class="text-3xl font-bold mb-8">Projects</h1>
      </section>
      <section id="skills" class="min-h-screen py-16 px-8">
        <h1 class="text-3xl font-bold mb-8">Skills</h1>
        <SkillsCarousel />
      </section>
      <section id="contact" class="min-h-screen py-16 px-8">
        <h1 class="text-3xl font-bold mb-8">Contact</h1>
      </section>
    </main>
  </div>
</template>

<script setup lang="ts">
import Experience from '../components/ExperienceList.vue';
import EducationList from '../components/EducationList.vue';
import SkillsCarousel from '../components/SkillsCarousel.vue';
</script>
