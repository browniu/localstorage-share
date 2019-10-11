# localStorage Share
> browser storage share 浏览器本地存储共享方案

[![NPM](https://img.shields.io/npm/v/localstorage-share.svg)](https://www.npmjs.com/package/react-autocomplete) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

### Using NPM

```bash
npm install --save localstorage-share
```
```JavaScript
import localstorageShare from 'localstorage-share';
```

### Using a CDN

If you don't want to use npm to manage client packages, localstorageShare also provides a UMD distribution in a `dist` folder which is hosted on a CDN or [Download](https://github.com/browniu/localstorage-share/blob/master/dist/index.js):

```html
<script src="https://unpkg.com/localstorage-share/dist/index.js"></script>
```

localstorageShare will then be installed on `window.localstorageShare`. `window.localstorageShare` will contain the following properties:

```js
localstorageShare.setItem(key,value)
localstorageShare.getItem(key)
```

## Usage

### A站
```JavaScript
// pageA.index.js
import lss from 'localstorage-share';

lss.getItem('origin')
```

### B站
```JavaScript
// pageB.index.js
import lss from 'localstorage-share';

lss.getItem('origin')
lss.setItem('origin','From PageB')
```

### C站
```html
<-!pageC.index.html->
<script src="https://unpkg.com/localstorage-share/dist/index.js"></script>

<script>
    localstorageShare.getItem('origin')
    localstorageShare.setItem('origin','From PageC')
</script>

```

## API

### GET
`localstorageShare.getItem（key:string）` 类比 `localStorage.getItem`, 但获取的是本地共享存储中的数据

### SET
`localstorageShare.setItem（key:string,value:string）`类比`localStorage.setItem` ,但将数据保存到到本地共享存储中

### REMOVE
`localstorageShare.removeItem（key:string）` 清除本地共享储存中的指定数据

### INIT
`localstorageShare.init(serve:string)` 将[iframe](https://github.com/browniu/localstorage-share/blob/master/iframe/index.html) 部署到指定的服务器（如`www.example.com`），
通过 `localstorageShare.init('www.example.com')`使用更加安全的个人共享服务(实际上并没有数据安全问题，因为所以数据都保存在你本地的浏览器缓存中，没有任何上传服务器的操作)

```JavaScript
import localstorageShare from 'localstorage-share';

localstorageShare.init( 'www.example.com')
localstorageShare.setItem('origin','from self serve')
```

## License
MIT © [browniu](https://github.com/browniu)
