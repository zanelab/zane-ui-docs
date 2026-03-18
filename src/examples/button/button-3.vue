<script setup lang="ts">
const buttons = [
  { text: 'plain', type: '' },
  { text: 'primary', type: 'primary' },
  { text: 'success', type: 'success' },
  { text: 'info', type: 'info' },
  { text: 'warning', type: 'warning' },
  { text: 'danger', type: 'danger' },
] as const;
</script>

<template>
  <div>
    <p>Basic link button</p>
    <div class="mb-4 flex flex-row items-center gap-4">
      <zane-button
        v-for="button in buttons"
        :key="button.text"
        :type="button.type"
        link
      >
        {{ button.text }}
      </zane-button>
    </div>

    <p>Disabled link button</p>
    <div class="flex flex-row items-center gap-4">
      <zane-button
        v-for="button in buttons"
        :key="button.text"
        :type="button.type"
        link
        disabled
      >
        {{ button.text }}
      </zane-button>
    </div>
  </div>
</template>
