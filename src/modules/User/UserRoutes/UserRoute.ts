import { headstart } from "../../../startup/headstart";
import { getUserDataLogic, getUserLogic } from "../UserLogics/UserLogic";
const bodyParser = require("body-parser");

var router = require("express").Router();

router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());
router.use(bodyParser.raw());

router.get("/get", async function (req, res) {
    const userData = await getUserDataLogic(parseInt(req.query.id))
  console.log(req.query.id);
  if (userData != null || userData != undefined) {
    res.send({
      status: 200,
      response: userData
    });
  } else {
    res.send({
      status: 535,
      response: "Invalid Credentials"
    });
  }
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
router.post("/login", async function (req, res) {
  try {
    const userData = await getUserLogic(
      req.body.userMail,
      req.body.userPassword
    );
    console.log(req.body);
    console.log("the data is this" + userData);
    if (userData != null || userData != undefined) {
      res.send({
        status: 200,
        response: userData,
        permission: null // needs some more data here buddy
      });
    } else {
      res.send({
        status: 535,
        response: "Invalid Credentials",
        permission: null
      });
    }
  } catch (error) {
    console.log(error);
  }
});
router.get("/save", function (req, res) {
  new headstart().userInsert(); // to initiate with some data
  res.send("About Page");
});

module.exports = router;
