<template>
  <component
    :is="as"
    ref="el"
    :class="[
      'transition-all duration-700',
      moreDelay ? 'delay-700' : 'delay-300',
      trueCount < 1 && translateEffect
        ? isVisible
          ? transtionPosition[transition].from
          : transtionPosition[transition].to
        : '',
      trueCount < 1 && opacityEffect ? (isVisible ? 'opacity-100' : 'opacity-0') : '',
    ]"
  >
    <slot />
  </component>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

type ObjectKeyPair = {
  [key: string]: {
    [key: string]: string
  }
}

const el = ref<HTMLElement | null>(null)
const isVisible = ref(false)
const trueCount = ref(0)

onMounted(() => {
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting && trueCount.value < 1) {
        isVisible.value = true
        trueCount.value++
      }
    },
    {
      threshold: 0.1,
    },
  )

  if (el.value) {
    observer.observe(el.value)
  }

  onUnmounted(() => {
    if (el.value) {
      observer.unobserve(el.value)
    }
  })
})

const transtionPosition: ObjectKeyPair = {
  vertical: { from: 'translate-y-0', to: 'translate-y-12' },
  horizontalToRight: { from: '-translate-x-0', to: '-translate-x-12' },
  horizontalToLeft: { from: 'translate-x-0', to: 'translate-x-12' },
}

type TransitionTypes = {
  translateEffect?: boolean
  opacityEffect?: boolean
  moreDelay?: boolean
  transition?: 'vertical' | 'horizontalToRight' | 'horizontalToLeft'
  as?: string
}

withDefaults(defineProps<TransitionTypes>(), {
  translateEffect: true,
  opacityEffect: true,
  moreDelay: false,
  transition: 'vertical',
  as: 'div',
})
</script>
