<script setup lang="ts">
import { ref } from 'vue';

const input1 = ref('');
const input2 = ref('');
const input3 = ref('');
const select = ref('');
</script>
<!-- eslint-disable vue/html-self-closing -->
<template>
  <div>
    <div>
      <zane-input
        :value="input1"
        style="max-width: 600px"
        placeholder="Please input"
      >
        <span slot="prepend">Http://</span>
      </zane-input>
    </div>
    <div class="mt-4">
      <zane-input
        :value="input2"
        style="max-width: 600px"
        placeholder="Please input"
      >
        <span slot="append">.com</span>
      </zane-input>
    </div>
    <div class="mt-4">
      <zane-input
        :value="input3"
        style="max-width: 600px"
        placeholder="Please input"
        class="input-with-select"
      >
        <div slot="prepend">
          <zane-select
            :value="select"
            placeholder="Select"
            style="width: 115px"
          >
            <zane-option label="Restaurant" value="1"></zane-option>
            <zane-option label="Order No." value="2"></zane-option>
            <zane-option label="Tel" value="3"></zane-option>
          </zane-select>
        </div>
        <div slot="append">
          <zane-button icon="search"></zane-button>
        </div>
      </zane-input>
    </div>
    <div class="mt-4">
      <zane-input
        :value="input3"
        style="max-width: 600px"
        placeholder="Please input"
        class="input-with-select"
      >
        <div slot="prepend">
          <zane-button icon="search"></zane-button>
        </div>
        <div slot="append">
          <zane-select
            :value="select"
            placeholder="Select"
            style="width: 115px"
          >
            <zane-option label="Restaurant" value="1"></zane-option>
            <zane-option label="Order No." value="2"></zane-option>
            <zane-option label="Tel" value="3"></zane-option>
          </zane-select>
        </div>
      </zane-input>
    </div>
  </div>
</template>

<style>
.input-with-select .zane-input-group__prepend {
  background-color: var(--zane-fill-color-blank);
}
</style>
