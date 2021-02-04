import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { StudentComponent } from './student/student.component';
import { FacultyComponent } from './faculty/faculty.component';
import { FooterComponent } from './footer/footer.component';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';
import { AddStudentComponent } from './add-student/add-student.component';
import { EditStudentComponent } from './edit-student/edit-student.component';
import { QrCodeComponent } from './qr-code/qr-code.component';
import { ProfileComponent } from './profile/profile.component';
import { FacultyQrCodeComponent } from './faculty-qr-code/faculty-qr-code.component';
import { AttendanceComponent } from './attendance/attendance.component';
import {ReactiveFormsModule} from '@angular/forms';
import {FormsModule} from '@angular/forms';
import { RegisterCourseComponent } from './register-course/register-course.component';
import { ListCourseComponent } from './list-course/list-course.component';
import { StudentResgisteredCourseComponent } from './student-resgistered-course/student-resgistered-course.component';
import { FacultyRegisterCourseComponent } from './faculty-register-course/faculty-register-course.component';
import { FacultyEditRegisteredCourseComponent } from './faculty-edit-registered-course/faculty-edit-registered-course.component';
import { SizeDetectorComponent } from './size-detector/size-detector.component';
import { CourseAttendanceComponent } from './course-attendance/course-attendance.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    LoginComponent,
    RegisterComponent,
    StudentComponent,
    FacultyComponent,
    FooterComponent,
    AddStudentComponent,
    EditStudentComponent,
    QrCodeComponent,
    ProfileComponent,
    FacultyQrCodeComponent,
    AttendanceComponent,
    RegisterCourseComponent,
    ListCourseComponent,
    StudentResgisteredCourseComponent,
    FacultyRegisterCourseComponent,
    FacultyEditRegisteredCourseComponent,
    SizeDetectorComponent,
    CourseAttendanceComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {
        path: '',
        component: LoginComponent
      },
      {
        path: 'nav',
        component: NavComponent
      },
      {
        path: 'register',
        component: RegisterComponent
      },
      {
        path: 'student',
        component: StudentComponent
      },
      {
        path: 'faculty',
        component: FacultyComponent
      },
      {
        path: 'faculty/editStudent',
        component: EditStudentComponent
      },
      {
        path: 'faculty/addStudent',
        component: AddStudentComponent
      },
      {
        path: 'faculty/listCourse',
        component: ListCourseComponent
      },      {
        path: 'faculty/course-attendance',
        component: CourseAttendanceComponent
      },
      {
        path: 'student/profile',
        component: ProfileComponent
      },
      {
        path: 'faculty/attendance',
        component: AttendanceComponent
      },
      {
        path: 'qr-code',
        component: QrCodeComponent
      },
      {
        path: 'facultyQr-code',
        component: FacultyQrCodeComponent
      },
      {
        path:"faculty/edit-registered-Course",
        component:FacultyEditRegisteredCourseComponent
      },
      {
        path:"student/student-registered-Course",
        component:StudentResgisteredCourseComponent
      },
      {
        path:"faculty/faculty-register-course",
        component:FacultyRegisterCourseComponent
      },
      {
        path: 'student/register-Course',
        component: RegisterCourseComponent
      }
    ]),
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
