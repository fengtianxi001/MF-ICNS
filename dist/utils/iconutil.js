"use strict";
// https://github.com/fiahfy/icns/blob/master/src/icns-image.ts
// https://blog.csdn.net/LIHUINIHAO/article/details/51217107
var OSTYPE = require('./OSType');
var Iconutil = /** @class */ (function () {
    function Iconutil(buffer) {
        var header = this.fetchHeader(buffer);
        var pointer = header.data.length;
        var images = [];
        while (pointer < header.bytes) {
            var _a = this.fetchImages(buffer.slice(pointer)), image = _a.image, data = _a.data, osType_1 = _a.osType;
            // console.log(image)
            Buffer.isBuffer(image) &&
                images.push({
                    size: OSTYPE[osType_1],
                    image: image,
                });
            pointer += data.length;
        }
        this.images = images;
    }
    Iconutil.prototype.fetchHeader = function (buffer) {
        var id = buffer.toString('ascii', 0, 4);
        var bytes = buffer.readUInt32BE(4);
        var data = Buffer.alloc(8);
        data.write(id, 0, 4, 'ascii');
        data.writeUInt32BE(bytes, 4);
        return {
            bytes: bytes,
            data: data,
        };
    };
    Iconutil.prototype.fetchImages = function (buffer) {
        var osType = buffer.toString('ascii', 0, 4);
        var bytes = buffer.readUInt32BE(4);
        var image = buffer.slice(8, bytes);
        var _buffer = Buffer.alloc(8);
        _buffer.write(osType, 0, 4, 'ascii');
        _buffer.writeUInt32BE(bytes, 4);
        var data = Buffer.concat([_buffer, image]);
        return {
            data: data,
            image: image,
            osType: osType,
        };
    };
    return Iconutil;
}());
module.exports = Iconutil;
