<script setup>

const props = defineProps(['property'])

</script>
<template>
    <div class="bg-white overflow-hidden rounded-lg p-2 flex flex-col space-y-4 shadow-xl border">
        <div class="w-full relative overflow-hidden rounded-sm bg-green-400">
            <img :src="property.image" alt="" class="w-full">
        </div>
        <div class="w-full flex flex-col space-y-4">
            <small class="text-white px-2 py-1 rounded-md text-lg w-fit" :class="property.color">
                {{ property.type }}
            </small>
            <div>
                <h1 class="text-3xl">{{ property.title }}</h1>
                <p class="text-2xl">{{ property.price }} AFN</p>
            </div>
        </div>
        <div class="w-full">
            <a href="#" class="block py-2 px-3 bg-blue-600 text-white text-xl lg:text-2xl text-center rounded-md">View
                Property</a>
        </div>
    </div>
</template>
