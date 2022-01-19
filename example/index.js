const fs = require("fs")
const path = require("path")
const icns = path.resolve(__dirname, "assets/test.icns")
const icns2ico = require("../dist/index")

// icns2ico(icns)
const pngs = icns2ico(icns)
pngs.map(cur => {
    fs.writeFileSync(`./${new Date().getTime()}.ico`,cur)
})


