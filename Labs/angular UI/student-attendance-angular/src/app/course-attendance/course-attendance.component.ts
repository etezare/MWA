import { Component, OnInit, ViewChild, ElementRef} from '@angular/core';
import {StudentServiceService} from '../student-service.service';
import {Router} from '@angular/router';
import {Student} from '../faculty/faculty.component';
import {HttpClient} from '@angular/common/http';
import {FormBuilder} from '@angular/forms';
import * as xlsx from 'xlsx';
export class Attendance {
  id:String;
  date: Date;
  attendance: String;
  name:String;
  course_id:String;
};

@Component({
  selector: 'app-course-attendance',
  templateUrl: './course-attendance.component.html',
  styleUrls: ['./course-attendance.component.css']
})
export class CourseAttendanceComponent implements OnInit {
  @ViewChild('epltable', { static: false }) epltable: ElementRef;
  course;
  constructor(private studentServiceService:StudentServiceService,private http: HttpClient, private router: Router, private formBuilder: FormBuilder, private myservice: StudentServiceService) {
    this.course=this.router.getCurrentNavigation().extras.state;
  }

  public attendances: Attendance[];

  private getAttendanceForCourse(course): void {
    this.studentServiceService.getAttendanceForCourse(course).then(foundAttendance => {
      console.log(foundAttendance)
      this.attendances = foundAttendance;
    });
  }

  ngOnInit(): void {
    this.getAttendanceForCourse(this.course);
  }

  exportToExcel() {
    const ws: xlsx.WorkSheet =
      xlsx.utils.table_to_sheet(this.epltable.nativeElement);
    const wb: xlsx.WorkBook = xlsx.utils.book_new();
    xlsx.utils.book_append_sheet(wb, ws, 'Sheet1');
    xlsx.writeFile(wb, 'epltable.xlsx');
  }
}
