connectToParent({
    methods: {
        get: (key) => get(key),
        set: (key, value) => set(key, value),
        clear: () => clear(),
        getAll: () => getAll()
    }
});

function get(key) {
    const SSC = JSON.parse(localStorage.getItem('storageShareCenter')) || {};
    const value = SSC[key];
    return {
        [key]: value
    };
}

function set(key, value) {
    const SSC = JSON.parse(localStorage.getItem('storageShareCenter')) || {};
    SSC[key] = value;
    localStorage.setItem('storageShareCenter', JSON.stringify(SSC));
    return {
        [key]: value
    }
}

function clear() {
    const SSC = JSON.parse(localStorage.getItem('storageShareCenter')) || {};
    localStorage.setItem('storageShareCenter', '');
    return SSC
}

function getAll() {
    return JSON.parse(localStorage.getItem('storageShareCenter')) || {};
}

function testOrigin(origin) {
    if (whiteList !== '*') {
        if (!whiteList.indexOf(origin)) throw ('非合法域名')
    }
}