<template>
    <div>
      <p v-if="loading" data-test="loading">Loading...</p>
      <p v-else data-test="user">{{ user }}</p>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue'
  
  const user = ref('')
  const loading = ref(true)
  
  onMounted(async () => {
    try {
        const res = await fetch('/api/user')
    const data = await res.json()
    user.value = data.name
    loading.value = false
    } catch (error) {
    errorMessage.value = 'Something went wrong'
  }

  })
  </script>
  