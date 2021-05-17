iconutil
===

Installation
===

**Requires OSX and Xcode.**

```bash
npm install icns2ico
```

Usage
===

```js
const icns2ico = require('./index');
const fs = require("fs")
var path = '/Users/mac/Desktop/code/icns2icon/test.icns';
icns2ico.toico(path).then(res => {
    console.log(res["icon_128x128"])
    fs.writeFileSync("/Users/mac/Desktop/code/icns2icon/test.ico", res["icon_128x128"])
})
```

