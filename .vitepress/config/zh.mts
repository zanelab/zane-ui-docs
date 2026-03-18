import type { DefaultTheme } from 'vitepress';

import { defineConfig } from 'vitepress';

import { version } from '../../package.json';

const nav: DefaultTheme.NavItem[] = [
  {
    link: '/components/',
    text: '组件库',
  },
  {
    text: `v${version}`,
    items: [
      {
        link: 'https://github.com/zanedeng/zanejs/releases',
        text: '发行说明',
      },
      {
        component: 'RainbowAnimationSwitcher',
        props: {
          text: '彩虹动画',
        },
      },
    ],
  },
];

const SidebarComponents: DefaultTheme.SidebarItem[] = [
  {
    link: '/components/',
    text: '组件总览',
  },
  {
    text: '基础组件',
    items: [
      { link: '/components/button', text: '按钮 Button' },
      { link: '/components/container', text: '布局容器 Container' },
      { link: '/components/icon', text: '图标 Icon' },
      { link: '/components/layout', text: '布局 Layout' },
      { link: '/components/link', text: '链接 Link' },
      { link: '/components/text', text: '文本 Text' },
      { link: '/components/scrollbar', text: '滚动条 Scrollbar' },
      { link: '/components/splitter', text: '分隔面板 Splitter' },
    ],
  },
  {
    text: '表单组件',
    items: [
      {
        link: '/components/autocomplete',
        text: '自动补全输入框 Autocomplete',
      },
      { link: '/components/cascader', text: '级联选择器 Cascader' },
      { link: '/components/checkbox', text: '多选框 Checkbox' },
      // {
      //   link: '/components/color-picker-panel',
      //   text: '颜色选择器面板 ColorPickerPanel',
      // },
      // {
      //   link: '/components/color-picker',
      //   text: '颜色选择器面板 ColorPickerPanel',
      // },
      // {
      //   link: '/components/date-picker-panel',
      //   text: '日期选择器面板 DatePickerPanel',
      // },
      // {
      //   link: '/components/date-picker',
      //   text: '日期选择器 DatePicker',
      // },
      // {
      //   link: '/components/datetime-picker',
      //   text: '日期时间选择器 DateTimePicker',
      // },
      {
        link: '/components/form',
        text: '表单 Form',
      },
      {
        link: '/components/input',
        text: '输入框 Input',
      },
      {
        link: '/components/input-number',
        text: '数字输入框 Input Number',
      },
      {
        link: '/components/input-tag',
        text: '标签输入框 Input Tag',
      },
      {
        link: '/components/mention',
        text: '提及 Mention',
      },
      {
        link: '/components/radio',
        text: '单选框 Radio',
      },
      {
        link: '/components/rate',
        text: '评分 Rate',
      },
      {
        link: '/components/select',
        text: '选择器 Select',
      },
      {
        link: '/components/slider',
        text: '滑块 Slider',
      },
      {
        link: '/components/switch',
        text: '开关 Switch',
      },
      // {
      //   link: '/components/time-picker',
      //   text: '时间选择器 TimePicker',
      // },
      // {
      //   link: '/components/time-select',
      //   text: '时间选择 TimeSelect',
      // },
      {
        link: '/components/transfer',
        text: '穿梭框 Transfer',
      },
      {
        link: '/components/tree-select',
        text: '树形选择 TreeSelect',
      },
      {
        link: '/components/upload',
        text: '上传 Upload',
      },
    ],
  },
  {
    text: '数据展示',
    items: [
      { link: '/components/avatar', text: '头像 Avatar' },
      { link: '/components/badge', text: '徽章 Badge' },
      { link: '/components/calendar', text: '日历 Calendar' },
      { link: '/components/card', text: '卡片 Card' },
      { link: '/components/carousel', text: '走马灯 Carousel' },
      { link: '/components/collapse', text: '折叠面板 Collapse' },
      { link: '/components/descriptions', text: '描述列表 Descriptions' },
      { link: '/components/empty', text: '空状态 Empty' },
      { link: '/components/image', text: '图片 Image' },
      {
        link: '/components/infinite-scroll',
        text: '无限滚动 Infinite Scroll',
      },
      { link: '/components/pagination', text: '分页 Pagination' },
      { link: '/components/progress', text: '进度条 Progress' },
      { link: '/components/result', text: '结果 Result' },
      { link: '/components/skeleton', text: '骨架屏 Skeleton' },
      { link: '/components/table', text: '表格 Table' },
      { link: '/components/tag', text: '标签 Tag' },
      { link: '/components/timeline', text: '时间线 Timeline' },
      { link: '/components/tree', text: '树形控件 Tree' },
      { link: '/components/statistic', text: '统计组件 Statistic' },
      { link: '/components/segmented', text: '分段控制器 Segmented' },
    ],
  },
  {
    text: '导航组件',
    items: [
      { link: '/components/affix', text: '固钉 Affix' },
      { link: '/components/anchor', text: '锚点 Anchor' },
      { link: '/components/backtop', text: '回到顶部 Backtop' },
      { link: '/components/breadcrumb', text: '面包屑 Breadcrumb' },
      { link: '/components/dropdown', text: '下拉菜单 Dropdown' },
      { link: '/components/menu', text: '菜单 Menu' },
      { link: '/components/steps', text: '步骤条 Steps' },
      { link: '/components/tabs', text: '标签页 Tabs' },
    ],
  },
  {
    text: '反馈组件',
    items: [
      { link: '/components/alert', text: '提示 Alert' },
      { link: '/components/dialog', text: '对话框 Dialog' },
      { link: '/components/drawer', text: '抽屉 Drawer' },
      { link: '/components/loading', text: '加载 Loading' },
      { link: '/components/message', text: '消息提示 Message' },
      { link: '/components/message-box', text: '消息弹框 MessageBox' },
      { link: '/components/notification', text: '通知 Notification' },
      { link: '/components/popconfirm', text: '气泡确认框 Popconfirm' },
      { link: '/components/popover', text: '弹出框 Popover' },
      { link: '/components/tooltip', text: '文字提示 Tooltip' },
    ],
  },
  {
    text: '其他',
    items: [
      { link: '/components/divider', text: '分割线 Divider' },
      { link: '/components/watermark', text: '水印 Watermark' },
    ],
  },
];

export const zh = defineConfig({
  description: '',
  lang: 'zh-Hans',
  themeConfig: {
    darkModeSwitchLabel: '主题',
    darkModeSwitchTitle: '切换到深色模式',
    docFooter: {
      next: '下一页',
      prev: '上一页',
    },
    editLink: {
      pattern: 'https://github.com/zanedeng/zanejs/edit/main/docs/src/:path',
      text: '在 GitHub 上编辑此页面',
    },
    footer: {
      copyright: `Copyright © 2020-${new Date().getFullYear()} ZaneLab`,
      message: '基于 MIT 许可发布.',
    },
    langMenuLabel: '多语言',
    lastUpdated: {
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'medium',
      },
      text: '最后更新于',
    },
    lightModeSwitchTitle: '切换到浅色模式',
    nav,

    outline: {
      label: '页面导航',
      level: [2, 3],
    },
    returnToTopLabel: '回到顶部',

    sidebar: {
      '/components/': SidebarComponents,
    },
    sidebarMenuLabel: '菜单',
  },
});
