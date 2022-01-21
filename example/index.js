const fs = require("fs")
const path = require("path")
const icns2ico = require("../dist/index")
const icns = path.resolve(__dirname, "assets/QQ.icns")
const icoName = path.parse(icns)["name"]

icns2ico(icns).map(({ size, png }) => {
    if (png) {
        const name = `${icoName}_${size}.ico`
        fs.writeFileSync(`./${name}`, png)
    }
})




// pngs.map(cur => {
//     fs.writeFileSync(`./${new Date().getTime()}.ico`,cur)
// })


