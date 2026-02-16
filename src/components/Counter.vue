<template>
    <div>
      <p data-test="count">{{ count }}</p>
      <button @click="increment">Increment</button>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  
  const count = ref(0)
  
  function increment() {
    count.value++
  }
  </script>
  