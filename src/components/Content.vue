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

    <div class="pt-8">
        <div class="rounded-xl bg-orange-400">
            <div class="pr-4">
                <div class="bg-[length:60px_60px] bg-no-repeat bg-right-top bg-[url('/src/assets/images/icon-work.svg')] pt-6"></div>
            </div>
            <div class="rounded-xl bg-indigo-900 py-4">
                <div class="flex justify-evenly items-center gap-12">
                    <div class="text-white">
                        <p class="text-xs">Work</p>
                        <p class="text-2xl">32hrs</p>
                    </div>
                    <div class="text-indigo-300">
                        <div class="flex justify-end pb-4">
                            <img class="w-4" src="@/assets/images/icon-ellipsis.svg" alt="">
                        </div>
                        <p class="text-xs">Last Week - 7hrs</p>
                    </div>
                </div>
            </div>
        </div>
    </div>



  </main>
</div>
 
</template>

<script setup>
import data from '@/data/data.json'

console.log(data)


</script>