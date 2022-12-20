import { Modal } from "@arco-design/web-vue";
const { remote } = require("electron");

function useWindowMenu() {
  const minimize = () => {
    const currentWindow = remote.getCurrentWindow();
    currentWindow.minimize();
  };
  const close = () => {
    Modal.confirm({
      width: 200,
      title: "确定要退出程序吗?",
      content: "退出程序后，将无法继续使用",
      okText: "确定",
      cancelText: "取消",
      onOk() {
        remote.app.quit();
      },
    });
  };
  return {
    minimize,
    close,
  };
}

export default useWindowMenu;
