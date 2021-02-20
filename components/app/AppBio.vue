<template>
  <section id="bio" class="container mx-auto px-4 sm:px-16 prose mt-16 pb-64">
    <nuxt-content :document="content" />
  </section>
</template>

<script>
export default {
  props: {
    content: {
      type: Object,
      default: () => {},
    },
  },
}
</script>
