<template>
    <button data-test="btn" @click="handleClick">
      Click Me
    </button>
  </template>
  
  <script setup>
  const emit = defineEmits(['save'])
  
  function handleClick() {
    emit('save')
  }
  </script>
  