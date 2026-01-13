<script lang="ts" setup>
import { reactive, toRefs } from 'vue';

const state = reactive({
  circleUrl:
    'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png',
  sizeList: ['small', '', 'large'] as const,
  squareUrl:
    'https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png',
});

const { circleUrl, sizeList, squareUrl } = toRefs(state);
</script>

<template>
  <zane-row class="demo-avatar demo-basic">
    <zane-col :lg="12" :md="12">
      <div class="sub-title">circle</div>
      <div class="demo-basic--circle">
        <div class="block">
          <zane-avatar :size="50" :src="circleUrl" />
        </div>
        <div v-for="size in sizeList" :key="size" class="block">
          <zane-avatar :size="size" :src="circleUrl" />
        </div>
      </div>
    </zane-col>
    <zane-col :lg="12" :md="12">
      <div class="sub-title">square</div>
      <div class="demo-basic--circle">
        <div class="block">
          <zane-avatar shape="square" :size="50" :src="squareUrl" />
        </div>
        <div v-for="size in sizeList" :key="size" class="block">
          <zane-avatar shape="square" :size="size" :src="squareUrl" />
        </div>
      </div>
    </zane-col>
  </zane-row>
</template>

<style scoped>
.demo-basic {
  text-align: center;
}

.demo-basic .sub-title {
  margin-bottom: 10px;
  font-size: 14px;
  color: var(--zane-text-color-secondary);
}

.demo-basic .demo-basic--circle,
.demo-basic .demo-basic--square {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.demo-basic .block:not(:last-child) {
  border-right: 1px solid var(--zane-border-color);
}

.demo-basic .block {
  flex: 1;
}

.demo-basic .el-col:not(:last-child) {
  border-right: 1px solid var(--zane-border-color);
}

@media screen and (max-width: 992px) {
  .demo-basic .el-col:not(:last-child) {
    border-right: none;
  }
}
</style>
