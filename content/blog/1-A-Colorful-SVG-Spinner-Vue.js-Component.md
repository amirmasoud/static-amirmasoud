---
title: A Colorful SVG Spinner Vue.js Component
description: A short description about this blog post.
tags: Tag 1, Tag2
---

I just created a simple Vue.js spinner using SVG and CSS animation to iterate along with the different colors.

The default spinner comes from&nbsp;<a rel="noreferrer noopener" target="_blank" href="https://glennmccomb.com/articles/building-a-pure-css-animated-svg-spinner/">Glenn McComb</a>&nbsp;post, where he created a spinning SVG circle using CSS animation. I have slightly adjusted it to put in a Vue.js template.

The HTML part is straight forward; we have a circle in 100 by 100 view box, centered at 50 with a radius of 45.

<pre>
    <code>
<svg class="spinner" viewBox="0 0 100 100"
    xmlns="http://www.w3.org/2000/svg">
    <circle cx="50" cy="50" r="45" />
</svg>
    </code>
</pre>

In the CSS part, I have changed the stroke color to our very first color, a subtle pink, and set a <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/animation-timing-function">linear animation</a> for color change:

