<template>
  <div class="header-brand">
    <img
      class="header-brand-logo"
      src="@/assets/images/favicon.png"
      alt="logo"
    />
    <span class="header-brand-name">MF-ICNS</span>
  </div>
</template>
<script setup lang="ts"></script>
<style lang="scss" scoped>
.header-brand {
  display: flex;
  gap: 6px;
  align-items: center;
  color: var(--color-text-1);
  .header-brand-logo {
    width: 28px;
    height: 28px;
  }
  .header-brand-name {
    font-size: 18px;
    font-weight: bolder;
  }
}
</style>
