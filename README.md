# localStorage Share
> browser storage share 浏览器本地存储共享方案

[![NPM](https://img.shields.io/npm/v/localstorage-share.svg)](https://www.npmjs.com/package/react-autocomplete) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)



## Install

### Using NPM

```bash
npm install --save localstorage-share
```

### Using a CDN

If you don't want to use npm to manage client packages, localstorageShare also provides a UMD distribution in a `dist` folder which is hosted on a CDN:

```html
<script src="https://unpkg.com/localstorage-share/dist/index.js"></script>
```

localstorageShare will then be installed on `window.localstorageShare`. `window.localstorageShare` will contain the following properties:

```js
localstorageShare.init()
localstorageShare.setItem(key,value)
localstorageShare.getItem(key)
```

## Usage

### Page A
```JavaScript
// pageA.index.js
import localstorageShare from 'localstorage-share';

localstorageShare.init()
localstorageShare.getItem('origin')
```

### Page B
```JavaScript
// pageB.index.js
import localstorageShare from 'localstorage-share';

localstorageShare.init()
localstorageShare.getItem('origin')
localstorageShare.setItem('origin','I from PageB')
```

### Page C
```html
<-!pageC.index.html->
<script src="https://unpkg.com/localstorage-share/dist/index.js"></script>

<script>
    localstorageShare.getItem('origin')
    localstorageShare.setItem('origin','I from PageC')
</script>

```

## API
### `localstorageShare.getItem（key:string）`
same `localStorage.getItem`,get data from public storage

### `localstorageShare.setItem（key:string,value:string）`
same `localStorage.setItem` ,but storage the data in shared storage

## License
MIT © [browniu](https://github.com/browniu)
