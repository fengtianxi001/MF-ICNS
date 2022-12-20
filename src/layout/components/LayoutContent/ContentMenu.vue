<template>
  <a-menu
    class="layout-content-menu"
    breakpoint="xl"
    :selected-keys="selectedKey"
    @menu-item-click="onMenuItemClick"
  >
    <a-menu-item v-for="route in MENU_LIST" :key="route.path">
      <template #icon>
        <component :is="route.meta?.icon"></component>
      </template>
      {{ route.meta?.title }}
    </a-menu-item>
  </a-menu>
</template>
<script setup lang="ts">
import { computed } from "vue";
import { useRoute, useRouter } from "vue-router";
import { constant as MENU_LIST } from "@/router/constant";

const route = useRoute();
const router = useRouter();
const selectedKey = computed(() => [route.path]);
const onMenuItemClick = (key: string) => router.push(key);
</script>
<style lang="scss" scoped>
.layout-content-menu {
  font-size: 18px;
}
</style>
