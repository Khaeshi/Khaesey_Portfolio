<script setup lang="ts">
import Avatar from '@/components/ui/Avatar.vue'
const props = defineProps<{ open: boolean }>()
const emit = defineEmits<{
  (e: 'close'): void
  (e: 'navigate', sectionId: string): void
}>()

const closeMenu = () => emit('close')
</script>

<template>
  <!-- Pop-up panel above the bottom bar with named CSS transitions -->
  <Transition name="overlay-fade">
    <div v-if="props.open" class="fixed inset-0 z-[60] md:hidden" @click="closeMenu">
      <div class="absolute inset-x-0 bottom-14 flex justify-center" @click.stop>
        <Transition name="panel-pop">
          <div
            v-if="props.open"
            class="mx-4 w-full max-w-sm rounded-lg shadow-lg bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700"
          >
            <div
              class="flex items-center justify-between px-4 py-2 border-b border-neutral-200 dark:border-neutral-700"
            >
              <h3 class="text-sm font-semibold text-neutral-800 dark:text-neutral-200">Profile</h3>
              <button @click="closeMenu" class="text-xl leading-none px-2" aria-label="Close">
                &times;
              </button>
            </div>
            <div class="p-3 grid grid-cols-2 gap-2 mx-2 my-2">
              <div class="flex justify-center items-center">
                <Avatar class="w-20 h-20" />
              </div>
              <div class="flex flex-col gap-2 justify-center">
                <h2 class="text-lg sm:text-xl pt-2 sm:pt-4 font-bold text-primary-400">
                  Khaesey Angel Tablante
                </h2>
                <p class="text-sm sm:text-base text-secondary-400">Fullstack Developer</p>
              </div>
            </div>
          </div>
        </Transition>
      </div>
    </div>
  </Transition>
</template>
