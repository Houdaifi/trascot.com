<template>
  <div class="">
    <navbar ref="navbar"/>
    <v-carousel/>
    <propos class="py-12"/>
    <services class="pt-12"/>
    <projets class="py-12"/>
    <partners class="pt-12"/>
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