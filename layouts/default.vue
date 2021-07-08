<template>
  <div :class="[mode]">
    <Header />
    <v-app>
      <div class="leading-relaxed tracking-wide bg-white text-black dark:bg-gray-dark dark:text-white min-h-screen">
        <nuxt />
      </div>
    </v-app>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import '@/assets/style.scss'
export default {
  components: {
    Header
  },
  computed: {
    mode () {
      return this.$store.state.settings.mode
    }
  }
}
</script>

<style scss>
html {
  font-family: Helvetica, Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}
</style>

