---
title: A Colorful SVG Spinner Vue.js Component
tags: Frontend Tips
createdAt: June 4, 2020
---

I just created a simple Vue.js spinner using SVG and CSS animation to iterate along with the different colors.

The default spinner comes from [Glenn McComb](https://glennmccomb.com/articles/building-a-pure-css-animated-svg-spinner/) post, where he created a spinning SVG circle using CSS animation. I have slightly adjusted it to put in a Vue.js template.

The HTML part is straight forward; we have a circle in 100 by 100 view box, centered at 50 with a radius of 45.

```html
<svg class="spinner" viewBox="0 0 100 100"
    xmlns="http://www.w3.org/2000/svg">
    <circle cx="50" cy="50" r="45" />
</svg>
```

In the CSS part, I have changed the stroke color to our very first color, a subtle pink, and set a [linear animation](https://developer.mozilla.org/en-US/docs/Web/CSS/animation-timing-function) for color change:

```css
svg.spinner {
  animation: 2s linear infinite svg-animation;
}

@keyframes svg-animation {
  0% {
    transform: rotateZ(0deg);
  }
  100% {
    transform: rotateZ(360deg);
  }
}

.spinner circle {
  animation: 1.4s ease-in-out infinite both circle-animation;
  -webkit-transition: stroke 0.3s linear;
  -moz-transition: stroke 0.3s linear;
  -o-transition: stroke 0.3s linear;
  transition: stroke 0.3s linear;
  display: block;
  fill: transparent;
  stroke: #ed64a6;
  stroke-linecap: round;
  stroke-dasharray: 283;
  stroke-dashoffset: 280;
  stroke-width: 10px;
  transform-origin: 50% 50%;
}

@keyframes circle-animation {
  0%,
  25% {
    stroke-dashoffset: 280;
    transform: rotate(0);
  }

  50%,
  75% {
    stroke-dashoffset: 75;
    transform: rotate(45deg);
  }

  100% {
    stroke-dashoffset: 280;
    transform: rotate(360deg);
  }
}
```

In our Vue.js component, we need to set the colors data property, which we used [Tailwind](https://tailwindcss.com/docs/customizing-colors/#default-color-palette) 400 level colors. Next, I’ve created an [interval](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setInterval) of 2000 millisecond to iterate through colors. We also set the destroy method in our Vue.js component to [`clear interval`](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/clearInterval) after we are done with showing spinner.

```js
new Vue({
  el: '#app',
  data: () => ({
    interval: null,
    colors: [
      '#F56565',
      '#ED8936',
      '#ECC94B',
      '#48BB78',
      '#38B2AC',
      '#4299E1',
      '#667EEA',
      '#9F7AEA',
      '#ED64A6'
    ]
  }),
  created() {
    let idx = 0
    this.interval = setInterval(() => {
      document.querySelector('.spinner circle').style.stroke = this.colors[
        idx++
      ]
      if (idx === this.colors.length) {
        idx = 0
      }
    }, 2000)
  },
  destroyed() {
    clearInterval(this.interval)
  }
});
```

Final result:

<p class="codepen" data-height="227" data-theme-id="dark" data-default-tab="css,result" data-user="amirmasoud32" data-slug-hash="XWmQmbv" data-preview="true" style="height: 227px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Colorful CSS+SVG Spinner Vue.js template">
  <span>See the Pen <a href="https://codepen.io/amirmasoud32/pen/XWmQmbv">
  Colorful CSS+SVG Spinner Vue.js template</a> by amirmasoud  (<a href="https://codepen.io/amirmasoud32">@amirmasoud32</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

For Nuxt.js, as we don’t have access to *document* on the server-side, we need to wrap the color change in [process.client](https://nuxtjs.org/api/context/) condition to only run on the client-side and add [eslint-disable-line nuxt/no-globals-in-created](https://github.com/nuxt/eslint-plugin-nuxt/blob/master/docs/rules/no-globals-in-created.md) comment to prevent *eslint* from throwing error.
