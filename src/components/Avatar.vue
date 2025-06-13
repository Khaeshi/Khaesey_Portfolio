<script setup lang="ts">
defineProps<{
  isCollapsed?: boolean
}>()

defineOptions({
  name: 'ProfileAvatar',
})
</script>

<template>
  <div class="flex flex-col items-center py-20">
    <div class="relative">
      <!-- Outer decorative border -->
      <div
        class="absolute -inset-2 rounded-full bg-gradient-to-r from-primary-500 to-accent-500 opacity-25 blur-sm"
      ></div>
      <!-- Inner border -->
      <div class="absolute rounded-full bg-neutral-900"></div>
      <!-- Avatar container -->
      <div class="relative w-60 h-42 rounded-full overflow-hidden">
        <img
          src="/public/picture/avatar.png"
          alt="Profile Picture"
          class="w-full h-full object-cover"
        />
      </div>
    </div>
    <h2 class="text-xl pt-4 font-bold text-primary-400">Khaesey Angel G. Tablante</h2>
    <p class="text-secondary-400">Fullstack Developer</p>
  </div>
</template>
