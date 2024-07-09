<template>
  <div class="modal-background">
    <div class="visitor-form">
      <div class="form">
        <div class="form-labels">
          <label for="name">ФИО</label>
          <label for="company">Компания</label>
          <label for="group">Группа</label>
          <label for="present">Присутствие</label>
        </div>
        <div class="form-inputs">
          <input id="name" v-model="name" placeholder="ФИО"/>
          <input id="company" v-model="company" placeholder="Компания"/>
          <select id="group" v-model="group">
            <option value="Прохожий">Прохожий</option>
            <option value="Клиент">Клиент</option>
            <option value="Партнер">Партнер</option>
          </select>
          <div class="presence-checkbox">
            <input id="present" type="checkbox" v-model="present" /> 
          </div>
        </div>
      </div>
      <div class="form-buttons">
        <button @click="saveVisitor">Сохранить</button>
        <button class="button-close" @click="closeForm">Закрыть</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, watchEffect, defineProps, defineEmits } from 'vue';
const props = defineProps({
  visitor: Object,
});
const emit = defineEmits(['save', 'close']);

const name = ref(props.visitor?.name || '');
const company = ref(props.visitor?.company || '');
const group = ref(props.visitor?.group || 'Прохожий');
const present = ref(props.visitor?.present || false);

watchEffect(() => {
  if (props.visitor) {
    name.value = props.visitor.name;
    company.value = props.visitor.company;
    group.value = props.visitor.group;
    present.value = props.visitor.present;
  }
});

const saveVisitor = () => {
  const newVisitor = { id: props.visitor?.id, name: name.value, company: company.value, group: group.value, present: present.value };
  emit('save', newVisitor);
};

const closeForm = () => {
  emit('close');
};
</script>

<style scoped lang="scss">
.modal-background {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
}

.visitor-form {
  background: white;
  width: 60%;
  padding: 40px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 2;

  .form {
    display: flex;
    gap: 50px;
  }

  .form-labels {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    gap: 15px;
  }

  .form-inputs {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;
    gap: 15px;
  }

  input, select {
    padding: 5px;
    width: 100%;
    border: none;
    box-shadow: 0px 3px 3px 0px #00000029;
  }

  .presence-checkbox {
    display: flex;
    align-items: center;
  }

  .form-buttons {
    display: flex;
    justify-content: center;
    width: 100%;
    margin-top: 20px;

    button {
      background-color: #4caf50;
      border-radius: 2px;
      width: 15%;
      color: white;
      border: none;
      padding: 10px;
      box-shadow: 0px 3px 3px 0px #00000029;
      cursor: pointer;

      &:hover {
        background-color: #45a049;
      }

      &:first-child {
        margin-right: 10px;
      }
    }

    .button-close {
      background: #737373;
      box-shadow: 0px 3px 3px 0px #00000029;

      &:hover {
        background-color: #575757;
      }
    }
  }
}
</style>
