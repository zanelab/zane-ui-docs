<!-- eslint-disable vue/html-self-closing -->
<template>
  <div
    style="height: 250px; box-shadow: var(--zane-border-color-light) 0 0 2px"
  >
    <zane-splitter layout="vertical">
      <zane-splitter-panel>
        <div class="demo-panel">1</div>
      </zane-splitter-panel>
      <zane-splitter-bar></zane-splitter-bar>
      <zane-splitter-panel>
        <div class="demo-panel">2</div>
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
