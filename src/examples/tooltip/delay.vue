<template>
  <div class="flex flex-row gap-4">
    <zane-tooltip
      content="I'm a tooltip!"
      animation="fade"
      :animate-fill="false"
      :delay="500"
    >
      <zane-button>500</zane-button>
    </zane-tooltip>
    <zane-tooltip
      content="I'm a tooltip!"
      animation="fade"
      :animate-fill="false"
      :delay="[800, 0]"
    >
      <zane-button>[800, 0]</zane-button>
    </zane-tooltip>
    <zane-tooltip
      content="I'm a tooltip!"
      animation="fade"
      :animate-fill="false"
      :delay="[0, 800]"
    >
      <zane-button>[0, 800]</zane-button>
    </zane-tooltip>
  </div>
</template>
