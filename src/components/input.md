
# Input 输入框

通过鼠标或键盘输入字符。

## 基础用法

:::demo src=examples/input/basic.vue :::

## 禁用状态

通过 `disabled` 属性指定是否禁用 input 组件

:::demo src=examples/input/disabled.vue :::

## 一键清空

使用 `clearable` 属性即可得到一个可一键清空的输入框

:::demo src=examples/input/clearable.vue :::


## 自定义清除图标

你可以通过 `clear-icon` 属性自定义清除图标

:::demo src=examples/input/clear-icon.vue :::

## 格式化

在 `formatter` 的情况下显示值，我们通常同时使用 `parser`

:::demo src=examples/input/formatter.vue :::

## 密码框

使用 `show-password` 属性即可得到一个可切换显示隐藏的密码框

:::demo src=examples/input/password.vue :::

## 带图标的输入框

带有图标标记输入类型

要在输入框中添加图标，你可以简单地使用 `prefix-icon` 和 `suffix-icon` 属性。 另外， `prefix` 和 `suffix` 命名的插槽也能正常工作。

:::demo src=examples/input/with-icon.vue :::

## 文本域

用于输入多行文本信息可缩放的输入框。 添加 `type="textarea"` 属性来将 `input` 元素转换为原生的 `textarea` 元素。

文本域高度可通过 `rows` 属性控制

:::demo src=examples/input/textarea.vue :::

## 自适应文本域

设置文字输入类型的 `autosize` 属性使得根据内容自动调整的高度。 你可以给 `autosize` 提供一个包含有最大和最小高度的对象，让输入框自动调整。

:::demo src=examples/input/auto-sizing-textarea.vue :::

## 复合型输入框

可以在输入框中前置或后置一个元素，通常是标签或按钮。

可通过 `slot` 来指定在 Input 中分发的前置或者后置的内容。

:::demo src=examples/input/mixed-input.vue :::

## 尺寸

使用 `size` 属性改变输入框大小。 除了默认大小外，还有另外两个选项： `large`, `small`。

:::demo src=examples/input/various-size.vue :::

## 输入长度限制

使用 `max-length` 和 `min-length` 属性, 来控制输入内容的最大字数和最小字数。 "字符数"使用JavaScript字符串长度来衡量。 为文本或文本输入类型设置 `max-length` 可以限制输入值的长度。 允许你通过设置 `show-word-limit` 到 `true` 来显示剩余字数。 你可以将 `word-limit-position` 设置为 `outside`，以在输入框外显示字数统计。


:::demo src=examples/input/length-limiting.vue :::

## API

### Attributes

| 属性名                        | 说明                                                                                                                            | 类型                                                                                                                                                                                                                         | 默认值     |
| --------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| type                        | 类型                                                                                                                          | `'text' \| 'textarea' \| 'password' \| 'button' \| 'checkbox' \| 'file' \| 'number' \| 'radio' \| ...` [原生 input 类型](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Form_%3Cinput%3E_types) | text        |
| value       | 值                                                                                                                           | `string \| number`                                                                                                                                                                                                        | —           |
| maxLength                   | 最大输入长度，同原生 `maxlength` 属性                                                                                                    | `string \| number`                                                                                                                                                                                                        | —           |
| minLength                   | 最小输入长度，同原生 `minlength` 属性                                                                                                    | `string \| number`                                                                                                                                                                                                        | —           |
| showWordLimit             | 是否显示统计字数, 只在 `type` 为 'text' 或 'textarea' 的时候生效                                                                | `boolean`                                                                                                                                                                                                                  | false       |
| wordLimitPosition           | 字数统计位置，当`show-word-limit`为true时有效            | `'inside' \| 'outside'` | "inside"    |
| placeholder                 | 输入框占位文本                                                                                                                   | `string`                                                                                                                                                                                                                   | —           |
| clearable                   | 是否显示清除按钮，只有当 `type` 不是 textarea 时生效                                                                 | `boolean`                                                                                                                                                                                                                  | false       |
| formatter                   | 指定输入值的格式。(只有当 type 是"text"时才能工作)                                                   | `(value: string \| number) => string`                                                                                                                                                                             | —           |
| parser                      | 指定从格式化器输入中提取的值。(仅当 type 是"text"时才起作用)                                                  | `(value: string) => string`                                                                                                                                                                                       | —           |
| show-password               | 是否显示切换密码图标 input                                                                                              | `boolean`                                                                                                                                                                                                                  | false       |
| disabled                    | 是否禁用                                                                                                              | `boolean`                                                                                                                                                                                                                | false       |
| size                        | 输入框尺寸，只在 `type` 不为 'textarea' 时有效                                                                                     | `'large' \| 'default' \| 'small'`                                                                                                                                                                                     | —           |
| prefixIcon                 | 自定义前缀图标                                                                                                                  | `string`                                                                                                                                                                                                    | —           |
| suffixIcon                 | 自定义后缀图标                                                                                                                  | `string`                                                                                                                                                                                                     | —           |
| rows                        | 输入框行数，仅 `type` 为 'textarea' 时有效                                                                       | `number`                                                                                                                                                                                                                    | 2           |
| autosize                    | `textarea` 高度是否自适应，仅 `type` 为 'textarea' 时生效。 可以接受一个对象，比如: `{ minRows: 2, maxRows: 6 }` | `boolean \| { minRows?: number, maxRows?: number }`                                                                                                                                                               | false       |
| autocomplete                | 原生 `autocomplete` 属性                                                                                                 | `string`                                                                                                                                                                                                                   | off         |
| name                        | 等价于原生 input name 属性                                                                                                         | `string`                                                                                                                                                                                                                    | —           |
| readonly                    | 原生 `readonly` 属性，是否只读                                                                                                     | `boolean`                                                                                                                                                                                                                   | false       |
| max                         | 原生 max 属性，设置最大值                                                                                                          | —                                                                                                                                                                                                                            | —           |
| min                         | 原生属性，设置最小值                                                                                                          | —                                                                                                                                                                                                                            | —           |
| step                        | 原生属性，设置输入字段的合法数字间隔                                                                                                         | —                                                                                                                                                                                                                            | —           |
| resize                      | 控制是否能被用户缩放                                                                                                              | `'none' \| 'both' \| 'horizontal' \| 'vertical'`                                                                                                                                                                      | —           |
| autofocus                   | 原生属性，自动获取焦点                                                                                                    | `boolean`                                                                                                                                                                                                                  | false       |
| form                        | 原生属性                                                                                                         | `string`                                                                                                                                                                                                                     | —           |
| aria-label                 | 等价于原生 input aria-label 属性                                                                                                   | `string`                                                                                                                                                                                                                   | —           |
| tabindex                    | 输入框的 tabindex                                                                                                                         | `string \|number`                                                                                                                                                                                                        | —           |
| validate-event              | 输入时是否触发表单的校验                                                                                                     | `boolean`                                                                                                                                                                                                                   | true        |
| input-style                 | input 元素或 textarea 元素的 style                                                                                     | `CSSProperties \| CSSProperties[] \| string[] \| string`                                                                                                                                                          | {}          |
| inputmode         | 等价于原生 input inputmode 属性                                                                                                    | `string`                                                                                                                                                                                                                    | —           |
| isComposing                 | 是否是输入 composing 状态              | `boolean` |  false |

### Events

| 事件名              | 说明                                                                                           | 参数类型                                                 |
| ----------------- | ----------------------------------------------------------------------------------------------------- | ---------------------------------------------------- |
| zBlur              | 当选择器的输入框失去焦点时触发                        | `CustomEvent<FocusEvent>`             |
| zFocus             | 当选择器的输入框获得焦点时触发                        | `CustomEvent<FocusEvent>`             |
| zChange            | 仅当 value 改变时，当输入框失去焦点或用户按Enter时触发  | `CustomEvent<string \| number>`       |
| zInput             | 在 Input 值改变时触发                              | `CustomEvent<string \| number>`       |
| zClear             | 在点击由 `clearable` 属性生成的清空按钮时触发         | `CustomEvent`                         |
| zKeyDown           | 按下键时触发                                       | `CustomEvent<KeyboardEvent \| Event>` |
| zMouseLeave        | 当鼠标离开输入元素时触发                             | `CustomEvent<MouseEvent>`             |
| zMouseEnter        | 当鼠标进入输入元素时触发                             | `CustomEvent<MouseEvent>`             |
| zCompositionStart  | 输入法输入开始时触发                                | `CustomEvent<CompositionEvent>`       |
| zCompositionUpdate | 输入法输入改变时触发                                | `CustomEvent<CompositionEvent>`       |
| zCompositionEnd    | 输入法输入完成时触发                                | `CustomEvent<CompositionEvent>`       |

### Slots

| 插槽名   | 说明                                      |
| ------- | -----------------------------------------|
| prefix  | 输入框头部内容，只对非 `type="textarea"` 有效   |
| suffix  | 输入框尾部内容，只对非 `type="textarea"` 有效   |
| prepend | 输入框前置内容，只对非 `type="textarea"` 有效   |
| append  | 输入框后置内容，只对非 `type="textarea"` 有效   |

### Exposes

| 名称                  | 说明                        | 类型                                           |
| -------------------- | --------------------------- | --------------------------------------------- |
| zFocus               | 使 input 获取焦点             | `() => void`                                 |
| zBlur                | 使 input 失去焦点             | `() => void`                                 |
| clear                | 清除 input 值                | `() => void`                                 |
| input                | Input HTML 元素              | `HTMLInputElement`                           |
| resizeTextarea       | 改变 textarea 大小           | `() => void`                                 |
| select               | 选中 input 中的文字           | `() => void`                                 |
| textarea             | HTML textarea 元素           | `HTMLTextAreaElement`                        |
| textareaStyle        | textarea 的样式              | `StyleValue`                                 |
| isComposing          | 是否是输入 composing 状态      | `boolean`                                   |
