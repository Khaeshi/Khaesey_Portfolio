<script setup lang="ts">
import ScrollTransition from './Animation/ScrollTransition.vue'

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
      class="bg-white/5 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-white/10 hover:border-white/20 transition-all duration-300"
    >
      <div class="flex items-center gap-3 mb-6">
        <h2 class="text-2xl font-semibold text-white">{{ title }}</h2>
        <div v-if="icon" class="text-sky-400">
          <i :class="icon"></i>
        </div>
      </div>
      <div class="space-y-4">
        <slot></slot>
      </div>
    </div>
  </ScrollTransition>
</template>
