<template>
  <div class="base-card">
    <div class="base-card-header">
      <span class="base-card-header-title">{{ title }}</span>
      <div class="base-card-header-operate">
        <slot name="operate"></slot>
      </div>
    </div>
    <div class="base-card-body">
      <slot></slot>
    </div>
  </div>
</template>
<script setup lang="ts">
interface PropsType {
  title?: string;
}
defineProps<PropsType>();
</script>
<style lang="scss" scoped>
.base-card {
  width: 100%;
  min-height: 100%;
  background: var(--color-bg-2);
  border-radius: 4px;
  .base-card-header {
    display: flex;
    justify-content: space-between;
    padding: 15px;
    transition: all 0.1s linear;
    .base-card-header-title {
      position: relative;
      display: flex;
      align-items: center;
      font-weight: bolder;
      font-size: 16px;
      color: var(--color-text-1);
      padding-left: 10px;
      &::before {
        position: absolute;
        left: 0;
        content: "";
        width: 4px;
        height: 18px;
        background-color: rgb(var(--primary-6));
        border-radius: 10px;
      }
    }
    .base-card-header-operate {
      display: flex;
      gap: 10px;
      align-items: center;
    }
  }
  .base-card-body {
    padding: 0px 20px 10px;
    display: grid;
    grid-gap: 15px;
  }
}
</style>
