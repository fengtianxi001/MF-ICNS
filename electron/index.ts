import { app, BrowserWindow } from "electron";
import path from "path";

const createWindow = () => {
  const win = new BrowserWindow({
    title: "示例工程",
    frame: false,
    resizable: false,
    width: 850,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
      //@ts-ignore
      enableRemoteModule: true,
    },
  });

  win.webContents.openDevTools();
  if (app.isPackaged) {
    win.loadFile(path.join(__dirname, "../index.html"));
  } else {
    win.loadURL(process.env.VITE_DEV_SERVER_URL as string);
  }
};

app.whenReady().then(() => {
  createWindow();
  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});
