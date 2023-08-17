<script setup>
import { defineProps } from 'vue'

const props = defineProps(['isExpanded'])

</script>

<template>
    <div 
        class="w-0 md:w-[70px] overflow-hidden h-screen bg-gray-950 text-white sticky top-0 transition-all ease-in-out duration-300"
        :class="isExpanded && 'is-expanded'"
    > 
        <div class="bg-gray-700 h-[50px] flex justify-center items-center">
            <h1 class="text-xl font-bold">Dashboard</h1>
        </div>
        <div class="flex flex-col justify-between">
            <div class="flex flex-col">
                <RouterLink to="/" class="p-4 flex space-x-4 items-center ease-in-out duration-100">
                    <span class="material-symbols-outlined icon">home</span>
                    <span class="text-xl font-bold transition-all ease-out duration-300"
                    :class="!isExpanded && 'opacity-0 -translate-x-4'"
                    >
                        Home
                    </span>
                </RouterLink>
                <RouterLink to="/about" class="p-4 flex space-x-4 items-center ease-in-out duration-100">
                    <span class="material-symbols-outlined icon">tune</span>
                    <span class="text-xl font-bold transition-all ease-out duration-300"
                    :class="!isExpanded && 'opacity-0 -translate-x-4'"
                    >
                        Settings
                    </span>
                </RouterLink>
            </div>
        </div>
    </div>
</template>

<style scoped>

.is-expanded{
    @apply
        w-[400px]
        md:w-[300px]
}

.router-link-exact-active{
    @apply
        text-emerald-600
        bg-gray-800
        border-e-4
        border-emerald-600
}

.icon {
    font-size: 28px;
}
</style>
