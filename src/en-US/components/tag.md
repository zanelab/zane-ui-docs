# Tag

Used for marking and selection.

## Basic usage

Use the `type` attribute to define Tag's type. In addition, the `color` attribute can be used to set the background color of the Tag.

:::demo src=examples/tag/basic.vue :::

## Removable Tag

`closable` attribute can be used to define a removable tag. It accepts a `Boolean`. `zClose` event triggers when Tag is removed.

:::demo src=examples/tag/removable.vue :::

## Edit Dynamically

You can use the `zClose` event to add and remove tag dynamically.

:::demo src=examples/tag/editable.vue :::

## Sizes

Besides default size, Tag component provides three additional sizes for you to choose among different scenarios.

Use attribute `size` to set additional sizes with `large`, `default` or `small`.

:::demo src=examples/tag/sizes.vue :::

## Theme

Tag provide three different themes: `dark`、`light` and `plain`

Using `effect` to change, default is `light`

:::demo src=examples/tag/theme.vue :::

## Rounded

Tag can also be rounded like button.

:::demo src=examples/tag/rounded.vue :::


## API

### Attributes

| Name                | Description                          | Type                                                   | Default |
| ------------------- | ------------------------------------ | ------------------------------------------------------ | ------- |
| type                | type of Tag                          | `'primary' \| 'success' \| 'info' \| 'warning' \| 'danger'` | primary |
| closable            | whether Tag can be removed           | `boolean`                                              | false   |
| hit                 | whether Tag has a highlighted border | `boolean`                                              | false   |
| color               | background color of the Tag          | `string`                                               | —       |
| size                | size of Tag                          | `'large' \| 'default' \| 'small'`                      | —       |
| effect              | theme of Tag                         | `'dark' \| 'light' \| 'plain'`                         | light   |
| round               | whether Tag is rounded               | `boolean`                                              | false   |

### Events

| Name  | Description                  | Type                                      |
| ----- | ---------------------------- | ----------------------------------------- |
| zClick | triggers when Tag is clicked | `(evt: CustomEvent<MouseEvent>) => void` |
| zClose | triggers when Tag is removed | `(evt: CustomEvent<MouseEvent>) => void` |

### Slots

| Name    | Description               |
| ------- | ------------------------- |
| default | customize default content |
