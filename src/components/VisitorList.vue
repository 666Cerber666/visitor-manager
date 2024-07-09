<template>
  <div class="visitor-list">
    <div class="header">
      <div class="header-first">
        <img class="logo" src="../assets/logo.png" />
        <SearchBar />
        <button class="add-button" @click="showForm = true">Добавить</button>
      </div>
      <VisitorCount :total="visitors.length" :present="presentCount" />
    </div>

    <ul class="visitor-items">
      <li class="visitor-head">
        <span class="visitor-thead">Номер</span>
        <span class="visitor-thead">ФИО</span>
        <span class="visitor-thead">Компания</span>
        <span class="visitor-thead">Группа</span>
        <span class="visitor-thead">Присутствие</span>
      </li>

      <VisitorItem
        v-for="visitor in filteredVisitors"
        :key="visitor.id"
        :visitor="visitor"
        @click="editVisitor(visitor)"
      />
    </ul>
    <PresenceFilter @filter="setFilter" />
    <VisitorForm v-if="showForm" @close="closeForm" @save="addOrUpdateVisitor" :visitor="currentVisitor" />
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useVisitorStore } from '../stores/visitorStore';
import SearchBar from './SearchBar.vue';
import VisitorForm from './VisitorForm.vue';
import VisitorItem from './VisitorItem.vue';
import PresenceFilter from './PresenceFilter.vue';
import VisitorCount from './VisitorCount.vue';

const visitorStore = useVisitorStore();

const showForm = ref(false);
const filter = ref('all');
const currentVisitor = ref(null);

const visitors = computed(() => visitorStore.visitors);
const presentCount = computed(() => visitors.value.filter(visitor => visitor.present).length);

const filteredVisitors = computed(() => {
  if (filter.value === 'present') return visitors.value.filter(visitor => visitor.present);
  if (filter.value === 'absent') return visitors.value.filter(visitor => !visitor.present);
  return visitors.value;
});

const addOrUpdateVisitor = (visitor) => {
  if (visitor.id) {
    visitorStore.updateVisitor(visitor);
  } else {
    visitorStore.addVisitor(visitor);
  }
  showForm.value = false;
};

const editVisitor = (visitor) => {
  currentVisitor.value = { ...visitor };
  showForm.value = true;
};

const closeForm = () => {
  currentVisitor.value = null;
  showForm.value = false;
};

const setFilter = (newFilter) => {
  filter.value = newFilter;
};
</script>

<style scoped lang="scss">
.visitor-list {
  display: flex;
  flex-direction: column;
  padding: 15px;
  z-index: 0;
  position: relative;

  .header {
    display: flex;
    width: 100%;
    height: 90px;
    justify-content: space-between;
  }

  .header-first {
    display: flex;
    align-items: end;
    width: 40%;

    button {
      height: 50%;
    }
  }

  .logo {
    width: 190px;
    height: 100%;
  }

  .add-button {
    margin-bottom: 10px;
    width:50%;
    background-color: #4caf50;
    border-radius: 3px;
    color: white;
    border: none;
    padding: 10px 20px;
    cursor: pointer;
    font-family: Open Sans;
    font-size: 24px;
    font-weight: 400;
    line-height: 28.13px;


    &:hover {
      background-color: #45a049;
    }
  }

  .visitor-items {
    list-style-type: none;
    padding: 0;
    width: 100%;
  }

  .visitor-head {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    border-bottom: 1px solid #ddd;
    font-family: Open Sans;
    font-size: 20px;
    font-weight: 600;
    line-height: 27.24px;
    text-align: left;
    color: #4e3000;
  }
}
</style>
