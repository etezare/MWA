var express = require("express");
var router = express.Router();
const controllerStudents=require("../controller/students-controller");
const controllerFaculty=require("../controller/faculty-controller.js")



router.route("/students")
.get(controllerStudents.studentsIndex);

router.route("/students/qr-code")
.get(controllerStudents.studentsQrCode);

router.route("/students/add")
.get(controllerStudents.addStudent);

router.route("/students/edit")
.get(controllerStudents.editStudent);

router.route("/students/profile")
.get(controllerStudents.studentProfile);

router.route("/students/register")
.get(controllerStudents.studentRegister);

router.route("/faculty")
.get(controllerFaculty.facultyIndex);

router.route("/faculty/attendance")
.get(controllerFaculty.facultyAttendance);

router.route("/faculty/qr-code")
.get(controllerFaculty.facultyQrCode);


module.exports = router;