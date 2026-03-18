<template>
  <div class="flex flex-row gap-4">
    <zane-tooltip content="Default theme">
      <zane-button>Default</zane-button>
    </zane-tooltip>

    <zane-tooltip content="Light theme" theme="light">
      <zane-button>Light</zane-button>
    </zane-tooltip>

    <zane-tooltip content="Light border theme" theme="light-border">
      <zane-button>Light border</zane-button>
    </zane-tooltip>

    <zane-tooltip content="Material theme" theme="material">
      <zane-button>Material</zane-button>
    </zane-tooltip>

    <zane-tooltip content="Translucent theme" theme="translucent">
      <zane-button>Translucent</zane-button>
    </zane-tooltip>

    <zane-tooltip content="Custom theme" theme="custom">
      <zane-button>Custom</zane-button>
    </zane-tooltip>
  </div>
</template>

<style>
.zane-tooltip-box[data-theme~='custom'] {
  color: yellow;
  background-color: tomato;
}

.zane-tooltip-box[data-theme~='custom'][data-placement^='top']
  > .zane-tooltip-arrow::before {
  border-top-color: tomato;
}
</style>
