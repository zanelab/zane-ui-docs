<script setup lang="ts">
import { ref } from 'vue';

const isCollapsible = ref(true);
</script>

<!-- eslint-disable vue/html-self-closing -->
<template>
  <div>
    <zane-switch
      :value="isCollapsible"
      active-text="enable"
      inactive-text="disable"
      inline-prompt
      class="mb-2"
    />
    <div
      style="height: 250px; box-shadow: var(--zane-border-color-light) 0 0 2px"
    >
      <zane-splitter>
        <zane-splitter-panel :collapsible="isCollapsible" min="50">
          <div class="demo-panel">1</div>
        </zane-splitter-panel>
        <zane-splitter-bar></zane-splitter-bar>
        <zane-splitter-panel :collapsible="isCollapsible">
          <div class="demo-panel">2</div>
        </zane-splitter-panel>
        <zane-splitter-bar></zane-splitter-bar>
        <zane-splitter-panel>
          <div class="demo-panel">3</div>
        </zane-splitter-panel>
        <zane-splitter-bar></zane-splitter-bar>
        <zane-splitter-panel :collapsible="isCollapsible">
          <zane-splitter layout="vertical">
            <zane-splitter-panel :collapsible="isCollapsible">
              <div class="demo-panel">4</div>
            </zane-splitter-panel>
            <zane-splitter-bar></zane-splitter-bar>
            <zane-splitter-panel :collapsible="isCollapsible">
              <div class="demo-panel">5</div>
            </zane-splitter-panel>
          </zane-splitter>
        </zane-splitter-panel>
      </zane-splitter>
    </div>
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
