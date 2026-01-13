<script lang="ts" setup>
import { ref } from 'vue';

const count = ref(3);

const add = () => {
  count.value++;
};
const onDelete = () => {
  if (count.value > 0) {
    count.value--;
  }
};
</script>

<template>
  <div>
    <zane-button @click="add">Add Item</zane-button>
    <zane-button @click="onDelete">Delete Item</zane-button>
    <zane-scrollbar max-height="400px">
      <p v-for="item in count" :key="item" class="scrollbar-demo-item">
        {{ item }}
      </p>
    </zane-scrollbar>
  </div>
</template>

<style scoped>
.scrollbar-demo-item {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  margin: 10px;
  color: var(--zane-color-primary);
  text-align: center;
  background: var(--zane-color-primary-light-9);
  border-radius: 4px;
}
</style>
