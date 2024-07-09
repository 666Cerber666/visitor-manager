<template>
  <div id="app">
    <VisitorList />
  </div>
</template>

<script setup>
import VisitorList from './components/VisitorList.vue';
import { createPinia } from 'pinia';
import { createApp } from 'vue';

const app = createApp({});
app.use(createPinia());
app.mount('#app');
</script>

<style lang="scss">

*{
  font-family: "Open Sans", sans-serif;
  font-optical-sizing: auto;
  font-style: normal;
  font-variation-settings:
    "wdth" 100;
}
</style>
