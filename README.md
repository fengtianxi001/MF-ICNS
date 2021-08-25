# 🚀 ICNS2ICO!

<div>
  <img src="https://img.shields.io/badge/language-javascript-4bc51d.svg">
  <img src="https://travis-ci.org/boennemann/badges.svg?branch=master">
  <img src="https://img.shields.io/github/issues/fengtianxi001/ICNS2ICO">
  <img src="https://img.shields.io/github/forks/fengtianxi001/ICNS2ICO">
  <img src="https://img.shields.io/github/stars/fengtianxi001/ICNS2ICO">
</div>

## 开发背景

- `windows`的图标太丑啦! 图标的风格各异
- 本人一直在美化`windows`图标的路上,苦苦摸索.
- 之前的解决方案是,下载手机的图标包,然后提取图标资源,最后将png转成ico.
- 后来发现了[mac'icon](https://macosicons.com/) 这个网站.可以下载macos的软件图标
- 但是图标的格式又都是icns, 一直没找到icns转ico的软件和脚本,于是乎自己拼拼凑凑写了一个node脚本


## 运行环境
    这个node 脚本仅支持在`macos`系统下运行`windows 没办法解析icns :( `

## 安装

```bash
npm install icns2ico
```

## 程序用例:

```js
const icns2ico = require('icns2ico');
const fs = require("fs")
var path = '/Users/mac/Desktop/code/icns2icon/test.icns';
icns2ico.toico(path).then(res => {
    console.log(res["icon_128x128"])
    fs.writeFileSync("/Users/mac/Desktop/code/icns2icon/test.ico", res["icon_128x128"])
})
```

