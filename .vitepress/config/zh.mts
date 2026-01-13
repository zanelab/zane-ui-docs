import type { DefaultTheme } from 'vitepress';

import { defineConfig } from 'vitepress';

import { version } from '../../package.json';

const nav: DefaultTheme.NavItem[] = [
  {
    link: '/zh-CN/components/',
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
    link: '/zh-CN/components/',
    text: '组件总览',
  },
  {
    text: '基础组件',
    items: [
      { link: '/zh-CN/components/button', text: '按钮 Button' },
      { link: '/zh-CN/components/container', text: '布局容器 Container' },
      { link: '/zh-CN/components/icon', text: '图标 Icon' },
      { link: '/zh-CN/components/layout', text: '布局 Layout' },
      { link: '/zh-CN/components/link', text: '链接 Link' },
      { link: '/zh-CN/components/text', text: '文本 Text' },
      { link: '/zh-CN/components/scrollbar', text: '滚动条 Scrollbar' },
      { link: '/zh-CN/components/splitter', text: '分隔面板 Splitter' },
    ],
  },
  {
    text: '表单组件',
    items: [
      {
        link: '/zh-CN/components/autocomplete',
        text: '自动补全输入框 Autocomplete',
      },
      { link: '/zh-CN/components/cascader', text: '级联选择器 Cascader' },
      { link: '/zh-CN/components/checkbox', text: '多选框 Checkbox' },
      {
        link: '/zh-CN/components/color-picker-panel',
        text: '颜色选择器面板 ColorPickerPanel',
      },
      {
        link: '/zh-CN/components/color-picker',
        text: '颜色选择器面板 ColorPickerPanel',
      },
      {
        link: '/zh-CN/components/date-picker-panel',
        text: '日期选择器面板 DatePickerPanel',
      },
      {
        link: '/zh-CN/components/date-picker',
        text: '日期选择器 DatePicker',
      },
      {
        link: '/zh-CN/components/datetime-picker',
        text: '日期时间选择器 DateTimePicker',
      },
      {
        link: '/zh-CN/components/form',
        text: '表单 Form',
      },
      {
        link: '/zh-CN/components/input',
        text: '输入框 Input',
      },
      {
        link: '/zh-CN/components/input-number',
        text: '数字输入框 Input Number',
      },
      {
        link: '/zh-CN/components/input-tag',
        text: '标签输入框 Input Tag',
      },
      {
        link: '/zh-CN/components/mention',
        text: '提及 Mention',
      },
      {
        link: '/zh-CN/components/radio',
        text: '单选框 Radio',
      },
      {
        link: '/zh-CN/components/rate',
        text: '评分 Rate',
      },
      {
        link: '/zh-CN/components/select',
        text: '选择器 Select',
      },
      {
        link: '/zh-CN/components/slider',
        text: '滑块 Slider',
      },
      {
        link: '/zh-CN/components/switch',
        text: '开关 Switch',
      },
      {
        link: '/zh-CN/components/time-picker',
        text: '时间选择器 TimePicker',
      },
      {
        link: '/zh-CN/components/time-select',
        text: '时间选择 TimeSelect',
      },
      {
        link: '/zh-CN/components/transfer',
        text: '穿梭框 Transfer',
      },
      {
        link: '/zh-CN/components/tree-select',
        text: '树形选择 TreeSelect',
      },
      {
        link: '/zh-CN/components/upload',
        text: '上传 Upload',
      },
    ],
  },
  {
    text: '数据展示',
    items: [
      { link: '/zh-CN/components/avatar', text: '头像 Avatar' },
      { link: '/zh-CN/components/badge', text: '徽章 Badge' },
      { link: '/zh-CN/components/calendar', text: '日历 Calendar' },
      { link: '/zh-CN/components/card', text: '卡片 Card' },
      { link: '/zh-CN/components/carousel', text: '走马灯 Carousel' },
      { link: '/zh-CN/components/collapse', text: '折叠面板 Collapse' },
      { link: '/zh-CN/components/descriptions', text: '描述列表 Descriptions' },
      { link: '/zh-CN/components/empty', text: '空状态 Empty' },
      { link: '/zh-CN/components/image', text: '图片 Image' },
      {
        link: '/zh-CN/components/infinite-scroll',
        text: '无限滚动 Infinite Scroll',
      },
      { link: '/zh-CN/components/pagination', text: '分页 Pagination' },
      { link: '/zh-CN/components/progress', text: '进度条 Progress' },
      { link: '/zh-CN/components/result', text: '结果 Result' },
      { link: '/zh-CN/components/skeleton', text: '骨架屏 Skeleton' },
      { link: '/zh-CN/components/table', text: '表格 Table' },
      { link: '/zh-CN/components/tag', text: '标签 Tag' },
      { link: '/zh-CN/components/timeline', text: '时间线 Timeline' },
      { link: '/zh-CN/components/tree', text: '树形控件 Tree' },
      { link: '/zh-CN/components/statistic', text: '统计组件 Statistic' },
      { link: '/zh-CN/components/segmented', text: '分段控制器 Segmented' },
    ],
  },
  {
    text: '导航组件',
    items: [
      { link: '/zh-CN/components/affix', text: '固钉 Affix' },
      { link: '/zh-CN/components/anchor', text: '锚点 Anchor' },
      { link: '/zh-CN/components/backtop', text: '回到顶部 Backtop' },
      { link: '/zh-CN/components/breadcrumb', text: '面包屑 Breadcrumb' },
      { link: '/zh-CN/components/dropdown', text: '下拉菜单 Dropdown' },
      { link: '/zh-CN/components/menu', text: '菜单 Menu' },
      { link: '/zh-CN/components/steps', text: '步骤条 Steps' },
      { link: '/zh-CN/components/tabs', text: '标签页 Tabs' },
    ],
  },
  {
    text: '反馈组件',
    items: [
      { link: '/zh-CN/components/alert', text: '提示 Alert' },
      { link: '/zh-CN/components/dialog', text: '对话框 Dialog' },
      { link: '/zh-CN/components/drawer', text: '抽屉 Drawer' },
      { link: '/zh-CN/components/loading', text: '加载 Loading' },
      { link: '/zh-CN/components/message', text: '消息提示 Message' },
      { link: '/zh-CN/components/message-box', text: '消息弹框 MessageBox' },
      { link: '/zh-CN/components/notification', text: '通知 Notification' },
      { link: '/zh-CN/components/popconfirm', text: '气泡确认框 Popconfirm' },
      { link: '/zh-CN/components/popover', text: '弹出框 Popover' },
      { link: '/zh-CN/components/tooltip', text: '文字提示 Tooltip' },
      { link: '/zh-CN/components/tooltip', text: '文字提示 Tooltip' },
    ],
  },
  {
    text: '其他',
    items: [
      { link: '/zh-CN/components/divider', text: '分割线 Divider' },
      { link: '/zh-CN/components/watermark', text: '水印 Watermark' },
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
      copyright: `Copyright © 2020-${new Date().getFullYear()} ZaneJS`,
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
      '/zh-CN/components/': SidebarComponents,
    },
    sidebarMenuLabel: '菜单',
  },
});
