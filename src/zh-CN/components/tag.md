# 标签 Tag

进行标记和分类的小标签。

## 何时使用

- 用于标记事物的属性和维度。
- 进行分类。

## 演示

### 基本用法

:::demo src=examples/tag/tag-1.vue :::

## API

### 属性

| 属性名 | HTML 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- | --- |
| `color` | `color` | 标签颜色主题 提供10种预设颜色方案，满足不同场景的视觉需求： <br>1. `blue`: 蓝色主题（中性信息） <br>2. `error`: 错误红色（操作失败/危险状态） <br>3. `gray`: 灰色主题（默认中性色） <br>4. `green`: 绿色主题（成功/完成状态） <br>5. `info`: 信息蓝（通知/提示信息） <br>6. `primary`: 品牌主色（重要内容） <br>7. `red`: 警示红色（紧急通知） <br>8. `success`: 成功绿色（操作成功） <br>9. `warning`: 警告黄色（注意/提醒） <br>10. `yellow`: 强调黄色（高亮显示） | `"blue" \| "error" \| "gray" \| "green" \| "info" \| "primary" \| "red" \| "success" \| "warning" \| "yellow"` | `'gray'` |
| `dismissible` | `dismissible` | 是否显示关闭按钮 设置为 true 时，标签右侧显示关闭图标，点击触发 `zane-tag--dismiss` 事件 | `boolean` | `false` |
| `imageSrc` | `image-src` | 标签图片地址 设置后，在标签左侧显示指定图片（如用户头像） | `string` | `undefined` |
| `selected` | `selected` | 选中状态 表示标签是否被选中，常用于多选场景 | `boolean` | `false` |
| `size` | `size` | 标签尺寸 控制标签的整体尺寸规格： - `md`: 中等尺寸（默认） - `sm`: 小型尺寸（紧凑布局） | `"md" \| "sm"` | `'md'` |
| `value` | `value` | 标签值 标签关联的业务数据值，在事件触发时作为参数传递 | `string` | `''` |

### 事件

| 事件名 | 说明 | 类型 |
| --- | --- | --- |
| `zane-tag--click` | 标签点击事件 当标签被点击时触发（不包括关闭按钮区域） | `CustomEvent<any>` |
| `zane-tag--dismiss` | 标签关闭事件 当关闭按钮被点击时触发，传递标签的 value 或文本内容 | `CustomEvent<any>` |

### 依赖项

#### 使用者

- [code-editor](./code-editor)
- [select](./select)

#### 依赖于

- [icon](./icon)
