<!-- eslint-disable vue/html-self-closing -->
<template>
  <div
    style="height: 250px; box-shadow: var(--zane-border-color-light) 0 0 2px"
  >
    <zane-splitter>
      <zane-splitter-panel size="30%">
        <div class="demo-panel">1</div>
      </zane-splitter-panel>
      <zane-splitter-bar></zane-splitter-bar>
      <zane-splitter-panel :min="200">
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
