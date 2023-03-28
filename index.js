const http = require('http');
const components = require('./components');

const HOSTNAME = '127.0.0.1';
const PORT = 3000;

http.createServer((req, res) => {
    const [pathString, queryString = ''] = req.url.split('?');
    const [componentName, ...sizeAndTheme] = pathString.split('/').slice(1);

    // 提取尺寸和主题
    let size = undefined;
    let theme = undefined;
    if (sizeAndTheme.length === 1) {
        if (isNaN(sizeAndTheme[0])) {
            theme = sizeAndTheme[0];
        } else {
            size = sizeAndTheme[0];
        }
    } else if (sizeAndTheme.length === 2) {
        if (isNaN(sizeAndTheme[0])) {
            theme = sizeAndTheme[0];
            size = sizeAndTheme[1];
        } else {
            size = sizeAndTheme[0];
            theme = sizeAndTheme[1];
        }
    }

    // 提取参数
    const querys = queryString.split('&').reduce((querys, query) => {
        const [key, value] = query.split('=');
        querys[key] = value;
        return querys;
    }, { size, theme });

    // 返回svg数据
    res.writeHead(200, { 'Content-Type': 'image/svg+xml; charset=utf-8' });
    res.end(components[componentName] ? components[componentName](querys) : components.default(querys));
}).listen(PORT, HOSTNAME, () => {
    console.log(`服务器运行在 http://${HOSTNAME}:${PORT}/`);
});
