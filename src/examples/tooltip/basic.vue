<template>
  <div class="tooltip-base-box">
    <div class="row center">
      <zane-tooltip
        class="box-item"
        effect="dark"
        content="Top Left prompts info"
        placement="top-start"
      >
        <zane-button>top-start</zane-button>
      </zane-tooltip>
      <zane-tooltip
        class="box-item"
        effect="dark"
        content="Top Center prompts info"
        placement="top"
      >
        <zane-button>top</zane-button>
      </zane-tooltip>
      <zane-tooltip
        class="box-item"
        effect="dark"
        content="Top Right prompts info"
        placement="top-end"
      >
        <zane-button>top-end</zane-button>
      </zane-tooltip>
    </div>
    <div class="row">
      <zane-tooltip
        class="box-item"
        effect="dark"
        content="Left Top prompts info"
        placement="left-start"
      >
        <zane-button>left-start</zane-button>
      </zane-tooltip>
      <zane-tooltip
        class="box-item"
        effect="dark"
        content="Right Top prompts info"
        placement="right-start"
      >
        <zane-button>right-start</zane-button>
      </zane-tooltip>
    </div>
    <div class="row">
      <zane-tooltip
        class="box-item"
        effect="dark"
        content="Left Center prompts info"
        placement="left"
      >
        <zane-button class="mb-3 mt-3">left</zane-button>
      </zane-tooltip>
      <zane-tooltip
        class="box-item"
        effect="dark"
        content="Right Center prompts info"
        placement="right"
      >
        <zane-button>right</zane-button>
      </zane-tooltip>
    </div>
    <div class="row">
      <zane-tooltip
        class="box-item"
        effect="dark"
        content="Left Bottom prompts info"
        placement="left-end"
      >
        <zane-button>left-end</zane-button>
      </zane-tooltip>
      <zane-tooltip
        class="box-item"
        effect="dark"
        content="Right Bottom prompts info"
        placement="right-end"
      >
        <zane-button>right-end</zane-button>
      </zane-tooltip>
    </div>
    <div class="row center">
      <zane-tooltip
        class="box-item"
        effect="dark"
        content="Bottom Left prompts info"
        placement="bottom-start"
      >
        <zane-button>bottom-start</zane-button>
      </zane-tooltip>
      <zane-tooltip
        class="box-item"
        effect="dark"
        content="Bottom Center prompts info"
        placement="bottom"
      >
        <zane-button>bottom</zane-button>
      </zane-tooltip>
      <zane-tooltip
        class="box-item"
        effect="dark"
        content="Bottom Right prompts info"
        placement="bottom-end"
      >
        <zane-button>bottom-end</zane-button>
      </zane-tooltip>
    </div>
  </div>
</template>

<style>
.tooltip-base-box {
  width: 100%;
  min-width: 600px;
}

.tooltip-base-box .row {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.tooltip-base-box .center {
  justify-content: center;
}

.tooltip-base-box .box-item {
  width: 130px;
  margin-top: 10px;
}
</style>
