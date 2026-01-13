<template>
  <div>
    <zane-dropdown>
      <zane-button color="secondary" icon="overflow-menu--vertical" />

      <zane-dropdown-menu>
        <zane-menu-item value="cut">
          Cut
          <span slot="end">⌘X</span>
        </zane-menu-item>
        <zane-menu-item value="copy">
          Copy
          <span slot="end">⌘C</span>
        </zane-menu-item>
        <zane-menu-item value="paste">
          Paste
          <span slot="end">⌘X</span>
        </zane-menu-item>
        <zane-menu-divider />
        <zane-menu-item value="bold" selected="true"> Bold </zane-menu-item>
        <zane-menu-item value="italic"> Italic </zane-menu-item>
        <zane-menu-divider />
        <zane-menu-item value="delete" color="danger">
          Delete
          <zane-icon name="delete" slot="end" />
        </zane-menu-item>
      </zane-dropdown-menu>
    </zane-dropdown>
  </div>
</template>
