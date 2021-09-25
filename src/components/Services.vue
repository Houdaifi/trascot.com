<template>
  <div>
    <h2 class="text-center text-gray-800 dark:text-gray-300 pb-20 text-4xl uppercase">Nos services...</h2>
    <carousel
      :perPageCustom="[[320, 1], [1199, 4]]"
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
            <div class="flex flex-col items-center justify-center bg-white dark:bg-gray-700 p-8 mx-6 space-y-6">
                <img class="w-64 h-64 md:w-80 md:h-80 rounded-full" :src="service.image" :alt="service.name">
                <h3 class="uppercase text-xl">{{service.name}}</h3>
            </div>
        </slide>
    </carousel>
    <div class="flex items-center justify-center mt-0 md:mt-16">
        <button class="bg-blue-500 hover:bg-blue-400 font-semibold text-white text-xl px-4 py-2 xl:py-3 xl:px-8 rounded">Voir plus</button>
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
                {id: 1,name: 'Chaudronnerie', image: require('../assets/bg-1.jpg')},
                {id: 2,name: 'Rayonnages industriels', image: require('../assets/storage.jpg')},
                {id: 3,name: 'Panneau publicitaire', image: require('../assets/panneau.jpg')},
                {id: 3,name: 'Panneau publicitaire', image: require('../assets/panneau.jpg')}
            ]
        }
    }
};
</script>
