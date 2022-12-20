import { size } from "lodash";
import { app, BrowserWindow } from "electron";
import path from "path";

const createWindow = () => {
  const win = new BrowserWindow({
    title: "MF-ICNS",
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

  if (app.isPackaged) {
    win.loadFile(path.join(__dirname, "../index.html"));
  } else {
    win.webContents.openDevTools();
    win.loadURL(process.env.VITE_DEV_SERVER_URL as string);
  }
};

app.whenReady().then(() => {
  createWindow();
  app.on("activate", () => {
    const windows = BrowserWindow.getAllWindows();
    size(windows) === 0 && createWindow();
  });
});

app.on("window-all-closed", () => {
  process.platform !== "darwin" && app.quit();
});
