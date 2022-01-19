"use strict";
var iconutil = require('./utils/iconutil');
var png2icons = require('png2icons');
var fs = require('fs');
function icns2ico(src) {
    var buffer = fs.readFileSync(src);
    var images = new iconutil(buffer).images;
    return images.map(function (image) { return png2icons.createICO(image, png2icons.BILINEAR, 0); });
}
module.exports = icns2ico;
