<template>
  <div>
    <zane-row>
      <zane-col :span="24">
        <div class="grid-content ep-bg-purple-dark"></div>
      </zane-col>
    </zane-row>
    <zane-row>
      <zane-col :span="12">
        <div class="grid-content ep-bg-purple"></div>
      </zane-col>
      <zane-col :span="12">
        <div class="grid-content ep-bg-purple-light"></div>
      </zane-col>
    </zane-row>
    <zane-row>
      <zane-col :span="8">
        <div class="grid-content ep-bg-purple"></div>
      </zane-col>
      <zane-col :span="8">
        <div class="grid-content ep-bg-purple-light"></div>
      </zane-col>
      <zane-col :span="8">
        <div class="grid-content ep-bg-purple"></div>
      </zane-col>
    </zane-row>
    <zane-row>
      <zane-col :span="6">
        <div class="grid-content ep-bg-purple"></div>
      </zane-col>
      <zane-col :span="6">
        <div class="grid-content ep-bg-purple-light"></div>
      </zane-col>
      <zane-col :span="6">
        <div class="grid-content ep-bg-purple"></div>
      </zane-col>
      <zane-col :span="6">
        <div class="grid-content ep-bg-purple-light"></div>
      </zane-col>
    </zane-row>
    <zane-row>
      <zane-col :span="4">
        <div class="grid-content ep-bg-purple"></div>
      </zane-col>
      <zane-col :span="4">
        <div class="grid-content ep-bg-purple-light"></div>
      </zane-col>
      <zane-col :span="4">
        <div class="grid-content ep-bg-purple"></div>
      </zane-col>
      <zane-col :span="4">
        <div class="grid-content ep-bg-purple-light"></div>
      </zane-col>
      <zane-col :span="4">
        <div class="grid-content ep-bg-purple"></div>
      </zane-col>
      <zane-col :span="4">
        <div class="grid-content ep-bg-purple-light"></div>
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
