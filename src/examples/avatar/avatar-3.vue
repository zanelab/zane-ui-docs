<script lang="ts" setup>
const errorHandler = () => true;
</script>

<template>
  <div class="demo-type">
    <zane-avatar :size="60" src="https://empty" @img-error="errorHandler">
      <img
        src="https://cube.elemecdn.com/e/fd/0fc7d20532fdaf769a25683617711png.png"
      />
    </zane-avatar>
  </div>
</template>
