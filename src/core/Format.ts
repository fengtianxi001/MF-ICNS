import dayjs from "dayjs";

class Format {
  static FormatFileSize(byte: number): string {
    if (byte < 1024) {
      return byte + "B";
    } else if (byte < 1024 * 1024) {
      return (byte / 1024).toFixed(2) + "KB";
    } else if (byte < 1024 * 1024 * 1024) {
      return (byte / (1024 * 1024)).toFixed(2) + "MB";
    } else {
      return (byte / (1024 * 1024 * 1024)).toFixed(2) + "GB";
    }
  }
  static FomatDate(date: string, format: string = "YYYY-MM-DD HH:mm:ss") {
    return date ? dayjs(date).format(format) : "暂无数据";
  }
}
export default Format;
