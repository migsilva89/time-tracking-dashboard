<template>
    <div class="flex font-Rubik justify-center bg-gray-900 min-h-screen">
        <main class="lg:max-w-6xl pt-56 pb-80 lg:grid lg:grid-cols-4 lg:gap-4 lg:items-center">

            <div class="rounded-xl bg-indigo-900">
                <div class="lg:grid rounded-xl bg-indigo-500 p-6 flex justify-center items-center text-white">
                    <div class="w-14">
                        <img class="border-2 rounded-full" src="@/assets/images/image-jeremy.png" alt="">
                    </div>
                    <div class="lg:pl-0 pl-6">
                        <p class="text-indigo-200 text-xs lg:pt-6">Report for</p>
                        <h2 class="text-xl lg:text-4xl lg:font-thin lg:pb-10">Jeremy Robson</h2>
                    </div>
                </div>

                <div class="lg:grid lg:pl-4 py-4 lg:py-12 flex justify-center lg:justify-start lg:gap-6 gap-8 text-sm text-indigo-300 ">
                    <button @click="toggleDaily" class=" hover:text-white">Daily</button>
                    <button @click="toggleWeekly" class=" lg:pl-3 hover:text-white">Weekly</button>
                    <button @click="toggleMonthly" class=" lg:pl-5 hover:text-white">Monthly</button>
                </div>
            </div>

            <div v-if="active !== null">
                <Card 
                    backgroundImage="bg-[url('/src/assets/images/icon-work.svg')]"
                    backgroundColor="bg-lightRed"
                    :title="active[0].title" 
                    :hours="active[0].timeframes.current" 
                    :hoursLastWeek="active[0].timeframes.previous" 
                /> 

                <Card 
                    backgroundImage="bg-[url('/src/assets/images/icon-play.svg')]"
                    backgroundColor="bg-softBlue"
                    :title="active[1].title" 
                    :hours="active[1].timeframes.current" 
                    :hoursLastWeek="active[1].timeframes.previous" 
                /> 

            </div>

            <div v-if="active !== null">
                <Card 
                    backgroundImage="bg-[url('/src/assets/images/icon-study.svg')]"
                    backgroundColor="bg-lightRedStudy"
                    :title="active[2].title" 
                    :hours="active[2].timeframes.current" 
                    :hoursLastWeek="active[2].timeframes.previous" 
                /> 

                <Card 
                    backgroundImage="bg-[url('/src/assets/images/icon-exercise.svg')]"
                    backgroundColor="bg-limeGreen"
                    :title="active[3].title" 
                    :hours="active[3].timeframes.current" 
                    :hoursLastWeek="active[3].timeframes.previous" 
                /> 
            </div>
              
            <div v-if="active !== null">
                <Card 
                    backgroundImage="bg-[url('/src/assets/images/icon-social.svg')]"
                    backgroundColor="bg-violet"
                    :title="active[4].title" 
                    :hours="active[4].timeframes.current" 
                    :hoursLastWeek="active[4].timeframes.previous" 
                /> 

                <Card 
                    backgroundImage="bg-[url('/src/assets/images/icon-self-care.svg')]"
                    backgroundColor="bg-softOrange"
                    :title="active[5].title" 
                    :hours="active[5].timeframes.current" 
                    :hoursLastWeek="active[5].timeframes.previous" 
                /> 
            </div>
            

        </main>
    </div>
</template>

<script setup>
import {ref, onMounted} from 'vue'
import data from '@/data/data.json'
import forEach from 'lodash/forEach'
import Card from './Card.vue'

const weekly = []
const daily = []
const monthly = []

forEach(data, (item) => {
    // console.log(item)
    weekly.push({
        title: item.title,
        timeframes: item.timeframes.weekly,
    })

    daily.push({
        title: item.title,
        timeframes: item.timeframes.daily,
    })

     monthly.push({
        title: item.title,
        timeframes: item.timeframes.monthly,
    })
})

const active = ref(weekly)

const toggleDaily = () => active.value = daily

const toggleWeekly = () => active.value = weekly

const toggleMonthly = () => active.value = monthly

const toggleYearly = () => active.value = null

</script>