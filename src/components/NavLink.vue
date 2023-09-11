<script setup>

const props = defineProps(['link', 'icon', 'text'])

</script>

<template>
    <RouterLink :to="{ name: link }"
        class="py-4 flex items-center space-x-4 px-4"
    >
        <span class="material-symbols-outlined">{{ icon }}</span>
        <span class="text-xl font-bold">{{ text }}</span>
    </RouterLink>
</template>
