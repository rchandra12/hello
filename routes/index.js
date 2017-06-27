module.exports = function (route) {
    var index = require('../services/index');
    route.get('/hello', function (req, res) {
        index.getHello(req, res);
    });
}