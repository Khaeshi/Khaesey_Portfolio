<template>
  <div
    class="intro-background min-h-screen w-screen overflow-x-hidden scrollbar-hide bg-neutral-50 dark:bg-neutral-950"
  >
    <!-- Main Content -->
    <main
      :style="{
        marginLeft: isDesktop ? (isCollapsed ? '100px' : '400px') : '0',
        width: isDesktop ? (isCollapsed ? 'calc(100% - 100px)' : 'calc(100% - 400px)') : '100%',
      }"
      class="transition-all duration-300 bg-white dark:bg-neutral-900 min-h-screen"
    >
      <section id="about" class="about min-h-screen flex items-center justify-center px-4 sm:px-8">
        <div class="animate-slidein max-w-4xl w-full text-center">
          <h2
            class="text-3xl sm:text-4xl font-extrabold heading-font text-primary-600 dark:text-primary-400 mb-4"
          >
            Khaesey Angel Tablante
          </h2>
          <p class="text-base sm:text-lg text-neutral-600 dark:text-neutral-300 mb-8">
            I'm a passionate
            <span class="font-semibold text-secondary-600 dark:text-secondary-400"
              >Fullstack Developer</span
            >
            with a keen eye for creating beautiful and functional web applications. With expertise
            in modern web technologies, I strive to build solutions that not only meet technical
            requirements but also provide exceptional user experiences.
          </p>
        </div>
      </section>
      <section id="experience" class="min-h-screen py-12 sm:py-20 px-4 sm:px-8">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <ExperienceBox title="Experience" icon="fas fa-briefcase">
            <Experience />
          </ExperienceBox>
          <ExperienceBox title="Education" icon="fas fa-graduation-cap">
            <EducationList />
          </ExperienceBox>
        </div>
      </section>
      <section id="projects" class="min-h-screen py-12 sm:py-16 px-6 sm:px-8">
        <h1
          class="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-primary-600 dark:text-primary-400"
        >
          Projects
        </h1>
        <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4s sm:gap-8">
          <div
            v-for="repo in repos"
            :key="repo.id"
            class="bg-white dark:bg-neutral-800 rounded-xl shadow-lg overflow-hidden hover:shadow-2xl hover:scale-105 transition-transform duration-300 border border-neutral-200 dark:border-neutral-700"
          >
            <img
              :src="repo.image || 'projects/Resume.png'"
              alt="Project image"
              class="w-full h-32 object-cover mb-4"
            />
            <div class="p-6">
              <h3 class="text-xl font-bold text-neutral-800 dark:text-neutral-100 mb-2">
                {{ repo.name }}
              </h3>
              <div class="flex flex-wrap gap-2 mb-2">
                <span
                  v-for="topic in repo.topics"
                  :key="topic"
                  class="px-2 py-1 bg-primary-100 dark:bg-primary-900/50 text-primary-600 dark:text-primary-300 rounded-full text-xs"
                >
                  {{ topic }}
                </span>
              </div>
              <p class="text-neutral-600 dark:text-neutral-400 mb-4 line-clamp-3">
                {{ repo.description }}
              </p>
              <div class="flex gap-4">
                <a
                  :href="repo.html_url"
                  target="_blank"
                  class="text-secondary-600 dark:text-secondary-400 hover:text-secondary-500 dark:hover:text-secondary-300 font-medium"
                  >Source Code →</a
                >
                <a
                  v-if="repo.homepage"
                  :href="repo.homepage"
                  target="_blank"
                  class="bg-accent-600 text-white px-3 py-1 rounded hover:bg-accent-500 font-medium"
                  >View Demo</a
                >
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="skills" class="min-h-screen py-12 sm:py-16 px-4 sm:px-8">
        <h1
          class="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-primary-600 dark:text-primary-400"
        >
          Skills
        </h1>
        <SkillsCarousel />
      </section>
      <section id="contact" class="min-h-screen py-12 sm:py-16 px-4 sm:px-8">
        <h1
          class="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-primary-600 dark:text-primary-400"
        >
          Contact
        </h1>
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
import { ref, onMounted, onUnmounted, inject } from 'vue'
import type { Ref } from 'vue'

const isDesktop: Ref<boolean> = ref(window.innerWidth >= 768)
const handleResize = (): void => {
  isDesktop.value = window.innerWidth >= 768
}
onMounted(() => window.addEventListener('resize', handleResize))
onUnmounted(() => window.removeEventListener('resize', handleResize))

// Injected from NavSideBar.vue
const isCollapsed = inject<Ref<boolean>>('isCollapsed', ref(false))

// Fetch GitHub repositories for Projects section
type Repo = {
  id: number
  name: string
  description: string | null
  html_url: string
  homepage?: string | null
  updated_at: string
  image?: string | null
  topics?: string[] | null
}
const repos: Ref<Repo[]> = ref([])

onMounted(async (): Promise<void> => {
  try {
    const res: Response = await fetch('https://api.github.com/users/Khaeshi/repos')
    if (res.ok) {
      const data: Repo[] = await res.json()
      // Sort by updated date
      repos.value = data.sort(
        (a: Repo, b: Repo) => new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime(),
      )
    }
  } catch {
    repos.value = []
  }
})
</script>
