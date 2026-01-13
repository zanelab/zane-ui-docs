<template>
  <zane-scrollbar>
    <div class="scrollbar-flex-content">
      <p v-for="item in 50" :key="item" class="scrollbar-demo-item">
        {{ item }}
      </p>
    </div>
  </zane-scrollbar>
</template>

<style scoped>
.scrollbar-flex-content {
  display: flex;
  width: fit-content;
}

.scrollbar-demo-item {
  display: flex;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 50px;
  margin: 10px;
  color: var(--zane-color-danger);
  text-align: center;
  background: var(--zane-color-danger-light-9);
  border-radius: 4px;
}
</style>
