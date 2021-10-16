<template>
  <div class="bg-gray-100">
    <h2 class="text-center text-gray-800 dark:text-gray-300 pb-12 text-3xl uppercase">Parmi nos Clients...</h2>
    <carousel
      :perPageCustom="[[320, 4], [1700, 6]]"
      :mouse-drag="true"
      :autoplay="true"
      :loop="true"
      :paginationSize="0"
      :speed="1000"
      :autoplayTimeout="3000"
      :autoplayHoverPause="false"
    >

        <slide v-for="(partner) in partners" :key="partner.id" class="">
            <img class="w-4/6 lg:w-1/2 p-2 rounded" :src="partner.image" :alt="partner.name">
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
            ]
        }
    }
};
</script>
