<script setup lang="ts">
import ScrollTransition from '../Animation/ScrollTransition.vue'

defineProps<{
  title: string
  icon?: string
}>()

defineOptions({
  name: 'ExperienceBox',
})
</script>

<template>
  <ScrollTransition transition="horizontalToRight" moreDelay>
    <div
      class="bg-white/80 dark:bg-neutral-800/50 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-neutral-200 dark:border-neutral-700 hover:border-primary-500/50 transition-all duration-300"
    >
      <div class="flex items-center gap-3 mb-6">
        <h2 class="text-2xl font-semibold text-primary-600 dark:text-primary-400">{{ title }}</h2>
        <div v-if="icon" class="text-secondary-600 dark:text-secondary-400">
          <i :class="icon"></i>
        </div>
      </div>
      <div class="space-y-4">
        <slot></slot>
      </div>
    </div>
  </ScrollTransition>
</template>
