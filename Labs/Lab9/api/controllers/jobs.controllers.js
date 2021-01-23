const { chmod } = require("fs");
var mongoose = require("mongoose");
var Job = mongoose.model("Job");
module.exports.jobsGetAll = function (req, res) {
  var offset = 0;
  var count = 7;
  if (req.query && req.query.offset) {
    offset = parseInt(req.query.offset, 10);
  }
  if (req.query && req.query.count) {
    count = parseInt(req.query.count, 10);
  }
  if (count > 7) {
    count = 7;
  }
  if (isNaN(offset) || isNaN(count)) {
    res
      .status(400)
      .json({ message: "QueryString offset and Count should be numbers" });
    return;
  }
  Job.find()
    .skip(offset)
    .limit(count)
    .exec(function (err, jobs) {
      var response = {
        status: 200,
        messgae: jobs,
      };
      if (err) {
        response.status = 500;
        response.messgae = err;
      }
      res.status(response.status).json(response.messgae);
    });
};

module.exports.jobAddOne = function (req, res) {
  if (req.body) {
    Job.create(
      {
        salary: parseFloat(req.body.salary),
        description: req.body.description,
        exprience: req.body.exprience,
        postDate: Date.parse(req.body.postDate),
        title: req.body.title,
        skills:req.body.skills.split(","),
      },
      function (err, job) {
        var response = {
          message: job,
          status: 200,
        };
        if (err) {
          response.message = err;
          response.status = 500;
        } else {
          res.status(response.status).json(response.message);
        }
      }
    );
  } else {
    res.status(400).json({ error: "Body has missing part" });
  }
};

module.exports.jobUpdate = function (req, res) {
  var jobId = req.params.jobId;
  Job.findByIdAndUpdate(jobId)
    .select("-position")
    .exec(function (err, job) {
      var response = {
        message: job,
        status: 200,
      };
      if (err) {
        response.message = err;
        response.status = 500;
      } else if (!job) {
        response.message = { message: "Job not found" };
        response.status = 404;
      } else {
        job.salary = parseFloat(req.body.salary);
        job.description = req.body.description;
        job.exprience = req.body.exprience;
        job.postDate = Date.parse(req.body.postDate);
        job.title = req.body.title;
        job.skills = req.body.skills.split(",");
      }

      res.status(response.status).json(response.message);
    });
};
module.exports.jobGetOne = function (req, res) {
  var jobId = req.params.jobId;
  console.log("GET ONE JOB with ID " + jobId);
  Job.findById(jobId).exec(function (err, job) {
    var response = {
      message: job,
      status: 200,
    };
    if (err) {
      (response.message = err), (response.status = 500);
    } else if (!job) {
      response.message = { message: "Job not found" };
      response.status = 404;
    }
    res.status(response.status).json(response.message);
  });
};


module.exports.jobDelete = function (req, res) {
    var jobId = req.params.jobId;
    Job.findByIdAndDelete(jobId).exec(function (err, job) {
      var response = {
        message: job,
        status: 200,
      };
      if (err) {
        (response.message = err), (response.status = 500);
      } else if (!job) {
        response.message = { message: "Job not found" };
        response.status = 404;
      }
      res.status(response.status).json(response.message);
    });
  };
