<template>
    <div class="flex flex-col justify-between items-center w-full">
        <h2 class="text-4xl uppercase">Nos services...</h2>
        <div class="flex flex-col lg:flex-row lg:space-x-24 items-center mt-8">
            <div class="flex flex-col space-y-4 items-center">
                <img class="w-64 h-64 lg:w-80 lg:h-80  rounded-full" src="../assets/bg-1.jpg" alt="">
                <h3 class="uppercase text-2xl ">Chaudronnerie</h3>
            </div>
            <div class="flex flex-col space-y-4 items-center">
                <img class="w-64 h-64 lg:w-80 lg:h-80  rounded-full" src="../assets/bg-1.jpg" alt="">
                <h3 class="uppercase text-2xl ">Chaudronnerie</h3>
            </div>
            <div class="flex flex-col space-y-4 items-center">
                <img class="w-64 h-64 lg:w-80 lg:h-80  rounded-full" src="../assets/bg-1.jpg" alt="">
                <h3 class="uppercase text-2xl ">Chaudronnerie</h3>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Services',
    data(){
        return{
            services:[{name: '', photo: ''}]
        }
    }
}
</script>