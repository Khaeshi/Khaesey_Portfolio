<template>
  <div class="max-w-4xl mx-auto py-20">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
      <!-- Contact Information -->
      <div class="space-y-8">
        <div>
          <h3 class="text-2xl font-bold text-gray-800 mb-4">Let's Connect</h3>
          <p class="text-gray-600">
            Feel free to reach out for collaborations or just a friendly hello
          </p>
        </div>

        <div class="space-y-4">
          <div class="flex items-center space-x-4">
            <div class="bg-sky-100 p-3 rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6 text-sky-600"
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
              <p class="text-sm text-gray-500">Email</p>
              <a href="mailto:kagtabss@gmail.com" class="text-gray-800 hover:text-sky-600"
                >kagtabss@gmail.com</a
              >
            </div>
          </div>

          <div class="flex items-center space-x-4">
            <div class="bg-sky-100 p-3 rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6 text-sky-600"
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
              <p class="text-sm text-gray-500">Location</p>
              <p class="text-gray-800">Biñan City, Philippines</p>
            </div>
          </div>
        </div>

        <!-- Social Links -->
        <div class="pt-6">
          <h4 class="text-lg font-semibold text-gray-800 mb-4">Follow Me</h4>
          <div class="flex space-x-4">
            <a
              href="https://www.linkedin.com/in/khaesey-angel-tablante-8b1b1b1b1/"
              target="_blank"
              class="p-3 rounded-full hover:bg-sky-200 transition-colors"
            >
              <img src="../assets/icons/Linkedn-Logo.png" alt="LinkedIn" class="object-contain" />
            </a>
            <a
              href="https://github.com/khaesey"
              target="_blank"
              class="p-3 rounded-full hover:bg-sky-200 transition-colors"
            >
              <img src="../assets/icons/Github-Logo.png" alt="GitHub" class="object-contain" />
            </a>
          </div>
        </div>
      </div>

      <!-- Contact Form -->
      <form @submit.prevent="handleSubmit" class="space-y-6">
        <div>
          <label for="name" class="block text-sm font-medium text-gray-700">Name</label>
          <input
            type="text"
            id="name"
            v-model="form.name"
            class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-500 focus:ring-sky-500"
            required
          />
        </div>

        <div>
          <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            id="email"
            v-model="form.email"
            class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-500 focus:ring-sky-500"
            required
          />
        </div>

        <div>
          <label for="message" class="block text-sm font-medium text-gray-700">Message</label>
          <textarea
            id="message"
            v-model="form.message"
            rows="4"
            class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-500 focus:ring-sky-500"
            required
          ></textarea>
        </div>

        <button
          type="submit"
          class="w-full bg-sky-600 text-white py-2 px-4 rounded-md hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 transition-colors"
        >
          Send Message
        </button>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'

const form = reactive({
  name: '',
  email: '',
  message: '',
})

const handleSubmit = () => {
  // Handle form submission here
  console.log('Form submitted:', form)

  // Reset form
  form.name = ''
  form.email = ''
  form.message = ''
}
</script>
