<template>
  <div>
    <div class="flex flex-wrap">
      <div
        class="transition duration-500 ease-in-out w-1/5 p-4 h-screen transform hover:scale-95 bg-gradient-to-r from-blue-500 to-blue-600 flex flex-col text-center justify-center items-center"
      >
        <h1 class="w-full font-blog text-6xl text-blue-900">BLOG</h1>
        <p class="w-full pt-4 text-sm italic text-blue-900">
          Wants to read some badly read articles?
        </p>
      </div>
      <div
        class="transition duration-500 ease-in-out w-1/5 p-4 h-screen transform hover:scale-95 bg-gradient-to-r from-pink-500 to-pink-600 flex flex-col text-center justify-center items-center"
      >
        <h1 class="font-project text-6xl text-pink-900">PROJECTS</h1>
        <p class="w-full pt-4 text-sm italic text-pink-900">
          Wants to see some badly implemented projects?
        </p>
      </div>
      <div
        class="transition duration-500 ease-in-out w-1/5 p-4 h-screen transform hover:scale-95 bg-gradient-to-r from-green-500 to-green-600 flex flex-col text-center justify-center items-center"
      >
        <h1 class="font-about text-6xl text-green-900">ABOUT</h1>
        <p class="w-full pt-4 text-sm italic text-green-900">Who the f*?</p>
      </div>
      <div
        class="transition duration-500 ease-in-out w-1/5 p-4 h-screen transform hover:scale-95 bg-gradient-to-r from-indigo-500 to-indigo-600 flex flex-col text-center justify-center items-center"
      >
        <h1 class="font-photo text-6xl text-indigo-900">BOOKS</h1>
        <p class="w-full pt-4 text-sm italic text-indigo-900">
          Some badly read books by this guy
        </p>
      </div>
      <div
        class="transition duration-500 ease-in-out w-1/5 p-4 h-screen transform hover:scale-95 bg-gradient-to-r from-purple-500 to-purple-600 flex flex-col text-center justify-center items-center"
      >
        <h1 class="font-drawing text-6xl text-purple-900">ARTS</h1>
        <p class="w-full pt-4 text-sm italic text-purple-900">
          Some terribly drawn photos by a guy who thinks can be artist withing a
          day, yay! plus some extra some serious, genuine amature photos
        </p>
      </div>
    </div>
    <div class="container mx-auto relative h-screen">
      <span
        class="absolute h-32 w-32 bg-gradient-to-r from-blue-300 via-blue-400 to-blue-500 top-0 mt-4 -ml-16 rounded-full z-0 shadow-lg"
      ></span>
      <h1 class="absolute w-full pt-16 font-blog text-6xl text-blue-900 z-10">
        BLOG
      </h1>
    </div>
  </div>
</template>

<script>
export default {}
</script>
