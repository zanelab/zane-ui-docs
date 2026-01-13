<template>
  <zane-scrollbar height="400px">
    <p v-for="item in 20" :key="item" class="scrollbar-demo-item">{{ item }}</p>
  </zane-scrollbar>
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
