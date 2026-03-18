<template>
  <div class="flex flex-row gap-4">
    <zane-tooltip
      content="I'm a tooltip!"
      animation="fade"
      :animate-fill="false"
      :follow-cursor="true"
    >
      <zane-button class="h-10">Default</zane-button>
    </zane-tooltip>
    <zane-tooltip
      content="I'm a tooltip!"
      animation="fade"
      :animate-fill="false"
      follow-cursor="horizontal"
    >
      <zane-button class="h-10">Horizontal</zane-button>
    </zane-tooltip>
    <zane-tooltip
      content="I'm a tooltip!"
      animation="fade"
      :animate-fill="false"
      follow-cursor="vertical"
    >
      <zane-button class="h-10">Vertical</zane-button>
    </zane-tooltip>
    <zane-tooltip
      content="I'm a tooltip!"
      animation="fade"
      :animate-fill="false"
      follow-cursor="initial"
    >
      <zane-button class="h-10">Initial</zane-button>
    </zane-tooltip>
  </div>
</template>
