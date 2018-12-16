var express = require('express');
var app = express();
var port = process.env.port || 1337;
var bodyParser = require('body-parser')

app.use(bodyParser.json());

var productController = require('./Controller/ProductController')();
var testList = [];

app.use("/api/product", productController);

app.get("/api/res", function (request, response) {
    response.json(testList);
    console.log("testing github");
});

app.post('/api/resources', function (req, res) {
    var item = req.body;

    if (!item.id) {
        return res.sendStatus(500);
    }

    testList.push(item);

    res.send('/api/resources/' + item.id);
});

app.listen(port, function () {
    var dateTime = new Date();
    var message = "Server Running on Port " + port + "started at " + dateTime;
    console.log(message);
})