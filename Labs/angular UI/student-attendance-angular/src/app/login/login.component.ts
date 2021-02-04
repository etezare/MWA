import {Component, OnInit,} from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {StudentServiceService} from '../student-service.service';
import {Router} from '@angular/router';

export class User {
  username: String;
  password: Number;

};

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  logInForm;

  constructor(private http: HttpClient, private router: Router, private formBuilder: FormBuilder, private myservice: StudentServiceService) {
    this.logInForm = formBuilder.group({
      username: '',
      password: ''
    });
  }

  loggedIn() {
    let user = {
      username: this.logInForm.value.username,
      password: this.logInForm.value.password
    };

    this.myservice.authuser(user).subscribe(data => {
      console.log('data', data);
      if (data[0].username == 'faculty') {
        localStorage.setItem('user', data[0].username);
        this.router.navigate(['faculty']);
      }
      if (data[0].username != 'faculty') {
        this.router.navigate((['student']), {state: data});
        localStorage.setItem('user',data[0].username)
      }
    });
  }

  ngOnInit(): void {
  }
}
