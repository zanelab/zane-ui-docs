<template>
  <div>
    <zane-row :gutter="20">
      <zane-col :span="8">
        <zane-tooltip
          content="I'm a tooltip!"
          animation="shift-away"
          class="w-full"
        >
          <zane-button class="w-full">shift-away</zane-button>
        </zane-tooltip>
      </zane-col>
      <zane-col :span="8">
        <zane-tooltip
          content="I'm a tooltip!"
          animation="shift-away-subtle"
          class="w-full"
        >
          <zane-button class="w-full">shift-away-subtle</zane-button>
        </zane-tooltip>
      </zane-col>
      <zane-col :span="8">
        <zane-tooltip
          content="I'm a tooltip!"
          animation="shift-away-extreme"
          class="w-full"
        >
          <zane-button class="w-full">shift-away-extreme</zane-button>
        </zane-tooltip>
      </zane-col>
    </zane-row>
    <zane-row :gutter="20">
      <zane-col :span="8">
        <zane-tooltip
          content="I'm a tooltip!"
          animation="shift-toward"
          class="w-full"
        >
          <zane-button class="w-full">shift-toward</zane-button>
        </zane-tooltip>
      </zane-col>
      <zane-col :span="8">
        <zane-tooltip
          content="I'm a tooltip!"
          animation="shift-toward-subtle"
          class="w-full"
        >
          <zane-button class="w-full">shift-toward-subtle</zane-button>
        </zane-tooltip>
      </zane-col>
      <zane-col :span="8">
        <zane-tooltip
          content="I'm a tooltip!"
          animation="shift-toward-extreme"
          class="w-full"
        >
          <zane-button class="w-full">shift-toward-extreme</zane-button>
        </zane-tooltip>
      </zane-col>
    </zane-row>
    <zane-row :gutter="20">
      <zane-col :span="8">
        <zane-tooltip content="I'm a tooltip!" animation="scale" class="w-full">
          <zane-button class="w-full">scale</zane-button>
        </zane-tooltip>
      </zane-col>
      <zane-col :span="8">
        <zane-tooltip
          content="I'm a tooltip!"
          animation="scale-subtle"
          class="w-full"
        >
          <zane-button class="w-full">scale-subtle</zane-button>
        </zane-tooltip>
      </zane-col>
      <zane-col :span="8">
        <zane-tooltip
          content="I'm a tooltip!"
          animation="scale-extreme"
          class="w-full"
        >
          <zane-button class="w-full">scale-extreme</zane-button>
        </zane-tooltip>
      </zane-col>
    </zane-row>
    <zane-row :gutter="20">
      <zane-col :span="8">
        <zane-tooltip
          content="I'm a tooltip!"
          animation="perspective"
          class="w-full"
        >
          <zane-button class="w-full">perspective</zane-button>
        </zane-tooltip>
      </zane-col>
      <zane-col :span="8">
        <zane-tooltip
          content="I'm a tooltip!"
          animation="perspective-subtle"
          class="w-full"
        >
          <zane-button class="w-full">perspective-subtle</zane-button>
        </zane-tooltip>
      </zane-col>
      <zane-col :span="8">
        <zane-tooltip
          content="I'm a tooltip!"
          animation="perspective-extreme"
          class="w-full"
        >
          <zane-button class="w-full">perspective-extreme</zane-button>
        </zane-tooltip>
      </zane-col>
    </zane-row>
  </div>
</template>

<style>
zane-row {
  margin-bottom: 20px;
}

zane-row:last-child {
  margin-bottom: 0;
}
</style>
