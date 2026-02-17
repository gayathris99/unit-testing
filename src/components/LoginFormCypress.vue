<template>
    <div>
      <h1>Login</h1>
  
      <input
        data-test="email"
        v-model="email"
        placeholder="Enter email"
      />
  
      <input
        data-test="password"
        type="password"
        v-model="password"
        placeholder="Enter password"
      />
  
      <button
        data-test="submit"
        @click="handleLogin"
      >
        Submit
      </button>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  import { useRouter } from 'vue-router'
  
  const email = ref('')
  const password = ref('')
  const router = useRouter()
  
  function handleLogin() {
    if (email.value && password.value) {
      router.push('/dashboard')
    }
  }
  </script>
  