<template>
  <div class="header-operate">
    <div
      v-for="(item, index) in OPERATE_LIST"
      :key="index"
      class="header-operate-item"
      @click="item.onClick"
    >
      <component :is="item.icon" />
    </div>
    <AuthorInfo />
  </div>
</template>
<script setup lang="ts">
import { useTheme } from "@/hooks";
import { IconMinus, IconClose } from "@arco-design/web-vue/es/icon";
import { reactive } from "vue";
import AuthorInfo from "./AuthorInfo.vue";
import useWindowMenu from "../../../hooks/useWindowMenu";

const { themeIcon, themeToggle } = useTheme();
const { close, minimize } = useWindowMenu();
const OPERATE_LIST = reactive([
  {
    icon: themeIcon,
    onClick: themeToggle,
  },
  {
    icon: IconMinus,
    onClick: minimize,
  },
  {
    icon: IconClose,
    onClick: close,
  },
]);
</script>
<style lang="scss" scoped>
.header-operate {
  display: flex;
  align-items: center;
  gap: 10px;
  .header-operate-item {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 28px;
    height: 28px;
    border-radius: 50%;
    border: 1px solid rgb(var(--gray-2));
    color: rgb(var(--gray-8));
    cursor: pointer;
  }
}
</style>
