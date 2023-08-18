<script setup>

const props = defineProps(['isExpanded', 'toggleSidebar'])

</script>

<template>
    <div 
        class="fixed w-0 md:w-[70px] overflow-hidden h-screen bg-gray-950 text-white md:sticky top-0 transition-all ease-in-out duration-300 z-50"
        :class="isExpanded && 'is-expanded'"
    > 
        <div class="bg-gray-700 h-[50px] grid grid-cols-3 items-center relative">
            <div class="w-[60px] col-span-1 flex justify-center ms-1">
                <img src="../assets/favicon.svg" alt="logo" class="w-8">
            </div>
            <div class="col-span-2 w-full transition ease-out duration-300"
            :class="!isExpanded && 'opacity-0 translate-x-4'">
                <h1 class="text-xl font-bold">
                    Dashboard
                </h1>
            </div>
            <strong 
            class="md:hidden absolute top-[50%] -translate-y-[50%] right-3 bg-gray-500  px-2 cursor-pointer rounded "
            v-if="isExpanded"
            @click="toggleSidebar"
            >
                X
            </strong>
        </div>
        <div class="flex flex-col justify-between h-[calc(100vh-50px)]">
                <div class="flex flex-col">
                    <RouterLink :to="{ name: 'home' }" class="p-4 flex space-x-4 items-center ease-in-out duration-100">
                        <span class="material-symbols-outlined icon">home</span>

                        <span class="text-xl font-bold transition ease-out duration-300"
                        :class="!isExpanded && 'opacity-0 -translate-x-4'"
                        >
                            Home
                        </span>
                    </RouterLink>
                    <RouterLink :to="{name: 'about'}" class="p-4 flex space-x-4 items-center ease-in-out duration-100">
                        <span class="material-symbols-outlined icon">tune</span>

                        <span class="text-xl font-bold transition ease-out duration-300"
                        :class="!isExpanded && 'opacity-0 -translate-x-4'"
                        >
                            Properties
                        </span>
                    </RouterLink>
                    <RouterLink :to="{name: 'inquiry'}" class="p-4 flex space-x-4 items-center ease-in-out duration-100">
                        <span class="material-symbols-outlined icon">tune</span>

                        <span class="text-xl font-bold transition ease-out duration-300"
                        :class="!isExpanded && 'opacity-0 -translate-x-4'"
                        >
                            Inquiries
                        </span>
                    </RouterLink>
                </div>
            <div class="flex flex-col">
                <RouterLink :to="{ name: 'signup' }" class="p-4 flex space-x-4 items-center ease-in-out duration-100">
                    <span class="material-symbols-outlined icon">tune</span>

                    <span class="text-xl font-bold transition ease-out duration-300"
                    :class="!isExpanded && 'opacity-0 -translate-x-4'"
                    >
                        Signup
                    </span>
                </RouterLink>
                <RouterLink :to="{ name: 'login' }" class="p-4 flex space-x-4 items-center ease-in-out duration-100">
                    <span class="material-symbols-outlined icon">tune</span>

                    <span class="text-xl font-bold transition ease-out duration-300"
                    :class="!isExpanded && 'opacity-0 -translate-x-4'"
                    >
                        Login
                    </span>
                </RouterLink>
            </div>
        </div>
    </div>
</template>

<style scoped>

.is-expanded{
    @apply
        w-[300px]
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
