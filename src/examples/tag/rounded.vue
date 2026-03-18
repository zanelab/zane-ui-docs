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
      <zane-tag
        v-for="item in items"
        :key="item.label"
        :type="item.type"
        effect="dark"
        round
      >
        {{ item.label }}
      </zane-tag>
    </div>
    <div class="mt-4 flex gap-2">
      <zane-tag
        v-for="item in items"
        :key="item.label"
        :type="item.type"
        effect="light"
        round
      >
        {{ item.label }}
      </zane-tag>
    </div>
    <div class="mt-4 flex gap-2">
      <zane-tag
        v-for="item in items"
        :key="item.label"
        :type="item.type"
        effect="plain"
        round
      >
        {{ item.label }}
      </zane-tag>
    </div>
  </div>
</template>
