import {Component, OnInit} from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {StudentServiceService} from '../student-service.service';
import {Router} from '@angular/router';
import {NavComponent} from '../nav/nav.component';
import {Attendance} from '../student/student.component';
export class Courses {
  id: String;
  title:String;
  code:String;
};
@Component({
  selector: 'app-student-resgistered-course',
  templateUrl: './student-resgistered-course.component.html',
  styleUrls: ['./student-resgistered-course.component.css']
})

export class StudentResgisteredCourseComponent implements OnInit {
  student;
  constructor(private http: HttpClient, private router: Router, private formBuilder: FormBuilder, private myservice: StudentServiceService) {
    this.student=this.router.getCurrentNavigation().extras.state;
  }
  public courses: Courses[];

  private getCourses(student): void {
    this.myservice.getCoursesForOne(student).then(foundCourses => {
      this.courses = foundCourses.filter(c => c != null);
    });

  }
  ngOnInit(): void {
    this.getCourses(this.student)
  }

}
