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
var Courses = [
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
    {
        id: "5fff5c908aad2ac91787a6d8",
        title:"SE",
        code:"cs555"
    },
  ];
module.exports.coursesGetAll = function (req, res) {
    var response = {
      status: 200,
      message: "",
    };
    if (Courses) {
      response.message = Courses;
      response.status = 200;
    } else {
      response.message = { message: "no Record of courses" };
      response.status = 404;
    }
  
    res.status(response.status).json(response.message);
  };
  module.exports.courseAddOne = function (req, res) {
    console.log("Post to add a Course");
    if (req.body) {
      var course = {
        title: req.body.title,
        code: req.body.code,
        id: req.body.id,
      };
      Course.push(course);
      const response = {
        status: 201,
        message: { course },
      };
      console.log(Courses);
      res.status(response.status).json(response.message);
    }
  };

module.exports.coursesGetAllForStudent = function (req, res) {
  console.log("Get ALL Courses for a student")
  var response = {
    status: 200,
    message: "",
  };
  var studentId = req.params.studentId;
  var courses = [];
  var student = Student.filter(function (student) {
    if (studentId == student.id) {
      courses = student.courses;
    }
  });
  if (student) {
    if (courses) {
      response.message = courses;
      response.status = 200;
    } else {
      response.message = { message: "no Record of courses" };
      response.status = 404;
    }
  } else {
    response.status = 404;
    response.message = { message: "Student ID not found" };
  }

  res.status(response.status).json(response.message);
};

module.exports.courseGetOne = function (req, res) {
  var studentId = req.params.studentId;
  var courseId = req.params.courseId;
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
    var course = student[0].courses.filter(function (course) {
      return courseId == course.id;
    });
    if (course) {
      response.status = 200;
      response.message = course;
    } else {
      response.status = 404;
      response.message = { message: "Course ID not found" };
    }
  } else {
    response.status = 500;
    response.message = { message: "Internal Error" };
  }
  console.log(course);
  res.status(response.status).json(response.message);
};

module.exports.courseAddForStudent = function (req, res) {
  console.log("Post to add a course"+req.body);
  var studentId = req.params.studentId;
  var student = "";
  var response = {
    status: "",
    message: " ",
  };
  if (req.body) {
    // var course = {
    //   title: req.body.title,
    //   code: req.body.code,
    //   id:req.body.id
    // };
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
      req.body.forEach(myFunction);
      function myFunction(course) {
      Student[index - 1].courses.push(course);
      }
      
      
      response.status = 200;
      response.message = req.body;
    }

    console.log(Student[index - 1]);
    res.status(response.status).json(response.message);
  } else {
    res.status(404).json({ message: "body missing" });
  }
};

module.exports.courseDelete = function (req, res) {
  var studentId = req.params.studentId;
  var courseId = req.params.courseId;
  console.log("DELETE Course ", courseId);
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
    var indexA;
    var course = Student[index - 1].courses.filter(function (
      course
    ) {
      if (course.id == courseId) {
        indexA++;
        return course;
      }
    });
    if (course[0] != null) {
        Student[index - 1].courses.splice(index-1,1);
       response.message = course;
       response.status=200;
      
    } else if (course[0] == null) {
      response.status = 404;
      response.message = { message: "Course Id not found" };
    }
  } else {

    response.status = 500;
    response.message = { message: "Internal Error" };
  }
  console.log(Student[index-1]);
  res.status(response.status).json(response.message);
};

module.exports.courseUpdate = function (req, res) {
  var studentId = req.params.studentId;
  var courseId = req.params.courseId;
  console.log("UPDATE course ", courseId);
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
    var course = Student[index - 1].courses.filter(function (
      course
    ) {
      if (course.id == courseId) {
        indexA++;
        return course;
      }
    });
    if (course[0] != null) {
    Student[index - 1].courses[index-1].title=req.body.title;
    Student[index - 1].courses[index-1].code=req.body.code;
      response.message = course;
    } else if (course[0] == null) {
      response.status = 404;
      response.message = { message: "Course Id not found" };
    }
  } else {
    response.status = 500;
    response.message = { message: "Internal Error" };
  }
  console.log(Student[index-1]);
  res.status(response.status).json(response.message);
};

module.exports.getAllAttendanceForAcourse=function(req,res){
  var courseId = req.params.courseId;
  console.log("GET Attendance for A course ", courseId);
  attendances = [];
  var response = {
    status: " ",
    message: "",
  };
  index = 0;
  Student.find((s) => {
    s.attendance.find((a)=>{
      if(courseId==a.course_id){
      attendances.push(a);
      index++;
      }
    })
  });
  if (attendances) {
    response.message = attendances;
    response.status = 200;
  } else if(!attendances) {
    response.message = { message: "no Record of attendance" };
    response.status = 404;
  } else {
    response.status = 500;
    response.message = { message: "Internal Error" };
  }
  res.status(response.status).json(response.message);
}