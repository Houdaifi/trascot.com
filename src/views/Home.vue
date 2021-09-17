<template>
  <div class="bg-gray-500">
    <navbar ref="navbar"/>
    <v-carousel/>
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from '@/components/Navbar.vue'
import VCarousel from '@/components/Carousel.vue'

export default {
  name: 'Home',
  components: {
    Navbar,VCarousel
  },
  mounted(){
    window.addEventListener('scroll', this.$refs.navbar.scrollListener)
  },
}
</script>
