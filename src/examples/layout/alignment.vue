<template>
  <div>
    <zane-row class="row-bg">
      <zane-col :span="6">
        <div class="grid-content ep-bg-purple"></div>
      </zane-col>
      <zane-col :span="6">
        <div class="grid-content ep-bg-purple-light"></div>
      </zane-col>
      <zane-col :span="6">
        <div class="grid-content ep-bg-purple"></div>
      </zane-col>
    </zane-row>
    <zane-row class="row-bg" justify="center">
      <zane-col :span="6">
        <div class="grid-content ep-bg-purple"></div>
      </zane-col>
      <zane-col :span="6">
        <div class="grid-content ep-bg-purple-light"></div>
      </zane-col>
      <zane-col :span="6">
        <div class="grid-content ep-bg-purple"></div>
      </zane-col>
    </zane-row>
    <zane-row class="row-bg" justify="end">
      <zane-col :span="6">
        <div class="grid-content ep-bg-purple"></div>
      </zane-col>
      <zane-col :span="6">
        <div class="grid-content ep-bg-purple-light"></div>
      </zane-col>
      <zane-col :span="6">
        <div class="grid-content ep-bg-purple"></div>
      </zane-col>
    </zane-row>
    <zane-row class="row-bg" justify="space-between">
      <zane-col :span="6">
        <div class="grid-content ep-bg-purple"></div>
      </zane-col>
      <zane-col :span="6">
        <div class="grid-content ep-bg-purple-light"></div>
      </zane-col>
      <zane-col :span="6">
        <div class="grid-content ep-bg-purple"></div>
      </zane-col>
    </zane-row>
    <zane-row class="row-bg" justify="space-around">
      <zane-col :span="6">
        <div class="grid-content ep-bg-purple"></div>
      </zane-col>
      <zane-col :span="6">
        <div class="grid-content ep-bg-purple-light"></div>
      </zane-col>
      <zane-col :span="6">
        <div class="grid-content ep-bg-purple"></div>
      </zane-col>
    </zane-row>
    <zane-row class="row-bg" justify="space-evenly">
      <zane-col :span="6">
        <div class="grid-content ep-bg-purple"></div>
      </zane-col>
      <zane-col :span="6">
        <div class="grid-content ep-bg-purple-light"></div>
      </zane-col>
      <zane-col :span="6">
        <div class="grid-content ep-bg-purple"></div>
      </zane-col>
    </zane-row>
  </div>
</template>

<style>
.zane-row {
  margin-bottom: 20px;
}

.zane-row:last-child {
  margin-bottom: 0;
}

.zane-col {
  border-radius: 4px;
}

.grid-content {
  min-height: 36px;
  border-radius: 4px;
}
</style>
