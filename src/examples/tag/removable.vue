<script lang="ts" setup>
import { ref } from 'vue';

interface TagsItem {
  name: string;
  type: 'danger' | 'info' | 'primary' | 'success' | 'warning';
}

const tags = ref<TagsItem[]>([
  { name: 'Tag 1', type: 'primary' },
  { name: 'Tag 2', type: 'success' },
  { name: 'Tag 3', type: 'info' },
  { name: 'Tag 4', type: 'warning' },
  { name: 'Tag 5', type: 'danger' },
]);
</script>

<template>
  <div class="flex gap-2">
    <zane-tag
      v-for="tag in tags"
      :key="tag.name"
      :closeable="true"
      :type="tag.type"
    >
      {{ tag.name }}
    </zane-tag>
  </div>
</template>
