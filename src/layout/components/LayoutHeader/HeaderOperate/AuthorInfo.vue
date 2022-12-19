<template>
  <a-dropdown>
    <img class="author-avatar" alt="avatar" :src="avatar" />
    <template #content>
      <a-doption>
        <div class="author-profile">
          <img class="author-avatar" alt="avatar" :src="avatar" />
          <div class="author-profile-info">
            <em class="name">肛肠科冯主任</em>
            <em class="desc">625362207@qq.com</em>
          </div>
        </div>
      </a-doption>
      <a-doption>
        <template #icon>
          <IconUser />
        </template>
        <template #default>查看项目仓库</template>
      </a-doption>
    </template>
  </a-dropdown>
</template>
<script setup lang="ts">
import avatar from "@/assets/images/avatar.jpeg";
import { IconUser } from "@arco-design/web-vue/es/icon";
</script>
<style lang="scss" scoped>
.author-avatar {
  width: 28px;
  height: 28px;
  border-radius: 50%;
  border: 1px solid rgb(var(--gray-2));
}
.author-profile {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px 0;
  border-bottom: 1px solid var(--color-neutral-3);
  .author-profile-info {
    display: grid;
    grid-gap: 6px;
    .name {
      font-size: 14px;
      line-height: 14px;
      font-weight: bold;
    }
    .desc {
      font-size: 12px;
      line-height: 12px;
      color: #999;
    }
  }
}
</style>
