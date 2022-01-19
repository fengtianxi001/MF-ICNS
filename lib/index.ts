const iconutil = require('./utils/iconutil')
const png2icons = require('png2icons')
const fs = require('fs')

function icns2ico(src: string) {
	const buffer = fs.readFileSync(src)
	const images = new iconutil(buffer).images as Buffer[]
	return images.map(image => png2icons.createICO(image, png2icons.BILINEAR, 0))
}

module.exports = icns2ico
