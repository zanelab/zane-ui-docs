<script lang="ts" setup>
import type { ComponentPublicInstance, Ref } from 'vue';

import { nextTick, ref, watch } from 'vue';

const inputValue = ref('');
const dynamicTags = ref(['Tag 1', 'Tag 2', 'Tag 3']);
const inputVisible = ref(false);
const InputRef = ref();

const refs = ref([]) as Ref<HTMLElement[]>;

const setRefs =
  (index: number) => (el: ComponentPublicInstance | Element | null) => {
    refs.value[index] = el as HTMLElement;
  };

const showInput = () => {
  inputVisible.value = true;
  nextTick(() => {
    InputRef.value!.zFocus();
  });
};

const handleInputConfirm = () => {
  if (inputValue.value) {
    dynamicTags.value.push(inputValue.value);
  }
  inputVisible.value = false;
  inputValue.value = '';
};

const handleTagClose = (e: Event) => {
  const tag = (e.currentTarget as HTMLElement).dataset.key ?? '';
  dynamicTags.value.splice(dynamicTags.value.indexOf(tag), 1);
};

const handleInput = (e: CustomEvent) => {
  inputValue.value = e.detail;
};

watch(InputRef, (val, oldVal) => {
  if (val) {
    val.addEventListener('zInput', handleInput);
    val.addEventListener('zBlur', handleInputConfirm);
  }
  if (oldVal) {
    oldVal.removeEventListener('zInput', handleInput);
    oldVal.removeEventListener('zBlur', handleInputConfirm);
  }
});

watch(
  refs,
  (val, oldVal) => {
    oldVal?.forEach((el) => {
      el?.removeEventListener('zClose', handleTagClose);
    });
    val?.forEach((el) => {
      el.addEventListener('zClose', handleTagClose);
    });
  },
  { deep: true },
);
</script>

<template>
  <div id="tag-editable-container" class="flex gap-2">
    <zane-tag
      v-for="(tag, index) in dynamicTags"
      :key="tag"
      :data-key="tag"
      :ref="setRefs(index)"
      closeable
    >
      {{ tag }}
    </zane-tag>
    <zane-input
      v-if="inputVisible"
      ref="InputRef"
      :value="inputValue"
      class="w-20"
      size="small"
      @keyup.enter="handleInputConfirm"
    />
    <zane-button v-else class="button-new-tag" size="small" @click="showInput">
      + New Tag
    </zane-button>
  </div>
</template>
