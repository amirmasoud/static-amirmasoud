<template>
  <section id="arts">
    <div class="container mx-auto mt-64 mb-8 px-4 sm:px-16">
      <h1 class="text-gray-900 font-bold text-3xl">Arts</h1>
      <span class="text-blue-500">______</span>
      <nuxt-content class="my-16" :document="welcome" />
    </div>
    <div class="magic-grid mx-auto mb-64 mt-16">
      <div
        v-for="img in photos"
        :key="img.id"
        class="flex justify-center items-center w-64"
      >
        <a v-if="img" :href="img.links.html">
          <img class="rounded-md shadow-md" :src="img.urls.small" />
        </a>
      </div>
    </div>
  </section>
</template>

<script>
import MagicGrid from 'magic-grid'

export default {
  props: {
    welcome: {
      type: Object,
      default: () => {},
    },
  },
  async fetch() {
    this.photos = await fetch(
      'https://unsplash.com/napi/users/amirmasoud32/photos?per_page=20&order_by=latest&page=1'
    ).then((res) => res.json())
  },
  data() {
    return {
      magicGrid: null,
      loadingGrid: true,
      photos: [],
    }
  },
  mounted() {
    const magicGrid = new MagicGrid({
      container: '.magic-grid',
      animate: true,
      gutter: 20,
      items: 10,
      useMin: true,
      maxColumns: 6,
    })

    magicGrid.listen()

    Promise.all(
      Array.from(document.images)
        .filter((img) => !img.complete)
        .map(
          (img) =>
            new Promise((resolve) => {
              img.onload = img.onerror = resolve
            })
        )
    ).then(() => {
      magicGrid.positionItems()
      this.loadingGrid = false
    })
  },
}
</script>
