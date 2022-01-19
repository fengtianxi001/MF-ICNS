interface imagesProp {}

class Iconutil {
	images: Buffer[]
	constructor(buffer: Buffer) {
		const header = this.fetchHeader(buffer)
		let pointer = header.data.length
		const images = []
		while (pointer < header.bytes) {
			const { image, data } = this.fetchImages(buffer.slice(pointer))
			console.log(image)
			
			Buffer.isBuffer(image) && images.push(image)
			pointer += data.length
		}
		this.images = images
	}
	fetchHeader(buffer: Buffer) {
		const id = buffer.toString('ascii', 0, 4)
		const bytes = buffer.readUInt32BE(4)
		const data = Buffer.alloc(8)
		data.write(id, 0, 4, 'ascii')
		data.writeUInt32BE(bytes, 4)
		return {
			bytes,
			data,
		}
	}
	fetchImages(buffer: Buffer) {
		const osType = buffer.toString('ascii', 0, 4)
		const bytes = buffer.readUInt32BE(4)
		const image = buffer.slice(8, bytes)
		const _buffer = Buffer.alloc(8)
		_buffer.write(osType, 0, 4, 'ascii')
		_buffer.writeUInt32BE(bytes, 4)
		const data = Buffer.concat([_buffer, image])
		return {
			data,
			image,
		}
	}
}

module.exports = Iconutil
