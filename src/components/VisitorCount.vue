<template>
    <div class="visitor-count">
      Посетители 
      <span><span class="visitor-total">{{ props.total }}</span> / <span class="visitor-present">{{ props.present }}</span></span>
    </div>
  </template>
  
  <script setup>
  import { defineProps } from 'vue';
  const props = defineProps({
    total: Number,
    present: Number,
  });
  </script>
  
  <style scoped lang="scss">
  .visitor-count {
    margin-bottom: 10px;
    display:flex;
    flex-direction: column;
    align-items: end;
    font-family: Open Sans;
    font-size: 30px;
    font-weight: 700;
    line-height: 40.85px;
    text-align: right;


    .visitor-total{
      color: #80BB00;
    }

    .visitor-present{
      color: #EC5937;
    }
  }
  </style>
  