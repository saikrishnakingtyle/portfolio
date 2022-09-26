"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const middleware_1 = require("./middleware/middleware");
const app = (0, express_1.default)();
const port = 3000;
app.use(middleware_1.middleware);
// app.use('/user', require('./modules/User/UserRoutes/UserRoute'));
console.log("what");
app.use('/blog', require('./modules/Blog/BlogRoutes/BlogRoute'));
console.log("what");
// app.use('/contact', require('./routes/userRoutes/UserRoute'));
app.listen(port, () => {
    return console.log(`Express is listening at http://localhost:${port}`);
});
//# sourceMappingURL=app.js.map