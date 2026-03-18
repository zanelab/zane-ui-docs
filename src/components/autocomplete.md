# Autocomplete 自动补全输入框

根据输入内容提供对应的输入建议。

## 基础用法

Autocomplete 组件提供输入建议。

`fetchSuggestions` 属性是返回建议输入的方法。 在此示例中， `querySearch(queryString, cb)` 方法通过 `cb(data)` 给 Autocomplete 组件返回建议。

:::tip
当我们在TSX文件中使用组件时，属性使用 `camelCase`：

`<zane-autocomplete :fetchSuggestions="querySearch"></zane-autocomplete>`

在HTML中，属性必须使用 `dash-case`，如下所示：

`<zane-autocomplete fetch-suggestions="querySearch"></zane-autocomplete>`
:::

:::demo src=examples/autocomplete/autocomplete.vue :::

## 自定义模板

自定义如何显示输入建议。

使用 `suggestionRender` 属性自定义输入建议。 在这个范围中，你可以使用 item 键来访问当前输入建议对象。

:::demo src=examples/autocomplete/autocomplete-template.vue :::

## 远程搜索

从服务端搜索数据。

:::demo src=examples/autocomplete/remote-search.vue :::

## 自定义加载

修改加载区域内容

:::demo src=examples/autocomplete/custom-loading.vue :::

## 自定义头部与底部

你可以通过插槽来自定义下拉菜单的头部和底部。

使用插槽自定义内容

:::demo src=examples/autocomplete/custom-header-footer.vue :::

## API

### Attributes

| 属性名                        | 说明                                                  | 类型                    | 默认值  |
| ---------------------------- | ----------------------------------------------------- | ----------------------- | ------------ |
| value                        | 选中项绑定值                                           | string                  | —            |
| placeholder                  | 占位文本                                               | string                  | —            |
| clearable                    | 是否可清空                                             | boolean                 | false        |
| disabled                     | 自动补全组件是否被禁用                                  | boolean                 | false        |
| valueKey                     | 输入建议对象中用于显示的键名                             | string                  | "value"      |
| debounce                     | 获取输入建议的防抖延时，单位为毫秒                       | number                  | 300          |
| placement                    | 菜单弹出位置                                           | `'top' \| 'top- start' \| 'top-end' \| 'bottom' \| 'bottom-start' \| 'bottom-end'`                  | "bottom-start"          |
| fetchSuggestions             | 获取输入建议的方法， 仅当你的输入建议数据 resolve 时，通过调用 callback(data:[])  来返回它  | `array \| (queryString: string, callback: callbackfn) => void `                  | —         |
| triggerOnFocus               | 是否在输入焦点时显示建议                               | boolean                  | true          |
| selectWhenNnmatched          | 在输入没有任何匹配建议的情况下，按下回车是否触发 `select` 事件  | boolean                  | false          |
| name                         | 等价于原生 input `name` 属性                          | string                  | —           |
| ariaLabel                    | 原生 `aria-label` 属性                                | string                  | —           |
| hideLoading                  | 是否隐藏远程加载时的加载图标                            | boolean                 | false        |
| appendTo                     | 下拉框挂载到哪个 DOM 元素                              | `CSSSelector\| HTMLElement` | —        |
| highlightFirstItem           | 是否默认高亮远程搜索结果的第一项                        | boolean                 | false        |
| fitInputWidth                | 下拉框的宽度是否与输入框相同                            | boolean                 | false        |
| loopNavigation               | 键盘导航是否从末尾循环到开头                            | boolean                 | true        |
| type                         | 类型                                                  | `'text' \| 'textarea' \| 'password' \| 'button' \| 'checkbox' \| 'file' \| 'number' \| 'radio' \| ...` [原生 input 类型](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Form_%3Cinput%3E_types) | text        |
| maxLength                   | 最大输入长度，同原生 `maxlength` 属性                    | `string \| number`      | —           |
| minLength                   | 最小输入长度，同原生 `minlength` 属性                    | `string \| number`      | —           |
| showWordLimit               | 是否显示统计字数, 只在 `type` 为 'text' 或 'textarea' 的时候生效  | `boolean`       | false       |
| wordLimitPosition           | 字数统计位置，当`show-word-limit`为true时有效            | `'inside' \| 'outside'` | "inside"    |
| formatter                   | 指定输入值的格式。(只有当 type 是"text"时才能工作)        | `(value: string \| number) => string` | —           |
| parser                      | 指定从格式化器输入中提取的值。(仅当 type 是"text"时才起作用)| `(value: string) => string` | —           |
| show-password               | 是否显示切换密码图标 input                              | `boolean`                | false       |
| size                        | 输入框尺寸，只在 `type` 不为 'textarea' 时有效           | `'large' \| 'default' \| 'small'`  | —           |
| prefixIcon                 | 自定义前缀图标                                         | `string`                 | —           |
| suffixIcon                 | 自定义后缀图标                                         | `string`                 | —           |
| rows                        | 输入框行数，仅 `type` 为 'textarea' 时有效              | `number`                 | 2           |
| autosize                    | `textarea` 高度是否自适应，仅 `type` 为 'textarea' 时生效。 可以接受一个对象，比如: `{ minRows: 2, maxRows: 6 }` | `boolean \| { minRows?: number, maxRows?: number }` | false       |
| autocomplete                | 原生 `autocomplete` 属性                               | `string`                 | off         |
| readonly                    | 原生 `readonly` 属性，是否只读                          | `boolean`                | false       |
| max                         | 原生 max 属性，设置最大值                               | —                        | —           |
| min                         | 原生属性，设置最小值                                    | —                        | —           |
| step                        | 原生属性，设置输入字段的合法数字间隔                     | —                         | —           |
| resize                      | 控制是否能被用户缩放                                    | `'none' \| 'both' \| 'horizontal' \| 'vertical'`                   | —           |
| autofocus                   | 原生属性，自动获取焦点                                  | `boolean`                | false       |
| form                        | 原生属性                                               | `string`                 | —           |
| tabindex                    | 输入框的 tabindex                                      | `string \|number`        | —           |
| validate-event              | 输入时是否触发表单的校验                                | `boolean`                | true        |
| input-style                 | input 元素或 textarea 元素的 style                     | `CSSProperties \| CSSProperties[] \| string[] \| string`           | {}          |
| inputmode                   | 等价于原生 input inputmode 属性                        | `string`                 | —           |
| loadingRender               | 自定义加载 Icon 的生成函数                              | `() => HTMLElement`      | —           |
| suggestionRender            | 自定义输入建议的内容生成器                           | `(item: any) => HTMLElement` | —           |

### Events

| 事件名             | 详情                                    | 类型                                                        |
| ----------------- | --------------------------------------- | ----------------------------------------------------------- |
| zBlur              | 当输入框失去焦点时触发                   | `(event: CustomEvent<FocusEvent>) => void`                  |
| zFocus             | 当输入框获得焦点时触发                   | `(event: CustomEvent<FocusEvent>) => void`                  |
| zChange            | 当输入框失去焦点或用户按下 Enter 键时触发 | `(event: CustomEvent<number \| string>) => void`            |
| zInput             | 当输入值发生变化时触发                   | `(event: CustomEvent<value: string \| number>) => void`     |
| zClear             | 当通过点击清除按钮来清除输入时触发        | `() => void`                                                |
| zSelect            | 当建议被点击时触发                       | `(event: CustomEvent<Record<string, any>) => void`         |

### Slots

| 插槽名            | 描述说明                              | 类型                                     |
| ---------------- | ------------------------------------- | ---------------------------------------- |
| header           | 下拉列表顶部的内容                      | -                                        |
| footer           | 下拉列表底部的内容                      | -                                        |
| prefix           | 输入框头部内容                          | -                                        |
| suffix           | 输入框尾部内容                          | -                                        |
| prepend          | 输入框前置内容，在 prefix 之前          | -                                        |
| append           | 输入框后置内容，在 suffix 之后          | -                                        |

### Exposes

| 名称              | 详情                                        | Ty类型pe                                     |
| ---------------- | ------------------------------------------- | ---------------------------------------- |
| inputbBlur       | 使 input 失去焦点                            | `() => void`                             |
| inputFocus       | 使 input 获取焦点                            | `() => void`                             |
| close            | 折叠建议列表                                 | `() => void`                             |
| handleSelect     | 手动触发选中建议事件                          | `(item: any) => promise<void>`           |
| handleKeyEnter   | 手动触发键盘回车事件                          | `() => promise<void>`                    |
| highlight        | 在建议中高亮显示一个项目                      | `(itemIndex: number) => void`            |
| getData          | 加载建议列表                                 | `(queryString: string) => promise<void>` |
