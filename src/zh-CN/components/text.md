# Text 文本

文本的常见操作

## 基础用法

由 `type` 属性来选择 Text 的类型。

:::demo src=examples/text/basic.vue :::


## 尺寸

使用 `size` 属性配置尺寸，可选的尺寸大小有: `large`, `default` 或 `small`

:::demo src=examples/text/sizes.vue :::


## 省略

通过 `truncated` 属性，在文本超过视图或最大宽度设置时展示省略符。 通过 `line-clamp` 属性控制多行的样式

:::demo src=examples/text/truncated.vue :::


## 混合使用

混合使用 Text 组件


:::demo src=examples/text/mixed.vue :::


## API

### Attributes

| 属性名               | 描述                | 类型                                                        | 默认值  |
| ------------------- | ------------------ | ------------------------------------------------------------| ------- |
| type                | 类型                | `'primary' \| 'success' \| 'warning' \| 'danger' \| 'info'` | —       |
| size                | 大小                | `'large' \| 'default' \| 'small'`                           | default |
| truncated           | 显示省略号           | `boolean`                                                   | false   |
| line-clamp          | 最大行数             | `string \| number`                                          | —       |

### Slots

| 名称     | 描述            |
| ------- | --------------- |
| default | 默认内容         |
