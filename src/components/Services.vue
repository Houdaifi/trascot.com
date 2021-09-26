<template>
  <div class="bg-gray-50">
    <h2 class="text-center text-gray-800 dark:text-gray-300 pb-12 text-3xl uppercase">Nos services...</h2>
    <carousel
      :perPageCustom="[[320, 1],[800, 2],[1400, 3], [1700, 4]]"
      :mouse-drag="true"
      :autoplay="true"
      :paginationSize="0"
      :loop="true"
      :speed="800"
      :autoplayTimeout="3000"
      :autoplayHoverPause="false"
    >
      
        <hr class="border border-gray-100 w-1/2">
        <slide v-for="(service) in services" :key="service.id">
            <div class="flex flex-col items-center justify-center bg-gray-50 dark:bg-gray-700 p-8 mx-6 space-y-6">
                <img class="w-64 h-64 2xl:w-80 2xl:h-80 rounded-full" :src="service.image" :alt="service.name">
                <h3 class="uppercase font-light text-lg">{{service.name}}</h3>
            </div>
        </slide>
    </carousel>
    <div class="flex items-center justify-center -mt-12 xl:mt-6">
        <button class="bg-blue-500 hover:bg-blue-400 font-semibold text-white text-base px-4 py-2 xl:py-3 xl:px-8 rounded">Voir plus</button>
    </div>
  </div>
</template>


<script>
import { Carousel, Slide } from 'vue-carousel'

export default {
    name:'Services',
    components: { Carousel, Slide },
    data(){
        return{
            services:[
                {id: 4,name: 'Chaudronnerie', image: require('../assets/boiling.jpg')},
                {id: 2,name: 'Rayonnages industriels', image: require('../assets/storage.jpg')},
                {id: 3,name: 'Panneau publicitaire', image: require('../assets/bilboard.jpg')},
                {id: 1,name: 'Charpente Métallique', image: require('../assets/metal_frame.jpg')},
            ]
        }
    }
};
</script>
