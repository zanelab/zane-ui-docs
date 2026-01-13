import type { Theme } from 'vitepress';

import { h, watch } from 'vue';

import DemoPreview, { useComponents } from '@vitepress-code-preview/container';
import { defineCustomElements as defineIconsElements } from '@zanejs/icons/loader';
import { defineCustomElements as defineUiElements } from '@zanejs/ui/loader';
import DefaultTheme from 'vitepress/theme';

import IconList from './components/icons/index.vue';
import Overview from './components/overview.vue';
import RainbowAnimationSwitcher from './components/rainbow-animation-switcher.vue';
import SiteLayout from './components/site-layout.vue';

import './styles';

import '@vitepress-code-preview/container/dist/style.css';
import 'uno.css';
import 'virtual:group-icons.css';

let homePageStyle: HTMLStyleElement | undefined;

export default {
  enhanceApp({ app, router }) {
    if (typeof window === 'undefined') return;

    app.component('RainbowAnimationSwitcher', RainbowAnimationSwitcher);
    app.component('Overview', Overview);
    app.component('IconList', IconList);

    useComponents(app, DemoPreview);

    defineUiElements(window);
    defineIconsElements(window);

    watch(
      () => router.route.data.relativePath,
      () => updateHomePageStyle(location.pathname === '/'),
      { immediate: true },
    );
  },
  extends: DefaultTheme,
  Layout: () => {
    return h(SiteLayout);
  },
} satisfies Theme;

if (typeof window !== 'undefined') {
  // detect browser, add to class for conditional styling
  const browser = navigator.userAgent.toLowerCase();
  if (browser.includes('chrome'))
    document.documentElement.classList.add('browser-chrome');
  else if (browser.includes('firefox'))
    document.documentElement.classList.add('browser-firefox');
  else if (browser.includes('safari'))
    document.documentElement.classList.add('browser-safari');
}

// Speed up the rainbow animation on home page
function updateHomePageStyle(value: boolean) {
  if (value) {
    if (homePageStyle) return;

    homePageStyle = document.createElement('style');
    homePageStyle.innerHTML = `
    :root {
      animation: rainbow 12s linear infinite;
    }`;
    document.body.append(homePageStyle);
  } else {
    if (!homePageStyle) return;

    homePageStyle.remove();
    homePageStyle = undefined;
  }
}
