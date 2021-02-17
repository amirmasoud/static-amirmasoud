<template>
  <section
    id="hello"
    class="container mx-auto px-4 sm:px-16 -mt-20 flex min-h-screen justify-items-center justify-center items-center"
  >
    <div class="space-y-14">
      <div class="flex justify-center">
        <svg
          id="emoji"
          viewBox="0 0 72 72"
          xmlns="http://www.w3.org/2000/svg"
          class="w-24 h-24 hand-shake"
        >
          <g id="color" />
          <g id="hair" />
          <g id="skin">
            <path
              fill="#fcea2b"
              stroke="none"
              d="M30.6145,13.7375c0.284-1.9293-1.0499-3.7236-2.9792-4.0075s-3.7236,1.0498-4.0075,2.9792 c-0.0455,0.3093-0.0498,0.6232-0.0126,0.9336L23.358,32.641l0.0217,4.3248l0.1759-12.9988 c0.284-1.9293-1.0499-3.7236-2.9792-4.0075s-3.7236,1.0498-4.0075,2.9792c-0.0455,0.3093-0.0498,0.6232-0.0126,0.9336 l-0.1759,12.9988l0.0526,10.0853c0.4248,8.3102,7.7518,13.6293,16.06,13.2046c4.7918-0.2654,9.32-2.2781,12.7278-5.6572 c2.9178-3.0904,10.0855-11.5349,10.0855-11.5349c1.4629-2.1582,0.3282-5.4939-0.8007-4.6726l-9.8756,4.6509l-0.0389-5.3996 l0.0389,5.3996l-0.0389-5.3996l0.0395-21.8505c0.284-1.9293-1.0499-3.7236-2.9792-4.0075s-3.7236,1.0498-4.0075,2.9792 c-0.0455,0.3093-0.0498,0.6232-0.0126,0.9336l-0.0947,6.9994l-0.1861,10.6365l0.3671-22.1928 c0.284-1.9293-1.0499-3.7236-2.9792-4.0075c-1.9293-0.284-3.7236,1.0498-4.0075,2.9792c-0.0455,0.3093-0.0498,0.6232-0.0126,0.9336 l-0.2064,24.016"
            />
          </g>
          <g id="skin-shadow" />
          <g id="line">
            <path
              fill="none"
              stroke="#000000"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M30.6145,13.7375 c0.284-1.9293-1.0499-3.7236-2.9792-4.0075s-3.7236,1.0498-4.0075,2.9792c-0.0455,0.3093-0.0498,0.6232-0.0126,0.9336 L23.358,32.641l0.0048,0.9513l0.1928-9.6253c0.284-1.9293-1.0499-3.7236-2.9792-4.0075s-3.7236,1.0498-4.0075,2.9792 c-0.0455,0.3093-0.0498,0.6232-0.0126,0.9336l-0.1759,12.9988l0.0526,10.0853c0.4248,8.3102,7.7518,13.6293,16.06,13.2046 c4.7918-0.2654,9.32-2.2781,12.7278-5.6572c2.9178-3.0904,10.0855-11.5349,10.0855-11.5349 c1.4629-2.1582,0.3282-5.4939-0.8007-4.6726l-9.8756,4.6509l-0.0389-5.3996l0.0389,5.3996l-0.0389-5.3996l0.0395-21.8505 c0.284-1.9293-1.0499-3.7236-2.9792-4.0075s-3.7236,1.0498-4.0075,2.9792c-0.0455,0.3093-0.0498,0.6232-0.0126,0.9336 l-0.0947,6.9994l-0.1861,10.6365l0.3671-22.1928c0.284-1.9293-1.0499-3.7236-2.9792-4.0075 c-1.9293-0.284-3.7236,1.0498-4.0075,2.9792c-0.0455,0.3093-0.0498,0.6232-0.0126,0.9336l-0.1758,20.4538"
            />
          </g>
        </svg>
      </div>
      <h1
        class="text-6xl w-full font-heading bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-500"
      >
        <nuxt-content :document="content" />
      </h1>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    content: {
      type: Object,
      default: () => {},
    },
  },
}
</script>

<style scoped>
@-webkit-keyframes hand-shake {
  0% {
    -webkit-transform: rotate(0);
    transform: rotate(0);
    -webkit-transform-origin: 60% 75%;
    transform-origin: 60% 75%;
  }
  100% {
    -webkit-transform: rotate(-45deg);
    transform: rotate(-45deg);
    -webkit-transform-origin: 60% 75%;
    transform-origin: 60% 75%;
  }
}
@keyframes hand-shake {
  0% {
    -webkit-transform: rotate(0);
    transform: rotate(0);
    -webkit-transform-origin: 60% 75%;
    transform-origin: 60% 75%;
  }
  100% {
    -webkit-transform: rotate(-45deg);
    transform: rotate(-45deg);
    -webkit-transform-origin: 60% 75%;
    transform-origin: 60% 75%;
  }
}

.hand-shake {
  -webkit-animation: hand-shake 0.7s ease-in-out infinite alternate both;
  animation: hand-shake 0.7s ease-in-out infinite alternate both;
}
</style>
