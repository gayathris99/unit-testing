<template>
    <div>
      <p v-if="loading" data-test="loading">Loading...</p>
  
      <p v-else-if="error" data-test="error">
        Failed to load
        <button data-test="retry" @click="loadUser">
          Retry
        </button>
      </p>
  
      <p v-else data-test="user">
        {{ user }}
      </p>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue'
  
  const user = ref('')
  const loading = ref(false)
  const error = ref(false)
  
  async function loadUser() {
    loading.value = true
    error.value = false
  
    try {
      const res = await fetch('/api/user')
      const data = await res.json()
      user.value = data.name
    } catch (e) {
      error.value = true
    } finally {
      loading.value = false
    }
  }
  
  onMounted(loadUser)
  </script>
  