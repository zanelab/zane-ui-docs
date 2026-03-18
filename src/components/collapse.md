
# Collapse 折叠面板

通过折叠面板收纳内容区域

## 基础用法

可同时展开多个面板，面板之间不影响

:::demo src=examples/collapse/collapse-1.vue :::

## 手风琴效果

每次只能展开一个面板

通过 `accordion` 属性来设置是否以手风琴模式显示。

:::demo src=examples/collapse/collapse-2.vue :::

## 自定义面板标题

除了可以通过 `title` 属性以外，还可以通过具名 `slot` 来实现自定义面板的标题内容，以实现增加图标等效果。

:::demo src=examples/collapse/collapse-3.vue :::

## 自定义图标

除了使用 `icon` 属性外，您还可以自定义面板项目图标，从而添加自定义内容。

:::demo src=examples/collapse/collapse-4.vue :::

## 自定义图标位置

使用 `expand-icon-position` 属性，您可以自定义图标位置。

:::demo src=examples/collapse/collapse-5.vue :::

## 阻止折叠

设置 `beforeChange` 属性，若返回 `false` 或者返回 `Promise` 且被 `reject` ，则停止切换。

:::demo src=examples/collapse/collapse-6.vue :::

## Collapse API

### Collapse Attributes

| 属性名                           | 说明                                                                                                                                          | 类型                                           | 默认值 |
| ------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------- | ------- |
| value          | 当前活动面板，在手风琴模式下其类型是 `string`，在其他模式下是`array`                                                              | `'string' \| string[] `                          | []      |
| accordion                      | 是否手风琴模式                                                                                                                   | `boolean`                                     | false   |
| expand-icon-position | 设置展开图标位置                                                                                                                             | `'left' \| 'right' `                    | right   |
| before-collapse     | 折叠状态更改之前的折叠钩子。 返回 `false` 或者返回 `Promise` 且被 `reject` 则停止切换 | `() => Promise<boolean> \| boolean` | —       |

### Collapse Events

| 事件名   | 说明                                                                                                   | 类型                                                |
| ------ | ------------------------------------------------------------------------------------------------------------- | --------------------------------------------------- |
| zane-change | 切换当前活动面板，在手风琴模式下其类型是 `string`，在其他模式下是 `string[]` | `(e: CustomEvent) => void` |

### Collapse Slots

| 插槽名    | 说明               | 子标签       |
| ------- | ------------------------- | ------------- |
| default | 自定义默认内容 | Collapse Item |


## Collapse Item API

### Collapse Item Attributes

| 属性名          | 说明                               | 类型                     | 默认值    |
| ------------- | ---------------------------------- | ------------------------ | ---------- |
| name          | 唯一标志符                           | `string \| number`      | —          |
| title         | 面板标题                             | `string`                | ''         |
| icon          | 折叠项目的图标                       | `string`                 | 'arrow-right' |
| disabled      | 是否禁用                            | `boolean`                | false      |

### Collapse Item Slot

| Name          | Description                    | 
| ------------- | ------------------------------ |
| default       | Collapse Item 的内容            |
| title         | Collapse Item 的标题            |
| icon          | 折叠项目图标的内容                |
