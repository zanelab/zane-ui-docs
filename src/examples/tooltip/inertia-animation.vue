<template>
  <zane-row :gutter="20">
    <zane-col :span="8">
      <zane-tooltip
        content="I'm a tooltip!"
        animation="scale"
        :animate-fill="false"
        :inertia="true"
        :duration="[450, 175]"
        class="w-full"
      >
        <zane-button class="w-full">scale</zane-button>
      </zane-tooltip>
    </zane-col>
    <zane-col :span="8">
      <zane-tooltip
        content="I'm a tooltip!"
        animation="scale-subtle"
        :animate-fill="false"
        :inertia="true"
        :duration="[450, 175]"
        class="w-full"
      >
        <zane-button class="w-full">scale-subtle</zane-button>
      </zane-tooltip>
    </zane-col>
    <zane-col :span="8">
      <zane-tooltip
        content="I'm a tooltip!"
        animation="scale-extreme"
        :animate-fill="false"
        :inertia="true"
        :duration="[450, 175]"
        class="w-full"
      >
        <zane-button class="w-full">scale-extreme</zane-button>
      </zane-tooltip>
    </zane-col>
  </zane-row>
</template>
