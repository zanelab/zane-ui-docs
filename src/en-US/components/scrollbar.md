# Scrollbar

Used to replace the browser's native scrollbar.

## Basic usage

Use `height` property to set the height of the scrollbar, or if not set, it adapts according to the parent container height.

:::demo src=examples/scrollbar/basic-usage.vue :::


## Horizontal scroll

When the element width is greater than the scrollbar width, the horizontal scrollbar is displayed.

:::demo src=examples/scrollbar/horizontal-scroll.vue :::


## Max height

The scrollbar is displayed only when the element height exceeds the max height.

:::demo src=examples/scrollbar/max-height.vue :::


## Manual scroll

Use `setScrollTop` and `setScrollLeft` methods can control scrollbar manually.

:::demo src=examples/scrollbar/manual-scroll.vue :::

## Infinite scroll

`end-reached` is triggered when the scrollbar reaches the end. It can be used as an infinite scroll.

:::demo src=examples/scrollbar/infinite-scroll.vue :::

## API

### Attributes

| Name                              | Description                                                                                                                     | Type                                                                | Default |
| --------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------- | ------- |
| height                            | height of scrollbar                                                                                                             | `string] \| number`                                               | —       |
| max-height                        | max height of scrollbar                                                                                                         | `string] \| number`                                               | —       |
| native                            | whether to use the native scrollbar style                                                                                       | `boolean`                                                         | false   |
| wrap-style                        | style of wrap container                                                                                                         | `CSSProperties \| CSSProperties[] \| string` | —       |
| wrap-class                        | class of wrap container                                                                                                         | `string`                                                           | —       |
| view-style                        | style of view                                                                                                                   | `CSSProperties \| CSSProperties[] \| string` | —       |
| view-class                        | class of view                                                                                                                   | `string`                                                           | —       |
| noresize                          | do not respond to container size changes, if the container size does not change, it is better to set it to optimize performance | `boolean`                                                          | false   |
| tag                               | element tag of the view                                                                                                         | `string`                                                           | div     |
| always                            | always show scrollbar                                                                                                           | `boolean`                                                          | false   |
| min-size                          | minimum size of scrollbar                                                                                                       | `number`                                                           | 20      |
| id                       | id of view                                                                                                                      | `string`                                                           | —       |
| role             | role of view                                                                                                                    | `string`                                                           | —       |
| tabindex                 | tabindex of wrap container                                                                                                      |  `number \| string`                                               | —       |
| distance                | trigger end-reached event distance(px)                                                                                          | `number`                                                           | 0       |

### Events

| Name                  | Description                                           | Type                                                                     |
| --------------------- | ----------------------------------------------------- | ------------------------------------------------------------------------ |
| zScroll                | triggers when scrolling, return distance of scrolling | `({ scrollLeft: number, scrollTop: number }) => void`         |
| end-reached | triggers when the end of a scroll is triggered        | `(direction: 'top' \| 'bottom' \| 'left' \| 'right') => void` |

### Slots

| Name    | Description               |
| ------- | ------------------------- |
| default | customize default content |

### Exposes

| Name          | Description                                | Type                                                                       |
| ------------- | ------------------------------------------ | -------------------------------------------------------------------------- |
| handleScroll  | handle scroll event                        | `() => void`                                                    |
| scrollToCoord      | scrolls to a particular set of coordinates | `(options: ScrollToOptions \| number, yCoord?: number) => void` |
| setScrollTop  | Set distance to scroll top                 | `(scrollTop: number) => void`                                   |
| setScrollLeft | Set distance to scroll left                | `(scrollLeft: number) => void`                                  |
| update        | update scrollbar state manually            | `() => void`                                                    |
| wrapRef       | scrollbar wrap ref                         | `HTMLDivElement`                                             |
