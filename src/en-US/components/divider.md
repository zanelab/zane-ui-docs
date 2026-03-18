# Divider

The dividing line that separates the content.

## Basic usage

Divide the text of different paragraphs.

:::demo src=examples/divider/divider-1.vue :::

## Custom content

You can customize the content on the divider line.

:::demo src=examples/divider/divider-2.vue :::

## dashed line

You can set the style of divider.

:::demo src=examples/divider/divider-3.vue :::

## Vertical divider

:::demo src=examples/divider/divider-4.vue :::

## API

### Attributes

| Name             | Description                                                | Type                                                                                                                                        | Default    |
| ---------------- | ---------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- | ---------- |
| direction        | Set divider's direction                                    | `'horizontal' \| 'vertical'`                                                                                                         | horizontal |
| border-style     | Set the style of divider                                   | `'none' \| 'solid' \| 'hidden' \| 'dashed' \| ...` [css/border-style](https://developer.mozilla.org/zh-CN/docs/Web/CSS/border-style) | solid      |
| content-position | the position of the customized content on the divider line | `'left' \| 'right' \| 'center' `                                                                                                     | center     |

### Slots

| Name    | Description                            |
| ------- | -------------------------------------- |
| default | customized content on the divider line |
