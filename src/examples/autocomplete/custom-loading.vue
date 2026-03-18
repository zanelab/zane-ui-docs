<script lang="ts" setup>
import { onMounted, ref } from 'vue';

const state = ref('');

interface LinkItem {
  link: string;
  value: string;
}

const links = ref<LinkItem[]>([]);

const autocompleteRef1 = ref<HTMLElement>();
const autocompleteRef2 = ref<HTMLElement>();

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
  }, 5000 * Math.random());
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

const loadingRender1 = () => {
  const loading = document.createElement('div');
  loading.innerHTML = `<svg class="circular" viewBox="0 0 50 50">
  <circle class="path" cx="25" cy="25" r="20" fill="none" />
</svg>`;
  return loading;
};

const loadingRender2 = () => {
  const loading = document.createElement('div');
  loading.innerHTML = `<svg class="circular" viewBox="0 0 20 20">
  <g
    class="path2 loading-path"
    stroke-width="0"
    style="stroke: none; animation: none"
  >
    <circle r="3.375" class="dot1" rx="0" ry="0" />
    <circle r="3.375" class="dot2" rx="0" ry="0" />
    <circle r="3.375" class="dot4" rx="0" ry="0" />
    <circle r="3.375" class="dot3" rx="0" ry="0" />
  </g>
</svg>`;
  return loading;
};

onMounted(() => {
  autocompleteRef1.value?.addEventListener('zSelect', handleSelect);
  autocompleteRef2.value?.addEventListener('zSelect', handleSelect);
  links.value = loadAll();
});
</script>

<!-- eslint-disable vue/html-self-closing -->
<!-- eslint-disable vue/attribute-hyphenation -->
<template>
  <div class="demo-autocomplete">
    <div class="demo-block">
      <div class="demo-title">loading icon1</div>
      <zane-autocomplete
        ref="autocompleteRef1"
        :value="state"
        :fetchSuggestions="querySearchAsync"
        :loadingRender="loadingRender1"
        class="w-50"
        placeholder="Please input"
      >
      </zane-autocomplete>
    </div>
    <div class="demo-block">
      <div class="demo-title">loading icon2</div>
      <zane-autocomplete
        ref="autocompleteRef2"
        :value="state"
        :fetchSuggestions="querySearchAsync"
        :loadingRender="loadingRender2"
        class="w-50"
        placeholder="Please input"
      >
      </zane-autocomplete>
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

<style>
.circular {
  display: inline;
  width: 30px;
  height: 30px;
  animation: loading-rotate 2s linear infinite;
}

.path {
  stroke: var(--zane-color-primary);
  stroke-width: 2;
  stroke-linecap: round;
  stroke-dasharray: 90, 150;
  stroke-dashoffset: 0;
  animation: loading-dash 1.5s ease-in-out infinite;
}

.loading-path .dot1 {
  opacity: 0.3;
  fill: var(--zane-color-primary);
  transform: translate(3.75px, 3.75px);
  animation: custom-spin-move 1s infinite linear alternate;
}

.loading-path .dot2 {
  opacity: 0.3;
  fill: var(--zane-color-primary);
  transform: translate(calc(100% - 3.75px), 3.75px);
  animation: custom-spin-move 1s infinite linear alternate;
  animation-delay: 0.4s;
}

.loading-path .dot3 {
  opacity: 0.3;
  fill: var(--zane-color-primary);
  transform: translate(3.75px, calc(100% - 3.75px));
  animation: custom-spin-move 1s infinite linear alternate;
  animation-delay: 1.2s;
}

.loading-path .dot4 {
  opacity: 0.3;
  fill: var(--zane-color-primary);
  transform: translate(calc(100% - 3.75px), calc(100% - 3.75px));
  animation: custom-spin-move 1s infinite linear alternate;
  animation-delay: 0.8s;
}

@keyframes loading-rotate {
  to {
    transform: rotate(360deg);
  }
}

@keyframes loading-dash {
  0% {
    stroke-dasharray: 1, 200;
    stroke-dashoffset: 0;
  }

  50% {
    stroke-dasharray: 90, 150;
    stroke-dashoffset: -40px;
  }

  100% {
    stroke-dasharray: 90, 150;
    stroke-dashoffset: -120px;
  }
}

@keyframes custom-spin-move {
  to {
    opacity: 1;
  }
}
</style>
