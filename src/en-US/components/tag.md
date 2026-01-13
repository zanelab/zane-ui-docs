# Tag

## When To Use

- It can be used to tag by dimension or property.
- When categorizing.

## Demo

### Basic Usage

:::demo src=examples/tag/tag-1.vue :::

## API

### Properties

| Property | Attribute | Description | Type | Default |
| --- | --- | --- | --- | --- |
| `color` | `color` | Label color theme provides 10 preset color schemes to meet the visual needs of different scenarios: <br>1. `blue`: blue theme (neutral information) <br>2. `error`: error red (failed operation/dangerous state) <br>3. `gray`: gray theme (default neutral color) <br>4. `green`: green theme (success/completion state) <br>5. `info`: information blue (notification/prompt information) <br>6. `primary`: brand primary color (important content) <br>7. `red`: warning red (urgent notification) <br>8. `success`: success green (successful operation) <br>9. `warning`: warning yellow (attention/reminder) <br>10. `yellow`: emphasis yellow (highlighted display) | `"blue" \| "error" \| "gray" \| "green" \| "info" \| "primary" \| "red" \| "success" \| "warning" \| "yellow"` | `'gray'` |
| `dismissible` | `dismissible` | Whether to display the close button. When set to true, a close icon is displayed on the right side of the tag. Clicking it triggers the `zane-tag--dismiss` event. | `boolean` | `false` |
| `imageSrc` | `image-src` | Label image address After setting, the specified image (such as user avatar) is displayed on the left side of the label | `string` | `undefined` |
| `selected` | `selected` | Selected state Indicates whether the tag is selected, often used in multiple selection scenarios | `boolean` | `false` |
| `size` | `size` | Label size Controls the overall size of the label: <br>1. `md`: medium size (default) <br>2. `sm`: small size (compact layout) | `"md" \| "sm"` | `'md'` |
| `value` | `value` | Tag value The business data value associated with the tag, which is passed as a parameter when the event is triggered | `string` | `''` |

### Events

| Event | Description | Type |
| --- | --- | --- |
| `zane-tag--click` | Tab click event is triggered when the tab is clicked (excluding the close button area) | `CustomEvent<any>` |
| `zane-tag--dismiss` | The tag close event is triggered when the close button is clicked, passing the value or text content of the tag | `CustomEvent<any>` |

### Dependencies

#### Used by

- [code-editor](./code-editor)
- [select](./select)

#### Depends on

- [icon](./icon)
