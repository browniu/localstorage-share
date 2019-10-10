class localstorageShare {
    init() {
        const iframe = document.createElement('iframe');
        iframe.src = 'http://10.11.165.86:61140/';
        iframe.style.display = 'none';
        document.body.appendChild(iframe);

        this.connection = Penpal.connectToChild({
            iframe, methods: {
                get: (key, value) => {
                    console.log(key, value)
                }
            }
        })
    }

    getItem(key) {
        this.connection.promise.then(child => {
            child.get(key)
        })
    }

    setItem(key, value) {
        this.connection.promise.then(child => {
            child.set(key, value)
        })
    }

    clear() {
        this.connection.promise.then(child => {
            child.clear()
        })
    }
}
