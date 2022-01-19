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
const { writeFileSync } = require('fs')
const { resolve } = require('path')
const icns2ico = require('icns2ico')

const icnsPath = resolve(__dirname, 'assets/test.icns')

const pngBuffers = icns2ico(icnsPath)
pngBuffers.map(png => writeFileSync(`./${new Date().getTime()}.ico`, png))
```
