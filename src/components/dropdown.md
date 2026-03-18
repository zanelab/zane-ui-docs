# 下拉菜单 Dropdown

向下弹出的列表。

## 何时使用

当页面上的操作命令过多时，用此组件可以收纳操作元素。点击或移入触点，会出现一个下拉菜单。可在列表中进行选择，并执行相应的命令。

- 用于收罗一组命令操作。
- Select 用于选择，而 Dropdown 是命令集合。

## 演示

### 基本用法

:::demo src=examples/dropdown/dropdown-1.vue :::

### 弹出位置

下拉菜单可以相对于触发元素进行定位。可能的位置包括：顶部起始、顶部结束、底部结束、底部起始。

您还可以使用位置属性设置下拉菜单的所有首选位置。滚动时，下拉菜单将重新定位到最接近的位置。

:::demo src=examples/dropdown/dropdown-2.vue :::

## API

### 属性

| 属性名 | HTML 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- | --- |
| `disabled` | `disabled` | 是否禁用下拉菜单 | `boolean` | `false` |
| `managed` | `managed` | 是否为受控模式 在受控模式下，组件的状态完全由外部控制 | `boolean` | `false` |
| `open` | `open` | 下拉菜单是否打开 | `boolean` | `false` |
| `placements` | `placements` | 下拉菜单位置选项 多个位置用逗号分隔，按优先级排序 | `string` | `'bottom-start,top-start,bottom-end,top-end'` |
| `trigger` | `trigger` | 触发下拉菜单的方式 - 'click': 点击触发 - 'hover': 悬停触发 - 'manual': 手动控制 | `"click" \| "hover" \| "manual"` | `'click'` |

### 事件

| 事件名                      | 说明             | 类型               |
| --------------------------- | ---------------- | ------------------ |
| `zane-dropdown--close`      | 下拉菜单关闭事件 | `CustomEvent<any>` |
| `zane-dropdown--item-click` | 菜单项点击事件   | `CustomEvent<any>` |
| `zane-dropdown--open`       | 下拉菜单打开事件 | `CustomEvent<any>` |

### CSS 自定义属性

| 属性名                            | 说明           |
| --------------------------------- | -------------- |
| `--zane-dropdown-menu-max-height` | 菜单的最大高度 |
