import { ref, reactive } from 'vue'
import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', () => {
  
  const authenticated = ref(false)

  const user = reactive({
    email: 'test@test.com',
    password: 'testuser'
  })

  return { authenticated }
})
