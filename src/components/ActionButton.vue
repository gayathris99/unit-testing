<template>
    <button data-test="btn" @click="onAction">
      Click
    </button>
  </template>
  
  <script setup>
  defineProps({
    onAction: Function
  })
  </script>
  