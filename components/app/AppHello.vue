<template>
  <section
    id="hello"
    class="container mx-auto px-4 sm:px-16 -mt-20 flex min-h-screen justify-items-center justify-center items-center"
  >
    <div class="space-y-14">
      <div class="flex justify-center">
        <icon-hand-shake />
      </div>
      <h1 class="text-6xl w-full font-heading hello-gradient">
        <nuxt-content :document="content" />
      </h1>
    </div>
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

<style scoped>
.hello-gradient p {
  @apply bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-500;
}
</style>
