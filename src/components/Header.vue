<script setup>

const props = defineProps(['isExpanded', 'toggleSidebar']);

</script>

<template>
    <div class="bg-gray-300 w-full sticky top-0 z-10">
        <div class="flex flex-row-reverse justify-start gap-x-2 items-center h-[50px] w-full px-4">
            <span 
                class="md:hidden material-symbols-outlined cursor-pointer"
                @click="toggleSidebar"
            >
                {{ isExpanded ? 'close': 'menu' }}
            </span>
        </div>
    </div>  
</template>
