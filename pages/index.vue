<template>
  <div>
    <nav
      class="container px-8 sm:px-0 mx-auto flex justify-evenly flex-col sm:flex-row py-8 border-b border-gray-300 text-gray-800 uppercase font-bold text-sm"
    >
      <a class="" href="#">Amirmasoud Sheydaei</a>
      <span class="hidden sm:inline text-gray-200">|</span>
      <a class="" href="#">Blog</a>
      <a class="" href="#">Project</a>
      <a class="" href="#">Books</a>
      <a class="" href="#">Arts</a>
      <a class="" href="#">About</a>
    </nav>
    <div class="bg-gray-900 min-h-screen mt-8">
      <div class="container mx-auto relative">
        <span
          class="hidden md:block absolute h-64 w-64 bg-gradient-to-t from-blue-800 to-gray-900 top-0 mt-12 ml-20 rounded-full z-0 shadow-lg"
        ></span>
        <h1
          class="text-center md:text-left absolute w-full pt-16 font-blog text-6xl text-blue-400 z-10"
        >
          BLOG
        </h1>
        <div class="relative flex flex-wrap pt-48 z-20">
          <div
            v-for="index in [1, 2, 3]"
            :key="index"
            class="w-full md:w-1/3 p-4"
          >
            <div
              class="bg-gradient-to-b from-blue-800 to-gray-900 rounded-xl shadow-lg"
            >
              <div
                class="bg-cover bg-center w-full h-64 rounded-xl transform scale-100 md:scale-105 shadow-lg"
                style="background-image: url(samples/image1.webp)"
              ></div>
              <div class="p-4">
                <p class="font-sans text-sm font-bold text-blue-700">
                  Yesterday &bull; #fun #fancy
                </p>
                <h2
                  class="font-sans pb-4 pt-2 text-2xl font-bold text-gray-500"
                >
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit
                </h2>
                <p class="font-sans text-gray-600">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Commodi nulla minima consequuntur temporibus, aliquid delectus
                  vitae sapiente omnis laboriosam accusantium dolorem mollitia
                  architecto fugiat quas adipisci nam fuga quam maiores?
                </p>
              </div>
            </div>
          </div>
          <a href="#" class="my-12 text-center w-full text-blue-800"
            >See them all &rarr;</a
          >
        </div>
      </div>
    </div>
    <div class="bg-pink-200 min-h-screen">
      <div class="container mx-auto relative">
        <h1
          class="text-center md:text-left absolute w-full pt-16 font-project text-6xl text-pink-800 z-10"
        >
          PROJECTS
        </h1>
        <div class="relative flex flex-wrap pt-48 z-20">
          <div
            v-for="index in [1, 2, 3]"
            :key="index"
            class="w-full md:w-1/3 p-4"
          >
            <div
              class="bg-gradient-to-b from-pink-300 via-pink-100 to-pink-200 rounded-xl"
            >
              <div
                class="bg-clip-content bg-inner-rounded-custom bg-center w-full h-64 p-4"
                style="background-image: url('samples/image2.jpg')"
              ></div>
              <div class="pb-4 px-4">
                <p class="font-sans text-sm font-bold text-pink-700">
                  Yesterday &bull; #fun #fancy
                </p>
                <h2
                  class="font-sans pb-4 pt-2 text-2xl font-bold text-gray-900"
                >
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit
                </h2>
                <p class="font-sans text-gray-800">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Commodi nulla minima consequuntur temporibus, aliquid delectus
                  vitae sapiente omnis laboriosam accusantium dolorem mollitia
                  architecto fugiat quas adipisci nam fuga quam maiores?
                </p>
              </div>
            </div>
          </div>
          <a href="#" class="my-12 text-center w-full text-pink-800"
            >See them all &rarr;</a
          >
        </div>
      </div>
    </div>

    <div class="bg-gray-200">
      <div class="container mx-auto relative">
        <h1
          class="text-center md:text-left absolute w-full pt-16 px-4 font-blog text-6xl text-gray-900"
        >
          BLOG
        </h1>
        <div class="relative flex flex-wrap pt-48">
          <div class="w-2/3 flex flex-wrap">
            <div
              v-for="index in [1, 2]"
              :key="index"
              class="w-full md:w-1/2 p-4"
            >
              <div class="rounded-xl">
                <div
                  class="bg-content bg-inner-rounded-custom bg-center w-full h-64"
                  style="background-image: url('samples/image2.jpg')"
                ></div>
                <div class="py-4">
                  <p class="font-sans text-sm font-bold text-indigo-500">
                    Yesterday &bull; #fun #fancy
                  </p>
                  <h2 class="font-sans pt-2 text-2xl font-bold text-gray-800">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit
                  </h2>
                  <p class="font-sans text-gray-700">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Commodi nulla minima consequuntur temporibus, aliquid
                    delectus vitae sapiente omnis laboriosam accusantium dolorem
                    mollitia architecto fugiat quas adipisci nam fuga quam
                    maiores?
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="w-1/3">
            <ul>
              <li><a href="#">Older posts</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="bg-gray-200">
      <div class="container mx-auto relative">
        <h1
          class="text-center md:text-left absolute w-full pt-16 px-4 font-blog text-6xl text-gray-900"
        >
          BOOKS
        </h1>
        <div class="relative flex flex-wrap pt-48">
          <div
            v-for="index in [1, 2, 3, 4, 5, 6, 7]"
            :key="index"
            class="w-full md:w-1/6 p-4"
          >
            <div class="rounded-xl">
              <div
                class="bg-content bg-inner-rounded-custom bg-center w-full h-64"
                style="background-image: url('samples/image2.jpg')"
              ></div>
              <div class="py-4">
                <p class="font-sans text-sm font-bold text-indigo-500">
                  Yesterday &bull; #book
                </p>
                <h2 class="font-sans pt-2 text-2xl font-bold text-gray-800">
                  Book Title
                </h2>
                <p class="font-sans text-gray-700">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="bg-gray-200">
      <div class="container mx-auto relative">
        <div class="py-8 px-4">
          <h1
            class="text-center md:text-left w-full font-blog text-6xl text-gray-900"
          >
            ABOUT
          </h1>
          <p>A short description of myself here</p>
        </div>
        <h2 class="font-photo text-5xl text-gray-700 px-4">2020</h2>
        <div class="flex flex-wrap">
          <div
            v-for="index in [1, 2, 3]"
            :key="index"
            class="w-full md:w-1/2 p-4"
          >
            <div class="flex flex-wrap rounded-xl shadow-lg">
              <div
                class="bg-content bg-inner-rounded-custom bg-center h-20 w-20"
                style="background-image: url('samples/image2.jpg')"
              ></div>
              <div class="w-1/2 px-4">
                <h2 class="font-sans text-2xl font-bold text-gray-800">
                  A project title
                </h2>
                <p class="font-sans text-gray-700">Lorem ipsum .</p>
              </div>
            </div>
          </div>
        </div>
        <h2 class="font-photo text-5xl text-gray-700 px-4">2019</h2>
        <div class="flex flex-wrap">
          <div
            v-for="index in [1, 2, 3]"
            :key="index"
            class="w-full md:w-1/2 p-4"
          >
            <div class="flex flex-wrap rounded-xl shadow-lg">
              <div
                class="bg-content bg-inner-rounded-custom bg-center h-20 w-20"
                style="background-image: url('samples/image2.jpg')"
              ></div>
              <div class="w-1/2 px-4">
                <h2 class="font-sans text-2xl font-bold text-gray-800">
                  A project title
                </h2>
                <p class="font-sans text-gray-700">Lorem ipsum.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>
