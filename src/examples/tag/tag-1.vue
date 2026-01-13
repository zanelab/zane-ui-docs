<template>
  <div class="flex flex-col gap-4">
    <div class="flex flex-row items-center gap-4">
      <zane-tag>Gray</zane-tag>
      <zane-tag color="blue">Blue</zane-tag>
      <zane-tag color="red">Red</zane-tag>
      <zane-tag color="green" image-src="/img/avatar.webp"> Green </zane-tag>
      <zane-tag color="yellow">Yellow</zane-tag>
    </div>

    <div class="flex flex-row items-center gap-4">
      <zane-tag size="sm">Gray</zane-tag>
      <zane-tag color="blue" size="sm">Blue</zane-tag>
      <zane-tag color="red" size="sm">Red</zane-tag>
      <zane-tag color="green" size="sm" dismissible="true">Green</zane-tag>
      <zane-tag color="yellow" size="sm" dismissible="true">Yellow</zane-tag>
    </div>
  </div>
</template>
