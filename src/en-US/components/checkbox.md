# Checkbox

Checkbox component.

## When To Use

- Used for selecting multiple values from several options.
- If you use only one checkbox, it is the same as using `toggle` to toggle between two states. The difference is that `toggle` will trigger the state change directly, but `Checkbox` just marks the state as changed and this needs to be submitted.

## Demo

### Basic Usage

:::demo src=examples/checkbox/checkbox-1.vue :::

### Intermediate

:::demo src=examples/checkbox/checkbox-2.vue :::

### Sizes

Here are several predefined checkbox sizes, each serving its own semantic purpose.

:::demo src=examples/checkbox/checkbox-3.vue :::

### Readonly

Make input look inactive by adding the disabled boolean attribute to any `<input>` element.

:::demo src=examples/checkbox/checkbox-4.vue :::

### Disabled

Make input look inactive by adding the disabled boolean attribute to any `<input>` element.

:::demo src=examples/checkbox/checkbox-5.vue :::

## API

### Properties

| Property | Attribute | Description | Type | Default |
| --- | --- | --- | --- | --- |
| `configAria` | `config-aria` | The ARIA attribute configuration object is used to dynamically set ARIA attributes (such as aria-label, aria-describedby, etc.). The component will automatically collect all `aria-*` attributes on the element into this object. | `any` | `{}` |
| `disabled` | `disabled` | Disabled state When set to `true`, the component is not interactable and visually grayed out | `boolean` | `false` |
| `intermediate` | `intermediate` | Intermediate state When set to `true`, a "-" icon is displayed, indicating a partially selected state. It is mutually exclusive with the `value` attribute (`value` should be false in the intermediate state) | `boolean` | `false` |
| `label` | `label` | Checkbox label text | `string` | `undefined` |
| `layer` | `layer` | Visual hierarchy controls the depth of the component in the UI, affecting shadows and background colors: <br> `01`: surface component (highest level) <br> `02`: middle component <br> `background`: background component (lowest level) | `"01" \| "02" \| "background"` | `undefined` |
| `name` | `name` | Form field name (auto-generated) | `string` | `` `zane-input-${this.gid}` `` |
| `readonly` | `readonly` | Read-only status | `boolean` | `false` |
| `required` | `required` | Required status | `boolean` | `false` |
| `rounded` | `rounded` | Rounded Corner Style | `boolean` | `false` |
| `size` | `size` | Size specifications <br> `lg`: large size (48px) <br> `md`: medium size (40px) <br> `sm`: small size (32px) | `"lg" \| "md" \| "sm"` | `'md'` |
| `value` | `value` | Selected state When set to `true`, the selected icon is displayed. It is mutually exclusive with the `intermediate` property. | `boolean` | `false` |

### Events

| Event                   | Description                   | Type               |
| ----------------------- | ----------------------------- | ------------------ |
| `zane-checkbox--blur`   | Lost focus event              | `CustomEvent<any>` |
| `zane-checkbox--change` | 值变更事件Value Change Events | `CustomEvent<any>` |
| `zane-checkbox--focus`  | Get focus event               | `CustomEvent<any>` |

### Methods

#### `getComponentId() => Promise<string>`

Get component ID

##### Returns

Type: `Promise<string>`

Component unique identifier

#### `setBlur() => Promise<void>`

Remove focus

##### Returns

Type: `Promise<void>`

#### `setFocus() => Promise<void>`

Setting the focus

##### Returns

Type: `Promise<void>`

### Dependencies

#### Used by

- [table](./table)
