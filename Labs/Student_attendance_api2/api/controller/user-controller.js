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
    userId:"4",
    name: "jack",
    username: "jack",
    password: "jack20",
    student_id: "5fff5c628aad2ac91787a6d6",
  },
  {
    userId:"2",
    name: "jill",
    username: "jill",
    password: "jill20",
    student_id: "5fff5cb28aad2ac91787a6d8",
  },
  {
    userId:"3",
    name: "jim",
    username: "jim",
    password: "jim20",
    student_id: "5fff5c908aad2ac91787a6d7",
  },
  {
    userId:"1",
    name: "faculty",
    username: "faculty",
    password: "faculty20",
  },
];

module.exports.register = function (req, res) {
  console.log("Registering user");
  var username = req.body.username;
  var name = req.body.name;
  var password = req.body.password;
  var response = {
    message: "",
    status: "",
  };

  if (req.body.username && req.body.password) {
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
    response.message = {user,student};
    response.status = 201;
    console.log("user Created", user);
  } else {
    response.message = { message: "error" };
    response.status = 500;
  }
  res.status(response.status).json(response.message);
};

module.exports.login = function (req, res) {
  console.log("Logging in user");
  console.log(req.body.username)
  var username = req.body.username;
  var password = req.body.password;
  var response = {
    message: "",
    status: "",
  };
  var user = User.filter(function (user) {
    return (user.username == username);
  });
  if (user) {
    if (user[0].password == password) {    
      response.message = user;
      response.status = 200;
      console.log("user found ");
    } else {
      response.message = { message: "Unauthorized" };
      response.status = 401;
    }
  } else {
    response.message = { message: "Unauthorized" };
    response.status = 400;
  }

  res.status(response.status).json(response.message);
};
module.exports.userDeleteOne = function (req, res) {
  var student_id = req.params.student_id;
  console.log("DELETE user ", student_id);
  user = "";
  var response = {
    status: "",
    message: "",
  };
  index = 0;
  User.find((u) => {
    if (u != null) {
      if (student_id == u.student_id) {
        user = u;
        index++;
      }
    }
  });

  if (user == "") {
    response.status = 404;
    response.message = { message: "User ID not found" };
  } else if (user) {
    User.splice(index - 1,1);
    response.message = user;
    response.status = 204;
  } else {
    response.status = 500;
    response.message = { message: "Internal Error" };
  }
  console.log(User);
  res.status(response.status).json(response.message);
};
