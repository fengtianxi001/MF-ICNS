import { Message } from "@arco-design/web-vue";

function notofication(title: string, message: string) {
  return new Promise((resolve) => {
    Notification.requestPermission()
      .then((permission) => {
        console.log("permission", permission);
        if (permission !== "granted") return resolve(false);
        new Notification(title, {
          body: message,
        }).onclick = () => resolve(true);
        return void 0;
      })
      .catch(() => Message.info(message));
  });
}

export default notofication;
