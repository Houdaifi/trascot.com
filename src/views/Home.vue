<template>
  <div class="text-gray-900 bg-gradient-to-b from-gray-50 to-gray-300 text-sm 2xl:text-base font-light">
    <navbar ref="navbar"/>
    <v-carousel/>
    <propos class=""/>
    <services class="pt-24"/>
    <projets class="py-24"/>
    <partners class="pt-24"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from '@/components/Navbar.vue'
import VCarousel from '@/components/Carousel.vue'
import Services from '@/components/Services.vue'
import Propos from '@/components/Propos.vue'
import Projets from '@/components/Projets.vue'
import Partners from '@/components/Partners.vue'

export default {
  name: 'Home',
  components: {
    Navbar,VCarousel,Services,Propos,Projets,Partners
  },
  mounted(){
    window.addEventListener('scroll', this.$refs.navbar.scrollListener)
  },
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap');

body{
  font-family: 'Poppins', sans-serif;
}
</style>