import { size } from "lodash";
import { Message } from "@arco-design/web-vue";
import { ref } from "vue";
import { filePicker, uuid } from "@/utils/common";
import Convert from "@/core/Convert";
import Format from "@/core/Format";
import Desktop from "@/core/Desktop";
const path = require("path");

export interface imageType {
  id: string;
  name: string;
  thumb: string;
  fileSize: string;
  lastModifiedDate: string;
  buffer: any;
  bufferOptions: any[];
}

function usePngList() {
  const images = ref<imageType[]>([]);
  const imageSelected = ref<string[]>([]);
  const onAddImages = async () => {
    const files = await filePicker(".icns");
    const result = files.map((file: any) => {
      const bufferList = Convert.IcnsToPngByUrl(file.path);
      return {
        id: uuid(),
        name: path.basename(file.path, ".icns"),
        thumb: bufferList[0]?.thumb ?? "",
        fileSize: Format.FormatFileSize(file.size),
        lastModifiedDate: Format.FomatDate(file.lastModifiedDate),
        buffer: bufferList[0].buffer,
        bufferOptions: bufferList.map((item) => {
          return {
            label: item.size,
            value: item.buffer,
          };
        }),
      };
    });
    images.value.push(...result);
    Message.success(`成功转化${size(result)} 张图标`);
  };
  const onRemoveImages = (ids: string[]) => {
    images.value = images.value.filter((image) => !ids.includes(image.id));
  };
  const onSaveImages = async (ids: string[]) => {
    const cache = images.value
      .filter((image) => ids.includes(image.id))
      .map((item) => ({
        name: item.name + ".icns",
        buffer: item.buffer,
      }));
    Desktop.saveFiles(cache);
  };
  return {
    images,
    imageSelected,
    onAddImages,
    onRemoveImages,
    onSaveImages,
  };
}

export default usePngList;
