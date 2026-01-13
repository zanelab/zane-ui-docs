<script lang="ts" setup>
import { onBeforeUnmount, onMounted, ref } from 'vue';

const scrollbarRef = ref();
const num = ref(30);

const loadMore = (direction: string) => {
  if (direction === 'bottom') {
    num.value += 5;
  }
};

const onEndReachedHandler = (e: CustomEvent) => {
  loadMore(e.detail);
};

onMounted(() => {
  scrollbarRef.value.addEventListener('end-reached', onEndReachedHandler);
});

onBeforeUnmount(() => {
  scrollbarRef.value.removeEventListener('end-reached', onEndReachedHandler);
});
</script>

<template>
  <zane-scrollbar ref="scrollbarRef" height="400px">
    <p v-for="item in num" :key="item" class="scrollbar-demo-item">
      {{ item }}
    </p>
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

.zane-slider {
  margin-top: 20px;
}
</style>
