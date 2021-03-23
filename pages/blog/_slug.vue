<template>
  <section id="blog" class="container mx-auto px-4 sm:px-16">
    <div class="my-40">
      <h1 class="text-gray-900 font-bold font-heading text-7xl leading-24">
        {{ page.title }}
      </h1>
      <span class="text-blue-500">______</span>
    </div>
    <article class="prose lg:prose-xl mx-auto">
      Tags: {{ page.tags }}
      <nuxt-content :document="page" />
    </article>
  </section>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const page = await $content('blog', params.slug).fetch()

    return {
      page,
    }
  },
}
</script>

<style scoped>
.leading-24 {
  line-height: 6rem;
}
</style>
