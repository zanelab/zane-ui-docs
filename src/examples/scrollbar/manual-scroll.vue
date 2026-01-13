<script lang="ts" setup>
import { onBeforeUnmount, onMounted, ref } from 'vue';

const max = ref(0);
const value = ref(0);
const innerRef = ref<HTMLDivElement>();
const scrollbarRef = ref();
const sliderRef = ref();

const inputSlider = (e: CustomEvent) => {
  scrollbarRef.value!.setScrollTop(e.detail);
};
const scroll = (e: CustomEvent) => {
  value.value = e.detail.scrollTop;
};
const formatTooltip = (value: number) => `${value} px`;

onMounted(() => {
  max.value = innerRef.value!.clientHeight - 380;
  scrollbarRef.value.addEventListener('zScroll', scroll);
  sliderRef.value.addEventListener('zInput', inputSlider);
});

onBeforeUnmount(() => {
  scrollbarRef.value.removeEventListener('zScroll', scroll);
  sliderRef.value.removeEventListener('zInput', inputSlider);
});
</script>
<!-- eslint-disable vue/html-self-closing -->
<template>
  <div>
    <zane-scrollbar ref="scrollbarRef" height="400px" always>
      <div ref="innerRef">
        <p v-for="item in 20" :key="item" class="scrollbar-demo-item">
          {{ item }}
        </p>
      </div>
    </zane-scrollbar>

    <zane-slider
      ref="sliderRef"
      :value="value"
      :max="max"
      :format-tooltip="formatTooltip"
    ></zane-slider>
  </div>
</template>

<style scoped>
.scrollbar-demo-item {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  margin: 10px;
  color: var(--zane-color-primary);
  text-align: center;
  background: var(--zane-color-primary-light-9);
  border-radius: 4px;
}

.zane-slider {
  margin-top: 20px;
}
</style>
