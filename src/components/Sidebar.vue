<script setup>

import NavLink from '@/components/NavLink.vue'
import { useRouter } from 'vue-router';
import { useUserStore } from '../stores/user';

const router = useRouter()

const userStore = useUserStore()

const props = defineProps(['isExpanded', 'toggleSidebar'])

const handleLogout = () => {
    
}

</script>

<template>
    <div 
        class="fixed -translate-x-full md:translate-x-0 min-w-fit overflow-hidden bg-gray-950 text-white h-screen md:sticky top-0 ease-in-out duration-300 z-20"
        :class="isExpanded && 'is-expanded'"
        > 
            <div class="h-full bg-gray-950 flex flex-col">
                <div class="relative flex flex-col items-center border-b-2 p-4 space-y-4">
                    <img src="../assets/favicon.svg" alt="logo" class="w-14">
                    <h1 class="text-2xl">Real Estate Management</h1>
                </div>
                <div class="flex flex-col justify-between h-full">
                    <div>
                        <NavLink link="home" icon="dashboard" text="Dashboard" @click="toggleSidebar"/>
                        <NavLink link="property" icon="real_estate_agent" text="Properties" @click="toggleSidebar"/>
                        <NavLink link="inquiry" icon="forum" text="Inquiries" @click="toggleSidebar"/>
                    </div>
                    <div v-if="!userStore.authenticated">
                        <NavLink link="signup" icon="person_add" text="Signup" @click="toggleSidebar"/>
                        <NavLink link="login" icon="login" text="Login" @click="toggleSidebar"/>
                    </div>
                    <div v-else>
                        <NavLink link="login" icon="logout" text="Logout" @click="toggleSidebar"/>
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
