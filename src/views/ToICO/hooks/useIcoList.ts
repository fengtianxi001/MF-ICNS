import { size } from "lodash";
import { Message } from "@arco-design/web-vue";
import { ref } from "vue";
import { filePicker, uuid } from "@/utils/common";
import Convert from "@/core/Convert";
import Format from "@/core/Format";
const path = require("path");
const fs = require("fs");
const png2icons = require("png2icons");
const { remote } = require("electron");

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
        name: item.name,
        buffer: item.buffer,
      }));
    const flag = cache.every((item) => Boolean(item.name));
    if (!flag) return Message.error("图标名称不能为空!");
    const result = await remote.dialog.showOpenDialogSync({
      properties: ["openDirectory"],
      message: "请选择保存路径",
    });
    if (!result) return void 0;
    const savePath = result[0];
    cache.forEach((item) => {
      const icon = png2icons.createICO(item.buffer, png2icons.BILINEAR, 0);
      const filePath = path.join(savePath, `${item.name}.ico`);
      fs.writeFileSync(filePath, icon);
    });
    Notification.requestPermission()
      .then((permission) => {
        if (permission !== "granted") return void 0;
        new Notification(`成功保存${size(cache)}张图标`, {
          body: "点击在文件夹中查看",
        }).onclick = () => {
          remote.shell.showItemInFolder(savePath);
        };
        return void 0;
      })
      .catch(() => {
        Message.success(`成功保存${size(cache)}张图标`);
      });
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
