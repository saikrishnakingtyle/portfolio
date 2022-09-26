"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.middleware = void 0;
const express = require('express');
const app = express();
function middleware(req, res, next) {
    console.log('Time:', Date.now());
    req.headers['test'] = 'testvalue';
    next();
}
exports.middleware = middleware;
//# sourceMappingURL=middleware.js.map