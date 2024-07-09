<template>
  <li class="visitor-item" @click="openEditForm">
    <span class="visitor-id-info">{{ props.visitor.id }}</span>
    <span class="visitor-info">{{ props.visitor.name }}</span>
    <span class="visitor-info">{{ props.visitor.company }}</span>
    <span class="visitor-info">{{ props.visitor.group }}</span>
    <div class="visitor-presence-info">
      <div :class="['presence-indicator', { 'present': props.visitor.present, 'absent': !props.visitor.present }]"></div>
    </div>
  </li>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue';
const props = defineProps({
  visitor: Object,
});
const emit = defineEmits(['click']);

const openEditForm = () => {
  emit('click');
};
</script>

<style scoped lang="scss">
.visitor-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  gap:250px;
  cursor: pointer;

  .visitor-presence-info{
    display:flex;
    justify-content: end;
  }

  .visitor-id-info{
    text-align: left;
    font-family: Open Sans;
    font-size: 30px;
    font-weight: 400;
    line-height: 40.85px;
  }

  .visitor-info {
    flex: 1;
    display:flex;
    font-family: Open Sans;
    font-size: 30px;
    font-weight: 400;
    line-height: 40.85px;
  }

  .presence-indicator {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    float:right;
  }

  .presence-indicator.present {
    background-color: #4caf50;
  }

  .presence-indicator.absent {
    background-color: #f44336;
  }
}
</style>
