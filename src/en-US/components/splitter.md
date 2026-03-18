# Splitter

Divide the area horizontally or vertically, and freely drag to adjust the size of each area.

## Basic usage

The most basic usage, if no default size is passed, it will be automatically divided equally.

:::demo src=examples/splitter/basic.vue :::

## Vertical

Use vertical orientation.

:::demo src=examples/splitter/vertical.vue :::

## Collapsible

Configuring `collapsible` provides quick shrinking capability. You can use the `min` property to prevent expanding through dragging after collapsing.

:::demo src=examples/splitter/collapsible.vue :::

## Disable drag

When either panel disables `resizable`, dragging will be disabled.

:::demo src=examples/splitter/disableDrag.vue :::

## Panel size

`v-model:size` can get the panel size.

:::demo src=examples/splitter/size.vue :::

## Lazy

When `lazy` is enabled, the panel size will not update in real time during dragging, but only after the drag ends.

:::demo src=examples/splitter/lazy.vue :::

## Splitter API

### Splitter Attributes

| Name           | Description                      | Type                                | Default    |
| -------------- | -------------------------------- | ----------------------------------- | ---------- |
| layout         | Layout direction of the splitter | `'horizontal' \| 'vertical'`        | horizontal |
| lazy           | Whether to enable lazy mode      | `boolean`                           | false      |

### Splitter Events

| Name               | Description                                                              | type                                                                          |
| ------------------ | ------------------------------------------------------------------------ | ----------------------------------------------------------------------------- |
| resize-start       | Triggered when starting to resize a panel, `index` is the drag bar index | `(index: number, sizes: number[]) => void`                         |
| resize             | Triggered while resizing a panel, `index` is the drag bar index          | `(index: number, sizes: number[]) => void`                         |
| resize-end         | Triggered when panel resizing ends, `index` is the drag bar index        | `(index: number, sizes: number[]) => void`                         |
| collapse           | Triggered when a panel is collapsed, `index` is the drag bar index       | `(index: number, type: 'start' \| 'end', sizes: number[]) => void` |

## SplitterPanel API

### SplitterPanel Attributes

| Name                | Description                                         | Type                  | Default |
| ------------------- | --------------------------------------------------- | --------------------- | ------- |
| size                | Size of the panel (in pixels or percentage)         | `string \| number`    | -       |
| min                 | Minimum size of the panel (in pixels or percentage) | `string \| number`    | -       |
| max                 | Maximum size of the panel (in pixels or percentage) | `string \| number`    | -       |
| resizable           | Whether the panel can be resized                    | `boolean`             | true    |
| collapsible         | Whether the panel can be collapsed                  | `boolean`             | false   |

### SplitterPanel Events

| Name        | Description                       | type                                |
| ----------- | --------------------------------- | ----------------------------------- |
| update:size | Triggered when panel size changes | `(size: number) => void` |

### SplitterPanel Slots

| Name              | Description                                     |
| ----------------- | ----------------------------------------------- |
| default           | Default content of the panel                    |


### SplitterBar Slots

| Name              | Description                                     |
| ----------------- | ----------------------------------------------- |
| start-collapsible | Custom content for the start collapsible button |
| end-collapsible   | Custom content for the end collapsible button   |
