<script setup lang="ts">
import { computed, onMounted, ref, watch } from 'vue';

import clipboardCopy from 'clipboard-copy';

import { useLang } from '../../../composables/lang';
import localeData from '../../../i18n/component/icons.json';
import { iconCategories } from '@zanejs/icons';
import { debounce } from 'lodash-es';

// import { icons } from './icons';

const queryInputRef = ref();

const lang = useLang();
const locale = computed(() => (localeData as any)[lang.value]);
const copyIcon = ref(true);

const query = ref('');
const debouncedQuery = ref('');

watch(query, debounce((newQuery) => {
  debouncedQuery.value = newQuery
}, 300))

const filterCategories = computed(() => {
  const searchTerm = debouncedQuery.value.toLowerCase().trim();
  if (!searchTerm) {
    return iconCategories
  }

  const result = {}
  
  Object.entries(iconCategories).forEach(([category, icons]) => {
    // 检查分类名是否匹配
    const categoryMatches = category.toLowerCase().includes(searchTerm)
    
    // 过滤图标
    const filtered = icons.filter(icon => 
      icon.toLowerCase().includes(searchTerm)
    )
    
    // 如果分类名匹配或该分类下有匹配的图标
    if (categoryMatches || filtered.length > 0) {
      result[category] = categoryMatches ? icons : filtered
    }
  })
  
  return result
});

const handleIconQueryInput = (event: CustomEvent) => {
  query.value = event.detail;
};

const copyContent = async (content: string) => {
  try {
    await clipboardCopy(content);

    // ZaneMessage({
    //   message: locale.value['copy-success'],
    //   showClose: true,
    //   type: 'success',
    // });
  } catch {
    // ZaneMessage({
    //   message: locale.value['copy-error'],
    //   showClose: true,
    //   type: 'error',
    // });
  }
};

const handleCopyIcon = async (icon: string) => {
  await copyContent(`<zane-icon name="${icon}"></zane-icon>`);
};

onMounted(() => {
  queryInputRef.value?.addEventListener('zInput', handleIconQueryInput);
});
</script>
<template>
  <div>
    <div class="icon-search-content">
      <zane-input
        ref="queryInputRef"
        :value="query"
        prefix-icon="search"
        size="large"
        placeholder="Search Icons"
      />
    </div>
    <div
      v-for="(icons, category) in filterCategories"
      :key="category"
      class="demo-icon-item"
    >
      <div class="demo-icon-title">{{ category }}</div>
      <ul class="demo-icon-list">
        <li
          v-for="icon in icons"
          :key="icon"
          class="icon-item"
          @click="handleCopyIcon(icon)"
        >
          <span class="demo-svg-icon">
            <zane-icon :name="icon" :size="24" />
            <span class="icon-name">{{ icon }}</span>
          </span>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped lang="scss">
.demo-icon {
  &-item {
    margin-top: 1.5rem;

    &:first-child {
      margin-top: 0;
    }
  }

  &-title {
    margin-bottom: 1rem;
    font-size: 18px;
    font-weight: 400;
    line-height: 26px;
  }

  &-list {
    position: relative;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    padding: 0;
    overflow: hidden;
    list-style: none;

    li + li {
      margin: 0;
    }

    &::before {
      position: absolute;
      top: 0;
      left: 0;
      z-index: 2;
      width: 100%;
      height: 1px;
      content: '';
      background-color: var(--zane-border-color);
    }

    &::after {
      position: absolute;
      top: 0;
      left: 0;
      z-index: 2;
      width: 1px;
      height: 100%;
      content: '';
      background-color: var(--zane-border-color);
    }

    .icon-item {
      position: relative;
      height: 90px;
      font-size: 13px;
      color: var(--zane-text-color-regular);
      text-align: center;
      transition: background-color var(--zane-transition-duration);

      &::before {
        position: absolute;
        top: 0;
        right: 0;
        z-index: 2;
        width: 1px;
        height: 100%;
        content: '';
        background-color: var(--zane-border-color);
      }

      &::after {
        position: absolute;
        bottom: 0;
        left: 0;
        z-index: 2;
        width: 100%;
        height: 1px;
        content: '';
        background-color: var(--zane-border-color);
      }

      &:hover {
        color: var(--brand-color-light);
        background-color: var(--zane-border-color-extra-light);

        .el-icon {
          color: var(--brand-color-light);
        }
      }

      .demo-svg-icon {
        position: relative;
        z-index: 1;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 100%;
        padding: 0.5rem;
        cursor: pointer;

        .icon-name {
          margin-top: 8px;
          line-height: 1.2;
        }
      }
    }
  }
}

.icon-search-content {
  position: sticky;
  top: 80px;
  z-index: 10;
  margin-bottom: 1.5rem;

  .zane-input {
    background: var(--bg-color);
  }
}

@media screen and (max-width: 1200px) {
  .demo-icon-list {
    grid-template-columns: repeat(6, 1fr);
  }
}

@media screen and (max-width: 992px) {
  .demo-icon-list {
    grid-template-columns: repeat(4, 1fr);
  }
}

@media screen and (max-width: 768px) {
  .demo-icon-list {
    grid-template-columns: repeat(3, 1fr);
  }

  .icon-item {
    height: 80px !important;
    font-size: 12px !important;
  }
}

@media screen and (max-width: 480px) {
  .demo-icon-list {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>
