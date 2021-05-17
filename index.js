const iconutil = require('./iconutil');
const png2icons = require("png2icons")
module.exports.toico = async (path) => {
    const pngList = await iconutil.toIconset(path)
    const arr = {}
    Object.keys(pngList).forEach(item => {
        const key = item.split(".")[0].toString()
        const output = png2icons.createICO(pngList[item], png2icons.BILINEAR, 0)
        arr[key] = output
    })
    return arr 
}