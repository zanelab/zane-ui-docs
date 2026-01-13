<template>
  <div class="button-example">
    <div class="button-row">
      <zane-button>Default</zane-button>
      <zane-button type="primary">Primary</zane-button>
      <zane-button type="success">Success</zane-button>
      <zane-button type="info">Info</zane-button>
      <zane-button type="warning">Warning</zane-button>
      <zane-button type="danger">Danger</zane-button>
    </div>

    <div class="button-row">
      <zane-button plain>Plain</zane-button>
      <zane-button type="primary" plain>Primary</zane-button>
      <zane-button type="success" plain>Success</zane-button>
      <zane-button type="info" plain>Info</zane-button>
      <zane-button type="warning" plain>Warning</zane-button>
      <zane-button type="danger" plain>Danger</zane-button>
    </div>

    <div class="button-row">
      <zane-button round>Round</zane-button>
      <zane-button type="primary" round>Primary</zane-button>
      <zane-button type="success" round>Success</zane-button>
      <zane-button type="info" round>Info</zane-button>
      <zane-button type="warning" round>Warning</zane-button>
      <zane-button type="danger" round>Danger</zane-button>
    </div>

    <div class="button-row">
      <zane-button icon="search" circle />
      <zane-button type="primary" icon="close" circle />
      <zane-button type="success" icon="delete" circle />
      <zane-button type="info" icon="info-filled" circle />
      <zane-button type="warning" icon="warning-filled" circle />
      <zane-button type="danger" icon="warn-triangle-filled" circle />
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
