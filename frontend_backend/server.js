"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var next_1 = require("next");
var dev = process.env.NODE_ENV !== "production";
var app = (0, next_1.default)({ dev: dev });
var handle = app.getRequestHandler();
app.prepare().then(function () {
    var server = (0, express_1.default)();
    // Example of custom API endpoint
    server.get("/api/hello", function (req, res) {
        res.json({ message: "Hello from Dmitry!" });
    });
    // Default request handler
    server.all("*", function (req, res) {
        return handle(req, res);
    });
    var port = process.env.PORT || 3000;
    server.listen(port, function (err) {
        if (err)
            throw err;
        console.log("> Ready on http://localhost:".concat(port));
    });
});
