<template>
  <Layout class="layout">
    <LayoutHeader />
    <LayoutContent />
  </Layout>
</template>
<script setup lang="ts">
import { Layout } from "@arco-design/web-vue";
import LayoutHeader from "./components/LayoutHeader/index.vue";
import LayoutContent from "./components/LayoutContent/index.vue";
</script>
<style lang="scss" scoped>
.layout {
  width: 100vw;
  height: 100vh;
}
</style>
