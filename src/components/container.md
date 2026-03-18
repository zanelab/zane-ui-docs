# Container 布局容器

用于布局的容器组件，方便快速搭建页面的基本结构：

`<zane-container>`: 外层容器。 当子元素中包含 `<zane-header>` 或 `<zane-footer>` 时，全部子元素会垂直上下排列， 否则会水平左右排列。

`<zane-header>`: 顶栏容器。

`<zane-aside>`: 侧边栏容器。

`<zane-main>`: 主要区域容器。

`<zane-footer>`: c底栏容器。

:::tip

以上组件采用了 flex 布局，使用前请确定目标浏览器是否兼容。 此外， `<zane-container>`的直接子元素必须是后四个组件中的一个或多个。 后四个组件的父元素必须是一个 `<zane-container>`

:::

## 常见页面布局

<style lang="scss">
.common-layout {
  .zane-header,
  .zane-footer,
  .zane-main,
  .zane-aside {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .zane-header,
  .zane-footer {
    background-color: var(--zane-color-primary-light-7);
    color: var(--zane-text-color-primary);
    text-align: center;
  }

  .zane-aside {
    background-color: var(--zane-color-primary-light-8);
    color: var(--zane-text-color-primary);
    text-align: center;
  }

  .zane-main {
    background-color: var(--zane-color-primary-light-9);
    color: var(--zane-text-color-primary);
    text-align: center;

    height: 150px;
  }
}

</style>

### 
:::demo src=examples/container/layout-hm.vue :::

### 
:::demo src=examples/container/layout-hmf.vue :::

###
:::demo src=examples/container/layout-am.vue :::

###
:::demo src=examples/container/layout-ham.vue :::

###
:::demo src=examples/container/layout-hamf.vue :::

###
:::demo src=examples/container/layout-ahm.vue :::

###
:::demo src=examples/container/layout-ahmf.vue :::

## 例子



## Container API

### Container Attributes

| 属性名     | 说明                     | 类型                   | 默认值                  |
| --------- | ------------------------ | ----------------------| ------------------------- |
| direction | 子元素的排列方向           | `'horizontal' \| 'vertical'` | 子元素中有 `zane-header` 或 `zane-footer` 时为 `'vertical'`，否则为 `'horizontal'`; |

### Container Slots

| 插槽名    | 说明                     | 子标签                                    |
| ------- | ------------------------- | ------------------------------------------ |
| default | 自定义默认内容             | Container / Header / Aside / Main / Footer |

## Header API

### Header Attributes

| 属性名  | 说明                 | 类型       | 默认值    |
| ------ | -------------------- | --------- | ------- |
| height | 顶栏高度              | `string` | 60px    |

### Header Slots

| 插槽名   | 说明                      |
| ------- | ------------------------- |
| default | 自定义默认内容             |

## Aside API

### Aside Attributes

| 属性名  | 说明                 | 类型       | 默认值    |
| ----- | ---------------------| ---------  | ------- |
| width | 侧边栏宽度             | `string`  | 300px   |

### Aside Slots

| 插槽名   | 说明                      |
| ------- | ------------------------- |
| default | 自定义默认内容     |

## Main API

### Main Slots

| 插槽名   | 说明                      |
| ------- | ------------------------- |
| default | 自定义默认内容          |

## Footer API

### Footer Attributes

| 属性名  | 说明                 | 类型       | 默认值    |
| ------ | -------------------- | --------- | ------- |
| height | 底栏高度              | `'string'` | 60px    |

### Footer Slots

| 插槽名   | 说明                      |
| ------- | ------------------------- |
| default | 自定义默认内容           |
