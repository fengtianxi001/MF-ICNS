import { Modal, type ModalConfig } from "@arco-design/web-vue";

export function confirm(config: ModalConfig) {
  const { title, titleAlign, content, okText, cancelText } = config;
  return new Promise((resolve) => {
    Modal.open({
      simple: true,
      title: title || "一条来自肛肠科冯主任的提醒:",
      titleAlign: titleAlign || "start",
      content: content || "你确定要这么做吗?",
      okText: okText || "确认",
      cancelText: cancelText || "取消",
      onOk: () => resolve(true),
      onCancel: () => resolve(false),
    });
  });
}

export function filePicker(accept: string) {
  return new Promise<File[]>((resolve) => {
    const input = document.createElement("input");
    input.type = "file";
    input.multiple = true;
    input.accept = accept;
    input.click();
    input.onchange = () => {
      const files = input.files as FileList;
      resolve(Array.from(files));
    };
  });
}

export function uuid() {
  const s = [];
  const hexDigits = "0123456789abcdef";
  for (let i = 0; i < 36; i++) {
    s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
  }
  s[14] = "4";
  //@ts-ignore
  s[19] = hexDigits.substr((s[19] & 0x3) | 0x8, 1);
  s[8] = s[13] = s[18] = s[23] = "-";

  const uuid = s.join("");
  return uuid;
}
