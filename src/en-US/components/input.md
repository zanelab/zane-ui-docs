
# Input

Input data using mouse or keyboard.

## Basic usage

:::demo src=examples/input/basic.vue :::

## Disabled

Disable the Input with the `disabled` attribute.

:::demo src=examples/input/disabled.vue :::

## Clearable

Make the Input clearable with the `clearable` attribute.

:::demo src=examples/input/clearable.vue :::

## Custom Clear Icon

You can customize the clear icon by setting the `clear-icon` attribute.


:::demo src=examples/input/clear-icon.vue :::

## Formatter

Display value within it's situation with `formatter`, and we usually use `parser` at the same time.

:::demo src=examples/input/formatter.vue :::

## Password box

Make a toggle-able password Input with the `show-password` attribute.

:::demo src=examples/input/password.vue :::

## Input with icon

Add an icon to indicate input type.

To add icons in Input, you can simply use `prefix-icon` and `suffix-icon` attributes. Also, the `prefix` and `suffix` named slots works as well.


:::demo src=examples/input/with-icon.vue :::

## Textarea

Resizable for entering multiple lines of text information. Add attribute `type="textarea"` to change `input` into native `textarea`.

Control the height by setting the `rows` prop.

:::demo src=examples/input/textarea.vue :::

## Autosize Textarea

Setting the `autosize` prop for a textarea type of Input makes the height to automatically adjust based on the content. An options object can be provided to `autosize` to specify the minimum and maximum number of lines the textarea can automatically adjust.

:::demo src=examples/input/auto-sizing-textarea.vue :::

## Mixed input

Prepend or append an element, generally a label or a button.

Use `slot` to distribute elements that prepend or append to Input.

:::demo src=examples/input/mixed-input.vue :::

## Sizes

Add `size` attribute to change the size of Input. In addition to the default size, there are two other options: `large`, `small`.

:::demo src=examples/input/various-size.vue :::

## Limit length

`maxlength` and `minlength` attributes of input, they declare a limit on the number of characters a user can input. The "number of characters" is measured using JavaScript string length.Setting the `maxlength` prop for a text or textarea type of Input can limit the length of input value, allows you to show word count by setting `show-word-limit` to `true` at the same time.

:::demo src=examples/input/length-limiting.vue :::

## API

### Attributes

| Name                        | Description                                                                                                                            | Type                                                                                                                                                                                                                         | Default     |
| --------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| type                        | type of input                                                                                                                          | `'text' \| 'textarea' \| 'password' \| 'button' \| 'checkbox' \| 'file' \| 'number' \| 'radio' \| ...` [native input types](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Form_%3Cinput%3E_types) | text        |
| model-value / v-model       | binding value                                                                                                                          | `string \| number`                                                                                                                                                                                                       | —           |
| maxlength                   | same as `maxlength` in native input                                                                                                    | `string \| number`                                                                                                                                                                                                       | —           |
| minlength                   | same as `minlength` in native input                                                                                                    | `string \| number`                                                                                                                                                                                                        | —           |
| show-word-limit             | whether show word count, only works when `type` is 'text' or 'textarea'                                                                | `boolean`                                                                                                                                                                                                                  | false       |
| placeholder                 | placeholder of Input                                                                                                                   | `string`                                                                                                                                                                                                                    | —           |
| clearable                   | whether to show clear button, only works when `type` is not 'textarea'                                                                 | `boolean`                                                                                                                                                                                                                  | false       |
| clear-icon      | custom clear icon component                                                                                                            | `string`                                                                                                                                                                                             | CircleClose |
| formatter                   | specifies the format of the value presented input.(only works when `type` is 'text')                                                   | `(value: string \| number) => string`                                                                                                                                                                             | —           |
| parser                      | specifies the value extracted from formatter input.(only works when `type` is 'text')                                                  | `(value: string) => string`                                                                                                                                                                                       | —           |
| show-password               | whether to show toggleable password input                                                                                              | `boolean`                                                                                                                                                                                                                   | false       |
| disabled                    | whether Input is disabled                                                                                                              | `boolean`                                                                                                                                                                                                                   | false       |
| size                        | size of Input, works when `type` is not 'textarea'                                                                                     | `'large' \| 'default' \| 'small'`                                                                                                                                                                                     | —           |
| prefix-icon                 | prefix icon component                                                                                                                  | `string`                                                                                                                                                                                                     | —           |
| suffix-icon                 | suffix icon component                                                                                                                  | `string`                                                                                                                                                                                                    | —           |
| rows                        | number of rows of textarea, only works when `type` is 'textarea'                                                                       | `number`                                                                                                                                                                                                                    | 2           |
| autosize                    | whether textarea has an adaptive height, only works when `type` is 'textarea'. Can accept an object, e.g. `{ minRows: 2, maxRows: 6 }` | `boolean \| { minRows?: number, maxRows?: number }`                                                                                                                                                               | false       |
| autocomplete                | same as `autocomplete` in native input                                                                                                 | `string`                                                                                                                                                                                                                    | off         |
| name                        | same as `name` in native input                                                                                                         | `string`                                                                                                                                                                                                                    | —           |
| readonly                    | same as `readonly` in native input                                                                                                     | `boolean`                                                                                                                                                                                                                   | false       |
| max                         | same as `max` in native input                                                                                                          | —                                                                                                                                                                                                                            | —           |
| min                         | same as `min` in native input                                                                                                          | —                                                                                                                                                                                                                            | —           |
| step                        | same as `step` in native input                                                                                                         | —                                                                                                                                                                                                                            | —           |
| resize                      | control the resizability                                                                                                               | `'none' \| 'both' \| 'horizontal' \| 'vertical'`                                                                                                                                                                      | —           |
| autofocus                   | same as `autofocus` in native input                                                                                                    | `boolean`                                                                                                                                                                                                                   | false       |
| form                        | same as `form` in native input                                                                                                         | `string`                                                                                                                                                                                                                     | —           |
| aria-label ^(a11y) | same as `aria-label` in native input                                                                                                   | `string`                                                                                                                                                                                                                    | —           |
| tabindex                    | input tabindex                                                                                                                         | `string \| number`                                                                                                                                                                                                        | —           |
| validate-event              | whether to trigger form validation                                                                                                     | `boolean`                                                                                                                                                                                                                   | true        |
| input-style                 | the style of the input element or textarea element                                                                                     | `CSSProperties \| CSSProperties[] \| string[] \| string`                                                                                                                                                          | {}          |
| inputmode         | same as `inputmode` in native input                                                                                                    | `string`                                                                                                                                                                                                                    | —           |

### Events

| Name              | Description                                                                                           | Type                                                 |
| ----------------- | ----------------------------------------------------------------------------------------------------- | ---------------------------------------------------- |
| blur              | triggers when Input blurs                                                                             | `(event: FocusEvent) => void`             |
| focus             | triggers when Input focuses                                                                           | `(event: FocusEvent) => void`             |
| change            | triggers when the input box loses focus or the user presses Enter, only if the modelValue has changed | `(value: string \| number) => void`       |
| input             | triggers when the Input value change                                                                  | `(value: string \| number) => void`       |
| clear             | triggers when the Input is cleared by clicking the clear button                                       | `() => void`                              |
| keydown           | triggers when a key is pressed down                                                                   | `(event: KeyboardEvent \| Event) => void` |
| mouseleave        | triggers when the mouse leaves the Input element                                                      | `(event: MouseEvent) => void`             |
| mouseenter        | triggers when the mouse enters the Input element                                                      | `(event: MouseEvent) => void`             |
| compositionstart  | triggers when the composition starts                                                                  | `(event: CompositionEvent) => void`       |
| compositionupdate | triggers when the composition is updated                                                              | `(event: CompositionEvent) => void`       |
| compositionend    | triggers when the composition ends                                                                    | `(event: CompositionEvent) => void`       |

### Slots

| Name    | Description                                                               |
| ------- | ------------------------------------------------------------------------- |
| prefix  | content as Input prefix, only works when `type` is not 'textarea'         |
| suffix  | content as Input suffix, only works when `type` is not 'textarea'         |
| prepend | content to prepend before Input, only works when `type` is not 'textarea' |
| append  | content to append after Input, only works when `type` is not 'textarea'   |

### Exposes

| Name                 | Description                      | Type                                                    |
| -------------------- | -------------------------------- | ------------------------------------------------------- |
| blur                 | blur the input element           | `() => void`                                 |
| clear                | clear input value                | `() => void`                                 |
| focus                | focus the input element          | `() => void`                                 |
| input                | HTML input element               | `HTMLInputElement`                        |
| resizeTextarea       | resize textarea                  | `() => void`                                 |
| select               | select the text in input element | `() => void`                                 |
| textarea             | HTML textarea element            | `HTMLTextAreaElement`                     |
| textareaStyle        | style of textarea                | `StyleValue`                              |
| isComposing          | is input composing               | `boolean`                                 |
