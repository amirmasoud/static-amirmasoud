<template>
  <div class="bg-gray-50">
    <app-hello>Hello! My name is Amirmasood</app-hello>

    <app-blog :content="blog" />

    <app-about :content="about" />

    <app-projects :content="projects" />

    <app-books :content="books" />

    <app-arts :content="arts" />

    <app-connect :content="connects" />
  </div>
</template>

<script>
export default {
  async asyncData({ $content }) {
    const about = await $content('about').fetch()
    const projects = await $content('projects').fetch()
    const blog = await $content('blog').fetch()
    const books = await $content('books').fetch()
    const arts = await $content('arts').fetch()
    const connects = await $content('connects').fetch()

    return {
      about,
      projects,
      blog,
      books,
      arts,
      connects,
    }
  },
}
</script>
