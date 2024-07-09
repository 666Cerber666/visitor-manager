import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useVisitorStore = defineStore('visitor', () => {
  const visitors = ref(JSON.parse(localStorage.getItem('visitors')) || []);
  
  const addVisitor = (newVisitor) => {
    newVisitor.id = visitors.value.length + 1;
    visitors.value.push(newVisitor);
    saveToLocalStorage();
  };

  const updateVisitor = (updatedVisitor) => {
    const index = visitors.value.findIndex(visitor => visitor.id === updatedVisitor.id);
    if (index !== -1) {
      visitors.value[index] = updatedVisitor;
      saveToLocalStorage();
    }
  };

  const saveToLocalStorage = () => {
    localStorage.setItem('visitors', JSON.stringify(visitors.value));
  };

  return { visitors, addVisitor, updateVisitor };
});
