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
    <div class="w-60 h-42 rounded-full overflow-hidden mb-4">
      <img
        src="/public/picture/avatar.png"
        alt="Profile Picture"
        class="w-full h-full object-cover"
      />
    </div>
    <h2 class="text-xl font-bold text-white">Khaesey Angel G. Tablante</h2>
    <p class="text-sky-300">Fullstack Developer</p>
  </div>
</template>
