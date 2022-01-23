<template>
  <div class="flex flex-col xl:flex-row justify-between bg-gray-800 text-gray-200 text-base leading-loose tracking-wider">
    <div class="flex flex-col justify-center text-left py-28 pl-4 2xl:pl-16">
      <h2 class="text-4xl uppercase font-semibold mb-8 text-white">À propos de nous !</h2>
      <p class="mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit adipisicing elit adipisicing elit.</p>
      <p class="max-w-xl mb-8">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. <br> 
        Soluta provident voluptates distinctio reiciendis quibusdam ducimus quasi sequi quos hic, quaerat nemo nostrum, 
        nulla voluptate accusantium possimus ut ea eaque consequatur nesciunt eligendi nam explicabo recusandae sapiente inventore. 
        Sit reprehenderit ut aperiam esse quidem quo alias nam laborum nesciunt? Quam eligendi aperiam temporibus?</p>
      <button class="bg-transparent border-2 w-1/4 bg-blue-600 text-white text-sm px-4 py-2 2xl:py-3 2xl:px-8 rounded">Savoir plus</button>
        
    </div>

    <!-- Second part -->
    <div class="grid grid-cols-1 xl:grid-cols-2 text-white bg-yellow-600 max-w-xl xl:max-w-4xl">
      <div class="flex flex-col justify-center items-start px-12 font-bold">
        <h1 class="text-3xl xl:text-9xl">23<span class="text-2xl">ANS</span></h1>
        <h2 class="text-xl xl:text-2xl">We are Building the Future and Restoring</h2>
      </div>
      <div class="bg-a-propos-img2 bg-cover"></div>
      <div class="bg-a-propos-img1 bg-cover"></div>
      <div class="flex flex-col space-y-4 justify-center items-start px-12 space-y-4 font-bold text-4xl bg-gray-800">
        <h1>Renting Tips & Articles</h1>
        <h2 class="font-normal text-base text-gray-200">We are building the future and restoring</h2>
        <button class="border-2 bg-transparent hover:bg-red-500 text-white text-sm px-4 py-2 2xl:py-3 2xl:px-8 rounded">Voir plus</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name:'Propos'
}
</script>