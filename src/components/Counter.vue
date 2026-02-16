<template>
    <div>
      <p data-test="count">{{ count }}</p>
  
      <button
        data-test="increment"
        @click="increment"
        :disabled="count >= 5"
        >
        Increment
        </button>

  
      <button data-test="decrement" @click="decrement">
        Decrement
      </button>

      <p v-if="count >= 5" data-test="limit">
        Limit reached
    </p>

    <button data-test="reset" @click="count = 0">
        Reset
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
  