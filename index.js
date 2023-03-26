const http = require('http');
const url = require('url');
const label = require('./components/label/index');

http.createServer((req, res) => {
    const [pathString = '', queryString = ''] = req.url.split('?');
    const [componentName, size, theme] = pathString.split('/');
    const querys = queryString.split('&').reduce(
        (querys, query) => {
            const [key, value] = query.split('=');
            querys[key] = value;
            return querys;
        },
        { size, theme }
    );

    res.statusCode = 200;
    res.writeHead(200, { 'Content-Type': 'image/svg+xml; charset=utf-8' });
    res.end(label(querys));
}).listen(3000, '127.0.0.1', () => {
    console.log(`服务器运行在 http://${hostname}:${port}/`);
});
