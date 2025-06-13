<template>
  <div class="animated-box" :class="customClass" ref="boxRef">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

interface Props {
  customClass?: string
}

withDefaults(defineProps<Props>(), {
  customClass: '',
})

const boxRef = ref<HTMLElement | null>(null)

defineExpose({
  boxRef,
})

defineOptions({
  name: 'AnimatedBox',
})
</script>

<style scoped>
.animated-box {
  background-color: theme('colors.white');
  border-radius: theme('borderRadius.lg');
  box-shadow: theme('boxShadow.lg');
  padding: theme('spacing.6');
  transition-property: all;
  transition-duration: 20ms;
}

.dark .animated-box {
  background-color: theme('colors.gray.800');
}
</style>
