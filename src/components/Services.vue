<template>
  <div class="pb-14">
    <div class="flex flex-col justify-center items-center pb-12 text-gray-700">
        <h2 class="text-center text-gray-800 dark:text-gray-300 text-4xl uppercase font-semibold mb-8">Nos services...</h2>
        <p class="text-center max-w-2xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae quos possimus voluptatem repudiandae cupiditate.</p>
    </div>
    <carousel
      :perPageCustom="[[320, 1],[800, 2],[1200, 3], [1700, 4]]"
      :mouse-drag="true"
      :autoplay="true"
      :paginationSize="0"
      :loop="true"
      :speed="800"
      :autoplayTimeout="3000"
      :autoplayHoverPause="false"
    >
      
        <slide v-for="(service) in services" :key="service.id">
            <div class="flex flex-col items-center justify-center dark:bg-gray-700 p-8 mx-6 space-y-6">
                <img class="w-64 h-64 2xl:w-80 2xl:h-80 rounded-full" :src="service.image" :alt="service.name">
                <h3 class="uppercase text-base">{{service.name}}</h3>
            </div>
        </slide>
    </carousel>
    
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
