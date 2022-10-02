import { 
  deleteEmployeeActivityLogsLogic,
  deleteEmployeeWorkLogLogic,
  getEmployeeActivityLogsLogic,
  getEmployeeWorkLogsLogic,
  saveEmployeeActivityLogsLogic,
  saveEmployeeWorkLogsLogic,
  updateEmployeeActivityLogsLogic,
  updateEmployeeWorkLogLogic } from "../LogLogic/LogLogic";
import { headstart } from "../../../startup/headstart"
import { application } from "express";

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

router.post("/saveactivitylog", async function (req, res) {
    const activityLog = await saveEmployeeActivityLogsLogic(req.body);
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

router.post("/saveworklog", async function (req, res) {
  // const test3 = await new headstart().userInsert();
  // console.log(test3)
  // const test = await new headstart().bulkInsertActivityLogs();
  // console.log("successfully inserted the demo data")
  // console.log(test)
  // const test2 = await new headstart().bulkInsertWorkLogs();
  // console.log(test2)
    const worklog = await saveEmployeeWorkLogsLogic(req.body);
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

router.post("/updateactivitylog", async function (req, res) {
  console.log("into the controller ")
  const activityLog = await updateEmployeeActivityLogsLogic(req.body);
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

router.post("/updateemployeelog", async function (req, res) {
  console.log("into the route")
    const worklog = await updateEmployeeWorkLogLogic(req.body);
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

router.delete("/deleteactivitylog", async function (req, res) {
  console.log("into the controller ")
  const activityLog = await deleteEmployeeActivityLogsLogic(parseInt(req.query.id));
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

router.delete("/deleteemployeelog", async function (req, res) {
  console.log("into the route")
    const worklog = await deleteEmployeeWorkLogLogic(parseInt(req.query.id));
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
 
module.exports = router;