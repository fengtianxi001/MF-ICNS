"use strict";
var Iconutil = /** @class */ (function () {
    function Iconutil(buffer) {
        var header = this.fetchHeader(buffer);
        var pointer = header.data.length;
        var images = [];
        while (pointer < header.bytes) {
            var _a = this.fetchImages(buffer.slice(pointer)), image = _a.image, data = _a.data;
            console.log(image);
            Buffer.isBuffer(image) && images.push(image);
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
        };
    };
    return Iconutil;
}());
module.exports = Iconutil;
