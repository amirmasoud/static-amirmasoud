<template>
  <div class="bg-gray-50">
    <app-hello>Hello! My name is Amirmasood</app-hello>

    <app-blog :content="blog" />

    <app-about :content="about" />

    <app-projects :content="projects" />

    <app-books />

    <app-arts />

    <app-connect />
  </div>
</template>

<script>
export default {
  async asyncData({ $content }) {
    const about = await $content('about').fetch()
    const projects = await $content('projects').fetch()
    const blog = await $content('blog').fetch()

    return {
      about,
      projects,
      blog,
    }
  },
}
</script>
