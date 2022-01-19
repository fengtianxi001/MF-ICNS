function iconutil(buffer) {
	const fileHeader = fetchHeader(buffer)
	let position = fileHeader.data.length
	const images = []
	while (position < fileHeader.bytes) {
		const { image, data } = fetchImage(buffer.slice(position))
		images.push(image)
		position += data.length
	}
	return images
}

function fetchHeader(buffer) {
	const id = buffer.toString("ascii", 0, 4)
	const bytes = buffer.readUInt32BE(4)
	const data = Buffer.alloc(8)
	data.write(id, 0, 4, "ascii")
	data.writeUInt32BE(bytes, 4)
	console.log(data);
	return {
		bytes,
		data,
	}
}

function fetchImage(buffer) {
	const osType = buffer.toString("ascii", 0, 4)
	const bytes = buffer.readUInt32BE(4)
	const image = buffer.slice(8, bytes)

	const _buffer = Buffer.alloc(8)
	_buffer.write(osType, 0, 4, "ascii")
	_buffer.writeUInt32BE(bytes, 4)
	const data = Buffer.concat([_buffer, image])
	return {
		data,
		image
	}
}

module.exports = iconutil