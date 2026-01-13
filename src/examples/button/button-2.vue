<template>
  <div class="button-example">
    <div class="button-row">
      <zane-button disabled>Default</zane-button>
      <zane-button type="primary" disabled>Primary</zane-button>
      <zane-button type="success" disabled>Success</zane-button>
      <zane-button type="info" disabled>Info</zane-button>
      <zane-button type="warning" disabled>Warning</zane-button>
      <zane-button type="danger" disabled>Danger</zane-button>
    </div>

    <div class="button-row">
      <zane-button plain disabled>Plain</zane-button>
      <zane-button type="primary" plain disabled>Primary</zane-button>
      <zane-button type="success" plain disabled>Success</zane-button>
      <zane-button type="info" plain disabled>Info</zane-button>
      <zane-button type="warning" plain disabled>Warning</zane-button>
      <zane-button type="danger" plain disabled>Danger</zane-button>
    </div>
  </div>
</template>

<style scoped>
.button-example {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.button-row {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  align-items: center;
}

.button-row > * {
  margin: 0;
}
</style>
