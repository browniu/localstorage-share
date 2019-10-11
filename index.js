/* eslint-disable */
const connectToChild = require('penpal/lib/connectToChild');

class localstorageShare {
    constructor() {
        this.serve = 'https://browniu.github.io/localstorage-share/'
    }

    init(serve) {
        const iframe = document.createElement('iframe');
        iframe.src = serve || this.serve;
        iframe.style.display = 'none';
        document.body.appendChild(iframe);

        this.connection = connectToChild({
            iframe, methods: {
                get: (key, value) => {
                    console.log(key, value)
                }
            }
        })
    }

    getItem(key) {
        if (!this.connection) this.init();
        this.connection.promise.then(child => {
            child.get(key)
        })
    }

    setItem(key, value) {
        if (!this.connection) this.init();
        this.connection.promise.then(child => {
            child.set(key, value)
        })
    }

    removeItem(key) {
        if (!this.connection) this.init();
        this.connection.promise.then(child => {
            child.set(key, '')
        })
    }

    clear() {
        if (!this.connection) this.init();
        this.connection.promise.then(child => {
            child.clear()
        })
    }
}

module.exports = new localstorageShare();



