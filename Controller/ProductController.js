var express = require('express');
var router = express.Router();

var routes = function () {
    router.route('/test').
        get(function (request, response) {
            response.json({ "Message": "We have created our first function" });
        });

    return router;
}

module.exports = routes;