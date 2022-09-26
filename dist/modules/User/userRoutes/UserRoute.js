"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const headstart_1 = require("../../../startup/headstart");
const UserLogic_1 = require("../UserLogics/UserLogic");
const bodyParser = require("body-parser");
var router = require("express").Router();
router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());
router.use(bodyParser.raw());
router.get("/get", function (req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const userData = yield (0, UserLogic_1.getUserDataLogic)(parseInt(req.query.id));
        console.log(req.query.id);
        if (userData != null || userData != undefined) {
            res.send({
                status: 200,
                response: userData
            });
        }
        else {
            res.send({
                status: 535,
                response: "Invalid Credentials"
            });
        }
    });
});
// app.get('/something', (req, res) => {
//     req.query.color1 === 'red'  // true
//     req.query.color2 === 'blue' // true
// })
// app.get('/path/:name', function(req, res) {
//     res.send("tagId is set to " + req.params.name);
//   });
// localhost:3000/user/get/saikingstryl@gmail.com/helloworld
// router.post('/login/:email/:password', async function(req, res) {
// const userData = await getUserLogic(req.params.email,req.params.password)
router.post("/login", function (req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const userData = yield (0, UserLogic_1.getUserLogic)(req.body.userMail, req.body.userPassword);
            console.log(req.body);
            console.log("the data is this" + userData);
            if (userData != null || userData != undefined) {
                res.send({
                    status: 200,
                    response: userData,
                    permission: null // needs some more data here buddy
                });
            }
            else {
                res.send({
                    status: 535,
                    response: "Invalid Credentials",
                    permission: null
                });
            }
        }
        catch (error) {
            console.log(error);
        }
    });
});
router.get("/save", function (req, res) {
    new headstart_1.headstart().userInsert(); // to initiate with some data
    res.send("About Page");
});
module.exports = router;
//# sourceMappingURL=UserRoute.js.map