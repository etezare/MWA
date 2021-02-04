import {Component, OnInit} from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {StudentServiceService} from '../student-service.service';
import {Router} from '@angular/router';

export class Student {
  username: String;
  password: String;
  studentId: String;
  firstName: String;
  lastName: String;
  email: String;
  id: String;
};


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  profileForm;
  student;
  selectedFile = null;


  constructor(private http: HttpClient, private router: Router, private formBuilder: FormBuilder, private myservice: StudentServiceService) {
    this.student = this.router.getCurrentNavigation().extras.state;
    console.log([this.student]);
    this.profileForm = formBuilder.group({
      username: [this.student.firstName],
      password: [this.student.password],
      studentId: [this.student.studentId],
      lastName: [this.student.lastName],
      email: [this.student.email],
      firstName: [this.student.firstName],
      id: [this.student.id]
    });
  }


  ngOnInit(): void {
  }

  saveProfile() {
    let student = {
      username: this.profileForm.value.username,
      password: this.profileForm.value.password,
      studentId: this.profileForm.value.studentId,
      lastName: this.profileForm.value.lastName,
      email: this.profileForm.value.email,
      firstName: this.profileForm.value.firstName,
      id: this.profileForm.value.id
    };
    this.myservice.saveProfile(student).subscribe(data => {
      console.log(data);
      this.router.navigate(['student'], {state: data.user});
    });
  }

url="./assets/images/profile.png"

  onFileSelected(e) {
    if(e.target.files){
      var reader=new FileReader();
      reader.readAsDataURL(e.target.files[0]);
      reader.onload=(event:any)=>{
        this.url=event.target.result;
      }
    }
    this.selectedFile = e.target.files[0];
  }

  onUpload() {

    this.myservice.savePhoto(this.student,this.selectedFile.name).subscribe(data=>
    {
      console.log(data);
    })
  }

  DeleteAccunt() {
    this.myservice.deleteAccount(this.student).subscribe(data=>{
      console.log(data);
      this.router.navigate(['']);
    })
  }
}
