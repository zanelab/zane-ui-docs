<script lang="ts" setup>
import { ref } from 'vue';

type Item = {
  label: string;
  type: 'danger' | 'info' | 'primary' | 'success' | 'warning';
};

const items = ref<Array<Item>>([
  { label: 'Tag 1', type: 'primary' },
  { label: 'Tag 2', type: 'success' },
  { label: 'Tag 3', type: 'info' },
  { label: 'Tag 4', type: 'warning' },
  { label: 'Tag 5', type: 'danger' },
]);
</script>

<template>
  <div>
    <div class="flex gap-2">
      <span>Dark</span>
      <zane-tag
        v-for="item in items"
        :key="item.label"
        :type="item.type"
        effect="dark"
      >
        {{ item.label }}
      </zane-tag>
    </div>
    <div class="mt-4 flex gap-2">
      <span>Light</span>
      <zane-tag
        v-for="item in items"
        :key="item.label"
        :type="item.type"
        effect="light"
      >
        {{ item.label }}
      </zane-tag>
    </div>
    <div class="mt-4 flex gap-2">
      <span>Plain</span>
      <zane-tag
        v-for="item in items"
        :key="item.label"
        :type="item.type"
        effect="plain"
      >
        {{ item.label }}
      </zane-tag>
    </div>
  </div>
</template>
