const http = require('http');
const components = require('./components');

const HOSTNAME = '127.0.0.1';
const PORT = 3000;

http.createServer((req, res) => {
    
    const [pathString, queryString = ''] = req.url.split('?');

    // 提取路径中参数。一级为组件名，耳机为主题和大小，以‘-’隔开（theme-size）：/label/theme1-200?... 
    const [componentName, themeAndSize] = pathString.split('/').slice(1);

    // 提取尺寸和主题
    const [theme, size] = themeAndSize.split('-');

    // 提取参数
    const querys = queryString.split('&').reduce((querys, query) => {
        if (query == '') return querys;
        const [key, value] = query.split('=');
        querys[key] = value;
        return querys;
    }, { theme, size : size > 0 ? size : undefined });

    // 返回svg数据
    res.writeHead(200, { 'Content-Type': 'image/svg+xml; charset=utf-8' });
    res.end(components[componentName] ? components[componentName](querys) : components.default(querys));

}).listen(PORT, HOSTNAME, () => {

    console.log(`服务器运行在 http://${HOSTNAME}:${PORT}/`);

});
