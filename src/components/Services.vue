<template>
    <div class="flex flex-col justify-between items-center space-y-8 bg-white">
        <h2 class="text-4xl uppercase">Nos services...</h2>
        <hr class="border border-gray-200 w-1/2">
        <div class="flex flex-col xl:flex-row xl:space-x-24 space-y-12 xl:space-y-0 items-center">
            <div class="flex flex-col space-y-4 items-center p-8 bg-gray-50 shadow-lg " v-for="(service) in services" :key="service.id">
                <img class="w-64 h-64 md:w-80 md:h-80 rounded-full" :src="service.image" :alt="service.name">
                <h3 class="uppercase text-xl">{{service.name}}</h3>
            </div>
        </div>
        <div></div>
        <button class="bg-blue-500 hover:bg-blue-400 font-semibold text-white text-xl px-4 py-2 xl:py-3 xl:px-8 rounded">Voir plus</button>
    </div>
</template>

<script>
export default {
    name: 'Services',
    data(){
        return{
            services:[
                {id: 1,name: 'Chaudronnerie', image: require('../assets/bg-1.jpg')},
                {id: 2,name: 'Rayonnages industriels', image: require('../assets/storage.jpg')},
                {id: 3,name: 'Panneau publicitaire', image: require('../assets/panneau.jpg')}
            ]
        }
    }
}
</script>