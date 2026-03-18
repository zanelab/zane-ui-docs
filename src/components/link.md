
# Link 链接

文字超链接

:::warning 安全警告
`href` 属性将会直接渲染到 `<a>` 标签内部。 如果你传递类似 `javascript:alert(1)` 这样的值或恶意 URL，可能会导致 **XSS** 或 **开放重定向漏洞**。

在使用前始终验证并净化 URL。 例如：

<details>
<summary>显示代码示例</summary>

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


## 基础用法

基础的文字链接用法。

:::demo src=examples/link/basic.vue :::


## 禁用状态

文字链接不可用状态。

:::demo src=examples/link/disabled.vue :::


## 下划线

控制下划线是否出现


:::demo src=examples/link/underline.vue :::


## 图标

带图标的链接


:::demo src=examples/link/with-icon.vue :::


## API

### Attributes

| 属性名      | 说明                         | 类型                                                                            | 默认值 |
| --------- | ----------------------------------- | ------------------------------------------------------------------------------- | ------- |
| type      | 类型                                | `'primary' \| 'success' \| 'warning' \| 'danger' \| 'info' \| 'default'` | default |
| underline | 控制下划线是否出现       | `'always' \| 'hover' \| 'never' \| boolean`                              | hover   |
| disabled  | 是否禁用状态   | `boolean`                                                                      | false   |
| href      | 原生 href 属性   | `string`                                                                       | —       |
| target    | 同原生 `target` 属性 | `'_blank' \| '_parent' \| '_self' \| '_top'`                             | \_self  |
| icon      | 图标组件                     | `string`                                                        | —       |


### Slots

| 插槽名    | 说明               |
| ------- | ------------------------- |
| default | 自定义默认内容 |
| icon    | 自定义图标组件  |


### Events

| 事件名    | 说明         | 参数类型                   |
| -------- | ----------- | ------------------------- |
| `zClick` |  点击事件    | `CustomEvent<MouseEvent>` |
