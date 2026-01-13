# Text

Used for text.

## Basic

Use the `type` attribute to define Text's type.

:::demo src=examples/text/basic.vue :::


## Sizes

Use attribute `size` to set additional sizes with `large`, `default` or `small`.

:::demo src=examples/text/sizes.vue :::


## Ellipsis

Pass the `truncated` prop to render an ellipsis when the text exceeds the width of the viewport or max-width set. `line-clamp` prop to render multiline ellipsis.

:::demo src=examples/text/truncated.vue :::


## Mixed

Text mixed component


:::demo src=examples/text/mixed.vue :::


## API

### Attributes

| Name                | Description        | Type                                                        | Default |
| ------------------- | ------------------ | ------------------------------------------------------------| ------- |
| type                | text type          | `'primary' \| 'success' \| 'warning' \| 'danger' \| 'info'` | —       |
| size                | text size          | `'large' \| 'default' \| 'small'`                           | default |
| truncated           | render ellipsis    | `boolean`                                                   | false   |
| line-clamp          | maximum lines      | `string \| number`                                          | —       |

### Slots

| Name    | Description     |
| ------- | --------------- |
| default | default content |
