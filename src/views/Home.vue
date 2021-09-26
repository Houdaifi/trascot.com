<template>
  <div class="">
    <navbar ref="navbar"/>
    <v-carousel/>
    <propos class="pt-24"/>
    <services class="py-24"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from '@/components/Navbar.vue'
import VCarousel from '@/components/Carousel.vue'
import Services from '@/components/Services.vue'
import Propos from '@/components/Propos.vue'

export default {
  name: 'Home',
  components: {
    Navbar,VCarousel,Services,Propos
  },
  mounted(){
    window.addEventListener('scroll', this.$refs.navbar.scrollListener)
  },
}
</script>