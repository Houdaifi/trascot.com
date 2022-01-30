<template>
  <div>
    <carousel :per-page="1" :autoplay="true" :loop="true" :speed="3000"
     :autoplayHoverPause="false" :mouse-drag="true" :autoplayTimeout="5000" :paginationEnabled="false">
      
      <slide class="bg-hero-pattern2 bg-cover cursor-pointer max-h-full">
        <div class="bg-gradient-to-b md:bg-gradient-to-r from-gray-200 to-transparent relative flex flex-col items-center justify-center xl:items-start xl:justify-center h-full space-y-8 px-0 xl:px-12 2xl:px-32">
          <div></div>
          <h1 class="z-30 text-gray-900 text-4xl lg:text-5xl leading-normal lg:leading-relaxed text-center xl:text-left rounded font-bold max-w-xl 2xl:max-w-3xl uppercase focus-in-expand">
            <span class="text-yellow-500 font-extrabold">Tragfer</span> vous offre une large choix de stockage standard ou sur meusre
          </h1>
          <hr class="border-2 border-yellow-500 w-36">
          <button class="text-black bg-white hover:bg-yellow-500 hover:text-white px-20 py-3 rounded text-base font-semibold">
            Voir plus
            <font-awesome-icon icon="arrow-right" class="text-sm xl:text-base ml-2" />
          </button>

          <!-- Rounded circles -->
          <img class="block xl:hidden zoomIn bg-red-600 absolute bottom-2 left-10 w-24 h-24 md:w-44 md:h-44 2xl:w-64 2xl:h-64 rounded-full ring-2 ring-white" src="../assets/storage_two.jpg" alt="rayonnage">
          <img class="hidden xl:block zoomIn bg-red-600 absolute bottom-2 right-52 w-24 h-24 md:w-44 md:h-44 2xl:w-64 2xl:h-64 rounded-full ring-2 ring-white" src="../assets/storage_two.jpg" alt="rayonnage">

          <img class="xl:block hidden z-20 zoomIn bg-red-600 absolute top-1/3 right-1/3 w-44 h-44 md:w-44 md:h-44 2xl:w-64 2xl:h-64 rounded-full ring-2 ring-white" src="../assets/storage_three.jpg" alt="rayonnage">

          <img class="zoomIn bg-red-600 absolute top-16 right-10 w-24 h-24 md:w-44 md:h-44 2xl:w-64 2xl:h-64 rounded-full ring-2 ring-white" src="../assets/storage.jpg" alt="rayonnage">
        </div>
      </slide>
      <slide class="bg-hero-pattern bg-cover h-screen cursor-pointer">
        <div class="bg-gray-800 bg-opacity-50 flex flex-col items-center justify-center h-full">
          <h1 class="text-white text-center text-4xl 2xl:text-5xl rounded px-4 py-2 font-black tracking-wide">Construction Métallique</h1>
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

<style scoped>
  .zoomIn {
  -webkit-animation-name: zoomIn;
  animation-name: zoomIn;
  -webkit-animation-duration: 1s;
  animation-duration: 1s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
  }
  @-webkit-keyframes zoomIn {
  0% {
  opacity: 0;
  -webkit-transform: scale3d(.3, .3, .3);
  transform: scale3d(.3, .3, .3);
  }
  50% {
  opacity: 1;
  }
  }
  @keyframes zoomIn {
  0% {
  opacity: 0;
  -webkit-transform: scale3d(.3, .3, .3);
  transform: scale3d(.3, .3, .3);
  }
  50% {
  opacity: 1;
  }
  } 

@keyframes focus-in-expand {
  0% {
    letter-spacing: -0.5em;
    filter: blur(12px);
    opacity: 0;
  }
  100% {
    filter: blur(0);
    opacity: 1;
  }
}

.focus-in-expand {
  animation: focus-in-expand 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
}
</style>