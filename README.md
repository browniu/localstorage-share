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

If you don't want to use npm to manage client packages, localstorageShare also provides a UMD distribution in a `dist` folder which is hosted on a CDN:

```html
<script src="https://unpkg.com/localstorage-share/dist/index.js"></script>
```

localstorageShare will then be installed on `window.localstorageShare`. `window.localstorageShare` will contain the following properties:

```js
localstorageShare.setItem(key,value)
localstorageShare.getItem(key)
```

## Usage

### www.a.com
```JavaScript
// pageA.index.js
import localstorageShare from 'localstorage-share';

localstorageShare.getItem('origin')
```

### www.b.com
```JavaScript
// pageB.index.js
import localstorageShare from 'localstorage-share';

localstorageShare.getItem('origin')
localstorageShare.setItem('origin','I from PageB')
```

### www.c.com
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
类比 `localStorage.getItem`, 但获取的是本地共享存储中的数据

### `localstorageShare.setItem（key:string,value:string）`
类比`localStorage.setItem` ,但将数据保存到到本地共享存储中

### `localstorageShare.init(serve:string)`

将[iframe](https://github.com/browniu/localstorage-share/blob/master/iframe/index.html) 部署到指定的服务器（如`www.example.com`），
通过 `localstorageShare.init('www.example.com')`使用更加安全的个人共享服务

```JavaScript
import localstorageShare from 'localstorage-share';

localstorageShare.init( 'www.example.com')
localstorageShare.setItem('origin','from self serve')
```

## License
MIT © [browniu](https://github.com/browniu)
