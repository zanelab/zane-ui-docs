<script lang="ts" setup>
import { computed, ref, watch } from 'vue';

import { useRouter, withBase } from 'vitepress';

import { useSidebar } from '../../composables/sidebar';
import overviewIcons from './overview-icons';

const router = useRouter();
const { sidebars } = useSidebar();

const query = ref('');

const filteredSidebars = computed(() => {
  return sidebars.value
    .slice(1)
    .map((group) => ({
      ...group,
      items: group.items?.filter((item) => {
        const value = query.value.trim().toLowerCase();
        return (
          group.text.toLowerCase().includes(value) ||
          item.text.toLowerCase().includes(value)
        );
      }),
    }))
    .filter((group) => group.items?.length);
});

const toPage = (link?: string) => {
  if (!link) return;
  router.go(withBase(link));
};

const getIcon = (link?: string) => {
  const name = link?.split('/').pop();
  return name ? (overviewIcons as any)[name] : null;
};

watch(sidebars, (val) => {
  console.log(val);
});
</script>
<template>
  <div class="overview-container">
    <div class="search-content"></div>
    <div class="main-content">
      <div
        v-for="(group, groupIndex) in filteredSidebars"
        :key="groupIndex"
        class="component-group"
      >
        <div class="component-title">
          {{ group.text }}
          <zane-tag effect="dark" round size="small">
            {{ group.items?.length }}
          </zane-tag>
        </div>
        <div class="card-content">
          <template v-if="group.items">
            <a
              v-for="(item, index) in group.items"
              :key="index"
              tabindex="0"
              :href="withBase(item.link!)"
            >
              <zane-card
                shadow="hover"
                @click.stop="toPage(item.link)"
                @keydown.enter="toPage(item.link)"
              >
                <zane-text slot="header" truncated>{{ item.text }}</zane-text>
                <div class="h-full w-full">
                  <component
                    :is="getIcon(item.link)"
                    v-if="getIcon(item.link)"
                  />
                  <span v-else>Todo</span>
                </div>
              </zane-card>
            </a>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
.overview-container {
  position: relative;

  .search-content {
    position: sticky;
    top: 60px;
    z-index: 10;

    .el-input {
      background: var(--bg-color);
    }
  }

  .main-content {
    .component-group {
      margin-top: 32px;

      .component-title {
        display: flex;
        gap: 8px;
        align-items: center;
        margin-bottom: 1rem;
        font-size: 20px;
        font-weight: 600;
        color: var(--zane-text-color-primary);
      }

      .card-content {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
        gap: 16px;

        a {
          border-radius: 4px;

          &:focus-visible {
            outline: 2px solid var(--zane-color-primary);
            outline-offset: 1px;
          }
        }

        :deep(.zane-card) {
          width: 100%;
          cursor: pointer;
          transition: none;

          .zane-card__header {
            display: flex;
            gap: 8px;
            align-items: center;
            justify-content: space-between;
            padding: 8px 12px;

            .zane-text {
              font-size: 14px;
              font-weight: 500;
              line-height: 24px;
              color: var(--zane-text-color-regular);
            }
          }

          .zane-card__body {
            display: flex;
            align-items: center;
            justify-content: center;
            aspect-ratio: 280 / 180;
            padding: 0;

            svg {
              width: 100%;
              height: auto;
            }
          }
        }
      }
    }

    .designed-by {
      display: flex;
      gap: 5px;
      align-items: center;
      justify-content: flex-end;
      font-size: 14px;
    }
  }
}
</style>
