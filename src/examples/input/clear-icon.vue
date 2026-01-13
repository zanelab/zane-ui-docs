<script lang="ts" setup>
import { ref } from 'vue';

const input = ref('Custom clear icon');
</script>

<template>
  <zane-input
    :value="input"
    clearable
    clear-icon="close-bold"
    placeholder="Custom clear icon"
  />
</template>
