# Avatar

Avatars can be used to represent people or objects. It supports images, Icons, or characters.

## Basic Usage

Use `shape` and `size` prop to set avatar's shape and size.

:::demo src=examples/avatar/avatar-1.vue :::

## Types

It supports images, Icons, or characters.

:::demo src=examples/avatar/avatar-2.vue :::

## Fallback

fallback when image load error.

:::demo src=examples/avatar/avatar-3.vue :::

## Fit Container

Set how the image fit its container for an image avatar, same as [object-fit](https://developer.mozilla.org/en-US/docs/Web/CSS/object-fit).

:::demo src=examples/avatar/avatar-4.vue :::

## API

### Attributes

| Name    | Description                                               | Type                                                              | Default |
| ------- | --------------------------------------------------------- | ----------------------------------------------------------------- | ------- |
| icon    | representation type to icon, more info on icon component. | `string \| Component`                                          | —       |
| size    | avatar size.                                              | `number \| enum \| 'large' \| 'default' \| 'small'`              | default |
| shape   | avatar shape.                                             | `enum \| 'circle' \| 'square'`                                     | circle  |
| src     | the source of the image for an image avatar.              | `string`                                                          | —       |
| src-set | native attribute `srcset` of image avatar.                | `string`                                                          | —       |
| alt     | native attribute `alt` of image avatar.                   | `string`                                                          | —       |
| fit     | set how the image fit its container for an image avatar.  | `'fill' \| 'contain' \| 'cover' \| 'none' \| 'scale-down'` | cover   |

### Events

| Name  | Description                    | Type                            |
| ----- | ------------------------------ | ------------------------------- |
| error | trigger when image load error. | `(e: Event) => void` |

### Slots

| Name    | Description               |
| ------- | ------------------------- |
| default | customize avatar content. |
