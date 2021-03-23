<template>
  <nav
    class="container px-8 sm:px-0 mx-auto flex justify-evenly flex-col sm:flex-row py-8 text-gray-700 uppercase font-bold text-sm"
  >
    <nuxt-link class="" to="/#">Amirmasoud Sheydaei</nuxt-link>
    <span class="hidden sm:inline text-gray-200">|</span>
    <nuxt-link v-smooth-scroll class="" to="/#blog">Blog</nuxt-link>
    <nuxt-link v-smooth-scroll class="" to="/#about">About</nuxt-link>
    <nuxt-link v-smooth-scroll class="" to="/#projects">Projects</nuxt-link>
    <nuxt-link v-smooth-scroll class="" to="/#books">Books</nuxt-link>
    <nuxt-link v-smooth-scroll class="" to="/#arts">Arts</nuxt-link>
    <nuxt-link v-smooth-scroll class="" to="/#connect">Connect</nuxt-link>
  </nav>
</template>
