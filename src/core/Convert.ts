const fs = require("fs");
const png2icons = require("png2icons");

class Convert {
  static IcnsToPngByUrl(url: string) {
    const icns = fs.readFileSync(url);
    let buffer = icns.slice(8);
    const result = [];
    while (buffer.length > 0) {
      const size = buffer.readUInt32BE(4);
      const image = buffer.slice(8, size);
      buffer = buffer.slice(size);
      const imageHeader = image.slice(0, 8).toString("hex");
      if (imageHeader === "89504e470d0a1a0a") result.push(image);
    }
    const cache: any = [];
    const res = [];
    result
      .sort((a, b) => a.length - b.length)
      .forEach((item) => {
        const base64 = Convert.ArrayBufferToBase64(item);
        const size = `${item.readUInt32BE(16)} x ${item.readUInt32BE(20)}`;
        if (!cache.includes(size)) {
          cache.push(size);
          res.push({
            size,
            buffer: item,
            thumb: `data:image/png;base64,${base64}`,
          });
        }
      });
    return res;
  }
  static ArrayBufferToBase64(buffer: ArrayBuffer) {
    let binary = "";
    const bytes = new Uint8Array(buffer);
    for (let len = bytes.byteLength, i = 0; i < len; i++) {
      binary += String.fromCharCode(bytes[i]);
    }
    return window.btoa(binary);
  }
  static Base64ToBlob(code: string) {
    const parts = code.split(";base64,");
    const contentType = parts[0].split(":")[1];
    const raw = window.atob(parts[1]);
    const rawLength = raw.length;
    const uInt8Array = new Uint8Array(rawLength);
    for (let i = 0; i < rawLength; ++i) {
      uInt8Array[i] = raw.charCodeAt(i);
    }
    return new Blob([uInt8Array], {
      type: contentType,
    });
  }
  static PngToIco(buffer: any) {
    return png2icons.createICO(buffer, png2icons.BILINEAR, 0);
  }
}
export default Convert;
