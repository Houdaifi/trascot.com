<template>
  <div>
    <carousel :per-page="1" :autoplay="true" :loop="true"
     :autoplayHoverPause="false" :mouse-drag="true" :autoplayTimeout="6000" :paginationEnabled="false">
      <slide class="bg-hero-pattern bg-cover h-xxl">
        <div class="bg-gray-800 bg-opacity-50 flex flex-col items-center justify-center w-full h-xxl">
          <h1 class="text-white text-center text-6xl rounded px-4 py-2 font-black font-sans tracking-wide">Slide 1 Content</h1>
        </div>
      </slide>
      <slide class="bg-hero-pattern2 bg-cover h-xxl">
        <div class="bg-gray-800 bg-opacity-50 flex flex-col items-center justify-center w-full h-xxl">
          <h1 class="text-white text-center text-6xl rounded px-4 py-2 font-black font-sans tracking-wide">Slide 2 Content</h1>
        </div>
      </slide>
    </carousel>
  </div>
</template>

<script>
import { Carousel, Slide } from 'vue-carousel'

export default {
    name:'VCarousel',
    components:{Carousel,Slide}
}
</script>