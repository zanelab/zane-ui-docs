# Layout

Quickly and easily create layouts with the basic 24-column.

:::tip

The component uses flex layout by default, no need to set `type="flex"` manually.

Please note that the parent container should avoid using `inline` related styles,
which will cause the component to not fill up its width.

The basic unit of a column is 1, with a maximum of 24 and a minimum of 0.

:::

## Basic layout

Create basic grid layout using columns.

With `row` and `col`, we can easily manipulate the layout using the `span` attribute.

:::demo src=examples/layout/basic-layout.vue :::


## Column spacing

Column spacing is supported.

Row provides `gutter` attribute to specify spacings between columns, and its default value is 0.


:::demo src=examples/layout/column-spacing.vue :::


## Hybrid layout

Form a more complex hybrid layout by combining the basic 1/24 columns.

:::demo src=examples/layout/hybrid-layout.vue :::

## Column offset

You can specify column offsets.

You can specify the number of column offset by setting the value of `offset` attribute of Col.


:::demo src=examples/layout/column-offset.vue :::


## Alignment

Default use the flex layout to make flexible alignment of columns.

You can define the layout of child elements by setting `justify` attribute with start, center, end, space-between, space-around or space-evenly.


:::demo src=examples/layout/alignment.vue :::


## Responsive Layout

Taking example by Bootstrap's responsive design, five breakpoints are preset:
xs, sm, md, lg and xl.

:::demo src=examples/layout/responsive-layout.vue :::


## Row API

### Row Attributes

| Name    | Description                         | Type                                                                                         | Default |
| ------- | ----------------------------------- | -------------------------------------------------------------------------------------------- | ------- |
| gutter  | grid spacing                        | `number`                                                                                    | 0       |
| justify | horizontal alignment of flex layout | `'start' \| 'end' \| 'center' \| 'space-around' \| 'space-between' \| 'space-evenly'` | start   |
| align   | vertical alignment of flex layout   | `'top' \| 'middle' \| 'bottom'`                                                       | —       |


### Row Slots

| Name    | Description               | Subtags |
| ------- | ------------------------- | ------- |
| default | customize default content | Col     |

## Col API

### Col Attributes

| Name   | Description                                         | Type                                                                                  | Default |
| ------ | --------------------------------------------------- | ------------------------------------------------------------------------------------- | ------- |
| span   | number of column the grid spans                     | `number`                                                                             | 24      |
| offset | number of spacing on the left side of the grid      | `number`                                                                             | 0       |
| push   | number of columns that grid moves to the right      | `number`                                                                             | 0       |
| pull   | number of columns that grid moves to the left       | `number`                                                                             | 0       |
| xs     | `<768px` Responsive columns or column props object  | `number \| {span?: number, offset?: number, pull?: number, push?: number}` | —       |
| sm     | `≥768px` Responsive columns or column props object  | `number \| {span?: number, offset?: number, pull?: number, push?: number}` | —       |
| md     | `≥992px` Responsive columns or column props object  | `number \| {span?: number, offset?: number, pull?: number, push?: number}` | —       |
| lg     | `≥1200px` Responsive columns or column props object | `number \| {span?: number, offset?: number, pull?: number, push?: number}` | —       |
| xl     | `≥1920px` Responsive columns or column props object | `number \| {span?: number, offset?: number, pull?: number, push?: number}` | —       |


### Col Slots

| Name    | Description               |
| ------- | ------------------------- |
| default | customize default content |

