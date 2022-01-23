<template>
  <div class="text-gray-900 text-sm 2xl:text-base">
    <navbar ref="navbar"/>
    <v-carousel/>
    <propos class=""/>
    <services class="py-24"/>
    <contactUs class=""/>
    <projets class="pt-24"/>
    <partners class="pt-24"/>
    <footeer class=""/>

  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from '@/components/Navbar.vue'
import VCarousel from '@/components/Carousel.vue'
import Services from '@/components/Services.vue'
import ContactUs from '@/components/ContactUs.vue'
import Propos from '@/components/Propos.vue'
import Projets from '@/components/Projets.vue'
import Partners from '@/components/Partners.vue'
import Footeer from '@/components/Footeer.vue'


export default {
  name: 'Home',
  components: {
    Navbar,VCarousel,Services,Propos,Projets,Partners,ContactUs,Footeer
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