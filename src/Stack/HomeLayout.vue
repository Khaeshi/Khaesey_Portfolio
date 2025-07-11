<template>
  <div
    class="intro-background min-h-screen w-screen overflow-x-hidden scrollbar-hide bg-neutral-50 dark:bg-neutral-950"
  >
    <!-- Main Content -->
    <main
      :style="{
        marginLeft: isDesktop ? (isCollapsed ? '100px' : '320px') : '0',
        width: isDesktop ? (isCollapsed ? 'calc(100% - 100px)' : 'calc(100% - 320px)') : '100%',
      }"
      class="transition-all duration-300 bg-white dark:bg-neutral-900 min-h-screen"
    >
      <section id="about" class="about min-h-screen flex items-center justify-center px-4 sm:px-8">
        <div class="animate-slidein max-w-4xl w-full text-center">
          <h2
            class="text-2xl sm:text-3xl md:text-4xl xl:text-5xl 2xl:text-6xl font-extrabold heading-font text-primary-600 dark:text-primary-400 mb-4"
          >
            Khaesey Angel Tablante
          </h2>
          <p
            class="text-sm sm:text-base md:text-lg xl:text-xl 2xl:text-2xl body-font text-neutral-600 dark:text-neutral-300 mb-8"
          >
            He's a passionate
            <span class="font-semibold text-secondary-600 dark:text-accent-400"
              >Fullstack Developer</span
            >
            with a keen eye for creating beautiful and functional web applications. With expertise
            in modern web technologies, he strive to build solutions that not only meet technical
            requirements but also provide exceptional user experiences.
          </p>
          <div class="flex justify-center mt-8">
            <button
              @click="showResumeModal = true"
              class="bg-accent-500 text-white text-sm md:text-xl lg:text-2xl py-3 px-5 rounded-lg hover:bg-accent-700 transition-colors body-font disabled:opacity-50 disabled:cursor-not-allowed"
            >
              See Resume
            </button>
          </div>
        </div>
      </section>
      <section id="experience" class="min-h-screen py-12 sm:py-20 px-4 sm:px-8">
        <div class="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-6">
          <ExperienceBox
            title="Experience"
            class="md:text-lg lg:text-xl"
            icon="fas fa-briefcase md:text-lg lg:text-xl"
          >
            <Experience />
          </ExperienceBox>
          <ExperienceBox
            title="Education"
            class="md:text-lg lg:text-xl"
            icon="fas fa-graduation-cap md:text-lg lg:text-xl"
          >
            <EducationList />
          </ExperienceBox>
        </div>
      </section>
      <section id="projects" class="min-h-screen py-12 sm:py-16 px-6 sm:px-8">
        <h1
          class="text-2xl sm:text-3xl font-bold heading-font mb-6 sm:mb-8 text-primary-600 dark:text-primary-400"
        >
          Projects & Skills
        </h1>

        <!-- Tab Navigation -->
        <div class="flex space-x-4 mb-8">
          <button
            @click="activeTab = 'projects'"
            :class="[
              'px-4 py-2 rounded-lg font-medium transition-colors',
              activeTab === 'projects'
                ? 'bg-primary-600 text-white'
                : 'bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 hover:bg-neutral-200 dark:hover:bg-neutral-700',
            ]"
          >
            Projects
          </button>
          <button
            @click="activeTab = 'skills'"
            :class="[
              'px-4 py-2 rounded-lg font-medium transition-colors',
              activeTab === 'skills'
                ? 'bg-primary-600 text-white'
                : 'bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 hover:bg-neutral-200 dark:hover:bg-neutral-700',
            ]"
          >
            Skills
          </button>
          <button
            @click="activeTab = 'certificates'"
            :class="[
              'px-4 py-2 rounded-lg font-medium transition-colors',
              activeTab === 'certificates'
                ? 'bg-primary-600 text-white'
                : 'bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 hover:bg-neutral-200 dark:hover:bg-neutral-700',
            ]"
          >
            Certificates
          </button>
        </div>

        <!-- Projects Tab Content -->
        <div
          v-if="activeTab === 'projects'"
          class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4 sm:gap-8"
        >
          <ScrollTransition
            v-for="(repo, index) in repos"
            :key="repo.id"
            :transition="index % 2 === 0 ? 'horizontalToRight' : 'horizontalToLeft'"
            :moreDelay="index % 3 === 0"
          >
            <AnimatedBox :customClass="'hover:scale-105 transition-transform duration-300'">
              <img
                :src="repo.image || 'projects/Resume.png'"
                alt="Project image"
                class="w-full h-32 object-cover mb-4 rounded-lg"
              />
              <div>
                <h3
                  class="text-xl font-bold heading-font text-neutral-800 dark:text-neutral-100 mb-2 break-words"
                >
                  {{ repo.name }}
                </h3>
                <div class="flex flex-wrap gap-2 mb-2">
                  <span
                    v-for="topic in repo.topics"
                    :key="topic"
                    class="px-2 py-1 bg-primary-100 dark:bg-primary-900/50 text-primary-600 dark:text-primary-300 rounded-full text-xs code-font"
                  >
                    {{ topic }}
                  </span>
                </div>
                <p class="text-neutral-600 dark:text-neutral-400 mb-4 line-clamp-3 body-font">
                  {{ repo.description }}
                </p>
                <div class="flex gap-4">
                  <a
                    :href="repo.html_url"
                    target="_blank"
                    class="text-secondary-600 dark:text-secondary-400 hover:text-secondary-500 dark:hover:text-secondary-300 font-medium body-font"
                    >Source Code →</a
                  >
                  <a
                    v-if="repo.homepage"
                    :href="repo.homepage"
                    target="_blank"
                    class="bg-accent-600 text-white px-3 py-1 rounded hover:bg-accent-500 font-medium body-font"
                    >View Demo</a
                  >
                </div>
              </div>
            </AnimatedBox>
          </ScrollTransition>
        </div>

        <!-- Skills Tab Content -->
        <div v-if="activeTab === 'skills'">
          <SkillsCarousel />
          <TechStack />
        </div>

        <!-- Certificates Tab Content -->
        <div v-if="activeTab === 'certificates'">
          <div class="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-6">
            <div
              class="bg-white dark:bg-neutral-800 rounded-lg p-4 shadow-lg border border-neutral-200 dark:border-neutral-700 flex flex-col items-center"
            >
              <img
                src="/certificates/Coursera-Meta-Frontend_Cert.png"
                alt="Certificate image"
                class="w-full h-auto max-w-xl mb-4 rounded-lg"
              />
              <h3 class="text-lg font-semibold text-primary-600 dark:text-primary-400">
                Certificate 1
              </h3>
            </div>
            <div
              class="bg-white dark:bg-neutral-800 rounded-lg p-4 shadow-lg border border-neutral-200 dark:border-neutral-700 flex flex-col items-center"
            >
              <img
                src="/certificates/Coursera-Meta-Frontend_Cert.png"
                alt="Certificate image"
                class="w-full h-auto max-w-xl mb-4 rounded-lg"
              />
              <h3 class="text-lg font-semibold text-primary-600 dark:text-primary-400">
                Certificate 2
              </h3>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" class="min-h-screen py-12 sm:py-16 px-4 sm:px-8">
        <h1
          class="text-2xl sm:text-3xl font-bold heading-font mb-6 sm:mb-8 text-primary-600 dark:text-primary-400"
        >
          Contact
        </h1>
        <ContactForm />
      </section>
    </main>
    <ResumeCV v-model="showResumeModal" />
  </div>
</template>

<script setup lang="ts">
import Experience from '../components/ExperienceList.vue'
import EducationList from '../components/EducationList.vue'
import SkillsCarousel from '../components/SkillsCarousel.vue'
import ContactForm from '../components/ContactForm.vue'
import ExperienceBox from '../components/Animation/ExperienceBox.vue'
import AnimatedBox from '../components/Animation/AnimatedBox.vue'
import ScrollTransition from '../components/Animation/ScrollTransition.vue'
import TechStack from '../components/TechStack.vue'
import ResumeCV from '../components/Modal/ResumeCV.vue'
import { ref, onMounted, onUnmounted, inject } from 'vue'
import type { Ref } from 'vue'

const showResumeModal = ref(false)

const isDesktop: Ref<boolean> = ref(window.innerWidth >= 768)
const handleResize = (): void => {
  isDesktop.value = window.innerWidth >= 768
}
onMounted(() => window.addEventListener('resize', handleResize))
onUnmounted(() => window.removeEventListener('resize', handleResize))

// Injected from NavSideBar.vue
const isCollapsed = inject<Ref<boolean>>('isCollapsed', ref(false))

// Tab state
const activeTab = ref('projects')

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
      const processedRepos = data.map((repo) => {
        // Assign specific local images based on repository name
        if (repo.name === 'LibraryManagementSystem') {
          repo.image = 'projects/LMS.png' // Path relative to public/
        } else if (repo.name === 'my-resume') {
          repo.image = 'projects/Resume.png' // Path relative to public/
        }
        // You can add more conditions for other projects here
        return repo
      })
      repos.value = processedRepos.sort(
        (a: Repo, b: Repo) => new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime(),
      )
    }
  } catch {
    repos.value = []
  }
})
</script>
