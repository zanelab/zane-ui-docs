<script lang="ts" setup>
import { onMounted, ref } from 'vue';

const headerSlotState = ref('');
const footerSlotstate = ref('');

interface LinkItem {
  link: string;
  value: string;
}

const links = ref<LinkItem[]>([]);

const autocompleteRef1 = ref();
const autocompleteRef2 = ref();

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
  autocompleteRef1.value?.addEventListener('zSelect', handleSelect);
  autocompleteRef2.value?.addEventListener('zSelect', handleSelect);
  links.value = loadAll();
});

const handleClear = () => {
  footerSlotstate.value = '';
  autocompleteRef2.value.getData();
};
</script>

<!-- eslint-disable vue/html-self-closing -->
<!-- eslint-disable vue/attribute-hyphenation -->
<template>
  <div class="autocomplete-custom-header-footer">
    <div style="padding: 5px">
      <p>Custom header content</p>
      <zane-autocomplete
        ref="autocompleteRef1"
        :value="headerSlotState"
        :fetchSuggestions="querySearchAsync"
        placeholder="Please input"
      >
        <div slot="header">header content</div>
      </zane-autocomplete>
    </div>
    <div style="padding: 5px">
      <p>Custom footer content</p>
      <zane-autocomplete
        ref="autocompleteRef2"
        :value="footerSlotstate"
        :fetchSuggestions="querySearchAsync"
        placeholder="Please input"
      >
        <div slot="footer">
          <zane-button link size="small" @click="handleClear">
            Clear
          </zane-button>
        </div>
      </zane-autocomplete>
    </div>
  </div>
</template>

<style scoped>
.autocomplete-custom-header-footer {
  display: flex;
}

.autocomplete-custom-header-footer > div {
  flex: 1;
  padding: 5px;
  text-align: center;
}

.autocomplete-custom-header-footer > div > :deep(.zane-autocomplete) {
  width: 50%;
}

.autocomplete-custom-header-footer > div:not(:last-child) {
  border-right: 1px solid var(--zane-border-color);
}
</style>
