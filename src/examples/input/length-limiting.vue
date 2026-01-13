<script lang="ts" setup>
import { ref } from 'vue';

const text = ref('');
const textarea = ref('');
</script>
<!-- eslint-disable vue/html-self-closing -->
<template>
  <div>
    <zane-input
      :value="text"
      style="width: 240px"
      max-length="10"
      placeholder="Please input"
      show-word-limit
      type="text"
    ></zane-input>
    <zane-input
      :value="text"
      class="ml-4"
      style="width: 240px"
      max-length="10"
      placeholder="Please input"
      show-word-limit
      word-limit-position="outside"
      type="text"
    ></zane-input>
    <div style="margin: 20px 0" />
    <zane-input
      :value="textarea"
      max-length="30"
      style="width: 240px"
      placeholder="Please input"
      show-word-limit
      type="textarea"
    ></zane-input>
    <zane-input
      :value="textarea"
      class="ml-4"
      max-length="30"
      style="width: 240px"
      placeholder="Please input"
      show-word-limit
      word-limit-position="outside"
      type="textarea"
    ></zane-input>
  </div>
</template>
