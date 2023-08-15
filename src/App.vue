<script setup>
import Header from '@/components/Header.vue'
import Sidebar from '@/components/Sidebar.vue'
import { ref } from 'vue';

const isExpanded = ref(false)

const toggleSidebar = () => {
  isExpanded.value = !isExpanded.value
}

</script>

<template>
  <div class="flex h-full">
    <Sidebar :isExpanded="isExpanded"/>
    <div class="w-full flex flex-col">
        <Header :toggleSidebar="toggleSidebar"/>
        <div class="flex-1 p-6">
          <RouterView />
        </div>
        <footer class="h-[50px] bg-emerald-800 text-white flex justify-center items-center py-8">
          <h1 class="text-2xl font-bold">by Ali Ahmad Ataie</h1>
        </footer>
    </div>
  </div>
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
