<script setup>
import InquiryItem from '../components/InquiryItem.vue';
</script>

<template>
    <div>
      <h1 class="text-3xl font-bold">Inquiries</h1>
      <div class="py-2 rounded-md">
        <div 
          class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
        <InquiryItem />
        </div>
      </div>
    </div>
</template>

<style scoped>
</style>
