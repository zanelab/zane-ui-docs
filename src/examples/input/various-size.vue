<script lang="ts" setup>
import { ref } from 'vue';

const input1 = ref('');
const input2 = ref('');
const input3 = ref('');
</script>

<!-- eslint-disable vue/html-self-closing -->
<template>
  <div>
    <div class="mb-4 flex items-center gap-4">
      <zane-input
        :value="input1"
        style="width: 240px"
        size="large"
        placeholder="Please Input"
      ></zane-input>
      <zane-input
        :value="input2"
        style="width: 240px"
        placeholder="Please Input"
      ></zane-input>
      <zane-input
        :value="input3"
        style="width: 240px"
        size="small"
        placeholder="Please Input"
      ></zane-input>
    </div>
    <div class="mb-4 flex items-center gap-4">
      <zane-input
        :value="input1"
        style="width: 240px"
        size="large"
        placeholder="Please Input"
        suffix-icon="search"
      ></zane-input>
      <zane-input
        :value="input2"
        style="width: 240px"
        placeholder="Please Input"
        suffix-icon="search"
      ></zane-input>
      <zane-input
        :value="input3"
        style="width: 240px"
        size="small"
        placeholder="Please Input"
        suffix-icon="search"
      ></zane-input>
    </div>
    <div class="flex items-center gap-4">
      <zane-input
        :value="input1"
        style="width: 240px"
        size="large"
        placeholder="Please Input"
        prefix-icon="search"
      ></zane-input>
      <zane-input
        :value="input2"
        style="width: 240px"
        placeholder="Please Input"
        prefix-icon="search"
      ></zane-input>
      <zane-input
        :value="input3"
        style="width: 240px"
        size="small"
        placeholder="Please Input"
        prefix-icon="search"
      ></zane-input>
    </div>
  </div>
</template>
