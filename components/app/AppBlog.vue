<template>
  <section id="blog" class="container mx-auto my-16 px-4 sm:px-16">
    <h1 class="text-gray-900 font-bold text-3xl">Blog</h1>
    <span class="text-blue-500">______</span>
    <ul class="mt-16">
      <li v-for="c in content" :key="c.slug" class="capitalize mb-16">
        {{ c.title }} <span class="text-gray-900">&rarr;</span>
      </li>
    </ul>
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
