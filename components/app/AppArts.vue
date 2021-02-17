<template>
  <section id="arts">
    <div class="container mx-auto mt-64 mb-8 px-4 sm:px-16">
      <h1 class="text-gray-900 font-bold text-3xl">Arts</h1>
      <span class="text-blue-500">______</span>
      <nuxt-content class="my-16" :document="welcome" />
    </div>
    <div class="magic-grid mx-auto mb-64 mt-16">
      <div
        v-for="(img, idx) in Array(1)"
        :key="idx"
        class="flex justify-center items-center w-64"
      >
        <img
          class="rounded-md shadow-md"
          :src="`https://source.unsplash.com/random/${idx + 1}`"
        />
      </div>
    </div>
  </section>
</template>

<script>
import MagicGrid from 'magic-grid'

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
  data() {
    return {
      magicGrid: null,
      loadingGrid: true,
    }
  },
  mounted() {
    const magicGrid = new MagicGrid({
      container: '.magic-grid',
      animate: true,
      gutter: 20,
      items: 1,
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
