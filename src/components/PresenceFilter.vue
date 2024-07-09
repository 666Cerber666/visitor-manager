<template>
  <div class="presence-filter">
    Фильтровать по:
    <button @click="setFilter('all')" :class="{ active: filter === 'all' }">Без фильтра</button>
    <button @click="setFilter('present')" :class="{ active: filter === 'present' }">Присутствующим</button>
    <button @click="setFilter('absent')" :class="{ active: filter === 'absent' }">Отсутствующим</button>
  </div>
</template>

<script setup>
import { ref, defineEmits } from 'vue';

// Define the emit function
const emit = defineEmits(['filter']);

// Reactive variable to keep track of the current filter
const filter = ref('all');

// Function to set the filter and emit the filter event
const setFilter = (newFilter) => {
  filter.value = newFilter;
  emit('filter', newFilter);
};
</script>

<style scoped lang="scss">
.presence-filter {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
  position: fixed;
  bottom: 0;
  left: 1;

  button {
    color: black;
    border: none;
    padding: 10px;
    cursor: pointer;
    margin: 0 5px;

    &:hover {
      background-color: #C4C4C4;
    }

    &.active {
      background-color: #C4C4C4;
      font-weight: bold;
    }
  }
}
</style>
