<template>
  <div class="bg-gray-50">
    <navbar ref="navbar"/>
    <v-carousel/>
    <services class="py-16"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from '@/components/Navbar.vue'
import VCarousel from '@/components/Carousel.vue'
import Services from '@/components/Services.vue'

export default {
  name: 'Home',
  components: {
    Navbar,VCarousel,Services
  },
  mounted(){
    window.addEventListener('scroll', this.$refs.navbar.scrollListener)
  },
}
</script>
