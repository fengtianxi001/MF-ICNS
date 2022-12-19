<template>
  <LayoutHeader class="layout-header">
    <div class="layout-header-main">
      <HeaderBrand />
      <HeaderOperate />
    </div>
  </LayoutHeader>
</template>
<script setup lang="ts">
import { LayoutHeader } from "@arco-design/web-vue";
import HeaderBrand from "./HeaderBrand/index.vue";
import HeaderOperate from "./HeaderOperate/index.vue";
</script>
<style lang="scss" scoped>
.layout-header {
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 45px;
  -webkit-app-region: drag;
  user-select: none;
  background-color: var(--color-bg-2);
  // box-shadow: 0 2px 5px 0 rgb(0 0 0 / 8%);
  border-bottom: 1px solid var(--color-border);
  .layout-header-main {
    flex: 1;
    display: flex;
    justify-content: space-between;
    color: #fff;
    padding: 0 12px;
  }
}
</style>
