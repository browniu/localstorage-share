var whiteList = '*';

if (whiteList !== '*') {
    const origin = window.location.origin;
    if (!whiteList.indexOf(origin)) throw ('非合法域名')
}
