# 日期选择器 Date Picker

输入或选择日期的控件。

## 何时使用

当用户需要输入一个日期，可以点击标准输入框，弹出日期面板进行选择。

## 演示

### 基本用法

:::demo src=examples/date-picker/date-picker-1.vue :::

### 尺寸

想要更大或更小的输入？添加尺寸属性即可获得更多尺寸。

:::demo src=examples/date-picker/date-picker-2.vue :::

### 已禁用

向任何 `<input>` 元素添加 disabled 布尔属性，使输入看起来处于非活动状态。

:::demo src=examples/date-picker/date-picker-3.vue :::

### 只读

:::demo src=examples/date-picker/date-picker-4.vue :::

## API

### 属性

| 属性名 | HTML 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- | --- |
| `configAria` | `config-aria` | ARIA无障碍属性配置对象 用于存储所有aria-\*属性 | `any` | `{}` |
| `debounce` | `debounce` | 事件防抖时间(毫秒) 用于控制change事件的触发频率 | `number` | `300` |
| `disabled` | `disabled` | 是否禁用组件 | `boolean` | `false` |
| `helperText` | `helper-text` | 辅助文本 显示在输入框下方的帮助信息 | `string` | `undefined` |
| `inline` | `inline` | 是否为内联模式 | `boolean` | `false` |
| `invalid` | `invalid` | 是否为无效状态 | `boolean` | `false` |
| `invalidText` | `invalid-text` | 无效状态提示文本 | `string` | `undefined` |
| `label` | `label` | 标签文本 | `string` | `undefined` |
| `name` | `name` | 输入框name属性 默认值为"zane-input-{唯一ID}" | `string` | `` `zane-input-${this.gid}` `` |
| `placeholder` | `placeholder` | 占位符文本 | `string` | `undefined` |
| `readonly` | `readonly` | 是否为只读状态 | `boolean` | `false` |
| `required` | `required` | 是否为必填项 | `boolean` | `false` |
| `size` | `size` | 组件尺寸 <br>'lg': 大尺寸 <br> 'md': 中等尺寸(默认) <br> 'sm': 小尺寸 | `"lg" \| "md" \| "sm"` | `'md'` |
| `value` | `value` | 当前值 可以是null、number或string类型 | `number \| string` | `''` |
| `warn` | `warn` | 是否为警告状态 | `boolean` | `false` |
| `warnText` | `warn-text` | 警告状态提示文本 | `string` | `undefined` |

### 事件

| 事件名                     | 说明               | 类型               |
| -------------------------- | ------------------ | ------------------ |
| `zane-date-picker--blur`   | 失去焦点事件       | `CustomEvent<any>` |
| `zane-date-picker--change` | 值变化事件(带防抖) | `CustomEvent<any>` |
| `zane-date-picker--focus`  | 获得焦点事件       | `CustomEvent<any>` |
| `zane-date-picker--input`  | 输入事件(实时触发) | `CustomEvent<any>` |

### 方法

#### `getComponentId() => Promise<string>`

获取组件ID的公共方法

##### 返回值

返回值类型: `Promise<string>`

组件唯一ID

#### `setBlur() => Promise<void>`

设置失去焦点的公共方法

##### 返回值

返回值类型: `Promise<void>`

#### `setFocus() => Promise<void>`

设置获得焦点的公共方法

##### 返回值

返回值类型: `Promise<void>`

### 依赖项

#### 依赖于

- [button](./button)
