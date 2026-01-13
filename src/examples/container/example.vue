<script lang="ts" setup>
import { ref } from 'vue';

const item = {
  address: 'No. 189, Grove St, Los Angeles',
  date: '2016-05-02',
  name: 'Tom',
};
const tableData = ref(Array.from({ length: 20 }).fill(item));
</script>

<template>
  <zane-container class="layout-container-demo" style="height: 500px">
    <zane-aside width="200px">
      <zane-scrollbar>
        <zane-menu :default-openeds="['1', '3']">
          <zane-sub-menu index="1">
            <template #title>
              <zane-icon><Message /></zane-icon>Navigator One
            </template>
            <zane-menu-item-group>
              <template #title>Group 1</template>
              <zane-menu-item index="1-1">Option 1</zane-menu-item>
              <zane-menu-item index="1-2">Option 2</zane-menu-item>
            </zane-menu-item-group>
            <zane-menu-item-group title="Group 2">
              <zane-menu-item index="1-3">Option 3</zane-menu-item>
            </zane-menu-item-group>
            <zane-sub-menu index="1-4">
              <template #title>Option4</template>
              <zane-menu-item index="1-4-1">Option 4-1</zane-menu-item>
            </zane-sub-menu>
          </zane-sub-menu>
          <zane-sub-menu index="2">
            <template #title>
              <zane-icon><IconMenu /></zane-icon>Navigator Two
            </template>
            <zane-menu-item-group>
              <template #title>Group 1</template>
              <zane-menu-item index="2-1">Option 1</zane-menu-item>
              <zane-menu-item index="2-2">Option 2</zane-menu-item>
            </zane-menu-item-group>
            <zane-menu-item-group title="Group 2">
              <zane-menu-item index="2-3">Option 3</zane-menu-item>
            </zane-menu-item-group>
            <zane-sub-menu index="2-4">
              <template #title>Option 4</template>
              <zane-menu-item index="2-4-1">Option 4-1</zane-menu-item>
            </zane-sub-menu>
          </zane-sub-menu>
          <zane-sub-menu index="3">
            <template #title>
              <zane-icon><Setting /></zane-icon>Navigator Three
            </template>
            <zane-menu-item-group>
              <template #title>Group 1</template>
              <zane-menu-item index="3-1">Option 1</zane-menu-item>
              <zane-menu-item index="3-2">Option 2</zane-menu-item>
            </zane-menu-item-group>
            <zane-menu-item-group title="Group 2">
              <zane-menu-item index="3-3">Option 3</zane-menu-item>
            </zane-menu-item-group>
            <zane-sub-menu index="3-4">
              <template #title>Option 4</template>
              <zane-menu-item index="3-4-1">Option 4-1</zane-menu-item>
            </zane-sub-menu>
          </zane-sub-menu>
        </zane-menu>
      </zane-scrollbar>
    </zane-aside>

    <zane-container>
      <zane-header style="font-size: 12px; text-align: right">
        <div class="toolbar">
          <zane-dropdown>
            <zane-icon style="margin-top: 1px; margin-right: 8px">
              <Setting />
            </zane-icon>
            <template #dropdown>
              <zane-dropdown-menu>
                <zane-dropdown-item>View</zane-dropdown-item>
                <zane-dropdown-item>Add</zane-dropdown-item>
                <zane-dropdown-item>Delete</zane-dropdown-item>
              </zane-dropdown-menu>
            </template>
          </zane-dropdown>
          <span>Tom</span>
        </div>
      </zane-header>

      <zane-main>
        <zane-scrollbar>
          <zane-table :data="tableData">
            <zane-table-column prop="date" label="Date" width="140" />
            <zane-table-column prop="name" label="Name" width="120" />
            <zane-table-column prop="address" label="Address" />
          </zane-table>
        </zane-scrollbar>
      </zane-main>
    </zane-container>
  </zane-container>
</template>

<style scoped>
.layout-container-demo .zane-header {
  position: relative;
  color: var(--zane-text-color-primary);
  background-color: var(--zane-color-primary-light-7);
}

.layout-container-demo .zane-aside {
  color: var(--zane-text-color-primary);
  background: var(--zane-color-primary-light-8);
}

.layout-container-demo .zane-menu {
  border-right: none;
}

.layout-container-demo .zane-main {
  padding: 0;
}

.layout-container-demo .toolbar {
  right: 20px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}
</style>
