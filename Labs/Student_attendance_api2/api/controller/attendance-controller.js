var Student = [
  {
    id: "5fff5c628aad2ac91787a6d6",
    firstName: "Jack",
    lastName: "Bini",
    email: "jack@miu.edu",
    studentId: "111111",
    attendance: [
      {
        id: "5fff5c628aad2ac91787a6d9",
        date: "2020-01-01T23:28:56.782Z",
        attendance: true,
        course_id:"5fff5c628aad2ac91787a6e9",
        name:"Jack Bini"
      },
      {
        id: "5fff5c628aad2ac91787a6d1",
        date: "2020-01-02T23:28:56.782Z",
        attendance: false,
        course_id:"5fff5c628aad2ac91787a6e9",
        name:"Jack Bini"
      },
    ],
    courses: [
        {
          id: "5fff5c628aad2ac91787a6e9",
         title:"MWA",
         code:"cs742"
        },
        {
            id: "5fff5c628aad2ac91787a6f9",
            title:"WAA",
            code:"cs752"
           },
      ],
  },
  {
    id: "5fff5c908aad2ac91787a6d7",
    firstName: "Jim",
    lastName: "Tez",
    email: "jim@miu.edu",
    studentId: "222222",
    attendance: [
      {
        id: "5fff5c628aad2ac91787a6d1",
        date: "2020-01-01T23:28:56.782Z",
        attendance: true,
        course_id:"5fff5c628aad2ac91787a6e9",
        name:"Jim Tez"
      },
      {
        id: "5fff5c628aad2ac91787a6d5",
        date: "2020-01-02T23:28:56.782Z",
        attendance: false,
        course_id:"5fff5c628aad2ac91787a6e9",
        name:"Jim Tez"
      },
    ],courses: [
      {
        id: "5fff5c628aad2ac91787a6e9",
       title:"MWA",
       code:"cs742"
      },
      {
          id: "5fff5c628aad2ac91787a6f9",
          title:"WAA",
          code:"cs752"
         },
    ]
  },
  {
    id: "5fff5cb28aad2ac91787a6d8",
    firstName: "Jill",
    lastName: "Yon",
    email: "jim@miu.edu",
    studentId: "333333",
    attendance: [
      {
        id: "5fff5c628aad2ac91787a6d3",
        date: "2020-01-01T23:28:56.782Z",
        attendance: true,
        course_id:"5fff5c628aad2ac91787a6e9",
        name:"Jill Yon"
      },
      {
        id: "5fff5c628aad2ac91787a6d2",
        date: "2020-01-02T23:28:56.782Z",
        attendance: false,
        course_id:"5fff5c628aad2ac91787a6e9",
        name:"Jill Yon"
      },
    ],courses: [
      {
        id: "5fff5c628aad2ac91787a6e9",
       title:"MWA",
       code:"cs742"
      },
      {
          id: "5fff5c628aad2ac91787a6f9",
          title:"WAA",
          code:"cs752"
         },
    ]
  },
];

module.exports.attendanceGetAll = function (req, res) {
  console.log("Get ALL Attendance for a student")
  var response = {
    status: 200,
    message: "",
  };
  var studentId = req.params.studentId;
  var attendance = [];
  var student = Student.filter(function (student) {
    if (studentId == student.id) {
      attendance = student.attendance;
    }
  });
  if (student) {
    if (attendance) {
      response.message = attendance;
      response.status = 200;
    } else {
      response.message = { message: "no Record of attendance" };
      response.status = 404;
    }
  } else {
    response.status = 404;
    response.message = { message: "Student ID not found" };
  }

  res.status(response.status).json(response.message);
};

module.exports.attendanceGetOne = function (req, res) {
  var studentId = req.params.studentId;
  var attendanceId = req.params.attendanceId;
  var student = "";
  var response = {
    status: "",
    message: " ",
  };

  student = Student.filter(function (student) {
    return student.id == studentId;
  });
  if (student[0] == null) {
    response.status = 404;
    response.message = { message: "Student ID not found" };
  } else if (student[0] != null) {
    var attendance = student[0].attendance.filter(function (attendance) {
      return attendanceId == attendance.id;
    });
    if (attendance) {
      response.status = 200;
      response.message = attendance;
    } else {
      response.status = 404;
      response.message = { message: "Attendance ID not found" };
    }
  } else {
    response.status = 500;
    response.message = { message: "Internal Error" };
  }
  console.log(attendance);
  res.status(response.status).json(response.message);
};

module.exports.attendanceAddOne = function (req, res) {
  console.log("Post to add a attendance");
  var studentId = req.params.studentId;
  var student = "";
  var response = {
    status: "",
    message: " ",
  };
  if (req.body) {
    var attendance = {
      date: req.body.date,
      attendance: req.body.attendance,
      name:req.body.name
    };
    var index = 0;
    student = Student.filter(function (student) {
      if (studentId == student.id) {
        index++;
        return student.id == studentId;
      }
    });
    if (student[0] == null) {
      response.status = 404;
      response.message = { message: "Student ID not found" };
    } else if (student[0] != null) {
      Student[index - 1].attendance.push(attendance);
      response.status = 200;
      response.message = attendance;
    }

    console.log(Student[index - 1]);
    res.status(response.status).json(response.message);
  } else {
    res.status(404).json({ message: "body missing" });
  }
};

module.exports.attendanceDelete = function (req, res) {
  var studentId = req.params.studentId;
  var attendanceId = req.params.attendanceId;
  console.log("DELETE Attendance ", attendanceId);
  student = "";
  var response = {
    status: 404,
    message: "Student Not found",
  };
  index = 0;
  Student.find((s) => {
    if (studentId == s.id) {
      student = s;
      index++;
    }
  });
  if (student == "") {
    response.status = 404;
    response.message = { message: "Student ID not found" };
  } else if (student) {
    let indexA = 0;
    var attendance = Student[index - 1].attendance.filter(function (
      attendance
    ) {
      if (attendance.id == attendanceId) {
        indexA++;
        return attendance;
      }
    });
    if (attendance[0] != null) {
       delete  Student[index - 1].attendance[index-1];
      response.message = attendance;
    } else if (attendance[0] == null) {
      response.status = 404;
      response.message = { message: "Attendance Id not found" };
    }
  } else {
    response.status = 500;
    response.message = { message: "Internal Error" };
  }
  console.log(Student[index-1]);
  res.status(response.status).json(response.message);
};

module.exports.attendanceUpdate = function (req, res) {
  var studentId = req.params.studentId;
  var attendanceId = req.params.attendanceId;
  console.log("UPDATE attendance ", attendanceId);
  student = "";
  var response = {
    status: 404,
    message: "Student Not found",
  };
  index = 0;
  Student.find((s) => {
    if (studentId == s.id) {
      student = s;
      index++;
    }
  });
  if (student == "") {
    response.status = 404;
    response.message = { message: "Student ID not found" };
  } else if (student) {
    let indexA = 0;
    var attendance = Student[index - 1].attendance.filter(function (
      attendance
    ) {
      if (attendance.id == attendanceId) {
        indexA++;
        return attendance;
      }
    });
    if (attendance[0] != null) {
    Student[index - 1].attendance[index-1].date=req.body.date;
    Student[index - 1].attendance[index-1].attendance=req.body.attendance;
      response.message = attendance;
    } else if (attendance[0] == null) {
      response.status = 404;
      response.message = { message: "Attendance Id not found" };
    }
  } else {
    response.status = 500;
    response.message = { message: "Internal Error" };
  }
  console.log(Student[index-1]);
  res.status(response.status).json(response.message);
};