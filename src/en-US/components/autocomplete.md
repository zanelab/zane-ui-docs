# Autocomplete

Get some recommended tips based on the current input.

## Basic Usage

Autocomplete component provides input suggestions.

The `fetch-suggestions` attribute is a method that return suggested inputs. In this example, `querySearch(queryString, cb)` return suggestions to Autocomplete via `cb(data)` when suggestions are ready.


:::tip
When we use components in TSX files, the attribute uses' camelCase ':

`<zane-autocomplete :fetchSuggestions="querySearch"></zane-autocomplete>`

In HTML, attributes must use 'dash case' as follows:

`<zane-autocomplete fetch-suggestions="querySearch"></zane-autocomplete>`
:::

:::demo src=examples/autocomplete/autocomplete.vue :::

## Custom template

Customize how suggestions are displayed.

Use `suggestionRender` to customize suggestion items. In the scope, you can access the suggestion object via the `item` key.

:::demo src=examples/autocomplete/autocomplete-template.vue :::

## Remote search

Search data from server-side.

:::demo src=examples/autocomplete/remote-search.vue :::

## Custom Loading

Override loading content.

:::demo src=examples/autocomplete/custom-loading.vue :::

## Custom Header & Footer

You can customize both the header and footer of the dropdown using slots

:::demo src=examples/autocomplete/custom-header-footer.vue :::


## API

### Attributes

| Name                                 | Description                                                                                                                | Type                                                                                      | Default      |
| ------------------------------------ | -------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ------------ |
| value                        | binding value                   | string                  | —            |
| placeholder                  | the placeholder of Autocomplete           | string                  | —            |
| clearable                    | whether to show clear button            | boolean                 | false        |
| disabled                     | whether Autocomplete is disabled       | boolean                 | false        |
| valueKey                     | key name of the input suggestion object for display  | string                  | "value"      |
| debounce                     | debounce delay when typing, in milliseconds  | number                  | 300          |
| placement                    | placement of the popup menu    | `'top' \| 'top- start' \| 'top-end' \| 'bottom' \| 'bottom-start' \| 'bottom-end'`                  | "bottom-start"          |
| fetchSuggestions             | a method to fetch input suggestions. When suggestions are ready, invoke `callback(data:[])` to return them to Autocomplete  | `array \| (queryString: string, callback: callbackfn) => void `                  | —         |
| triggerOnFocus               | whether show suggestions when input focus     | boolean                  | true          |
| selectWhenNnmatched          | whether to emit a `select` event on enter when there is no autocomplete match  | boolean                  | false          |
| name                         | same as `name` in native input    | string                  | —           |
| ariaLabel                    | native `aria-label` attribute      | string                  | —           |
| hideLoading                  | whether to hide the loading icon in remote search    | boolean                 | false        |
| appendTo                     | which select dropdown appends to    | `CSSSelector\| HTMLElement` | —        |
| highlightFirstItem           | whether to highlight first item in remote search suggestions by default  | boolean                 | false        |
| fitInputWidth                | whether the width of the dropdown is the same as the input   | boolean                 | false        |
| loopNavigation               | whether keyboard navigation loops from end to start   | boolean                 | true        |
| type                         | type of input   | `'text' \| 'textarea' \| 'password' \| 'button' \| 'checkbox' \| 'file' \| 'number' \| 'radio' \| ...` [原生 input 类型](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Form_%3Cinput%3E_types) | text        |
| maxLength                   | same as `maxlength` in native input   | `string \| number`      | —           |
| minLength                   | same as `minlength` in native input   | `string \| number`      | —           |
| showWordLimit               | whether show word count, only works when `type` is 'text' or 'textarea'  | `boolean`       | false       |
| wordLimitPosition           | word count position, valid when `show-word-limit` is true  |  `'inside' \| 'outside'`     | "inside"       |
| formatter                   | specifies the format of the value presented input.(only works when `type` is 'text')  | `(value: string \| number) => string` | —           |
| parser                      | specifies the value extracted from formatter input.(only works when `type` is 'text') | `(value: string) => string` | —           |
| showPassword               | whether to show toggleable password input   | `boolean`                | false       |
| size                        | size of Input, works when `type` is not 'textarea'  | `'large' \| 'default' \| 'small'`  | —           |
| prefixIcon                  | prefix icon component  | `string`                 | —           |
| suffixIcon                  | suffix icon component  | `string`                 | —           |
| rows                        | number of rows of textarea, only works when `type` is 'textarea'   | `number`                 | 2           |
| autosize                    | whether textarea has an adaptive height, only works when `type` is 'textarea'. Can accept an object, e.g. `{ minRows: 2, maxRows: 6 }` | `boolean \| { minRows?: number, maxRows?: number }` | false       |
| autocomplete                | same as `autocomplete` in native input  | `string`                 | off         |
| readonly                    | same as `readonly` in native input      | `boolean`                | false       |
| max                         | same as `max` in native input           | —                        | —           |
| min                         | same as `min` in native input           | —                        | —           |
| step                        | same as `step` in native input          | —                         | —           |
| resize                      | control the resizability                | `'none' \| 'both' \| 'horizontal' \| 'vertical'`                   | —           |
| autofocus                   | same as `autofocus` in native input     | `boolean`                | false       |
| form                        | same as `form` in native input          | `string`                 | —           |
| tabindex                    | input tabindex                          | `string \|number`        | —           |
| validate-event              | whether to trigger form validation      | `boolean`                | true        |
| input-style                 | the style of the input element or textarea element   | `CSSProperties \| CSSProperties[] \| string[] \| string`           | {}          |
| inputmode                   | same as `inputmode` in native input     | `string`                 | —           |


### Events

| Name              | Description                                                                                           | Type                                                        |
| ----------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------- |
| zBlur              | triggers when Input blurs                                                                             | `(event: CustomEvent<FocusEvent>) => void`                    |
| zFocus             | triggers when Input focuses                                                                           | `(event: CustomEvent<FocusEvent>) => void`                    |
| zChange            | triggers when the input box loses focus or the user presses Enter, only if the modelValue has changed | `(event: CustomEvent<number \| string>) => void` |
| zInput             | triggers when the Input value change                                                                  | `(event: CustomEvent<value: string \| number>) => void`              |
| zClear             | triggers when the Input is cleared by clicking the clear button                                       | `() => void`                                     |
| zSelect            | triggers when a suggestion is clicked  | `(item: Record<string, any>) => void` |

### Slots

| Name             | Description                           | Type                                     |
| ---------------- | ------------------------------------- | ---------------------------------------- |
| header           | content at the top of the dropdown    | -                                        |
| footer           | content at the bottom of the dropdown | -                                        |
| prefix           | content as Input prefix               | -                                        |
| suffix           | content as Input suffix               | -                                        |
| prepend          | content to prepend before Input       | -                                        |
| append           | content to append after Input         | -                                        |


### Exposes

| Name             | Description                                 | Type                                     |
| ---------------- | ------------------------------------------- | ---------------------------------------- |
| inputbBlur       | blur the input element                      | `() => void`                             |
| inputFocus       | focus the input element                     | `() => void`                             |
| close            | collapse suggestion list                    | `() => void`                             |
| handleSelect     | triggers when a suggestion is clicked       | `(item: any) => promise<void>`           |
| handleKeyEnter   | handle keyboard enter event                 | `() => promise<void>`                    |
| highlight        | highlight an item in a suggestion           | `(itemIndex: number) => void`            |
| getData          | loading suggestion list                     | `(queryString: string) => promise<void>` |
