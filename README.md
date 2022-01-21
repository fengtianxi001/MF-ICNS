# 🚀 ICNS2ICO!

<div>
  <img src="https://img.shields.io/github/languages/top/fengtianxi001/NPM-ICNS2ICO">
  <img src="https://travis-ci.org/boennemann/badges.svg?branch=master">
  <img src="https://img.shields.io/github/issues/fengtianxi001/NPM-ICNS2ICO">
  <img src="https://img.shields.io/github/forks/fengtianxi001/NPM-ICNS2ICO">
  <img src="https://img.shields.io/github/stars/fengtianxi001/NPM-ICNS2ICO">
</div>

## 1. Installation

```shell
npm install icns2ico
```

## 2. Usage

```javascript
const icns2ico = require("icns2ico")
const fs = require("fs")
const path = require("path")
const icns = path.resolve(__dirname, "assets/QQ.icns") //your resource
const icoName = path.parse(icns)["name"]

icns2ico(icns).map(({ size, png }) => {
    if (png) {
        const name = `${icoName}_${size}.ico`
        fs.writeFileSync(`./${name}`, png)
    }
})
```
