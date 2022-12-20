<template>
  <BaseCard title="ICNS转PNG">
    <template #operate>
      <BaseButtonGroup :data="tableOperate" />
    </template>
    <template #default>
      <a-table
        v-model:selected-keys="imageSelected"
        v-bind="{ ...tableConfig }"
        :columns="tableColumns"
        :data="images"
      >
        <template #name="{ record }">
          <a-input v-model="record.name" allow-clear />
        </template>
        <template #dpi="{ record }">
          <a-select v-model="record.buffer" :options="record.bufferOptions" />
        </template>
      </a-table>
    </template>
  </BaseCard>
</template>
<script setup lang="tsx">
import { size } from "@/utils/lodash";
import { computed } from "vue";
import usePngList from "@/views/ToPNG/hooks/usePngList";
import BaseCard from "@/components/BaseCard/index.vue";
import BaseButtonGroup from "@/components/BaseButtonGroup/index.vue";

const { images, imageSelected, onAddImages, onRemoveImages, onSaveImages } =
  usePngList();

const tableConfig: any = {
  rowKey: "id",
  bordered: false,
  pagination: false,
  rowSelection: {
    type: "checkbox",
    showCheckedAll: true,
    onlyCurrent: false,
  },
};
const tableColumns: any = [
  {
    width: 30,
    render: ({ record }: any) => (
      <a-image width="30" src={record.thumb} preview={false} />
    ),
  },
  {
    title: "图标名称",
    width: 370,
    slotName: "name",
    dataIndex: "name",
  },
  {
    title: "图标分辨率",
    slotName: "dpi",
    dataIndex: "dpi",
  },
  {
    title: "操作",
    width: 120,
    align: "center",
    render: ({ record }: any) => {
      return (
        <a-space wrap>
          <a-link onClick={() => onSaveImages([record.id])}>保存</a-link>
          <a-link status="danger" onClick={() => onRemoveImages([record.id])}>
            删除
          </a-link>
        </a-space>
      );
    },
  },
];
const tableOperate = computed<any>(() => {
  return [
    {
      type: "primary",
      size: "small",
      text: "导入ICNS图标",
      onClick: onAddImages,
    },
    {
      type: "primary",
      size: "small",
      text: "保存选中项",
      disabled: size(imageSelected) <= 0,
      onClick: () => onSaveImages([...imageSelected.value]),
    },
    {
      type: "primary",
      size: "small",
      status: "danger",
      text: "删除选中项",
      disabled: size(imageSelected) <= 0,
      onClick: () => {
        onRemoveImages([...imageSelected.value]);
        imageSelected.value = [];
      },
    },
  ];
});
</script>
