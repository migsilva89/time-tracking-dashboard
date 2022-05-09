<template>
    <div class="pt-2 lg:pt-0 mt-4 mb-4">
        <div class="rounded-xl" :class="[backgroundColor]">
 
            <div class="pr-4">
                <div class="bg-[length:60px_60px] bg-no-repeat bg-right-top pt-6 lg:pt-11" :class="[backgroundImage]"></div>
            </div>

            <div class="lg:relative rounded-xl bg-indigo-900 py-4 lg:py-8">
                <div class=" lg:grid lg:justify-start lg:pl-4 flex justify-evenly items-center">
                    <div class="text-white">
                        <p class="text-xs lg:text-lg font-bold">{{ title }}</p>
                        <p class="lg:mt-4 lg:mb-2 text-2xl lg:text-5xl font-thin">{{ hours }} hrs</p>
                    </div>
                    <div class="text-indigo-300">
                        <div class="lg:absolute lg:ml-40 lg:top-12 lg:right-4 flex justify-end pb-4">
                            <img class="w-4" src="@/assets/images/icon-ellipsis.svg" alt="">
                        </div>
                        <p class="text-xs lg:text-md">Last Week - {{ hoursLastWeek }} hrs</p>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>

<script setup> 

defineProps({
    
    backgroundImage: {
        type: String,
        required: false
    },

    backgroundColor: {
        type: String,
        required: false
    }, 

    title: {
        type: String,
        required: false 
    }, 
    
    hours: {
        type: String,
        required: false
    },
    
    hoursLastWeek: {
        type: String,
        required: false
    }

})

</script>