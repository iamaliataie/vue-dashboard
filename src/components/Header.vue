<script setup>

const props = defineProps(['toggleSidebar']);

</script>

<template>
    <div class="bg-gray-300 w-full sticky top-0">
        <div class="flex flex-row-reverse justify-between items-center h-[50px] w-full px-4">
            <span class="md:hidden material-symbols-outlined cursor-pointer"
                @click="toggleSidebar"
                >menu</span>
        </div>
    </div>  
</template>

<style scoped>

</style>
