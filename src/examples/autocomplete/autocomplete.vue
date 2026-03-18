<script lang="ts" setup>
import { onMounted, ref } from 'vue';

interface RestaurantItem {
  link: string;
  value: string;
}

const autocompleteRef1 = ref<HTMLElement>();
const autocompleteRef2 = ref<HTMLElement>();

const state1 = ref('');
const state2 = ref('');

const restaurants = ref<RestaurantItem[]>([]);
const querySearch = (queryString: string, cb: any) => {
  const results = queryString
    ? restaurants.value.filter(createFilter(queryString))
    : restaurants.value;
  // call callback function to return suggestions
  cb(results);
};
const createFilter = (queryString: string) => {
  return (restaurant: RestaurantItem) => {
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

onMounted(() => {
  autocompleteRef1.value?.addEventListener('zSelect', handleSelect);
  autocompleteRef2.value?.addEventListener('zSelect', handleSelect);
  restaurants.value = loadAll();
});
</script>
<!-- eslint-disable vue/html-self-closing -->
<!-- eslint-disable vue/attribute-hyphenation -->
<template>
  <div class="demo-autocomplete">
    <div class="demo-block">
      <div class="demo-title">list suggestions when activated</div>
      <zane-autocomplete
        ref="autocompleteRef1"
        :value="state1"
        :fetchSuggestions="querySearch"
        clearable
        class="w-50"
        placeholder="Please Input"
      ></zane-autocomplete>
    </div>

    <div class="demo-block">
      <div class="demo-title">list suggestions on input</div>
      <zane-autocomplete
        ref="autocompleteRef2"
        :value="state2"
        :fetchSuggestions="querySearch"
        :triggerOnFocus="false"
        clearable
        class="w-50"
        placeholder="Please Input"
      ></zane-autocomplete>
    </div>
  </div>
</template>

<style scoped>
.demo-autocomplete {
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
}

.demo-block {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.demo-title {
  display: flex;
  align-items: center;
  min-height: 2.5em;
  font-size: 0.875rem;
  color: var(--zane-text-color-secondary);
}

@media screen and (max-width: 768px) {
  .demo-autocomplete {
    gap: 1rem;
  }

  .demo-block {
    width: 100%;
  }
}
</style>
