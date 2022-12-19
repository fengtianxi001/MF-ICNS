<template>
  <div class="base-button-group">
    <BaseButton
      v-for="(item, index) in configs"
      :key="index"
      :size="size"
      v-bind="{ ...item }"
    />
  </div>
</template>
<script setup lang="ts">
import BaseButton from "@/components/BaseButton/index.vue";
interface PropsType {
  configs: any[];
  size: "mini" | "small" | "medium" | "large";
}
withDefaults(defineProps<PropsType>(), {
  size: "medium",
});
</script>
<style lang="scss" scoped>
.base-button-group {
  display: flex;
  gap: 10px;
}
</style>
