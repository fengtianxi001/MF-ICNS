<template>
  <Layout class="layout-content">
    <LayoutSider :width="48">
      <ContentMenu />
    </LayoutSider>
    <LayoutContent>
      <div class="layout-content-main">
        <RouterView />
      </div>
    </LayoutContent>
  </Layout>
</template>
<script setup lang="ts">
import { Layout, LayoutSider, LayoutContent } from "@arco-design/web-vue";
import ContentMenu from "./ContentMenu.vue";
</script>
<style lang="scss">
.layout-content {
  height: calc(100vh - 50px);
  overflow-y: auto;
  background-color: var(--color-bg-2);
  .layout-content-sider {
    width: 48px;
    border-bottom: 1px solid var(--color-border);
  }
  .layout-content-main {
    background-color: var(--color-fill-2);
    min-height: 100%;
    padding: 10px;
    box-sizing: border-box;
  }
}
</style>
