<template>
  <div class="flex flex-row gap-4">
    <zane-tooltip
      content="I'm a tooltip!"
      animation="fade"
      :animate-fill="false"
      :duration="0"
    >
      <zane-button>0</zane-button>
    </zane-tooltip>
    <zane-tooltip
      content="I'm a tooltip!"
      animation="fade"
      :animate-fill="false"
      :duration="1000"
    >
      <zane-button>1000</zane-button>
    </zane-tooltip>
    <zane-tooltip
      content="I'm a tooltip!"
      animation="fade"
      :animate-fill="false"
      :duration="[0, 1000]"
    >
      <zane-button>[0, 1000]</zane-button>
    </zane-tooltip>
    <zane-tooltip
      content="I'm a tooltip!"
      animation="fade"
      :animate-fill="false"
      :duration="[1000, 0]"
    >
      <zane-button>[1000, 0]</zane-button>
    </zane-tooltip>
  </div>
</template>
