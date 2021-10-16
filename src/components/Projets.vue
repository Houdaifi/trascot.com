<template>
    <div class="bg-gray-100"> 
        <div class="flex items-center justify-center flex-col space-y-16">
            <h2 class="text-center text-gray-800 dark:text-gray-300 text-3xl uppercase">Quelques uns de nos projets...</h2>
        </div>

        <div class="flex flex-col lg:flex-row items-center justify-center space-y-12 lg:space-y-0 lg:space-x-24 mt-16">
            <div class="flex flex-col items-center overflow-hidden hover14" v-for="project in projects" :key="project.id">
                <figure>
                    <img class="w-80 2xl:w-96 p-1 shadow cursor-pointer" :src="project.image"/>
                </figure>
                <h4 class="uppercase font-light text-base mt-4 mb-2">{{project.name}}</h4>
                <h6 class="text-sm">
                    <font-awesome-icon icon="map-marker-alt" class="text-sm xl:text-base ml-2" />
                    {{project.location}}
                </h6>
            </div>
        </div>
        
    </div>
</template>

<script>
export default {
    name: 'Projets',
    data(){
        return {
            projects:[
                {id: 1, name: 'lorem ipsum', image: require("../assets/project-2.jpg"), location: 'Agadir, Maroc'},
                {id: 2, name: 'lorem ipsum', image: require("../assets/project-1.jpg"), location: 'Tanger, Maroc'},
                {id: 3, name: 'lorem ipsum', image: require("../assets/project-3.jpg"), location: 'Casablanca, Maroc'},
            ]
        }
    }
}
</script>

<style scoped>
    /* Shine */
    .hover14 figure {
        position: relative;
    }
    .hover14 figure::before {
        position: absolute;
        top: 0;
        left: -75%;
        z-index: 2;
        display: block;
        content: '';
        width: 50%;
        height: 100%;
        background: -webkit-linear-gradient(left, rgba(255,255,255,0) 0%, rgba(255,255,255,.3) 100%);
        background: linear-gradient(to right, rgba(255,255,255,0) 0%, rgba(255,255,255,.3) 100%);
        -webkit-transform: skewX(-25deg);
        transform: skewX(-25deg);
    }
    .hover14 figure:hover::before {
        -webkit-animation: shine 1.5s;
        animation: shine 1.5s;
    }
    @-webkit-keyframes shine {
        100% {
            left: 125%;
        }
    }
    @keyframes shine {
        100% {
            left: 125%;
        }
    }
</style>