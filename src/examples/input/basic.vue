<script lang="ts" setup>
import { ref } from 'vue';

const input = ref('');
</script>

<template>
  <zane-input :value="input" style="width: 240px" placeholder="Please input" />
</template>
