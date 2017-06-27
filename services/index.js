var hello = {
    getHello: function (req, res) {
        var body = '<html><body><h1>Hello Common Inventory using restify</h1></body></html>';
        res.writeHead(200, {
            'Content-Length': Buffer.byteLength(body),
            'Content-Type': 'text/html'
        });
        res.write(body);
        res.end();
    }
}
module.exports = hello;