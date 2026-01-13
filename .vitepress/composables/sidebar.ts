import { computed } from 'vue';

import { useData, useRoute } from 'vitepress';

import { ensureStartingSlash } from '../utils';

export const useSidebar = () => {
  const route = useRoute();
  const { page, site } = useData();
  if (!page.value) {
    return {
      hasSidebar: computed(() => false),
      sidebars: computed(() => []),
    };
  }
  const sidebars = computed(() => {
    if (page.value.frontmatter.sidebar === false) return [];
    const sidebars = getSidebarConfig(
      site.value.themeConfig.sidebar,
      route.data.relativePath,
    );
    return sidebars;
  });

  return {
    hasSidebar: computed(() => (sidebars.value as any).length > 0),
    sidebars,
  };
};

export function isSideBarConfig(sidebar: any) {
  return sidebar === false || sidebar === 'auto' || Array.isArray(sidebar);
}
export function isSideBarGroup(item: any) {
  return item.children !== undefined;
}
export function isSideBarEmpty(sidebar: any) {
  return Array.isArray(sidebar) ? sidebar.length === 0 : !sidebar;
}

type SidebarItem = {
  items?: SidebarItem[];
  link?: string;
  text: string;
};

type SidebarConfig = SidebarItem[];

type Sidebar =
  | 'auto'
  | false
  | {
      [key: string]: SidebarConfig;
    };

export function getSidebarConfig(sidebar: Sidebar, path: string) {
  if (sidebar === false || Array.isArray(sidebar) || sidebar === 'auto') {
    return [];
  }
  path = ensureStartingSlash(path);
  for (const dir in sidebar) {
    if (path.startsWith(ensureStartingSlash(dir))) {
      return sidebar[dir];
    }
  }
  return [];
}

export function getFlatSideBarLinks(sidebar: any[]) {
  return sidebar.reduce((links, item) => {
    if (item.link) {
      links.push({ link: item.link, text: item.text });
    }
    if (isSideBarGroup(item)) {
      links = [...links, ...getFlatSideBarLinks(item.children)];
    }
    return links;
  }, []);
}
