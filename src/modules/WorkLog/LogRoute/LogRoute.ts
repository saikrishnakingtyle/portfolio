import { getEmployeeActivityLogsLogic, getEmployeeWorkLogsLogic, saveEmployeeActivityLogsLogic, saveEmployeeWorkLogsLogic } from "../LogLogic/LogLogic";

const bodyParser = require("body-parser");

var router = require("express").Router();

router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());
router.use(bodyParser.raw());

router.get("/getactivitylogs", async function (req, res) {
    const employeeLogs = await getEmployeeActivityLogsLogic(parseInt(req.query.id));
    console.log(req.query.id);
  if (employeeLogs != null || employeeLogs != undefined) {
    res.send({
      status: 200,
      response: employeeLogs
    });
  } else {
    res.send({
      status: 535,
      response: "Invalid Credentials"
    });
  }
});

router.get("/getworklogs", async function (req, res) {
    const employeeLogs = await getEmployeeWorkLogsLogic(parseInt(req.query.id));
    console.log(req.query.id);
  if (employeeLogs != null || employeeLogs != undefined) {
    res.send({
      status: 200,
      response: employeeLogs
    });
  } else {
    res.send({
      status: 535,
      response: "Invalid Credentials"
    });
  }
});

router.get("/saveactivityLog", async function (req, res) {
    const activityLog = await saveEmployeeActivityLogsLogic(parseInt(req.query.id));
    console.log(req.query.id);
  if (activityLog != null || activityLog != undefined) {
    res.send({
      status: 200,
      response: activityLog
    });
  } else {
    res.send({
      status: 535,
      response: "Invalid Credentials"
    });
  }
});

router.get("/saveworkLog", async function (req, res) {
    const worklog = await saveEmployeeWorkLogsLogic(parseInt(req.query.id));
    console.log(req.query.id);
  if (worklog != null || worklog != undefined) {
    res.send({
      status: 200,
      response: worklog
    });
  } else {
    res.send({
      status: 535,
      response: "Invalid Credentials"
    });
  }
});