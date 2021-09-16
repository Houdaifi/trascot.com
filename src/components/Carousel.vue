<template>
  <div class="overflow-hidden">
    <carousel :paginationPosition="'bottom-overlay'" :per-page="1" :mouse-drag="false" :navigationEnabled="true" :navigationPrevLabel="'◀'" :navigationNextLabel="'▶'">
      <slide class="bg-hero-pattern bg-no-repeat bg-opacity-0 bg-cover flex justify-center items-center h-xxl">
        <h1 class="text-black text-3xl bg-white rounded px-4 py-2">Slide 1 Content</h1>
      </slide>
      <slide>
        Slide 2 Content
      </slide>
    </carousel>
  </div>

</template>

<script>
import { Carousel, Slide } from 'vue-carousel'

export default {
    name:'VCarousel',
    components:{Carousel,Slide}
}
</script>