<template>
  <zane-card style="max-width: 480px">
    <div slot="header" class="card-header">
      <span>Card name</span>
    </div>
    <p v-for="o in 4" :key="o" class="text item">{{ `List item ${o}` }}</p>
    <span slot="footer">Footer content</span>
  </zane-card>
</template>
