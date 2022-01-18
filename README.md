# 🚀 ICNS2ICO!

<div>
  <img src="https://img.shields.io/badge/language-javascript-4bc51d.svg">
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
const fs = require("fs")
const icns2ico = require('icns2ico');

const target = '/Users/mac/Desktop/code/icns2icon/test.icns';
icns2ico.toico(target).then(res => {
    fs.writeFileSync("/Users/mac/Desktop/code/icns2icon/test.ico", res["icon_128x128"])
})
```

