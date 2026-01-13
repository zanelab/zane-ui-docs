
# Link

Text hyperlink

:::warning Security Warning
The `href` prop will be rendered directly to an `<a>` tag. If you pass a value such as `javascript:alert(1)` or a malicious URL, it may cause **XSS** or **open redirect vulnerabilities**.

Always validate and sanitize the URL before use. For example:

<details>
<summary>Show code example</summary>

```js
function sanitizeUrl(url) {
  const allowedProtocols = ['http:', 'https:']
  try {
    const parsed = new URL(url, window.location.origin)
    return allowedProtocols.includes(parsed.protocol) ? parsed.href : '#'
  } catch {
    return '#'
  }
}
```

</details>

:::

## Basic

Basic text link

:::demo src=examples/link/basic.vue :::


## Disabled

Disabled state of link

:::demo src=examples/link/disabled.vue :::


## Underline

Controlling when underlines should appear

:::demo src=examples/link/underline.vue :::


## Icon

Link with icon

:::demo src=examples/link/with-icon.vue :::


## API

### Attributes

| Name      | Description                         | Type                                                                            | Default |
| --------- | ----------------------------------- | ------------------------------------------------------------------------------- | ------- |
| type      | type                                | `'primary' \| 'success' \| 'warning' \| 'danger' \| 'info' \| 'default'` | default |
| underline | when underlines should appear       | `'always' \| 'hover' \| 'never' \| boolean`                              | hover   |
| disabled  | whether the component is disabled   | `boolean `                                                                     | false   |
| href      | same as native hyperlink's `href`   | `string`                                                                       | —       |
| target    | same as native hyperlink's `target` | `'_blank' \| '_parent' \| '_self' \| '_top'`                             | \_self  |
| icon      | icon component                      | `string`                                                       | —       |


### Slots

| Name    | Description               |
| ------- | ------------------------- |
| default | customize default content |
| icon    | customize icon component  |


### Events

| Event    | Description | Type                      |
| -------- | ----------- | ------------------------- |
| `zClick` |             | `CustomEvent<MouseEvent>` |
