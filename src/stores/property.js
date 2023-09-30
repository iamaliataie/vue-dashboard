import { ref, reactive } from 'vue'
import { defineStore } from 'pinia'

export const usePropertyStore = defineStore('property', () => {
  
    const properties = ref([
        {
            "title": "House 1",
            "price": 1000.00,
            "type": "Residential",
            "image": "/images/property/p1.png",
            "color": "bg-green-500",
        },
        {
            "title": "House 2",
            "price": 2000.00,
            "type": "Commercial",
            "image": "/images/property/p2.png",
            "color": "bg-red-500",
        },
        {
            "title": "House 3",
            "price": 3000.00,
            "type": "Rental",
            "image": "/images/property/p3.png",
            "color": "bg-yellow-500",
        },
        {
            "title": "House 4",
            "price": 4000.00,
            "type": "Residential",
            "image": "/images/property/p4.png",
            "color": "bg-green-500",
        },
        {
            "title": "House 5",
            "price": 5000.00,
            "type": "Commercial",
            "image": "/images/property/p5.png",
            "color": "bg-red-500",
        },
        {
            "title": "House 6",
            "price": 6000.00,
            "type": "Rental",
            "image": "/images/property/p6.png",
            "color": "bg-yellow-500",
        },
    ])

  return { properties }
})
