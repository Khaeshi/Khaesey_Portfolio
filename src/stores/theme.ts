import { ref, watch } from 'vue'

const isDark = ref(localStorage.getItem('theme') === 'dark')

// Watch for changes and update localStorage and document class
watch(isDark, (newValue) => {
  localStorage.setItem('theme', newValue ? 'dark' : 'light')
  document.documentElement.classList.toggle('dark', newValue)
})

document.documentElement.classList.toggle('dark', isDark.value)

export function useTheme() {
  const toggleTheme = () => {
    isDark.value = !isDark.value
  }

  return {
    isDark,
    toggleTheme,
  }
}
