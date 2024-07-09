<template>
    <div class="search-bar">
      <input type="text" v-model="searchQuery" placeholder="Поиск по имени или компании" @input="updateSearch" />
    </div>
  </template>
  
  <script setup>
  import { ref, defineEmits } from 'vue';
  const emit = defineEmits(['updateSearch']);
  
  const searchQuery = ref('');
  
  const updateSearch = () => {
    emit('updateSearch', searchQuery.value);
  };
  </script>
  
  <style scoped lang="scss">
  .search-bar {
    margin-bottom: 10px;
    width: 100%;
    height: 50%;
    display: flex;
    justify-content: center;
  
    input {
      padding: 5px;
      width: 80%;
      border: 1px solid #ddd;
      border-radius: 5px;
    }
  }
  </style>
  