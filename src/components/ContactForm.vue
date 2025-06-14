<template>
  <div class="max-w-4xl mx-auto py-20">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
      <!-- Contact Information -->
      <div class="space-y-8">
        <div>
          <h3 class="text-2xl font-bold heading-font text-neutral-800 dark:text-neutral-200 mb-4">
            Let's Connect
          </h3>
          <p class="text-neutral-600 dark:text-neutral-400 body-font">
            Feel free to reach out for collaborations or just a friendly hello
          </p>
        </div>

        <div class="space-y-4">
          <div class="flex items-center space-x-4">
            <div class="bg-sky-100 dark:bg-sky-900/50 p-3 rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6 text-sky-600 dark:text-sky-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </div>
            <div>
              <p class="text-sm text-neutral-500 dark:text-neutral-400 code-font">Email</p>
              <a
                href="mailto:kagtabss@gmail.com"
                class="text-neutral-800 dark:text-neutral-200 hover:text-sky-600 dark:hover:text-sky-400 body-font"
                >kagtabss@gmail.com</a
              >
            </div>
          </div>

          <div class="flex items-center space-x-4">
            <div class="bg-sky-100 dark:bg-sky-900/50 p-3 rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6 text-sky-600 dark:text-sky-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </div>
            <div>
              <p class="text-sm text-neutral-500 dark:text-neutral-400 code-font">Location</p>
              <p class="text-neutral-800 dark:text-neutral-200 body-font">
                Biñan City, Philippines
              </p>
            </div>
          </div>
        </div>

        <!-- Social Links -->
        <div class="pt-6">
          <h4
            class="text-lg font-semibold heading-font text-neutral-800 dark:text-neutral-200 mb-4"
          >
            Follow Me
          </h4>
          <div class="flex space-x-4">
            <a
              href="https://www.linkedin.com/in/khaesey-angel-tablante-8b1b1b1b1/"
              target="_blank"
              class="p-3 rounded-full hover:bg-sky-200 dark:hover:bg-sky-900/50 transition-colors"
            >
              <img src="../assets/icons/Linkedn-Logo.png" alt="LinkedIn" class="object-contain" />
            </a>
            <a
              href="https://github.com/khaesey"
              target="_blank"
              class="p-3 rounded-full hover:bg-sky-200 dark:hover:bg-sky-900/50 transition-colors"
            >
              <img src="../assets/icons/Github-Logo.png" alt="GitHub" class="object-contain" />
            </a>
          </div>
        </div>
      </div>

      <!-- Contact Form -->
      <div class="bg-white dark:bg-neutral-800 rounded-xl shadow-lg p-6">
        <form @submit.prevent="handleSubmit" class="space-y-6">
          <div
            v-if="error"
            class="bg-red-100 dark:bg-red-900/50 text-red-700 dark:text-red-300 p-4 rounded-lg"
          >
            {{ error }}
          </div>
          <div
            v-if="success"
            class="bg-green-100 dark:bg-green-900/50 text-green-700 dark:text-green-300 p-4 rounded-lg"
          >
            Message sent successfully!
          </div>
          <div>
            <label
              for="name"
              class="block text-sm font-medium text-neutral-700 dark:text-neutral-300 code-font mb-2"
              >Name</label
            >
            <input
              type="text"
              id="name"
              v-model="form.name"
              class="w-full px-4 py-2 rounded-lg border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100 focus:ring-2 focus:ring-sky-500 focus:border-transparent body-font"
              placeholder="Your name"
              required
            />
          </div>
          <div>
            <label
              for="email"
              class="block text-sm font-medium text-neutral-700 dark:text-neutral-300 code-font mb-2"
              >Email</label
            >
            <input
              type="email"
              id="email"
              v-model="form.email"
              class="w-full px-4 py-2 rounded-lg border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100 focus:ring-2 focus:ring-sky-500 focus:border-transparent body-font"
              placeholder="your.email@example.com"
              required
            />
          </div>
          <div>
            <label
              for="message"
              class="block text-sm font-medium text-neutral-700 dark:text-neutral-300 code-font mb-2"
              >Message</label
            >
            <textarea
              id="message"
              v-model="form.message"
              rows="4"
              class="w-full px-4 py-2 rounded-lg border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100 focus:ring-2 focus:ring-sky-500 focus:border-transparent body-font"
              placeholder="Your message"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            :disabled="isLoading"
            class="w-full bg-sky-600 text-white py-2 px-4 rounded-lg hover:bg-sky-700 transition-colors body-font disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {{ isLoading ? 'Sending...' : 'Send Message' }}
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import emailjs from '@emailjs/browser'

const form = ref({
  name: '',
  email: '',
  message: '',
})

const isLoading = ref(false)
const error = ref('')
const success = ref(false)

const handleSubmit = async () => {
  try {
    isLoading.value = true
    error.value = ''
    success.value = false

    await emailjs.send(
      'service_676idjs',
      'template_apqg23u',
      {
        to_email: 'kagtabss@gmail.com', // Your email where you want to receive messages
        from_name: form.value.name,
        from_email: form.value.email,
        message: form.value.message,
        to_name: 'Khaesey',
        reply_to: form.value.email,
      },
      'c-4_gz6Nt8VC1DApb',
    )

    success.value = true
    // Reset form
    form.value = {
      name: '',
      email: '',
      message: '',
    }
  } catch (err) {
    error.value = err instanceof Error ? err.message : 'Failed to send message'
  } finally {
    isLoading.value = false
  }
}
</script>
