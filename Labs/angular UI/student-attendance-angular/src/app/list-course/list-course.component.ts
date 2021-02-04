import { Component, OnInit } from '@angular/core';
import {StudentServiceService} from '../student-service.service';
import {Router} from '@angular/router';

export class Courses {
  id: String;
  title:String;
  code:String;
};

@Component({
  selector: 'app-list-course',
  templateUrl: './list-course.component.html',
  styleUrls: ['./list-course.component.css']
})
export class ListCourseComponent implements OnInit {

  constructor(private studentServiceService:StudentServiceService,private router:Router) { }
  public courses: Courses[];
  private getCourses():void{
    this.studentServiceService.getAllCourses().then(foundCourses=>{
      this.courses=foundCourses.filter(s=>s!=null);
    });
  }
  ngOnInit(): void {
    this.getCourses();
  }

  getAttendanceForCourse(course: Courses) {
    this.router.navigate(['faculty','course-attendance'],{state:course});

  }
}
