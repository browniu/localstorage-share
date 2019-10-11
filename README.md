# localStorage Share
> 浏览器本地存储共享方案

[![NPM](https://img.shields.io/npm/v/localstorage-share.svg)](https://www.npmjs.com/package/react-autocomplete) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)



## Install

### Using NPM

```bash
npm install --save localstorage-share
```

### Using a CDN

If you don't want to use npm to manage client packages, localstorageShare also provides a UMD distribution in a `dist` folder which is hosted on a CDN:

`<script src="https://unpkg.com/localstorage-share/dist/index.js"></script>`

localstorageShare will then be installed on `window.localstorageShare`. `window.localstorageShare` will contain the following properties:

```js
localstorageShare.init()
localstorageShare.setItem(key,value)
localstorageShare.getItem(key)
```

## Usage

### Page A
```JavaScript
import localstorageShare from 'localstorage-share';

localstorageShare.init()
localstorageShare.getItem('origin')
```

### Page B
```JavaScript
import localstorageShare from 'localstorage-share';

localstorageShare.init()
localstorageShare.getItem('origin')
localstorageShare.setItem('origin','我来自B站')
```

## API
### `localstorageShare.getItem（key:string）`
与 `localStorage.getItem` 功能类似，获取共享storage中的制定数据

### `localstorageShare.setItem（key:string,value:string）`
与 `localStorage.setItem` 功能类似，但是把存储数据到共享storage中

## License
MIT © [browniu](https://github.com/browniu)
