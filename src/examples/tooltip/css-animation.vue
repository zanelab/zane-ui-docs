<script lang="ts" setup>
import { onMounted, ref } from 'vue';

import 'animate.css/source/_vars.css';
import 'animate.css/source/_base.css';
import 'animate.css/source/attention_seekers/rubberBand.css';
import 'animate.css/source/attention_seekers/tada.css';

const rubberBandTooltip = ref();
const tadaTooltip = ref();

function handleMount(e: CustomEvent) {
  console.log(e.detail);
  if (e.currentTarget === tadaTooltip.value) {
    e.detail.popper.firstElementChild.classList.add('tada', 'animated');
  }
  if (e.currentTarget === rubberBandTooltip.value) {
    e.detail.popper.firstElementChild.classList.add('rubberBand', 'animated');
  }
}

function handleHidden(e: CustomEvent) {
  if (e.currentTarget === tadaTooltip.value) {
    e.detail.popper.firstElementChild.classList.remove('tada', 'animated');
  }
  if (e.currentTarget === rubberBandTooltip.value) {
    e.detail.popper.firstElementChild.classList.remove(
      'rubberBand',
      'animated',
    );
  }
}

onMounted(() => {
  rubberBandTooltip.value.addEventListener('zMount', handleMount);
  rubberBandTooltip.value.addEventListener('zHidden', handleHidden);

  tadaTooltip.value.addEventListener('zMount', handleMount);
  tadaTooltip.value.addEventListener('zHidden', handleHidden);
});
</script>
<template>
  <zane-row :gutter="20">
    <zane-col :span="8">
      <zane-tooltip
        ref="rubberBandTooltip"
        content="I'm a tooltip!"
        animation="fade"
        :animate-fill="false"
        :duration="[500, 200]"
        class="w-full"
      >
        <zane-button class="w-full">rubberBand</zane-button>
      </zane-tooltip>
    </zane-col>
    <zane-col :span="8">
      <zane-tooltip
        ref="tadaTooltip"
        content="I'm a tooltip!"
        animation="fade"
        :animate-fill="false"
        :inertia="true"
        :duration="[500, 200]"
        class="w-full"
      >
        <zane-button class="w-full">tada</zane-button>
      </zane-tooltip>
    </zane-col>
  </zane-row>
</template>
<style></style>
