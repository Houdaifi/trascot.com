<template>
  <div>
    <carousel :per-page="1" :autoplay="true" :loop="true"
     :autoplayHoverPause="false" :mouse-drag="true" :autoplayTimeout="6000" :paginationEnabled="false">
      <slide class="bg-hero-pattern bg-cover h-screen">
        <div class="bg-gray-800 bg-opacity-50 flex flex-col items-center justify-center h-full">
          <h1 class="text-white text-center text-6xl rounded px-4 py-2 font-black tracking-wide">Construction Métallique</h1>
        </div>
      </slide>
      <slide class="bg-hero-pattern2 bg-cover">
        <div class="bg-gray-800 bg-opacity-75 flex flex-col items-center justify-around h-full space-y-36">
          <div></div>
          <h1 class="text-white text-center text-4xl md:text-5xl xl:text-6xl leading-normal md:leading-relaxed xl:leading-relaxed rounded font-black tracking-wide max-w-7xl uppercase">
            Trascot vous offre une large choix de stockage standard ou sur meusre
          </h1>
          <button class="text-white bg-yellow-500 bg-opacity-90 hover:bg-yellow-600 px-12 py-2 rounded-3xl text-base xl:text-xl font-medium">
            Voir plus
            <font-awesome-icon icon="arrow-right" class="text-sm xl:text-base ml-2" />
          </button>
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