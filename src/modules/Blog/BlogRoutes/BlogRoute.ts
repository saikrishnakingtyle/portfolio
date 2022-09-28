import { headstart } from "../../../startup/headstart";
import { getUserBlogsLogic } from "../BlogLogics/BlogLogic";

const bodyParser = require("body-parser");

var router = require("express").Router();

router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());
router.use(bodyParser.raw());

router.get("/blogs", async function (req,res){
    try {
        console.log(req.body.id);
        // const userBlogs = await getUserBlogsLogic(parseInt(req.body.id));
    } catch(error) {
        console.log(error)
    }
})
console.log("444")

module.exports = router ;