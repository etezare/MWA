const { response } = require("express");
var mongoose = require("mongoose");
var Job = mongoose.model("Job");

module.exports.getLocation = function (req, res) {
  var jobId = req.params.jobId;
  console.log(jobId);
  Job.findById(jobId)
    .select("location")
    .exec(function (err, job) {
      var response = {
        message: job,
        status: 200,
      };
      if (err) {
        response.message = err;
        response.status = 500;
      } else if (!job) {
        response.message = { message: "job not found" };
        response.status = 404;
      } else {
        response.message = job.location ? job.location : {};
        response.status = 200;
      }
      res.status(response.status).json(response.message);
    });
};
var _addLocation = function (req, res, job) {
  let newLocation = {
    street: req.body.street,
    state: req.body.state,
    city: req.body.city,
    zipcode: parseInt(req.body.zipcode),
  };
  var response = {
    message: job,
    status: 200,
  };
  job.location = newLocation;
  job.save(function (err, job) {

    if (err) {
      response.message = err;
      response.status = 500;
    } else {
      response.message = job.location;
      response.status = 200;
    }

  });    
  return response;
};

module.exports.addLocation = function (req, res) {
  var jobId = req.params.jobId;
  Job.findById(jobId)
    .select("location")
    .exec(function (err, job) {
      var response = {
        message: job,
        status: 201,
      };
      if (err) {
        response.message = err;
        response.status = 500;
      } else if (!job) {
        response.message = { message: "job not found" };
        response.status = 404;
      } else if (job) {
        if (!job.locaton) {
          job.location = {};
        }
        response=_addLocation(req, res, job);
      }
      res.status(response.status).json(response.message);
    });
};

var _updateLocation = function (req, res, job) {
  job.location.street = req.body.street;
  job.location.state = req.body.state;
  job.location.city = req.body.city;
  job.location.zipcode = parseInt(req.body.zipcode);
  
    var response = {
      message: job,
      status: 200,
    };
  job.save(function (err, job) {

    if (err) {
      response.message = err;
      response.status = 500;
    } else {
      response.message = job.location;
      response.status = 200;
    }
  });
  return response;
};

module.exports.updateLocation = function (req, res) {
  var jobId = req.params.jobId;
  Job.findByIdAndUpdate(jobId)
    .select("location")
    .exec(function (err, job) {
      var response = {
        message: job,
        status: 201,
      };
      if (err) {
        response.message = err;
        response.status = 500;
      } else if (!job) {
        response.message = { message: "job not found" };
        response.status = 404;
      } else if (job) {
        if (!job.locaton) {
          job.location = {};
        }
       response= _updateLocation(req, res, job);
      }
      res.status(response.status).json(response.message);
    });
};

var _deleteLocation = function (req, res, job) {
  var response = {
    message: job,
    status: 200,
  };

    job.location.remove();
    job.save(function (err, job) {
      if (err) {
        response.message = err;
        response.status = 500;
    
      } else {
        response.message = job.location;
        response.status = 200;
      }
    
    }); 
     return response;
};

module.exports.deleteLocation = function (req, res) {
  var jobId = req.params.jobId;
  Job.findByIdAndUpdate(jobId)
    .select("location")
    .exec(function (err, job) {
      var response = {
        message: job,
        status: 204,
      };
      if (err) {
        response.message = err;
        response.status = 500;
      } else if (!job) {
        response.message = { message: "job not found" };
        response.status = 404;
      } else if (job) {
        if (!job.locaton) {
          job.location = {};
        }
       response= _deleteLocation(req, res, job);

      } 
        res.status(response.status).json(response.message);
      
    });
};
