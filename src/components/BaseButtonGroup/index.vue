<template>
  <div class="base-button-group">
    <a-button v-for="(item, index) in data" :key="index" v-bind="{ ...item }">
      {{ item.text }}
    </a-button>
  </div>
</template>
<script setup lang="ts">
interface PropsType {
  data: any[];
}
defineProps<PropsType>();
</script>
<style lang="scss" scoped>
.base-button-group {
  display: flex;
  grid-gap: 10px;
}
</style>
