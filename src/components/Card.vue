<template>
    <div class="pt-4">
        <div class="rounded-xl" :class="[backgroundColor]">
 
            <div class="pr-4">
                <div class="bg-[length:60px_60px] bg-no-repeat bg-right-top pt-6" :class="[backgroundImage]"></div>
            </div>

            <div class="rounded-xl bg-indigo-900 py-4">
                <div class="flex justify-evenly items-center gap-12">
                    <div class="text-white">
                        <p class="text-xs">{{ title }}</p>
                        <p class="text-2xl">{{ hours }} hrs</p>
                    </div>
                    <div class="text-indigo-300">
                        <div class="flex justify-end pb-4">
                            <img class="w-4" src="@/assets/images/icon-ellipsis.svg" alt="">
                        </div>
                        <p class="text-xs">Last Week - {{ hoursLastWeek }} hrs</p>
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