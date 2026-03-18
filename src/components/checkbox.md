# 复选框 Checkbox

多选框。

## 何时使用

- 在一组可选项中进行多项选择时；
- 单独使用可以表示两种状态之间的切换，和 `toggle` 类似。区别在于切换 `toggle` 会直接触发状态改变，而 `checkbox` 一般用于状态标记，需要和提交操作配合。

## 演示

### 基本用法

:::demo src=examples/checkbox/checkbox-1.vue :::

### 部分选中

:::demo src=examples/checkbox/checkbox-2.vue :::

### 尺寸

这里有几种预定义的复选框尺寸，每种尺寸都有其各自的语义用途。

:::demo src=examples/checkbox/checkbox-3.vue :::

### 只读

通过向任何 `<input>` 元素添加 disabled 布尔属性，使输入看起来处于非活动状态。

:::demo src=examples/checkbox/checkbox-4.vue :::

### 已禁用

向任何 `<input>` 元素添加 disabled 布尔属性，使输入看起来处于非活动状态。

:::demo src=examples/checkbox/checkbox-5.vue :::

## API

### 属性

| 属性名 | HTML 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- | --- |
| `configAria` | `config-aria` | ARIA属性配置对象 用于动态设置ARIA属性（如aria-label, aria-describedby等）， 组件会自动收集元素上所有`aria-*`属性到该对象。 | `any` | `{}` |
| `disabled` | `disabled` | 禁用状态 当设置为`true`时，组件不可交互且视觉上变灰 | `boolean` | `false` |
| `intermediate` | `intermediate` | 中间态状态 当设置为`true`时显示"-"图标，表示部分选中状态， 与`value`属性互斥（中间态时`value`应为false） | `boolean` | `false` |
| `label` | `label` | 复选框标签文本 | `string` | `undefined` |
| `layer` | `layer` | 视觉层级 控制组件在UI中的层级深度，影响阴影和背景色： <br> `01`: 表层组件（最高层级） <br> `02`: 中层组件 - `background`: 背景层组件（最低层级） | `"01" \| "02" \| "background"` | `undefined` |
| `name` | `name` | 表单字段名（自动生成） | `string` | `` `zane-input-${this.gid}` `` |
| `readonly` | `readonly` | 只读状态 | `boolean` | `false` |
| `required` | `required` | 必填状态 | `boolean` | `false` |
| `rounded` | `rounded` | 圆角样式 | `boolean` | `false` |
| `size` | `size` | 尺寸规格 <br> `lg`: 大尺寸(48px) <br> `md`: 中尺寸(40px) <br> `sm`: 小尺寸(32px) | `"lg" \| "md" \| "sm"` | `'md'` |
| `value` | `value` | 选中状态 当设置为`true`时显示选中图标， 与`intermediate`属性互斥 | `boolean` | `false` |

### 事件

| 事件名                  | 说明         | 类型               |
| ----------------------- | ------------ | ------------------ |
| `zane-checkbox--blur`   | 失去焦点事件 | `CustomEvent<any>` |
| `zane-checkbox--change` | 值变更事件   | `CustomEvent<any>` |
| `zane-checkbox--focus`  | 获得焦点事件 | `CustomEvent<any>` |

### 方法

#### `getComponentId() => Promise<string>`

获取组件ID

##### 返回值

返回值类型: `Promise<string>`

组件唯一标识符

#### `setBlur() => Promise<void>`

移除焦点

##### 返回值

返回值类型: `Promise<void>`

#### `setFocus() => Promise<void>`

设置焦点

#### 返回值

返回值类型: `Promise<void>`

### 依赖项

#### 使用者

- [table](./table)
