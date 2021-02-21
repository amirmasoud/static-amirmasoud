<template>
  <section id="blog" class="container mx-auto my-16 px-4 sm:px-16">
    <h1 class="text-gray-900 font-bold text-3xl">Blog</h1>
    <span class="text-blue-500">______</span>
    <ul class="mt-16">
      <li v-for="c in content" :key="c.slug" class="capitalize mb-4 flex">
        <div
          :class="
            `flex-shrink w-1/12 text-center self-center p-1 rounded-md text-xs mr-4 ` +
            tagColor(c.tags)
          "
        >
          {{ c.tags }}
        </div>
        <div class="flex-grow">
          {{ c.title }} &rarr;
          <time class="text-gray-400 block">
            {{ $moment(c.createdAt, 'YYYY-MM-DDTHH:mm:ssZ').fromNow() }}
          </time>
        </div>
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
  methods: {
    tagColor(tag) {
      if (tag === 'DevOps Tips') {
        return 'bg-gradient-to-br from-pink-400 to-pink-700 text-pink-50'
      } else if (tag === 'Backend Tips') {
        return 'bg-gradient-to-br from-orange-400 to-orange-700 text-orange-50'
      } else if (tag === 'Frontend Tips') {
        return 'bg-gradient-to-br from-purple-400 to-purple-700 text-purple-50'
      }
    },
  },
}
</script>
