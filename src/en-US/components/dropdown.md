# Dropdown

A dropdown list.

## When To Use

When there are more than a few options to choose from, you can wrap them in a `Dropdown`. By hovering or clicking on the trigger, a dropdown menu will appear, which allows you to choose an option and execute the relevant action.

## Demo

### Basic Usage

:::demo src=examples/dropdown/dropdown-1.vue :::

### Placements

The dropdown can be positioned relative to the trigger element. Possible positions are: top-start, top-end, bottom-end, bottom-start.

You can also use the positions attribute to set all preferred position of the dropdown. On scroll, the dropdown will be repositioned to the closest position.

:::demo src=examples/dropdown/dropdown-2.vue :::

## API

### Properties

| Property | Attribute | Description | Type | Default |
| --- | --- | --- | --- | --- |
| `disabled` | `disabled` | Whether to disable the drop-down menu | `boolean` | `false` |
| `managed` | `managed` | Is it controlled mode? In controlled mode, the state of the component is completely controlled externally. | `boolean` | `false` |
| `open` | `open` | Is the drop-down menu open? | `boolean` | `false` |
| `placements` | `placements` | Drop-down menu location options Multiple locations are separated by commas and sorted by priority | `string` | `'bottom-start,top-start,bottom-end,top-end'` |
| `trigger` | `trigger` | How to trigger the drop-down menu <br>1. `click`: click trigger <br>2. `hover`: hover trigger <br>3. `manual`: manual control | `"click" \| "hover" \| "manual"` | `'click'` |

### Events

| Event | Description | Type |
| --- | --- | --- |
| `zane-dropdown--close` | Drop-down menu close event | `CustomEvent<any>` |
| `zane-dropdown--item-click` | Menu item click event | `CustomEvent<any>` |
| `zane-dropdown--open` | Drop-down menu open event | `CustomEvent<any>` |

### CSS Custom Properties

| Name                              | Description                |
| --------------------------------- | -------------------------- |
| `--zane-dropdown-menu-max-height` | Maximum height of the menu |
