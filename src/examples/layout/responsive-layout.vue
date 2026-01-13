<template>
  <zane-row :gutter="10">
    <zane-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1">
      <div class="grid-content ep-bg-purple"></div>
    </zane-col>
    <zane-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11">
      <div class="grid-content ep-bg-purple-light"></div>
    </zane-col>
    <zane-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11">
      <div class="grid-content ep-bg-purple"></div>
    </zane-col>
    <zane-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1">
      <div class="grid-content ep-bg-purple-light"></div>
    </zane-col>
  </zane-row>
</template>

<style>
.zane-col {
  border-radius: 4px;
}

.grid-content {
  min-height: 36px;
  border-radius: 4px;
}
</style>
