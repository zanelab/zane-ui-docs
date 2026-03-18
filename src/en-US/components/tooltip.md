# Tooltip

Display prompt information for mouse hover.

## Basic usage

Tooltip has 9 placements.

Use attribute `content` to set the display content when hover. The attribute `placement` determines the position of the tooltip. Its value is `[orientation]-[alignment]` with four orientations `top`, `left`, `right`, `bottom` and three alignments `start`, `end`, `null`, and the default alignment is null. Take `placement="left-end"` for example, Tooltip will display on the left of the element which you are hovering and the bottom of the tooltip aligns with the bottom of the element.

:::demo src=examples/tooltip/basic.vue :::

## Theme

Tooltip has two built-in themes: `light`, `light-border`, `material` and `translucent`.

:::tip

To use customized theme, you will have to known where your tooltip is rendered into, if your tooltip is rendered into the root element, you will need to set the css rule globally.

It is recommended that not using linear gradient background color when you using customized theme and showing the arrow at the same time, because the popup arrow and the content are two different elements,
the popup arrow's style needs to be set individually, and when it comes to the gradient background color, it might seem a little bit weird.

:::

Set `theme` to modify theme.

:::demo src=examples/tooltip/theme.vue :::

## More Content

Display multiple lines of text and set their format.

Override attribute `content` of `zane-tooltip` by adding a slot named `content`.


:::demo src=examples/tooltip/rich-content.vue :::

## HTML as content

The content attribute can be set to HTML string.

:::warning

Although `content` property supports HTML strings, dynamically rendering arbitrary HTML on your website can be very dangerous because it can easily lead to [XSS attacks](https://en.wikipedia.org/wiki/Cross-site_scripting). So when `raw-content` is on, please make sure `content` is trusted, and **never** assign user-provided `content`.

:::

:::demo src=examples/tooltip/html-content.vue :::


## Customized Arrow

The arrow that points toward the element can have its proportion or shape modified, or be disabled completely.

:::demo src=examples/tooltip/custom-arrow.vue :::

## Animations

Tooltips can have different types of transition animations. By default, it's a simple fade (opacity transition).

### Extra included animations

These animations are included in the package and can be imported separately.

:::demo src=examples/tooltip/preset-animations.vue :::

### Material filling effect

:::demo src=examples/tooltip/fill-animation.vue :::

### Inertia / slingshot elastic effect

Add CSS spring physics to the animation using `transition-timing-function`

:::demo src=examples/tooltip/inertia-animation.vue :::

### CSS keyframe animations

Getting more advanced, you can use actual CSS animations (@keyframes rules), for example using the animate.css package:

:::demo src=examples/tooltip/css-animation.vue :::

### Duration

:::demo src=examples/tooltip/duration-animation.vue :::

## Triggers

Can be triggered by a variety of different events, including `mouseenter`, `focus`, `focusin`, `click`, `manual`  event:

Use `manual` to only trigger the tooltip programmatically.

:::demo src=examples/tooltip/triggers.vue :::

## Interactivity

Can be interactive, allowing you to hover over and click inside it.

:::demo src=examples/tooltip/interactive.vue :::

## Delay

Can delay hiding or showing after a trigger.

:::demo src=examples/tooltip/delay.vue :::

## Follow Cursor

Can follow the mouse cursor and abide by a certain axis. Additionally, the tooltip can follow the cursor until it shows, at which point it will stop following (initial).

:::demo src=examples/tooltip/follow-cursor.vue :::


## API

### Attributes

| Name               | Description                            | Type                                       | Default           |
| ------------------ | -------------------------------------- | ------------------------------------------ | ----------------- |
| allowHTML          | Determines if `content` strings are parsed as HTML instead of text. | `boolean` | `true` |
| animateFill        | Determines if the background fill color of the tooltip should be animated. | `boolean` | `false` |
| animation          | The type of transition animation.   | `boolean \| string` | `"fade"` |
| appendTo           | The element to append the tooltip to.   | `'parent' \| ((ref: Element) => Element) \| Element` | `document.body` |
| aria               | The aria attribute configuration. Both properties are optional: <br />1.`content`: The `aria-*` attribute applied to the reference element to announce the tooltip content. <br />2. `expanded`: Whether to add an `aria-expanded` attribute to the reference element.| `{ content?: 'auto' \| 'describedby' \| 'labelledby' \| null; expanded?: 'auto' \| boolean; }` | `"describedby"` |
| arrow              | Determines if the tooltip has an arrow. | `boolean \| DocumentFragment \| string \| SVGElement` | `true` |
| content            | The content of the tooltip. | `((ref: Element) => DocumentFragment \| Element \| string) \| DocumentFragment \| Element \| string` | `""` |
| delay              | Delay in ms once a trigger event is fired before a tooltip shows or hides. | `[null \| number, null \| number] \| number` | `0` |
| duration           | Duration in ms of the transition animation. | `[null \| number, null \| number] \| number` | `[300, 250]` |
| followCursor       | Determines if the tooltip follows the user's mouse cursor. | `'horizontal' \| 'initial' \| 'vertical' \| boolean` | `false` |
| hideOnClick        | Determines if the tooltip hides upon clicking the reference or outside of the tooltip. The behavior can depend upon the trigger events used. | `'toggle' \| boolean` | `true` |
| inertia            | Determines if a (customizable) CSS spring-like animation is applied to the transition animation. Changing the show duration to a higher value makes this look better. | `boolean` | `false` |
| inlinePositioning  | Provides enhanced support for `display: inline` elements. It will choose the most appropriate rect based on the placement. | `boolean` | `false` |
| interactive        | Determines if the tooltip has interactive content inside of it, so that it can be hovered over and clicked inside without hiding. | `boolean` | `false` |
| interactiveBorder  | Determines the size of the invisible border around the tooltip that will prevent it from hiding if the cursor left it. | `number` | `2` |
| interactiveDebounce  | Determines the time in ms to debounce the interactive hide handler when the cursor leaves the tooltip's interactive region. Offers a temporal (rather than spacial) alternative to `interactiveBorder`, although it can be used in conjunction with it. | `number` | `2` |
| maxWidth           | Specifies the maximum width of the tooltip. Useful to prevent it from being too horizontally wide to read. | `number \| string` | `350` |
| moveTransition     | Specifies the transition applied to the root positioned popper node. This describes the transition between "moves" (or position updates) of the popper element when it e.g. flips or changes target location. | `string` | `""` |
| offset             | Displaces the tooltip from its reference element in pixels (skidding and distance). | `[number, number]` | `[0, 10]` |
| placement          | The preferred placement of the tooltip.  | `"auto" \| "auto-start" \| "auto-end" \| "top" \| "top-start" \| "top-end" \| "bottom" \| "bottom-start" \| "bottom-end" \| "right" \| "right-start" \| "right-end" \| "left-start" \| "left-end"` | `"top"` |
| showOnCreate       | Determines if the tooltip is shown once it gets created, respecting `delay`. | `boolean` | `false` |
| sticky             | Determines if the tooltip sticks to the reference element while it is mounted. This is usually not needed, but is useful if the reference element's position is animating, or to automatically update the tooltip position without needing to manually do it in certain cases where the DOM layout changes. | `'popper' \| 'reference' \| boolean` | `false` |
| theme              | Determines the theme of the tooltip element. The core CSS defaults to a dark `#333` theme. This can be overridden by a custom theme. | `string` | `""` |
| touch              | Determines the behavior on touch devices. | `'hold' \| ['hold', number] \| boolean` | `true` |
| trigger            | Determines the events that cause the tooltip to show. Multiple event names are separated by spaces. | `"mouseenter" \| "focus" \| "focusin" \| "click" \| "manual"` | `"mouseenter focus"` |
| triggerTarget      | The element(s) that the trigger event listeners are added to. Allows you to separate the tooltip's positioning from its trigger source. | `Element \| Element[] \| null` | `null` |
| zIndex             | Specifies the `z-index` CSS on the root popper node. | `number` | `9999` |

### Events

| Name        | Description                                                           | Type                                 |
| ----------- | --------------------------------------------------------------------- | ------------------------------------ |
| zShow       | Invoked once the tooltip begins to show. | `(event?: CustomEvent<Instance<Props>>) => void`  |
| zMount      | Invoked once the tooltip has been mounted to the DOM (and the popperInstance created). | `(event?: CustomEvent<Instance<Props>>) => void`  |
| zHide       | Invoked once the tooltip begins to hide. | `(event?: CustomEvent<Instance<Props>>) => void`  |
| zHidden     | Invoked once the tooltip has been fully hidden and unmounted from the DOM. | `(event?: CustomEvent<Instance<Props>>) => void`  |
| zClickOutside | Invoked when the user clicks anywhere outside of the tooltip or reference element. | `(event?: CustomEvent<Instance<Props>>) => void`  |


### Slots

| Name    | Description                                                                    |
| ------- | ------------------------------------------------------------------------------ |
| default | Tooltip triggering & reference element, only a single root element is accepted |
| content | customize content  | 


### Exposes

| Name                 | Description                           | Type                      |
| -------------------- | ------------------------------------- | ------------------------- |
| disable              | Temporarily prevent a tooltip from showing or hiding | `() => void` |
| enable               | Re-enable a tooltip | `() => void` |
| hide                 | Programmatically hide the tooltip at any time | `() => void` |
| show                 | Programmatically show the tippy at any time | `() => void` |
