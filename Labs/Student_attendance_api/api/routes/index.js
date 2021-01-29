var express = require("express");
var router = express.Router();
const controllerStudents=require("../controller/students-controller");
const controllerFaculty=require("../controller/faculty-controller.js")
const controllerUser=require("../controller/user-controller");
const controllerAttendance=require("../controller/attendance-controller")




router.route("/students")
.get(controllerStudents.studentsGetAll)
.post(controllerStudents.studentsAddOne);

router.route("/qrcodegenerate")
.post(controllerFaculty.generateCode);

router.route("/students/:studentId")
.get(controllerStudents.studentGetOne)
.put(controllerStudents.studentUpdateOne)
.delete(controllerStudents.studentsDeleteOne);


router.route("/students/:studentId/attendances")
.get(controllerAttendance.attendanceGetAll)
.post(controllerAttendance.attendanceAddOne);

router.route("/students/:studentId/attendances/:attendanceId")
.get(controllerAttendance.attendanceGetOne)
.put(controllerAttendance.attendanceUpdate)
.delete(controllerAttendance.attendanceDelete);

router.route("/users/register").post(controllerUser.register);

router.route("/users/login").post(controllerUser.login);

//----------------------------------------------------------------//
router.route("/studentpage")
.get(controllerStudents.studentsIndex);
router.route("/studentpage/qr-code")
.get(controllerStudents.studentsQrCode);

router.route("/studentpage/add")
.get(controllerStudents.addStudent);

router.route("/studentpage/edit")
.get(controllerStudents.editStudent);

router.route("/studentpage/profile")
.get(controllerStudents.studentProfile);

router.route("/registerpage")
.get(controllerStudents.studentRegister);

router.route("/faculty")
.get(controllerFaculty.facultyIndex);

router.route("/faculty/attendance")
.get(controllerFaculty.facultyAttendance);

router.route("/faculty/qr-code")
.get(controllerFaculty.facultyQrCode);



module.exports = router;