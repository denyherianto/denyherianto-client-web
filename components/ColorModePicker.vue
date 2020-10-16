<template>
  <div>
    <component :is="`icon-${currentMode}`" @click="toggleMode" />
  </div>
</template>

<script>
import IconLight from '@/assets/icons/light.svg?inline'
import IconDark from '@/assets/icons/dark.svg?inline'

export default {
  components: {
    IconLight,
    IconDark,
  },
  computed: {
    currentMode() {
      return this.$colorMode.preference === 'system'
        ? 'light'
        : this.$colorMode.preference
    },
  },
  methods: {
    toggleMode() {
      this.$colorMode.preference =
        this.currentMode === 'dark' ? 'light' : 'dark'
    },
  },
}
</script>
