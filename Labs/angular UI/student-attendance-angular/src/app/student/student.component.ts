import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {StudentServiceService} from '../student-service.service';
import {Router} from '@angular/router';
import {NavComponent} from '../nav/nav.component';
import * as xlsx from 'xlsx';

export class Student {
  username: String;
  password: String;
  studentId: String;
  firstName: String;
  lastName: String;
  email: String;
  id: String;
};

export class Attendance {
  id: String;
  date: Date;
  attendance: String;
  name: String;
};

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  @ViewChild('epltable', { static: false }) epltable: ElementRef;
  user;
  public student: Student;

  constructor(private http: HttpClient, private router: Router, private formBuilder: FormBuilder, private myservice: StudentServiceService) {
    this.user = this.router.getCurrentNavigation().extras.state[0];

    if(!this.user){
      this.user = this.router.getCurrentNavigation().extras.state;
    }

  }

  private getOneStudent(id): void {
    this.myservice.getOneStudent(id).then(foundStudents => {
      this.student = foundStudents[0];
      this.student.password=this.user.password;
      this.getAttendance(this.student);
    });

  }

  public attendances: Attendance[];

  private getAttendance(student): void {
    this.myservice.getAttendance(student).then(foundAttendance => {
      this.attendances = foundAttendance.filter(a => a != null);
      this.attendances.map(a => a.name = student.firstName + ' ' + student.lastName);
    });

  }


  ngOnInit(): void {
    if(this.user.student_id){
      this.getOneStudent(this.user.student_id);
    }else{
      this.getOneStudent(this.user.id)
    }

  }

  getProfile() {
    this.router.navigate(['student','profile'],{state:this.student})
  }

  addCourse() {
    this.router.navigate(['student','register-Course'],{state:this.student});
  }

  getRegisteredCourse() {
    this.router.navigate(['student','student-registered-Course'],{state:this.student});
  }
  exportToExcel() {
    const ws: xlsx.WorkSheet =
      xlsx.utils.table_to_sheet(this.epltable.nativeElement);
    const wb: xlsx.WorkBook = xlsx.utils.book_new();
    xlsx.utils.book_append_sheet(wb, ws, 'Sheet1');
    xlsx.writeFile(wb, 'epltable.xlsx');
  }
}
