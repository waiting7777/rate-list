<template>
  <div class="header sticky w-full bg-white top-0 border-b border-gray-300 dark:bg-gray-dark z-50">
    <div class="h-12 flex items-center p-6 text-black dark:text-white">
      <div class="w-full mx-auto">
        <div class="flex items-center">
          <nuxt-link to="/">
            <div class="flex items-center">
              <Icon icon="Logo" class="fill-current w-6" />
              <div class="ml-2 font-bold text-lg">RATES LIST</div>
            </div>
          </nuxt-link>
          <div class="flex flex-grow justify-end font-bold">
            <div class="mr-8">
              <Icon class="w-6 h-6" :icon="error ? 'nowifi' : 'wifi'" />
            </div>
            <div id="toggle" @click="toggle">
              <Icon :icon="mode" class="fill-current w-6 cursor-pointer" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  computed: {
    mode() {
      return this.$store.state.settings.mode
    },
    error() {
      return this.$store.state.settings.error
    }
  },
  methods: {
    toggle() {
      this.toggleMode()
    },
    ...mapMutations('settings', ['toggleMode'])
  }
}
</script>

<style lang="scss" scoped>
</style>
