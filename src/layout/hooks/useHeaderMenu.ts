const { remote } = require("electron");
console.log("remote", remote);
function useHeaderMenu() {
  const minimize = () => {
    const currentWindow = remote.getCurrentWindow();
    currentWindow.minimize();
  };
  const close = () => {
    remote.app.quit();
    // const currentWindow = remote.getCurrentWindow();
    // currentWindow.close();
  };
  return {
    minimize,
    close,
  };
}

export default useHeaderMenu;
