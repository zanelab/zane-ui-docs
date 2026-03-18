
# Collapse

Use Collapse to store contents.

## Basic usage

You can expand multiple panels

:::demo src=examples/collapse/collapse-1.vue :::

## Accordion

In accordion mode, only one panel can be expanded at once

Activate accordion mode using the `accordion` attribute.

:::demo src=examples/collapse/collapse-2.vue :::

## Custom title

Besides using the `title` attribute, you can customize panel title with named slots, which makes adding custom content, e.g. icons, possible.

Starting from version ^(2.9.10), the `title` slot provides an `isActive` property that indicates whether the current collapse item is active.

:::demo src=examples/collapse/collapse-3.vue :::

## Custom icon

Besides using the `icon` attribute, you can customize icon of panel item with named slots, which makes adding custom content.

:::demo src=examples/collapse/collapse-4.vue :::

## Custom icon position

using the `expand-icon-position` attribute, you can customize icon position.

:::demo src=examples/collapse/collapse-5.vue :::

## Prevent collapsing

set the `before-collapse` property, If `false` is returned or a `Promise` is returned and then is rejected, will stop collapsing.

:::demo src=examples/collapse/collapse-6.vue :::

## Collapse API

### Collapse Attributes

| Name                           | Description                                                                                                                                          | Type                                           | Default |
| ------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------- | ------- |
| value          | currently active panel, the type is `string` in accordion mode, otherwise it is `array`                                                              | `'string' \| string[]`                           | []      |
| accordion                      | whether to activate accordion mode                                                                                                                   | `boolean`                                     | false   |
| expand-icon-position | set expand icon position                                                                                                                             | `'left' \| 'right' `                    | right   |
| before-collapse      | before-collapse hook before the collapse state changes. If `false` is returned or a `Promise` is returned and then is rejected, will stop collapsing | `() => Promise<boolean> \| boolean` | —       |

### Collapse Events

| Name   | Description                                                                                                   | Type                                                |
| ------ | ------------------------------------------------------------------------------------------------------------- | --------------------------------------------------- |
| change | triggers when active panels change, the parameter type is `string` in accordion mode, otherwise it is `array` | `(e: CustomEvent) => void` |

### Collapse Slots

| Name    | Description               | Subtags       |
| ------- | ------------------------- | ------------- |
| default | customize default content | Collapse Item |

## Collapse Item API

### Collapse Item Attributes

| Name          | Description                        | Type                     | Default    |
| ------------- | ---------------------------------- | ------------------------ | ---------- |
| name          | unique identification of the panel | `string \| number`       | —          |
| title         | title of the panel                 | `string`                 | ''         |
| icon          | icon of the collapse item          | `string`  | 'arrow-right' |
| disabled      | disable the collapse item          | `boolean`                | false      |

### Collapse Item Slot

| Name          | Description                    | 
| ------------- | ------------------------------ |
| default       | content of Collapse Item       |
| title         | content of Collapse Item title |
| icon          | content of Collapse Item icon  |

