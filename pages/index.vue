<template>
  <div class="bg-gray-50">
    <app-hello :content="hello" />

    <app-bio :content="bio" />

    <app-blog :content="blog" />

    <app-about :content="about" :welcome="aboutWelcome" />

    <app-projects :content="projects" :welcome="ProjectsWelcome" />

    <app-books :content="books" />

    <app-arts :welcome="artsWelcome" />

    <app-connect :content="connects" />
  </div>
</template>

<script>
export default {
  async asyncData({ $content }) {
    const hello = await $content('hello-welcome').fetch()
    const about = await $content('about').sortBy('slug', 'desc').fetch()
    const projects = await $content('projects').sortBy('to', 'desc').fetch()
    const blog = await $content('blog').sortBy('createdAt', 'desc').fetch()
    const books = await $content('books').fetch()
    const connects = await $content('connects').fetch()
    const bio = await $content('bio').fetch()

    const aboutWelcome = await $content('about-welcome').fetch()
    const artsWelcome = await $content('arts-welcome').fetch()
    const ProjectsWelcome = await $content('projects-welcome').fetch()

    return {
      about,
      projects,
      blog,
      books,
      connects,
      hello,
      bio,
      aboutWelcome,
      artsWelcome,
      ProjectsWelcome,
    }
  },
}
</script>
