<template>
  <section id="about" class="container mx-auto mt-64 px-4 sm:px-16">
    <h1 class="text-gray-900 font-bold text-3xl">About</h1>
    <span class="text-blue-500">______</span>

    <nuxt-content :document="welcome" class="about-welcome prose mt-16" />

    <ul class="rounded-3xl mt-20">
      <li v-for="(c, idx) in filteredContent" :key="c.slug">
        <article>
          <div
            class="grid md:grid-cols-8 xl:grid-cols-9 items-start relative p-3 sm:p-5 xl:p-6 overflow-hidden"
          >
            <h3
              class="font-semibold text-gray-900 md:col-start-3 md:col-span-6 xl:col-start-3 xl:col-span-7 mb-1 ml-9 md:ml-0"
            >
              {{ c.title }}
            </h3>
            <time
              :datetime="formatDate(c.time)"
              class="md:col-start-1 md:col-span-2 row-start-1 md:row-end-3 flex items-center font-medium mb-1 md:mb-0"
            >
              <svg
                v-if="idx == 0"
                viewBox="0 0 12 12"
                class="w-3 h-3 mr-6 overflow-visible text-green-400"
              >
                <circle cx="6" cy="6" r="6" fill="currentColor"></circle>
                <circle
                  cx="6"
                  cy="6"
                  r="11"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                ></circle>
                <path
                  v-if="filteredContent.length - 1"
                  d="M 6 18 V 500"
                  fill="none"
                  stroke-width="2"
                  stroke="currentColor"
                  class="text-gray-200"
                ></path>
              </svg>

              <svg
                v-else-if="idx == filteredContent.length - 1"
                viewBox="0 0 12 12"
                class="w-3 h-3 mr-6 overflow-visible text-gray-300"
              >
                <circle cx="6" cy="6" r="6" fill="currentColor"></circle>
                <path
                  d="M 6 -6 V -30"
                  fill="none"
                  stroke-width="2"
                  stroke="currentColor"
                  class="text-gray-200"
                ></path>
              </svg>

              <svg
                v-else
                viewBox="0 0 12 12"
                class="w-3 h-3 mr-6 overflow-visible text-gray-300"
              >
                <circle cx="6" cy="6" r="6" fill="currentColor"></circle>
                <path
                  d="M 6 -6 V -30"
                  fill="none"
                  stroke-width="2"
                  stroke="currentColor"
                  class="text-gray-200"
                ></path>
                <path
                  d="M 6 18 V 500"
                  fill="none"
                  stroke-width="2"
                  stroke="currentColor"
                  class="text-gray-200"
                ></path></svg
              >{{ c.from }} <span v-if="c.to" class="px-1">―</span>
              {{ c.to }}</time
            >
            <div
              class="md:col-start-3 md:col-span-6 xl:col-span-7 ml-9 md:ml-0"
            >
              <div class="flex flex-wrap mb-2 mt-2">
                <icon-location
                  class="w-6 h-6 p-1 bg-gradient-to-br from-indigo-400 to-indigo-700 rounded-md text-indigo-50"
                />
                <span class="px-2 text-sm text-gray-500 flex self-center">{{
                  c.location
                }}</span>
              </div>
              <div v-if="c.company" class="flex flex-wrap mb-4">
                <icon-briefcase
                  class="w-6 h-6 p-1 bg-gradient-to-br from-blue-400 to-blue-700 rounded-md text-blue-50"
                />
                <span class="px-2 text-sm text-gray-500 flex self-center">{{
                  c.company
                }}</span>
              </div>
              <div v-if="c.university" class="flex flex-wrap mb-4">
                <icon-academic
                  class="w-6 h-6 p-1 bg-gradient-to-br from-green-400 to-green-700 rounded-md text-green-50"
                />
                <span class="px-2 text-sm text-gray-500 flex self-center">{{
                  c.university
                }}</span>
              </div>
              <nuxt-content :document="c" class="prose" />
            </div>
          </div>
        </article>
      </li>
    </ul>

    <button
      v-if="detail == 0"
      class="bg-blue-500 px-4 py-2 rounded-full text-white text-sm mx-auto block mt-16"
      type="button"
      @click="detail = 1"
    >
      I can show you more positions!
    </button>
    <button
      v-if="detail == 1"
      class="bg-blue-500 px-4 py-2 rounded-full text-white text-sm mx-auto block mt-16"
      type="button"
      @click="detail = 2"
    >
      Down for even more details?!
    </button>
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
  data: () => ({
    detail: 0,
  }),
  computed: {
    filteredContent() {
      if (!this.detail) {
        return this.content.filter((c) => c.show !== false)
      } else {
        // (this.detail === 1)
        return this.content
      }
    },
  },
  methods: {
    formatDate(date) {
      console.log(date)
      return this.$moment(date, 'MMM YYYY').format('YYYY-MM')
    },
  },
}
</script>
