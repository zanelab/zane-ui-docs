# Layout 布局

通过基础的 24 分栏，迅速简便地创建布局。

:::tip

组件默认使用 Flex 布局，不需要手动设置 `type="flex"`。

请注意父容器避免使用 `inline` 相关样式，会导致组件宽度不能撑满。

列的基本单位为1，最多24个，最少0个。

:::

## 基础布局

使用列创建基础网格布局。

通过 `row` 和 `col` 组件，并通过 `col` 组件的 `span` 属性我们就可以自由地组合布局。

:::demo src=examples/layout/basic-layout.vue :::


## 分栏间隔

支持列间距。

行提供 `gutter` 属性来指定列之间的间距，其默认值为 0。

:::demo src=examples/layout/column-spacing.vue :::


## 混合布局

通过基础的 1/24 分栏任意扩展组合形成较为复杂的混合布局。

:::demo src=examples/layout/hybrid-layout.vue :::


## 列偏移

您可以指定列偏移量。

通过制定 `col` 组件的 `offset` 属性可以指定分栏偏移的栏数。

:::demo src=examples/layout/column-offset.vue :::


## 对齐方式

默认使用 flex 布局来对分栏进行灵活的对齐。

您可以通过 `justify` 属性来定义子元素的排版方式，其取值为start、center、end、space-between、space-around或space-evenly。

:::demo src=examples/layout/alignment.vue :::


## 响应式布局

参照了 Bootstrap 的 响应式设计，预设了五个响应尺寸：xs、sm、md、lg 和 xl。

:::demo src=examples/layout/responsive-layout.vue :::


## Row API

### Row Attributes

| 属性名   | 说明                       | 类型                                                  | 默认值 |
| ------- | ------------------------- | ---------------------------------------------------- | ------- |
| gutter  | 栅格间隔                        | `number`                                                                                    | 0       |
| justify | flex 布局下的水平排列方式 | `'start' \| 'end' \| 'center' \| 'space-around' \| 'space-between' \| 'space-evenly'` | start   |
| align   | flex 布局下的垂直排列方式   | `'top' \| 'middle' \| 'bottom'`                                                       | —       |


### Row Slots

| 插槽名   | 说明                       | 子标签 |
| ------- | ------------------------- | ------- |
| default | 自定义默认内容              | zane-col     |

## Col API

### Col Attributes

| 属性名   | 说明                                                | 类型                          | 默认值    |
| ------ | --------------------------------------------------- | ----------------------------- | ------- |
| span   | 栅格占据的列数                     | `number`                                         | 24      |
| offset | 栅格左侧的间隔格数      | ^[number]                                                                             | 0       |
| push   | 栅格向右移动格数      | ^[number]                                                                             | 0       |
| pull   | 栅格向左移动格数       | ^[number]                                                                             | 0       |
| xs     | `<768px` 响应式栅格数或者栅格属性对象  | `number \| {span?: number, offset?: number, pull?: number, push?: number}` | —       |
| sm     | `≥768px` 响应式栅格数或者栅格属性对象  | `number \| {span?: number, offset?: number, pull?: number, push?: number}` | —       |
| md     | `≥992px` 响应式栅格数或者栅格属性对象  | `number \| {span?: number, offset?: number, pull?: number, push?: number}` | —       |
| lg     | `≥1200px` 响应式栅格数或者栅格属性对象 | `number \| {span?: number, offset?: number, pull?: number, push?: number}` | —       |
| xl     | `≥1920px` 响应式栅格数或者栅格属性对象 | `number \| {span?: number, offset?: number, pull?: number, push?: number}` | —       |


### Col Slots

| 插槽名   | 说明                      |
| ------- | ------------------------- |
| default | 自定义默认内容              |

<style lang="scss">
:root {
  --ep-c-bg-row: #f9fafc;
  --ep-c-bg-purple: #d3dce6;
  --ep-c-bg-purple-dark: #99a9bf;
  --ep-c-bg-purple-light: #e5e9f2;
}

.dark {
  --ep-c-bg-row: #18191a;
  --ep-c-bg-purple: #46494d;
  --ep-c-bg-purple-dark: #242526;
  --ep-c-bg-purple-light: #667180;
}

.row-bg {
  padding: 10px 0;
  background-color: var(--ep-c-bg-row);
}

.ep-bg-purple-dark {
  background: var(--ep-c-bg-purple-dark);
}

.ep-bg-purple {
  background: var(--ep-c-bg-purple);
}

.ep-bg-purple-light {
  background: var(--ep-c-bg-purple-light);
}

</style>
