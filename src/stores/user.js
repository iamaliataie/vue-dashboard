import { ref, reactive } from 'vue'
import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', () => {
  
  const authenticated = ref(false)
  const message = ref('')
  const user = reactive({
    email: 'test@test.com',
    password: 'testuser'
  })

  const handleLogin = (credentials) => {
    const { email, password } = credentials
    message.value = ''
    if (email == user.email && password == user.password) {
      return authenticated.value = true;
    }
    message.value = 'Invalid credentials'
  }

  const handleLogout = () => {
    authenticated.value = false
  }

  return { authenticated, message, handleLogin, handleLogout }
})
