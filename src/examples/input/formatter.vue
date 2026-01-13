<script lang="ts" setup>
import { ref } from 'vue';

const input = ref('');
</script>

<template>
  <zane-input
    :value="input"
    style="width: 240px"
    placeholder="Please input"
    :formatter="
      (value: string) => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
    "
    :parser="(value: string) => value.replace(/\$\s?|(,*)/g, '')"
  />
</template>
