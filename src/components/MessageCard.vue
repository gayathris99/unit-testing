<template>
    <div>
      hello world
      <h2 data-test="title">{{ title }}</h2>
    </div>
  </template>
  
  <script setup>
  defineProps({
    title: String
  })
  </script>
  