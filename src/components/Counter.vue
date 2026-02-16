<template>
    <div>
      <p data-test="count">{{ count }}</p>
  
      <button data-test="increment" @click="increment">
        Increment
      </button>
  
      <button data-test="decrement" @click="decrement">
        Decrement
      </button>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  
  const count = ref(0)
  
  function increment() {
    count.value++
  }
  
  function decrement() {
    count.value--
  }
  </script>
  