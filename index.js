const connectToChild = require('penpal/lib/connectToChild');

class localstorageShare {
    constructor() {
        this.serve = 'https://browniu.github.io/localstorage-share/'
    }

    init() {
        const iframe = document.createElement('iframe');
        iframe.src = this.serve;
        iframe.style.display = 'none';
        document.body.appendChild(iframe);
        this.connection = connectToChild({iframe})
    }

    getItem(key, callback) {
        this.getCallback = callback;
        if (!this.connection) this.init();
        return this.connection.promise.then(child => child.get(key));
    }

    setItem(key, value) {
        if (!this.connection) this.init();
        return this.connection.promise.then(child => child.set(key, value))
    }

    removeItem(key) {
        if (!this.connection) this.init();
        return this.connection.promise.then(child => child.set(key, ''))
    }

    clear() {
        if (!this.connection) this.init();
        return this.connection.promise.then(child => child.clear())
    }

    getItems() {
        if (!this.connection) this.init();
        return this.connection.promise.then(child => child.getAll())
    }
}

module.exports = new localstorageShare();



