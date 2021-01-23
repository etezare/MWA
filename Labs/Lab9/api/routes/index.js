var express= require("express");
var router= express.Router();
var controllerJob =require("../controllers/jobs.controllers.js");
var controllerLocation =require("../controllers/locations.controllers.js");

router.route("/jobs").get(controllerJob.jobsGetAll)
.post(controllerJob.jobAddOne);


router.route("/jobs/:jobId")
.get(controllerJob.jobGetOne)
.delete(controllerJob.jobDelete)
.put(controllerJob.jobUpdate);

router.route("/jobs/:jobId/location")
.get(controllerLocation.getLocation)
.post(controllerLocation.addLocation)
.put(controllerLocation.updateLocation)
.delete(controllerLocation.deleteLocation)

module.exports=router;