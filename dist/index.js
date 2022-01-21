"use strict";
var iconutil = require('./utils/iconutil');
var png2icons = require('png2icons');
var fs = require('fs');
function icns2ico(src) {
    var buffer = fs.readFileSync(src);
    var images = new iconutil(buffer).images;
    // console.log(images)
    return images.map(function (_a) {
        var size = _a.size, image = _a.image;
        return {
            size: size,
            png: png2icons.createICO(image, png2icons.BILINEAR, 0),
        };
    });
}
module.exports = icns2ico;
