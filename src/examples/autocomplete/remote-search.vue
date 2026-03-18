<script lang="ts" setup>
import { onMounted, ref } from 'vue';

const state = ref('');

interface LinkItem {
  link: string;
  value: string;
}

const links = ref<LinkItem[]>([]);
const autocompleteRef = ref<HTMLElement>();

const loadAll = () => {
  return [
    { link: 'https://github.com/vuejs/vue', value: 'vue' },
    { link: 'https://github.com/ElemeFE/element', value: 'element' },
    { link: 'https://github.com/ElemeFE/cooking', value: 'cooking' },
    { link: 'https://github.com/ElemeFE/mint-ui', value: 'mint-ui' },
    { link: 'https://github.com/vuejs/vuex', value: 'vuex' },
    { link: 'https://github.com/vuejs/vue-router', value: 'vue-router' },
    { link: 'https://github.com/babel/babel', value: 'babel' },
  ];
};

let timeout: ReturnType<typeof setTimeout>;
const querySearchAsync = (queryString: string, cb: (arg: any) => void) => {
  const results = queryString
    ? links.value.filter(createFilter(queryString))
    : links.value;

  clearTimeout(timeout);
  timeout = setTimeout(() => {
    cb(results);
  }, 3000 * Math.random());
};
const createFilter = (queryString: string) => {
  return (restaurant: LinkItem) => {
    return (
      restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0
    );
  };
};

const handleSelect = (item: Record<string, any>) => {
  console.log(item);
};

onMounted(() => {
  autocompleteRef.value?.addEventListener('zSelect', handleSelect);
  links.value = loadAll();
});
</script>

<!-- eslint-disable vue/html-self-closing -->
<!-- eslint-disable vue/attribute-hyphenation -->
<template>
  <zane-autocomplete
    ref="autocompleteRef"
    :value="state"
    :fetchSuggestions="querySearchAsync"
    placeholder="Please input"
  ></zane-autocomplete>
</template>
