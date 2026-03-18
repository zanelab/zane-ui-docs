# Container

Container components for scaffolding basic structure of the page:

`<zane-container>`: wrapper container. When nested with a `<zane-header>` or `<zane-footer>`, all its child elements will be vertically arranged. Otherwise horizontally.

`<zane-header>`: container for headers.

`<zane-aside>`: container for side sections (usually a side nav).

`<zane-main>`: container for main sections.

`<zane-footer>`: container for footers.

:::tip

These components use flex for layout, so please make sure your browser supports it. Besides, `<zane-container>`'s direct child elements have to be one or more of the latter four components. And father element of the latter four components must be a `<zane-container>`.

:::

## Common layouts

<style lang="scss">
@use '../../examples/container/common-layout.scss';
</style>

###
:::demo src=examples/container/layout-hm.vue :::

###
:::demo src=examples/container/layout-hmf.vue :::

###
:::demo src=examples/container/layout-am.vue :::

###
:::demo src=examples/container/layout-ham.vue :::

###
:::demo src=examples/container/layout-hamf.vue :::

###
:::demo src=examples/container/layout-ahm.vue :::

###
:::demo src=examples/container/layout-ahmf.vue :::

## Example


## Container API

### Container Attributes

| Name      | Description                         | Type                                | Default                                                                    |
| --------- | ----------------------------------- | ----------------------------------- | -------------------------------------------------------------------------- |
| direction | layout direction for child elements | `'horizontal' \| 'vertical'` | `'vertical'` when nested with `zane-header` or `zane-footer`; `'horizontal'` otherwise |

### Container Slots

| Name    | Description               | Subtags                                    |
| ------- | ------------------------- | ------------------------------------------ |
| default | customize default content | Container / Header / Aside / Main / Footer |

## Header API

### Header Attributes

| Name   | Description          | Type      | Default |
| ------ | -------------------- | --------- | ------- |
| height | height of the header | `string` | 60px    |

### Header Slots

| Name    | Description               |
| ------- | ------------------------- |
| default | customize default content |

## Aside API

### Aside Attributes

| Name  | Description               | Type      | Default |
| ----- | ------------------------- | --------- | ------- |
| width | width of the side section | `string` | 300px   |

### Aside Slots

| Name    | Description               |
| ------- | ------------------------- |
| default | customize default content |

## Main API

### Main Slots

| Name    | Description               |
| ------- | ------------------------- |
| default | customize default content |

## Footer API

### Footer Attributes

| Name   | Description          | Type      | Default |
| ------ | -------------------- | --------- | ------- |
| height | height of the footer | `'string'` | 60px    |

### Footer Slots

| Name    | Description               |
| ------- | ------------------------- |
| default | customize default content |
