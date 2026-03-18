<template>
  <div class="flex flex-row items-center gap-4">
    <zane-dropdown
      id="dropdown"
      item-variant="icon"
      placements="top-start,bottom-start"
    >
      <zane-button icon="home" variant="outline">Open</zane-button>
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

    <zane-dropdown
      id="dropdown"
      item-variant="icon"
      placements="top-end,bottom-end"
    >
      <zane-button icon="trash-can" color="danger" aria-label="Trash Can" />
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
