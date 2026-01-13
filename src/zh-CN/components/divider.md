# Divider 分割线

区隔内容的分割线。

## 基础用法

对不同段落的文本进行分割。

:::demo src=examples/divider/divider-1.vue :::

## 设置文案

可以在分割线上自定义文本内容。

:::demo src=examples/divider/divider-2.vue :::

## 虚线

您可以设置分隔符的样式。

:::demo src=examples/divider/divider-3.vue :::

## 垂直分隔线

:::demo src=examples/divider/divider-4.vue :::

## API

### Attributes

| 属性名             | 说明                                                | 类型                                                                                                                                        | 默认    |
| ---------------- | ---------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- | ---------- |
| direction        | 设置分割线方向                                    | `'horizontal' \| 'vertical'`                                                                                                         | horizontal |
| border-style     | 设置分隔符样式                                   | `'none' \| 'solid' \| 'hidden' \| 'dashed' \| ...` [css/border-style](https://developer.mozilla.org/zh-CN/docs/Web/CSS/border-style) | solid      |
| content-position | 自定义分隔线内容的位置 | `'left' \| 'right' \| 'center' `                                                                                                     | center     |

### Slots

| Name    | Description                            |
| ------- | -------------------------------------- |
| default | 设置分割线文案的位置 |
