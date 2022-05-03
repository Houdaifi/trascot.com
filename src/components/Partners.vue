<template>
  <div class="">
    <h2 class="text-center text-gray-800 dark:text-gray-300 text-4xl uppercase font-semibold mb-8">Ils nous font confiance...</h2>
    <carousel
      :perPageCustom="[[320, 2], [1000, 4], [1700, 6]]"
      :mouse-drag="true"
      :autoplay="true"
      :loop="true"
      :paginationSize="0"
      :speed="8000"
      :autoplayTimeout="1000"
      :autoplayHoverPause="false"
    >

        <slide v-for="(partner) in partners" :key="partner.id" class="">
            <img class="w-1/2 md:w-1/3 2xl:w-1/2 p-2 rounded" :src="partner.image" :alt="partner.name">
        </slide>
    </carousel>
  </div>
</template>

<script>
import { Carousel, Slide } from 'vue-carousel'

export default {
    name:'Partners',
    components: { Carousel, Slide },
    data(){
        return{
            partners:[
                {id: 1, name: 'lorem', image: require('../assets/partners/Rowenta.png')},
                {id: 2, name: 'lorem', image: require('../assets/partners/Wideroe.png')},
                {id: 4, name: 'lorem', image: require('../assets/partners/Rowenta.png')},
                {id: 5, name: 'lorem', image: require('../assets/partners/Maxx.png')},
                {id: 6, name: 'lorem', image: require('../assets/partners/Wideroe.png')},
                {id: 7, name: 'lorem', image: require('../assets/partners/NWA.png')},
                {id: 8, name: 'lorem', image: require('../assets/partners/Wideroe.png')},
                {id: 9, name: 'lorem', image: require('../assets/partners/Wideroe.png')},
                {id: 10, name: 'lorem', image: require('../assets/partners/Rowenta.png')},
            ]
        }
    }
};
</script>
