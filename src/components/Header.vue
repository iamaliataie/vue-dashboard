<script setup>

const props = defineProps(['toggleSidebar'])

</script>

<template>
    <div class="bg-gray-300 w-full sticky top-0">
        <div class="flex justify-between items-center h-[50px] w-full p-4">
            <div 
            class="bg-gray-950 h-full w-6 cursor-pointer"
            @click="toggleSidebar"
            ></div>
        </div>
    </div>  
</template>

<style scoped>

</style>
