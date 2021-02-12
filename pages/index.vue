<template>
  <div class="bg-gray-50">
    <app-hello>Hello! My name is Amirmasood</app-hello>

    <app-blog />

    <app-about :content="about" />

    <app-projects />

    <app-books />

    <app-arts />

    <app-connect />
  </div>
</template>

<script>
export default {
  async asyncData({ $content }) {
    const about = await $content('about').fetch()

    return {
      about,
    }
  },
}
</script>
