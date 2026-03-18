<script lang="ts" setup>
import { reactive, toRefs } from 'vue';

const state = reactive({
  fits: ['fill', 'contain', 'cover', 'none', 'scale-down'],
  url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
});

const { fits, url } = toRefs(state);
</script>

<template>
  <div class="demo-fit">
    <div v-for="fit in fits" :key="fit" class="block">
      <span class="title">{{ fit }}</span>
      <zane-avatar shape="square" :size="100" :fit="fit" :src="url" />
    </div>
  </div>
</template>

<style scoped>
.demo-fit {
  display: flex;
  justify-content: space-between;
  text-align: center;
}

.demo-fit .block {
  display: flex;
  flex: 1;
  flex-grow: 0;
  flex-direction: column;
}

.demo-fit .title {
  margin-bottom: 10px;
  font-size: 14px;
  color: var(--el-text-color-secondary);
}
</style>
