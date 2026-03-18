# 按钮 Button

常用的操作按钮。

## 基本用法

使用 `type`、`plain`、`round` 和 `circle` 来定义按钮的样式。

:::demo src=examples/button/button-1.vue :::

## 禁用状态

你可以使用 `disabled` 属性来定义按钮是否被禁用。

使用 `disabled` 属性来控制按钮是否为禁用状态。 该属性接受一个 `Boolean` 类型的值。

:::demo src=examples/button/button-2.vue :::

## 链接按钮

:::demo src=examples/button/button-3.vue :::

## 文字按钮

没有边框和背景色的按钮。

:::demo src=examples/button/button-4.vue :::

## 图标按钮​

使用图标为按钮添加更多的含义。 你也可以单独使用图标不添加文字来节省显示区域占用。

使用 `icon` 属性来为按钮添加图标。 您可以在我们的 `Icon` 组件中找到所需图标。 通过向右方添加`<zane-icon>`标签来添加图标， 你也可以使用自定义图标。

:::demo src=examples/button/button-5.vue :::

## 按钮组​

以按钮组的方式出现，常用于多项类似操作。

使用 `<zane-button-group>` 对多个按钮分组。

想要更大或更小的按钮？添加 size 属性以获得更多尺寸。

:::demo src=examples/button/button-6.vue :::

## 加载状态按钮​

点击按钮来加载数据，并向用户反馈加载状态。

通过设置 `loading` 属性为 true 来显示加载中状态。

:::demo src=examples/button/button-7.vue :::

## 调整尺寸

除了默认的大小，按钮组件还提供了几种额外的尺寸可供选择，以便适配不同的场景。

使用 `size` 属性额外配置尺寸，可使用 `large` 和 `small` 两种值。

:::demo src=examples/button/button-8.vue :::

## 自定义颜色

您可以自定义按钮的颜色。

我们将自动计算按钮处于 hover 和 active 状态时的颜色。

:::demo src=examples/button/button-9.vue :::


## Button API

### Button Attributes

| 属性名              | 说明                                                                                                                                          | 类型                                                                                                         | 默认值 |
| ----------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------ | ------- |
| size              | 尺寸                                                                                                                                          | `'large' \| 'default' \| 'small'`                                                                     | —       |
| type              | 按钮类型，在设置 `color` 时，后者优先。                                                                                               | `'default' \| 'primary' \| 'success' \| 'warning' \| 'danger' \| 'info' \| ''` | —       |
| plain             | 是否为朴素按钮                                                                                                                | `boolean`                                                                                                 | false   |
| bg       | 是否显示文字按钮背景颜色 on                                                                                      | `boolean`                                                                                                   | false   |
| link     | 是否为链接按钮                                                                                                                 | `boolean`                                                                                                 | false   |
| round             | 是否为圆角按钮                                                                                                                | `boolean`                                                                                                   | false   |
| circle            | 是否为圆形按钮                                                                                                               | `boolean`                                                                                                   | false   |
| loading           | 是否为加载中状态                                                                                                                       | `boolean`                                                                                                   | false   |
| disabled          | 按钮是否为禁用状态                                                                                                                                   | `boolean`                                                                                                   | false   |
| icon              | 图标组件                                                                                                                                      | `string`                                                                                     | —       |
| autofocus         | 原生 `autofocus` 属性                                                                                                                  | `boolean`                                                                                                   | false   |
| native-type       | 原生 `type` 属性                                                                                                                      | `'button' \| 'submit' \| 'reset'`                                                                     | button  |
| auto-insert-space | 两个中文字符之间自动插入空格(仅当文本长度为 2 且所有字符均为中文时才生效) | `boolean`                                                                                                   | false   |
| color             | 自定义按钮颜色, 并自动计算 `hover` 和 `active` 触发后的颜色                                                                              | `string`                                                                                                    | —       |
| dark              | dark 模式, 意味着自动设置 `color` 为 `dark` 模式的颜色                                                                                  | ^[boolean]                                                                                                   | false   |                                                                                 | button  |

### Button Slots

| 插槽名    | 说明                 |
| ------- | --------------------------- |
| default | 自定义默认内容   |
| loading | 自定义加载中组件 |
| icon    | 自定义图标组件    |
                                                                               |
## ButtonGroup API

### ButtonGroup Attributes

| 属性名 | 说明                                      | 类型                                                               | 默认值 |
| ---- | ------------------------------------------------ | ------------------------------------------------------------------ | ------- |
| size | 用于控制该按钮组内按钮的大小 | `'large' \| 'default' \| 'small'`                           | —       |
| type | 用于控制该按钮组内按钮的类型 |^[enum]`'primary' \| 'success' \| 'warning' \| 'danger' \| 'info'` | —       |

### ButtonGroup Slots

| 插槽名    | 说明                    | 子标签 |
| ------- | ------------------------------ | ------- |
| default | 自定义按钮组内容 | Button  |
