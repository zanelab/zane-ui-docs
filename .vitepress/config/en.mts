import type { DefaultTheme } from 'vitepress';

import { defineConfig } from 'vitepress';

import { version } from '../../package.json';

const nav: DefaultTheme.NavItem[] = [
  {
    link: '/en-US/components/',
    text: 'Components',
  },
  {
    text: `v${version}`,
    items: [
      {
        link: 'https://github.com/zanedeng/zanejs/releases',
        text: 'Release Notes',
      },
      {
        component: 'RainbowAnimationSwitcher',
        props: {
          text: 'Rainbow Animation',
        },
      },
    ],
  },
];

const SidebarComponents: DefaultTheme.SidebarItem[] = [
  {
    link: '/en-US/components/',
    text: 'Overview',
  },
  {
    text: 'Basic',
    items: [
      { link: '/en-US/components/button', text: 'Button' },
      { link: '/en-US/components/container', text: 'Container' },
      { link: '/en-US/components/icon', text: 'Icon' },
      { link: '/en-US/components/layout', text: 'Layout' },
      { link: '/en-US/components/link', text: 'Link' },
      { link: '/en-US/components/text', text: 'Text' },
      { link: '/en-US/components/scrollbar', text: 'Scrollbar' },
      { link: '/en-US/components/splitter', text: 'Splitter' },
    ],
  },
  {
    text: 'Form',
    items: [
      {
        link: '/en-US/components/autocomplete',
        text: 'Autocomplete',
      },
      { link: '/en-US/components/cascader', text: 'Cascader' },
      { link: '/en-US/components/checkbox', text: 'Checkbox' },
      {
        link: '/en-US/components/color-picker-panel',
        text: 'ColorPickerPanel',
      },
      {
        link: '/en-US/components/color-picker',
        text: 'ColorPickerPanel',
      },
      {
        link: '/en-US/components/date-picker-panel',
        text: 'DatePickerPanel',
      },
      {
        link: '/en-US/components/date-picker',
        text: 'DatePicker',
      },
      {
        link: '/en-US/components/datetime-picker',
        text: 'DateTimePicker',
      },
      {
        link: '/en-US/components/form',
        text: 'Form',
      },
      {
        link: '/en-US/components/input',
        text: 'Input',
      },
      {
        link: '/en-US/components/input-number',
        text: 'Input Number',
      },
      {
        link: '/en-US/components/input-tag',
        text: 'Input Tag',
      },
      {
        link: '/en-US/components/mention',
        text: 'Mention',
      },
      {
        link: '/en-US/components/radio',
        text: 'Radio',
      },
      {
        link: '/en-US/components/rate',
        text: 'Rate',
      },
      {
        link: '/en-US/components/select',
        text: 'Select',
      },
      {
        link: '/en-US/components/slider',
        text: 'Slider',
      },
      {
        link: '/en-US/components/switch',
        text: 'Switch',
      },
      {
        link: '/en-US/components/time-picker',
        text: 'TimePicker',
      },
      {
        link: '/en-US/components/time-select',
        text: 'TimeSelect',
      },
      {
        link: '/en-US/components/transfer',
        text: 'Transfer',
      },
      {
        link: '/en-US/components/tree-select',
        text: 'TreeSelect',
      },
      {
        link: '/en-US/components/upload',
        text: 'Upload',
      },
    ],
  },
  {
    text: 'Data',
    items: [
      { link: '/en-US/components/avatar', text: 'Avatar' },
      { link: '/en-US/components/badge', text: 'Badge' },
      { link: '/en-US/components/calendar', text: 'Calendar' },
      { link: '/en-US/components/card', text: 'Card' },
      { link: '/en-US/components/carousel', text: 'Carousel' },
      { link: '/en-US/components/collapse', text: 'Collapse' },
      { link: '/en-US/components/descriptions', text: ' Descriptions' },
      { link: '/en-US/components/empty', text: 'Empty' },
      { link: '/en-US/components/image', text: 'Image' },
      {
        link: '/en-US/components/infinite-scroll',
        text: 'Infinite Scroll',
      },
      { link: '/en-US/components/pagination', text: 'Pagination' },
      { link: '/en-US/components/progress', text: 'Progress' },
      { link: '/en-US/components/result', text: 'Result' },
      { link: '/en-US/components/skeleton', text: 'Skeleton' },
      { link: '/en-US/components/table', text: 'Table' },
      { link: '/en-US/components/tag', text: 'Tag' },
      { link: '/en-US/components/timeline', text: 'Timeline' },
      { link: '/en-US/components/tree', text: 'Tree' },
      { link: '/en-US/components/statistic', text: 'Statistic' },
      { link: '/en-US/components/segmented', text: 'Segmented' },
    ],
  },
  {
    text: 'Navigation',
    items: [
      { link: '/en-US/components/affix', text: 'Affix' },
      { link: '/en-US/components/anchor', text: 'Anchor' },
      { link: '/en-US/components/backtop', text: 'Backtop' },
      { link: '/en-US/components/breadcrumb', text: 'Breadcrumb' },
      { link: '/en-US/components/dropdown', text: 'Dropdown' },
      { link: '/en-US/components/menu', text: 'Menu' },
      { link: '/en-US/components/steps', text: 'Steps' },
      { link: '/en-US/components/tabs', text: 'Tabs' },
    ],
  },
  {
    text: 'Feedback',
    items: [
      { link: '/en-US/components/alert', text: 'Alert' },
      { link: '/en-US/components/dialog', text: 'Dialog' },
      { link: '/en-US/components/drawer', text: 'Drawer' },
      { link: '/en-US/components/loading', text: 'Loading' },
      { link: '/en-US/components/message', text: 'Message' },
      { link: '/en-US/components/message-box', text: 'MessageBox' },
      { link: '/en-US/components/notification', text: 'Notification' },
      { link: '/en-US/components/popconfirm', text: 'Popconfirm' },
      { link: '/en-US/components/popover', text: 'Popover' },
      { link: '/en-US/components/tooltip', text: '文Tooltip' },
      { link: '/en-US/components/tooltip', text: 'Tooltip' },
    ],
  },
  {
    text: 'Others',
    items: [
      { link: '/en-US/components/divider', text: 'Divider' },
      { link: '/en-US/components/watermark', text: 'Watermark' },
    ],
  },
];

export const en = defineConfig({
  description: '',
  lang: 'en-US',
  themeConfig: {
    darkModeSwitchLabel: 'Theme',
    darkModeSwitchTitle: 'Switch to Dark Mode',
    docFooter: {
      next: 'Next Page',
      prev: 'Previous Page',
    },
    editLink: {
      pattern: 'https://github.com/zanedeng/zanejs/edit/main/docs/src/:path',
      text: 'Edit this page on GitHub',
    },
    footer: {
      copyright: `Copyright © 2020-${new Date().getFullYear()} ZaneJS`,
      message: 'Released under the MIT License.',
    },
    langMenuLabel: 'Language',
    lastUpdated: {
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'medium',
      },
      text: 'Last updated on',
    },
    lightModeSwitchTitle: 'Switch to Light Mode',
    nav,
    outline: {
      label: 'Navigate',
      level: [2, 3],
    },
    returnToTopLabel: 'Back to top',
    sidebar: {
      '/en-US/components/': SidebarComponents,
    },
  },
});
