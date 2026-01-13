# Button

Commonly used button.

## Basic usage

Use `type`, `plain`, `round` and `circle` to define Button's style.

:::demo src=examples/button/button-1.vue :::

## Disabled Button

The `disabled` attribute determines if the button is disabled.

Use `disabled` attribute to determine whether a button is disabled. It accepts a `Boolean` value.

:::demo src=examples/button/button-2.vue :::

## Link Button

:::demo src=examples/button/button-3.vue :::

## Text Button

Buttons without border and background.

:::demo src=examples/button/button-4.vue :::

## Icon Button

Use icons to add more meaning to Button. You can use icon alone to save some space, or use it with text.

Use the `icon` attribute to add icon. You can find the icon list in Element Plus icon component. Adding icons to the right side of the text is achievable with an `<i>` tag. Custom icons can be used as well.

:::demo src=examples/button/button-5.vue :::

## Button Group

Displayed as a button group, can be used to group a series of similar operations.

Use tag `<el-button-group>` to group your buttons.

:::demo src=examples/button/button-6.vue :::

## Loading Button

Click the button to load data, then the button displays a loading state.

Set `loading` attribute to `true` to display loading state.

You can use the `loading` slot to customize your loading component

:::demo src=examples/button/button-7.vue :::

## Sizes

Besides default size, Button component provides three additional sizes for you to choose among different scenarios.

Use attribute `size` to set additional sizes with `large`, `small`.

:::demo src=examples/button/button-8.vue :::

## Custom Color

You can custom button color.

We will calculate hover color & active color automatically.

:::demo src=examples/button/button-9.vue :::

## Button API

### Button Attributes

| Name              | Description                                                                                                                                          | Type                                                                                                         | Default |
| ----------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------ | ------- |
| size              | button size                                                                                                                                          | ^[enum]`'large' \| 'default' \| 'small'`                                                                     | —       |
| type              | button type, when setting `color`, the latter prevails                                                                                               | ^[enum]`'default' \| 'primary' \| 'success' \| 'warning' \| 'danger' \| 'info' \| '' \| 'text' (deprecated)` | —       |
| plain             | determine whether it's a plain button                                                                                                                | ^[boolean]                                                                                                   | false   |
| bg       | determine whether the text button background color is always on                                                                                      | ^[boolean]                                                                                                   | false   |
| link     | determine whether it's a link button                                                                                                                 | ^[boolean]                                                                                                   | false   |
| round             | determine whether it's a round button                                                                                                                | ^[boolean]                                                                                                   | false   |
| circle            | determine whether it's a circle button                                                                                                               | ^[boolean]                                                                                                   | false   |
| loading           | determine whether it's loading                                                                                                                       | ^[boolean]                                                                                                   | false   |
| loading-icon      | customize loading icon component                                                                                                                     | ^[string] / ^[Component]                                                                                     | Loading |
| disabled          | disable the button                                                                                                                                   | ^[boolean]                                                                                                   | false   |
| icon              | icon component                                                                                                                                       | ^[string] / ^[Component]                                                                                     | —       |
| autofocus         | same as native button's `autofocus`                                                                                                                  | ^[boolean]                                                                                                   | false   |
| native-type       | same as native button's `type`                                                                                                                       | ^[enum]`'button' \| 'submit' \| 'reset'`                                                                     | button  |
| auto-insert-space | automatically insert a space between two chinese characters(this will only take effect when the text length is 2 and all characters are in Chinese.) | ^[boolean]                                                                                                   | false   |
| color             | custom button color, automatically calculate `hover` and `active` color                                                                              | ^[string]                                                                                                    | —       |
| dark              | dark mode, which automatically converts `color` to dark mode colors                                                                                  | ^[boolean]                                                                                                   | false   |


### Button Slots

| Name    | Description                 |
| ------- | --------------------------- |
| default | customize default content   |
| loading | customize loading component |
| icon    | customize icon component    |

## ButtonGroup API

### ButtonGroup Attributes

| Name | Description                                      | Type                                                               | Default |
| ---- | ------------------------------------------------ | ------------------------------------------------------------------ | ------- |
| size | control the size of buttons in this button-group | ^[enum]`'large' \| 'default' \| 'small'`                           | —       |
| type | control the type of buttons in this button-group | ^[enum]`'primary' \| 'success' \| 'warning' \| 'danger' \| 'info'` | —       |

### ButtonGroup Slots

| Name    | Description                    | Subtags |
| ------- | ------------------------------ | ------- |
| default | customize button group content | Button  |
