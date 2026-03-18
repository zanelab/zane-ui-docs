import { defineConfig } from 'vitepress';

import { en } from './en.mts';
import { shared } from './shared.mts';
import { zh } from './zh.mts';

export default defineConfig({
  ...shared,
  locales: {
    'en-US': {
      label: 'English',
      lang: 'en-US',
      link: '/en-US/',
      ...en,
    },
    root: {
      label: '简体中文',
      lang: 'zh-CN',
      ...zh,
    },
  },
});
