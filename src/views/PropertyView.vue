<script setup>
import PropertyItem from '../components/PropertyItem.vue';
import { usePropertyStore } from '../stores/property';

const propertyStore = usePropertyStore()

const properties = propertyStore.properties

</script>

<template>
    <div>
      <h1 class="text-3xl font-bold">Property page</h1>
      <div class="py-2 rounded-md">
        <div 
          class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <PropertyItem v-for="(property, index) in properties" :key="index" :property="property" />
        </div>
      </div>
    </div>
</template>
