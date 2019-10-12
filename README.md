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
//..
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

| API                               | Description          | Return      |
| --------------------------------- | -------------------- | ----------- |
| getItem (key:string)              | 获取值               | {key:value} |
| setItem (key:string,value:string) | 设置值               | {key:value} |
| removeItem (key:string)           | 移除指定值           | {key:value} |
| getItems ()                       | 获取当前存储中所有值 | {LSS:items} |
| clear ()                          | 清空内存             | {LSS:items} |
| init (serve:string)                          | 内存服务器的部署路径             | {LSS:items} |

## 关于安全
localStorageShare 默认没有域名限制，如果处于安全性考虑可以在`iframe`中定义一个白名单，并把它重新部署。
```JavaScript

```

## License
MIT © [browniu](https://github.com/browniu)
