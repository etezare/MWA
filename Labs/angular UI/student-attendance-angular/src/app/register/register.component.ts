import {Component, OnInit} from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {StudentServiceService} from '../student-service.service';
import {Router} from '@angular/router';

export class Student {
  id:String;
  username: String;
  password: number;
  studentId: String;
  firstName: String;
  lastName: String;
  email: String;
};

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm;

  constructor(private http: HttpClient, private router: Router, private formBuilder: FormBuilder, private myservice: StudentServiceService) {
    this.registerForm = formBuilder.group({
      username: '',
      password: '',
      studentId: '',
      lastName: '',
      email: '',
      firstName: ''
    });
  }

  register() {
    let student = {
      username: this.registerForm.value.username,
      password: this.registerForm.value.password,
      studentId: this.registerForm.value.studentId,
      lastName: this.registerForm.value.lastName,
      email: this.registerForm.value.email,
      firstName: this.registerForm.value.firstName
    };

    this.myservice.register(student).subscribe(data => {
      console.log(data);

    });
  }

  ngOnInit(): void {
  }

}
