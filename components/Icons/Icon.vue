<template>
  <component :is="icon" />
</template>

<script>
export default {
  props: {
    icon: {
      type: String,
      required: true,
      default: ''
    }
  }
}
</script>