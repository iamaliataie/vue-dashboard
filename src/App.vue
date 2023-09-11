<script setup>
import { ref } from 'vue';

import Header from '@/components/Header.vue'
import Sidebar from '@/components/Sidebar.vue'

const isExpanded = ref(false);

const toggleSidebar = () => {
  isExpanded.value = !isExpanded.value;
}

</script>

<template>
  <div class="flex h-full">
    
    <Sidebar :isExpanded="isExpanded" :toggleSidebar="toggleSidebar"/>

    <div class="w-full flex flex-col min-h-screen" >
        <Header :isExpanded="isExpanded" :toggleSidebar="toggleSidebar" />

        <div class="flex-1 p-6 bg-gray-100 z-0">
          <RouterView />
        </div>

        <footer class="h-[50px] bg-emerald-800 text-white flex justify-center items-center py-[30px]">
          <h1 class="text-xl font-semibold">by Ali Ahmad Ataie</h1>
        </footer>

    </div>

  </div>
</template>
