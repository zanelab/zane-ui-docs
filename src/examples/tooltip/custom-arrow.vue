<template>
  <div class="flex flex-row gap-4">
    <zane-tooltip content="Default arrow" :arrow="true">
      <zane-button>Default</zane-button>
    </zane-tooltip>

    <zane-tooltip content="Round arrow" arrow="round">
      <zane-button>Round</zane-button>
    </zane-tooltip>

    <zane-tooltip content="Large arrow" theme="large-arrow" :offset="[0, 16]">
      <zane-button>Large</zane-button>
    </zane-tooltip>

    <zane-tooltip content="Small arrow" theme="small-arrow" :offset="[0, 8]">
      <zane-button>Small</zane-button>
    </zane-tooltip>

    <zane-tooltip content="Wide arrow" theme="wide-arrow">
      <zane-button>Wide</zane-button>
    </zane-tooltip>

    <zane-tooltip content="Narrow arrow" theme="narrow-arrow">
      <zane-button>Narrow</zane-button>
    </zane-tooltip>
  </div>
</template>

<style>
.zane-tooltip-box[data-theme~='scaled-arrow'] > .zane-tooltip-arrow::before {
  transform: scale(1.25);
}

.zane-tooltip-box[data-theme~='large-arrow'] > .zane-tooltip-arrow::before {
  transform: scale(1.75);
}

.zane-tooltip-box[data-theme~='small-arrow'] > .zane-tooltip-arrow::before {
  transform: scale(0.75);
}

.zane-tooltip-box[data-theme~='wide-arrow'] > .zane-tooltip-arrow::before {
  transform: scaleX(1.5);
}

.zane-tooltip-box[data-theme~='narrow-arrow'] > .zane-tooltip-arrow::before {
  transform: scale(0.6, 1.2);
}
</style>
