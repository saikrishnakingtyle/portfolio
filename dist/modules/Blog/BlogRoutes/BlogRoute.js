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
const bodyParser = require("body-parser");
var router = require("express").Router();
console.log("11111");
router.use(bodyParser.urlencoded({ extended: true }));
console.log("22222");
router.use(bodyParser.json());
console.log("333");
router.use(bodyParser.raw());
router.get("/blogs", function (req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            console.log(req.body.id);
            // const userBlogs = await getUserBlogsLogic(parseInt(req.body.id));
        }
        catch (error) {
            console.log(error);
        }
    });
});
console.log("444");
module.exports = router;
//# sourceMappingURL=BlogRoute.js.map