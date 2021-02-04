import {Component, OnInit} from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {StudentServiceService} from '../student-service.service';
import {ActivatedRoute, Router} from '@angular/router';

export class Student {
  username: String;
  // password: Number;
  studentId: String;
  firstName: String;
  lastName: String;
  email: String;
  id: String;
};

@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',
  styleUrls: ['./edit-student.component.css']
})
export class EditStudentComponent implements OnInit {
  editForm;
  id: String;
  // student: { [p: string]: any } = {
  //   username: '',
  //   password: null,
  //   studentId: '',
  //   firstName: '',
  //   lastName: '',
  //   email: '',
  //   id: ''
  // };
student;
  constructor(private http: HttpClient, private router: Router, private formBuilder: FormBuilder, private myservice: StudentServiceService) {
    this.student=this.router.getCurrentNavigation().extras.state;
    this.editForm = formBuilder.group({
      username: [this.student.firstName],
      // password: [this.student.password],
      studentId: [this.student.studentId],
      lastName: [this.student.lastName],
      email: [this.student.email],
      firstName: [this.student.firstName],
      id: [this.student.id]
    });
  }

  ngOnInit(): void {
    // this.id = this.router.snapshot.paramMap.get('id');
    // this.myservice.onGetStudent(this.id).subscribe(data => {
    //   console.log(data);
    //   this.editForm.value.firstName = data[0].firstName;
    //   this.editForm.value.password = data[0].password;
    //   this.editForm.value.studentId = data[0].studentId;
    //   this.editForm.value.email = data[0].email;
    //   this.editForm.value.firstName = data[0].firstName;
    //   this.editForm.value.lastName = data[0].lastName;
    //   this.editForm.value.id = data[0].id;
    //
    // });
  }

  editStudent() {
    let student = {
      username: this.editForm.value.username,
      password: this.editForm.value.password,
      studentId: this.editForm.value.studentId,
      lastName: this.editForm.value.lastName,
      email: this.editForm.value.email,
      firstName: this.editForm.value.firstName,
      id:this.editForm.value.id
    };
    this.myservice.editStudent(student).subscribe(data => {
      console.log(data);
      this.router.navigate(['faculty']);
    });
  }
}
