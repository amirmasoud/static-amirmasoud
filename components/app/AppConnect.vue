<template>
  <section id="connect" class="container mx-auto py-16 px-4 sm:px-16">
    <h1 class="text-gray-900 font-bold text-3xl">Connect</h1>
    <span class="text-blue-500">______</span>

    <div class="flex justify-center space-x-12 mt-16">
      <a
        v-for="c in content"
        :key="c.slug"
        href="https://github.com/amirmasoud"
      >
        <component :is="`icon-` + c.icon" />
      </a>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    content: {
      type: Array,
      default: () => [],
    },
  },
}
</script>
