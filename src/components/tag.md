# Tag 标签

用于标记和选择。

## 基础用法

由 `type` 属性来选择 tag 的类型。 也可以通过 `color` 属性来自定义背景色。

:::demo src=examples/tag/basic.vue :::

## 可移除标签

设置 `closable` 属性可以定义一个标签是否可移除。 它接受一个 `Boolean`。 当 Tag 被移除时会触发 `zClose` 事件。

:::demo src=examples/tag/removable.vue :::

## 动态编辑标签

动态编辑标签可以通过点击标签关闭按钮后触发的 `zClose` 事件来实现。

:::demo src=examples/tag/editable.vue :::

## 不同尺寸

Tag 组件提供除了默认值以外的三种尺寸，可以在不同场景下选择合适的按钮尺寸。

使用 `size` 属性来设置额外尺寸, 可选值包括 `large`, `default` 或 `small`.

:::demo src=examples/tag/sizes.vue :::

## 主题

Tag 组件提供了三个不同的主题：`dark`、`light` 和 `plain`。

通过设置 `effect` 属性来改变主题，默认为 `light`。

:::demo src=examples/tag/theme.vue :::

## 圆形标签

Tag 可以向按钮组件一样变为完全圆形。

:::demo src=examples/tag/rounded.vue :::


## API

### Attributes

| 属性名              | 说明                                  | 类型                                                   | 默认    |
| ------------------- | ------------------------------------ | ------------------------------------------------------ | ------- |
| type                | Tag 的类型                            | `'primary' \| 'success' \| 'info' \| 'warning' \| 'danger'` | primary |
| closable            | 是否可关闭                            | `boolean`                                              | false   |
| hit                 | 是否有边框描边                        | `boolean`                                              | false   |
| color               | 背景色                               | `string`                                               | —       |
| size                | Tag 的尺寸                           | `'large' \| 'default' \| 'small'`                      | —       |
| effect              | Tag 的主题                           | `'dark' \| 'light' \| 'plain'`                         | light   |
| round               | Tag 是否为圆形                       | `boolean`                                              | false   |

### Events

| 事件名 | 说明                        | 类型                                      |
| ----- | ---------------------------- | ----------------------------------------- |
| zClick | 点击 Tag 时触发的事件        | `(evt: CustomEvent<MouseEvent>) => void` |
| zClose | 关闭 Tag 时触发的事件        | `(evt: CustomEvent<MouseEvent>) => void` |

### Slots

| 名称    | 说明               |
| ------- | ----------------- |
| default | 自定义默认内容     |
