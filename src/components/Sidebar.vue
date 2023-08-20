<script setup>

import NavLink from '@/components/NavLink.vue'

const props = defineProps(['isExpanded', 'toggleSidebar'])

</script>

<template>
    <div 
        class="fixed -translate-x-full md:translate-x-0 min-w-fit overflow-hidden bg-gray-950 text-white h-screen md:sticky top-0 ease-in-out duration-300 z-50"
        :class="isExpanded && 'is-expanded'"
    > 
            <div class="h-full bg-gray-950 flex flex-col">
                <div class="relative flex flex-col items-center border-b-2 p-4 space-y-4">
                    <img src="../assets/favicon.svg" alt="logo" class="w-14">
                    <h1 class="text-2xl">Real Estate Management</h1>
                </div>
                <div class="flex flex-col justify-between h-full">
                    <div>
                        <NavLink link="home" icon="dashboard" text="Dashboard"/>
                        <NavLink link="property" icon="real_estate_agent" text="Properties"/>
                        <NavLink link="inquiry" icon="forum" text="Inquiries"/>
                        <!-- <RouterLink :to="{ name: 'home' }"
                            class="py-4 flex items-center space-x-4 px-4"
                            @click="toggleSidebar"
                        >
                            <span class="material-symbols-outlined">dashboard</span>
                            <span class="text-xl font-bold">Dashboard</span>
                        </RouterLink> -->
                        <!-- <RouterLink :to="{ name: 'property' }"
                            class="py-4 flex items-center space-x-4 px-4"
                            @click="toggleSidebar"
                        >
                            <span class="material-symbols-outlined">real_estate_agent</span>
                            <span class="text-xl font-bold">Properties</span>
                        </RouterLink>
                        <RouterLink :to="{ name: 'inquiry' }"
                            class="py-4 flex items-center space-x-4 px-4"
                            @click="toggleSidebar"
                        >
                            <span class="material-symbols-outlined">forum</span>
                            <span class="text-xl font-bold">Inquiries</span>
                        </RouterLink> -->
                    </div>
                    <div>
                        <NavLink link="signup" icon="person_add" text="Signup"/>
                        <NavLink link="login" icon="login" text="Login"/>
                        <!-- <RouterLink :to="{ name: 'signup' }"
                            class="py-4 flex items-center space-x-4 px-4"
                            @click="toggleSidebar"
                        >
                            <span class="material-symbols-outlined">person_add</span>
                            <span class="text-xl font-bold">Signup</span>
                        </RouterLink>
                        <RouterLink :to="{ name: 'login' }"
                            class="py-4 flex items-center space-x-4 px-4"
                            @click="toggleSidebar"
                        >
                            <span class="material-symbols-outlined">login</span>
                            <span class="text-xl font-bold">Login</span>
                        </RouterLink> -->
                    </div>
                </div>
            </div>
    </div>
</template>

<style scoped>

.is-expanded {
    @apply
        translate-x-0
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
