<template>
  <div>
    <carousel :per-page="1" :autoplay="true" :loop="true" :speed="800"
     :autoplayHoverPause="false" :mouse-drag="true" :autoplayTimeout="5000" :paginationEnabled="false">
      <slide class="bg-hero-pattern bg-cover h-screen">
        <div class="bg-gray-800 bg-opacity-50 flex flex-col items-center justify-center h-full">
          <h1 class="text-white text-center text-4xl 2xl:text-5xl rounded px-4 py-2 font-black tracking-wide">Construction Métallique</h1>
        </div>
      </slide>
      <slide class="bg-hero-pattern2 bg-cover h-screen">
        <div class="bg-gray-800 bg-opacity-75 flex flex-col items-center justify-around h-full space-y-36">
          <div></div>
          <h1 class="text-white text-center text-4xl 2xl:text-6xl leading-normal md:leading-relaxed 
                    2xl:leading-relaxed rounded font-black tracking-widest max-w-3xl uppercase">
            Trascot vous offre une large choix de stockage standard ou sur meusre
          </h1>
          <button class="text-white bg-yellow-500 bg-opacity-90 hover:bg-yellow-600 px-12 py-2 rounded-3xl text-base 2xl:text-xl font-medium">
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