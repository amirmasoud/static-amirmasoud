<template>
  <section id="books" class="container mx-auto my-64 px-4 sm:px-16">
    <h1 class="text-gray-900 font-bold text-3xl">Books</h1>
    <span class="text-blue-500">______</span>
    <div>
      <button type="button" @click.prevent="language = 'en'">English</button>
      <button type="button" @click.prevent="language = 'fa'">فارسی</button>
    </div>
    <div class="my-16 flex space-x-8">
      <div v-for="c in filteredContent" :key="c.slug" class="">
        <img class="rounded-lg shadow-lg mb-4" :src="c.cover" />
        <div class="mb-8">
          <span
            class="px-2 py-1 rounded-md text-xs uppercase bg-gray-100 text-gray-400 border-gray-100 hover:bg-blue-100 hover:text-blue-400 hover:border-blue-100 shadow-xs border"
            >{{ c.tags }}</span
          >
        </div>
        <h2 class="font-bold text-base">{{ c.title }}</h2>
        <p class="text-gray-500 mt-4">
          {{ c.description }}
        </p>
      </div>
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
  data: () => ({
    language: 'en',
  }),
  computed: {
    filteredContent() {
      return this.content.filter((c) => c.language === this.language)
    },
  },
}
</script>
