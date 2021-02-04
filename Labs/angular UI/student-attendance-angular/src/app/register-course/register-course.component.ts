import {Component, OnInit} from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {StudentServiceService} from '../student-service.service';
import {ActivatedRoute, Router} from '@angular/router';

export class Course {
  id: String;
  title: String;
  code: String;
};

@Component({
  selector: 'app-register-course',
  templateUrl: './register-course.component.html',
  styleUrls: ['./register-course.component.css']
})
export class RegisterCourseComponent implements OnInit {
  courseForm;
  public courses: Course[];
  student;
  constructor(private studentServiceService: StudentServiceService, private router: Router, private formBuilder: FormBuilder) {
    this.student = this.router.getCurrentNavigation().extras.state;
    this.courseForm = formBuilder.group({
      course: '',
    });
  }


  private getCourses(): void {
    this.studentServiceService.getCourses().then(foundCourses => {
      this.courses = foundCourses.filter(c => c != null);
      console.log(this.courses);
    });
  }

  ngOnInit(): void {
    this.getCourses();
  }


  registerCourse() {
    console.log(this.student.id)
    console.log(this.courseForm.value.course)
    this.studentServiceService.registerCourse(this.student.id,this.courseForm.value.course).subscribe(data => {
      // console.log(data);
    });
    this.router.navigate(['student'], {state: this.student});
  }
}
