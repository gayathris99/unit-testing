<template>
    <form @submit.prevent="handleSubmit">
      <input
        data-test="email"
        type="text"
        v-model="email"
        placeholder="Enter email"
      />
  
      <p v-if="error" data-test="error">
        Email is required
      </p>
  
      <button data-test="submit" type="submit">
        Submit
      </button>
    </form>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  
  const emit = defineEmits(['submit'])
  
  const email = ref('')
  const error = ref(false)
  
  function handleSubmit() {
    if (!email.value) {
      error.value = true
      return
    }
  
    error.value = false
    emit('submit', email.value)
  }
  </script>
  