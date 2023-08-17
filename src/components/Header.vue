<script setup>

const props = defineProps(['toggleSidebar'])

</script>

<template>
    <div class="bg-gray-300 w-full sticky top-0">
        <div class="flex justify-between items-center h-[50px] w-full p-4">
            <span class="material-symbols-outlined cursor-pointer"
                @click="toggleSidebar"
                >menu</span>
        </div>
    </div>  
</template>

<style scoped>

</style>
