<!-- eslint-disable vue/html-self-closing -->
<script setup lang="ts">
import { ref } from 'vue';

const input1 = ref('');
const input2 = ref('');
const input3 = ref('');
const input4 = ref('');
</script>

<template>
  <div class="demo-input-with-icon">
    <div class="input-group">
      <span class="label">Using attributes</span>
      <div class="input-container">
        <zane-input
          :value="input1"
          class="responsive-input"
          placeholder="Pick a date"
          suffix-icon="calendar"
        />
        <zane-input
          :value="input2"
          class="responsive-input"
          placeholder="Type something"
          prefix-icon="search"
        />
      </div>
    </div>
    <div class="input-group">
      <span class="label">Using slots</span>
      <div class="input-container">
        <zane-input
          :value="input3"
          class="responsive-input"
          placeholder="Pick a date"
        >
          <zane-icon slot="suffix" class="zane-input__icon" name="calendar" />
        </zane-input>
        <zane-input
          :value="input4"
          class="responsive-input"
          placeholder="Type something"
        >
          <zane-icon slot="prefix" name="search" />
        </zane-input>
      </div>
    </div>
  </div>
</template>

<style scoped>
.demo-input-with-icon {
  width: 100%;
}

.input-group {
  margin-bottom: 1.5rem;
}

.label {
  display: block;
  margin-bottom: 1rem;
  color: var(--el-text-color-regular);
}

.input-container {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}

.responsive-input {
  width: 240px;
}

@media (max-width: 768px) {
  .input-container {
    flex-direction: column;
    gap: 1rem;
  }

  .responsive-input {
    width: 100%;
  }
}
</style>
