<script lang="ts" setup>
import { ref } from 'vue';

const textarea1 = ref('');
const textarea2 = ref('');
</script>

<template>
  <div class="flex flex-col gap-[20px]">
    <zane-input
      :value="textarea1"
      style="width: 240px"
      autosize
      type="textarea"
      placeholder="Please input"
    />
    <zane-input
      :value="textarea2"
      style="width: 240px"
      :autosize="{ minRows: 2, maxRows: 4 }"
      type="textarea"
      placeholder="Please input"
    />
  </div>
</template>
