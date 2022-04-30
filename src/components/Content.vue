<template>
    <div class="flex justify-center bg-gray-900 h-screen">
        <main class="pt-16">

            <div class="rounded-xl bg-indigo-900">
            <div class="rounded-xl bg-indigo-500 p-6 flex justify-center items-center text-white">
                <div class="w-14 ">
                    <img class="border-2 rounded-full" src="@/assets/images/image-jeremy.png" alt="">
                </div>
                <div class="pl-6">
                    <p class="text-indigo-200 text-xs">Report for</p>
                    <h2 class="text-xl">Jeremy Robson</h2>
                </div>
            </div>

            <div class="py-4 flex justify-center gap-8 text-sm text-indigo-300 ">
                <button class=" hover:text-white">Daily</button>
                <button class=" hover:text-white">Weekly</button>
                <button class=" hover:text-white">Monthly</button>
            </div>
            </div>

        <Card title="Work" hours="32hrs"/>



        </main>
    </div>
 
</template>

<script setup>
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

// console.log(data)
console.log(weekly, daily, monthly)




</script>