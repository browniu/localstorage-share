# localStorage Share
> 浏览器本地存储共享
引入后可以调用一个本地公共存储空间，用于不同域的站点进行数据共享

[![NPM](https://img.shields.io/npm/v/localstorage-share.svg)](https://www.npmjs.com/package/react-autocomplete) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

### Using NPM

```bash
npm install localstorage-share
```
```JavaScript
import lss from 'localstorage-share';
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

lss.setItem('origin','From PageA')

(async () => {
    const value = await lss.getItem('origin');
    console.log('A站拿到的值', value)
})();

```

### B站
```JavaScript
// pageB.index.js
import lss from 'localstorage-share';

(async () => {
    const value = await lss.getItem('origin');
    console.log('B站拿到的值', value)
})();

lss.setItem('origin','From PageB')

```

### C站
```html
<-!pageC.index.html->
<script src="https://unpkg.com/localstorage-share/dist/index.js"></script>

<script>

    (async () => {
        const value = await localstorageShare.getItem('origin');
        console.log('A站拿到的值', value)
    })();
    
    localstorageShare.setItem('origin','From PageC')
</script>

```

## API

### GET
`localstorageShare.getItem（key:string）` 类似于 `localStorage.getItem`, 方法返回本地共享存储中的指定数据

### SET
`localstorageShare.setItem（key:string,value:string）` 类似于 `localStorage.setItem` ,方法将数据保存到到本地共享存储中，不返回值

### REMOVE
`localstorageShare.removeItem（key:string）` 清除本地共享储存中的指定数据

### INIT
`localstorageShare.init(serve:string)` 将 [iframe](https://github.com/browniu/localstorage-share/blob/master/iframe/index.html) 部署到指定的服务器（如`www.example.com`），
通过 `localstorageShare.init('www.example.com')`使用更加安全的个人共享服务(实际上并没有数据安全问题，因为所以数据都保存在你本地的浏览器缓存中，没有任何上传服务器的操作)

```JavaScript
import lss from 'localstorage-share';

lss.init( 'www.example.com')
lss.setItem('origin','from self serve')
```

## License
MIT © [browniu](https://github.com/browniu)
