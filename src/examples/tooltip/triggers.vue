<template>
  <div class="flex flex-row gap-4">
    <zane-tooltip
      content="I'm a tooltip!"
      animation="fade"
      :animate-fill="false"
      trigger="click"
    >
      <zane-button>Click</zane-button>
    </zane-tooltip>
    <zane-tooltip
      content="I'm a tooltip!"
      animation="fade"
      :animate-fill="false"
      trigger="focus"
    >
      <zane-button>Focus</zane-button>
    </zane-tooltip>
    <zane-tooltip
      content="I'm a tooltip!"
      animation="fade"
      :animate-fill="false"
      trigger="focusin"
    >
      <zane-button>Focusin</zane-button>
    </zane-tooltip>
    <zane-tooltip
      content="I'm a tooltip!"
      animation="fade"
      :animate-fill="false"
      trigger="mouseenter focus"
    >
      <zane-button>mouseenter focus</zane-button>
    </zane-tooltip>
  </div>
</template>
