<script lang="ts" setup>
import { ref } from 'vue';

const textarea = ref('');
</script>

<template>
  <zane-input
    :value="textarea"
    style="width: 240px"
    :rows="2"
    type="textarea"
    placeholder="Please input"
  />
</template>
