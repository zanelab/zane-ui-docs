<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue';

const size = ref(100);

const panel = ref();

const onUpdateSize = (e: CustomEvent) => {
  size.value = e.detail;
};

onMounted(() => {
  panel.value.addEventListener('updateSize', onUpdateSize);
});

onUnmounted(() => {
  panel.value.removeEventListener('updateSize', onUpdateSize);
});
</script>
<!-- eslint-disable vue/html-self-closing -->
<template>
  <div
    style="height: 250px; box-shadow: var(--zane-border-color-light) 0 0 2px"
  >
    <zane-splitter>
      <zane-splitter-panel>
        <div class="demo-panel">1</div>
      </zane-splitter-panel>
      <zane-splitter-bar></zane-splitter-bar>
      <zane-splitter-panel ref="panel" :max="200" :min="50">
        <div class="demo-panel">{{ size }}px</div>
      </zane-splitter-panel>
      <zane-splitter-bar></zane-splitter-bar>
      <zane-splitter-panel>
        <div class="demo-panel">3</div>
      </zane-splitter-panel>
    </zane-splitter>
  </div>
</template>

<style scoped>
.demo-panel {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}
</style>
