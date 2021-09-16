<template>
  <div>
    <navbar/>
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
}
</script>
