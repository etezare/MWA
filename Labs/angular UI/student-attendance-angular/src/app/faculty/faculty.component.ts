import { Component, OnInit } from '@angular/core';
import {StudentServiceService} from '../student-service.service';
import {Router} from '@angular/router';


export class Student {
  id:String;
  username: String;
  password: Number;
  studentId: String;
  firstName: String;
  lastName: String;
  email: String;
};


@Component({
  selector: 'app-faculty',
  templateUrl: './faculty.component.html',
  styleUrls: ['./faculty.component.css']
})
export class FacultyComponent implements OnInit {

  constructor(private studentServiceService:StudentServiceService,private router:Router) { }
  public students: Student[];

  private getStudents():void{
    this.studentServiceService.getStudents().then(foundStudents=>{
        this.students=foundStudents.filter(s=>s!=null);
    });
  }

  editStudent(student:Student){
    this.router.navigate(['faculty','editStudent'],{state:student})
  }
  getAttendance(student:Student){
    this.router.navigate(['faculty','attendance'],{state:student})
  }
  onDelete(id:String){
    this.studentServiceService.deleteStudent(id).subscribe(data=>{
      console.log(data);
      this.getStudents();
    });
  }
  ngOnInit(): void {
    this.getStudents();
  }

  getCourses(student: Student) {
    this.router.navigate(['faculty','edit-registered-Course'],{state:student});
  }

  addCourses(student: Student) {
    this.router.navigate(['faculty','faculty-register-course'],{state:student});
  }
}
