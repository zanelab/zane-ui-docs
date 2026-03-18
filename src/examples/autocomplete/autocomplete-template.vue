<script lang="ts" setup>
import { onMounted, ref } from 'vue';

interface LinkItem {
  link: string;
  value: string;
}

const state = ref('');
const links = ref<LinkItem[]>([]);
const autocompleteRef = ref<HTMLElement>();

const querySearch = (queryString: string, cb: any) => {
  const results = queryString
    ? links.value.filter(createFilter(queryString))
    : links.value;
  // call callback function to return suggestion objects
  cb(results);
};
const createFilter = (queryString: string) => {
  return (restaurant: LinkItem) => {
    return (
      restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0
    );
  };
};
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
const handleSelect = (item: Record<string, any>) => {
  console.log(item);
};

const suggestionRender = (item: LinkItem) => {
  const div = document.createElement('div');
  div.className = 'custom-suggestion';
  div.innerHTML = `
            <span style="color: blue">${item.value}</span>
            <small style="color: gray">${item.link}</small>
          `;
  div.addEventListener('click', () => {
    console.log('Clicked:', item.value);
  });
  return div;
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
    :suggestionRender="suggestionRender"
    :fetchSuggestions="querySearch"
    placeholder="Please input"
  >
    <div slot="suffix">
      <zane-icon name="edit"></zane-icon>
    </div>
  </zane-autocomplete>
</template>

<style>
.custom-suggestion {
  display: flex;
  flex-direction: column;
}
</style>
