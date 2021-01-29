var path = require("path");

dispatchPages = function (pageName, res) {
  var response = {
    status: 200,
    message: "index Page",
  };

  res.sendFile(
    path.join(__dirname, "..", "..", "public", "template", pageName + ".html")
  );
};

module.exports.studentsIndex = function (req, res) {
  dispatchPages("student/student", res);
};

module.exports.studentsQrCode = function (req, res) {
  dispatchPages("student/qr-code", res);
};

module.exports.addStudent = function (req, res) {
  dispatchPages("student/addStudent", res);
};

module.exports.editStudent = function (req, res) {
  dispatchPages("student/editStudent", res);
};

module.exports.studentProfile = function (req, res) {
  dispatchPages("profile/profile", res);
};
module.exports.studentRegister = function (req, res) {
  dispatchPages("register/register", res);
};

// -----------------json data------------------------------------------



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
      },
      {
        id: "5fff5c628aad2ac91787a6d1",
        date: "2020-01-01T23:28:56.782Z",
        attendance: false,
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
      },
      {
        id: "5fff5c628aad2ac91787a6d5",
        date: "2020-01-01T23:28:56.782Z",
        attendance: false,
      },
    ],

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
      },
      {
        id: "5fff5c628aad2ac91787a6d2",
        date: "2020-01-01T23:28:56.782Z",
        attendance: false,
      },
    ],
  },
 
];
var User = [
  {
    name: "jack",
    username: "jack",
    password: "jack20",
    student_id: "5fff5c628aad2ac91787a6d6",
  },
  {
    name: "jill",
    username: "jill",
    password: "jill20",
    student_id: "5fff5cb28aad2ac91787a6d8",
  },
  {
    name: "jim",
    username: "jim",
    password: "jim20",
    student_id: "5fff5c908aad2ac91787a6d7",
  },
  {
    name: "faculty",
    username: "faculty",
    password: "faculty20",
  },
];

module.exports.studentsGetAll = function (req, res) {
  var response = {
    status: 200,
    message: "",
  };
  if (Student) {
    response.message = Student;
    response.status = 200;
  } else {
    response.message = { message: "no Record of students" };
    response.status = 404;
  }

  res.status(response.status).json(response.message);
};

module.exports.studentGetOne = function (req, res) {
  var studentId = req.params.studentId;
  console.log("GetOne studentId ", studentId);
  var student = "";
  var response = {
    status: 404,
    message: "Student Not found",
  };

  student=Student.filter(
    function (student) {
      return (student.id==studentId);
  });
  if (student[0]==null) {
    response.status = 404;
    response.message = { message: "Student ID not found" };
  } else if (student[0]!=null) {
    response.status = 200;
    response.message = student;
  } else {
    response.status = 500;
    response.message = { message: "Internal Error" };
  }
  console.log(Student);
  res.status(response.status).json(response.message);
};

module.exports.studentUpdateOne = function (req, res) {
  var studentId = req.params.studentId;
  var student = "";
  var index = 0;
  Student.find((s) => {
    if (s.id == studentId) {
      student = s;
      index++;
    }
  });
  var response = {
    status: 200,
    message: student,
  };
  if (student == "") {
    response.status = 404;
    response.message = { message: "Student ID not found" };
  } else if (student) {
    var uindex=0;
    User.find((u) => {
      if (u.student_id == student.id) {
        uindex++;
      }
    });
    Student[index - 1].firstName = req.body.firstName;
    Student[index - 1].lastName = req.body.lastName;
    Student[index - 1].email = req.body.email;
    Student[index - 1].studentId = req.body.studentId;
    User[uindex-1].username=req.body.username;
    User[uindex-1].name=req.body.name;
    User[uindex-1].password=req.body.password;
    var user=User[uindex-1];
    response.message = {student,user};
  } else {
    response.status = 500;
    response.message = { message: "Internal Error" };
  }
  console.log(Student);
  res.status(response.status).json(response.message);
};

module.exports.studentsAddOne = function (req, res) {
  console.log("Post to add a student");
  var username = req.body.username;
  var name = req.body.name || null;
  var password = req.body.password;
  if (req.body) {
    var user = {
      username: username,
      name: name,
      password: password,
    };
    var student = {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      studentId: req.body.studentId,
    };
    Student.push(student);
    User.push(user);
    const response = {
      status: 201,
      message: {student,user},
    };
    console.log(Student);
    res.status(response.status).json(response.message);
  }
};

module.exports.studentsDeleteOne = function (req, res) {
  var studentId = req.params.studentId;
  console.log("DELETE studentId ", studentId);
  student = "";
  var response = {
    status: "",
    message: "",
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
    Student[index - 1]="";
    response.message = student;
    response.status=204
  } else {
    response.status = 500;
    response.message = { message: "Internal Error" };
  }
  console.log(Student);
  res.status(response.status).json(response.message);
};
