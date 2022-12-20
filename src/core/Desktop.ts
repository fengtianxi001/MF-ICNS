import { Message } from "@arco-design/web-vue";
import notification from "@/core/Notification";
const { remote, shell } = require("electron");
const path = require("path");
const fs = require("fs");

class Desktop {
  static openExternal(path: string) {
    shell.openExternal(path);
  }
  static showItemInFolder(path: string) {
    shell.showItemInFolder(path);
  }
  static directoryPickerDialog() {
    return remote.dialog.showOpenDialogSync({
      properties: ["openDirectory"],
      message: "请选择保存路径",
    });
  }
  static async saveFiles(data: { name: string; buffer: any }[]) {
    //文件校验
    const flag = data.every((item) => Boolean(item.name));
    if (!flag) {
      Message.error("文件名称不能为空!");
      return false;
    }
    //选择保存路径
    const directorys = await Desktop.directoryPickerDialog();
    if (!directorys) return false;
    const savePath = directorys[0];
    data.forEach((item) => {
      const filePath = path.join(savePath, item.name);
      fs.writeFileSync(filePath, item.buffer);
    });
    notification(`文件保存成功!`, "点击在文件夹中查看").then(
      (res) =>
        res && Desktop.showItemInFolder(path.join(savePath, data[0]?.name))
    );
    return true;
  }
}
export default Desktop;
