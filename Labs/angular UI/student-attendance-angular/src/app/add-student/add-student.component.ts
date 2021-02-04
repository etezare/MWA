import {Component, OnInit} from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {StudentServiceService} from '../student-service.service';
import {Router} from '@angular/router';

export class Student {
  username: String;
  password: number;
  studentId: String;
  firstName: String;
  lastName: String;
  email: String;
};
@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {

  addStudentForm;

  constructor(private http: HttpClient, private router: Router, private formBuilder: FormBuilder, private myservice: StudentServiceService) {
    this.addStudentForm = formBuilder.group({
      username: '',
      password: '',
      studentId: '',
      lastName: '',
      email: '',
      firstName: ''
    });
  }

  addStudent() {
    let student = {
      username: this.addStudentForm.value.username,
      password: this.addStudentForm.value.password,
      studentId: this.addStudentForm.value.studentId,
      lastName: this.addStudentForm.value.lastName,
      email: this.addStudentForm.value.email,
      firstName: this.addStudentForm.value.firstName
    };

    this.myservice.addStudent(student).subscribe(data => {
      console.log(data);
      this.router.navigate(['faculty']);
    });
  }

  ngOnInit(): void {
  }

}
