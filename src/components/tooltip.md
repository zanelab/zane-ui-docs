# Tooltip 文字提示

常用于展示鼠标 hover 时的提示信息。

## 基础用法

在这里我们提供 9 种不同方向的展示方式，可以通过以下完整示例来理解，选择你要的效果。

使用 `content` 属性来决定 `hover` 时的提示信息。 由 `placement` 属性决定展示效果： `placement` 属性值为：[方向]-[对齐位置]；四个方向：`top`、`left`、`right`、`bottom`；三种对齐位置：`start`, `end`，默认为空。 如 `placement="left-end"`，则提示信息出现在目标元素的左侧，且提示信息的底部与目标元素的底部对齐。

:::demo src=examples/tooltip/basic.vue :::

## 主题

Tooltip 组件内置了两个主题：`light`, `light-border`, `material` 和 `translucent`。

:::tip

要使用自定义主题，您必须知道您的工具提示在哪里渲染， 如果您的工具提示被呈现为根元素，您将需要全局设置css规则。

建议您使用自定义主题并同时显示箭头时不使用线性渐变背景颜色。 因为弹出箭头和内容是两个不同的元素， 弹出箭头的样式需要单独设置， 当它到渐变背景颜色时，会看起来很奇怪。

:::

通过设置 theme 来修改主题.

:::demo src=examples/tooltip/theme.vue :::

## 更多内容的文字提示

展示多行文本或者是设置文本内容的格式

用具名插槽 `content`，替代 `tooltip` 中的 `content` 属性。


:::demo src=examples/tooltip/rich-content.vue :::

## 显示 HTML 内容

内容属性可以设置为 HTML 字符串。

:::warning

`content` 属性虽然支持传入 HTML 片段，但是在网站上动态渲染任意 HTML 是非常危险的，因为容易导致 [XSS 攻击](https://en.wikipedia.org/wiki/Cross-site_scripting)。 因此在 `allowHTML` 打开的情况下，请确保 `content` 的内容是可信的，永远不要将用户提交的内容赋值给 `content` 属性。

:::

:::demo src=examples/tooltip/html-content.vue :::

## 定制箭头

指向元素的箭头可以修改其比例或形状，也可以完全禁用。

:::demo src=examples/tooltip/custom-arrow.vue :::

## 动画效果

工具提示可以有不同类型的过渡动画。默认情况下，这是一个简单的渐变（不透明度过渡）。

### 预设的动画

:::demo src=examples/tooltip/preset-animations.vue :::

### 填充效果

:::demo src=examples/tooltip/fill-animation.vue :::

### 惯性/弹性效应

使用 `transition-timing-function` 将CSS弹簧物理添加到动画中

:::demo src=examples/tooltip/inertia-animation.vue :::

### CSS关键帧动画

更高级的是您可以使用CSS动画（@keyframes规则），例如使用 `animate.css` 包：

:::demo src=examples/tooltip/css-animation.vue :::

### 持续时间

:::demo src=examples/tooltip/duration-animation.vue :::

## 触发方式

可以由各种不同的事件触发，包括 `mouseenter`、 `focus`、 `focusin`、 `click`、 `manual` 事件：

使用 `manual` 仅以编程方式触发。

:::demo src=examples/tooltip/triggers.vue :::

## 可交互性

允许您将鼠标悬停在上面并单击其中。

:::demo src=examples/tooltip/interactive.vue :::

## 延迟隐藏或显示

可以在触发后延迟隐藏或显示。

:::demo src=examples/tooltip/delay.vue :::

## 鼠标跟随

可以跟随鼠标光标并遵循特定轴线。此外，工具提示会持续跟随光标移动，直至显示为止，此时将停止跟随（初始状态）。

:::demo src=examples/tooltip/follow-cursor.vue :::


## API

### Attributes

| 名称               | 说明                                   | 类型                                       | 默认值           |
| ------------------ | -------------------------------------- | ------------------------------------------ | ----------------- |
| allowHTML          | 是否将内容字符串解析为HTML而不是文本。     | `boolean` | `true` |
| animateFill        | 确定为背景填充颜色设置动画。              | `boolean` | `false` |
| animation          | 过渡动画的类型。                         | `boolean \| string` | `"fade"` |
| appendTo           | 将 Tooltip 附加到指定的元素。            | `'parent' \| ((ref: Element) => Element) \| Element` | `document.body` |
| aria               | 无障碍访问（aria）属性的配置选项。以下两个属性均为可选设置：<br />1. `content`：应用于触发元素上的 `aria-*` 属性，用于向屏幕阅读器宣告工具提示的内容。<br />2.  `expanded`：是否向触发元素添加 `aria-expanded` 属性。| `{ content?: 'auto' \| 'describedby' \| 'labelledby' \| null; expanded?: 'auto' \| boolean; }` | `"describedby"` |
| arrow              | 是否有箭头。      | `boolean \| DocumentFragment \| string \| SVGElement` | `true` |
| content            | 显示的内容，优先于 slot#content      | `((ref: Element) => DocumentFragment \| Element \| string) \| DocumentFragment \| Element \| string` | `""` |
| delay              | 触发事件触发后，显示或隐藏之前的延迟（毫秒）。     | `[null \| number, null \| number] \| number` | `0` |
| duration           | 过渡动画的持续时间（毫秒）。     | `[null \| number, null \| number] \| number` | `[300, 250]` |
| followCursor       | 是否跟随用户的鼠标光标。     | `'horizontal' \| 'initial' \| 'vertical' \| boolean` | `false` |
| hideOnClick        | 是否在点击触发元素或外部区域时隐藏。该行为取决于所使用的事件触发机制。 | `'toggle' \| boolean` | `true` |
| inertia            | 是否对过渡动画应用（可自定义的）CSS弹簧式动画效果。将显示时长调整为较高值可使动画呈现效果更佳。 | `boolean` | `false` |
| inlinePositioning  | 为 `display: inline` 元素提供增强支持。系统将根据定位自动选择最合适的矩形区域。 | `boolean` | `false` |
| interactive        | 是否包含可交互内容，以便用户能在不触发隐藏的情况下悬停或点击其内部区域。 | `boolean` | `false` |
| interactiveBorder  | 周围不可见边框的大小，该边框可在光标移出工具提示区域时防止其立即隐藏。 | `number` | `2` |
| interactiveDebounce  | 当光标离开提示工具的可交互区域时，隐藏交互处理函数的防抖延迟时间（以毫秒为单位）。 | `number` | `2` |
| maxWidth           | 提示工具的最大宽度。此设置可有效防止其水平宽度过大而影响内容阅读。 | `number \| string` | `350` |
| moveTransition     | 应用于根定位浮层节点的过渡效果。这描述了浮层元素在翻转或更改目标位置等情况下“移动”（或位置更新）之间的过渡状态。 | `string` | `""` |
| offset             | 以像素为单位设置工具提示与其触发元素的偏移距离（包括横向偏移和纵向偏移）。 | `[number, number]` | `[0, 10]` |
| placement          | 提示工具的优先显示位置。 | `"auto" \| "auto-start" \| "auto-end" \| "top" \| "top-start" \| "top-end" \| "bottom" \| "bottom-start" \| "bottom-end" \| "right" \| "right-start" \| "right-end" \| "left-start" \| "left-end"` | `"top"` |
| showOnCreate       | 提示工具创建完成后是否立即显示，此过程会遵循预设的延迟时间。 | `boolean` | `false` |
| sticky             | 提示工具在挂载时是否始终跟随其触发元素。虽然通常不需要此功能，但当触发元素的位置处于动画状态，或需要在某些DOM布局变化时自动更新工具提示位置而无需手动操作的情况下，该设置会非常实用。 | `'popper' \| 'reference' \| boolean` | `false` |
| theme              | 提示工具元素的主题样式。核心CSS默认采用深色（#333）主题，用户可通过自定义主题覆盖此设置。| `string` | `""` |
| touch              | 在触摸设备上的交互行为。 | `'hold' \| ['hold', number] \| boolean` | `true` |
| trigger            | 触发提示工具显示的事件类型。多个事件名称之间需以空格分隔。 | `"mouseenter" \| "focus" \| "focusin" \| "click" \| "manual"` | `"mouseenter focus"` |
| triggerTarget      | 添加触发事件监听器的目标元素（或元素组）。该设置允许将工具提示的定位逻辑与其触发来源分离。| `Element \| Element[] \| null` | `null` |
| zIndex             | 指定根 popper 节点上的 `z-index` CSS。 | `number` | `9999` |

### Events

| 事件名称     | 说明                                                                  | 类型                                 |
| ----------- | --------------------------------------------------------------------- | ------------------------------------ |
| zShow       | 当提示工具开始显示时触发。 | `(event?: CustomEvent<Instance<Props>>) => void`  |
| zMount      | 当提示工具已挂载到DOM（且 popper 实例已创建）时触发。 | `(event?: CustomEvent<Instance<Props>>) => void`  |
| zHide       | 当提示工具开始隐藏时触发。 | `(event?: CustomEvent<Instance<Props>>) => void`  |
| zHidden     | 当提示工具完全隐藏并从DOM中卸载后触发。 | `(event?: CustomEvent<Instance<Props>>) => void`  |
| zClickOutside | 当鼠标点击提示工具外部时触发。 | `(event?: CustomEvent<Instance<Props>>) => void`  |


### Slots

| 插槽名称    | Description                                                                    |
| ---------- | ------------------------------------------------------------------------------ |
| default    | 提示框触发及参考元素，只接受单个根元素。 |
| content    | 自定义内容 | 


### Exposes

| 方法名                 | 详情                                | 类型                       |
| -------------------- | ------------------------------------ | -------------------------- |
| disable              | 临时阻止提示工具的显示或隐藏 | `() => void` |
| enable               | 重新启用工具提示功能 | `() => void` |
| hide                 | 随时以编程方式隐藏提示工具 | `() => void` |
| show                 | 随时以编程方式显示提示工具 | `() => void` |
| updateContent        | 更新提示工具的内容 | `() => void` |
