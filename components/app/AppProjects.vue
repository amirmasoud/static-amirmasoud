<template>
  <section id="projects" class="container mx-auto mt-64 px-4 sm:px-16">
    <h1 class="text-gray-900 font-bold text-3xl">Projects</h1>
    <span class="text-blue-500">______</span>
    <nuxt-content class="prose mt-12" :document="welcome"></nuxt-content>
    <ul class="mt-16">
      <li v-for="c in recentProjects" :key="c.slug" class="mb-16">
        <h2 class="font-bold">{{ c.title }}</h2>
        <h3 v-if="c.subtitle" class="text-sm text-gray-600 mb-2">
          {{ c.subtitle }}
        </h3>
        <span class="block text-gray-600 font-bold text-xs"
          >{{ c.from }}<template v-if="c.to"> - {{ c.to }}</template></span
        >
        <nuxt-content class="my-4 text-gray-600" :document="c" />
        <a
          v-if="c.github"
          :href="c.github"
          target="_blank"
          class="text-xs font-bold text-warmGray-500"
          >GitHub ↗</a
        >
      </li>
      <li v-for="c in olderProjects" :key="c.slug" class="mb-16">
        <nuxt-content class="my-4 text-gray-600" :document="c" />
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
    welcome: {
      type: Object,
      default: () => {},
    },
  },
  computed: {
    recentProjects() {
      return this.content.filter((c) => c.from !== 1992)
    },
    olderProjects() {
      return this.content.filter((c) => c.from === 1992)
    },
  },
}
</script>
