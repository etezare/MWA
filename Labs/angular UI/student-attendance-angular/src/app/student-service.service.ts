import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {catchError, distinctUntilChanged} from 'rxjs/operators';
import {Observable, Subject} from 'rxjs';
import {User} from './login/login.component';
import {Student} from './register/register.component';
import {Attendance} from './attendance/attendance.component';
import {Course} from './register-course/register-course.component';
import {SCREEN_SIZE} from './size-detector/size-detector.component';

@Injectable({
  providedIn: 'root'
})
export class StudentServiceService {


  constructor(private http: HttpClient) {
    this.resizeSubject = new Subject();
  }
  get onResize$(): Observable<SCREEN_SIZE> {
    return this.resizeSubject.asObservable().pipe(distinctUntilChanged());
  }

  private resizeSubject: Subject<SCREEN_SIZE>;



  onResize(size: SCREEN_SIZE) {
    this.resizeSubject.next(size);
  }

  private apiBaseUrl = 'http://localhost:8080/api';

  ngOnInit(): void {
  }

  authuser(user): Observable<User> {
    // console.log(user);
    const url: string = this.apiBaseUrl + '/users/login';
    return this.http
      .post<User>(url, user, {
        headers: new HttpHeaders({
          'Content-Type': 'application/json'
        })
      })
      .pipe(catchError(this.handleError));

  }

  register(student): Observable<Student> {
    console.log(student);
    const url: string = this.apiBaseUrl + '/users/register';
    return this.http
      .post<Student>(url, student, {
        headers: new HttpHeaders({
          'Content-Type': 'application/json'
        })
      })
      .pipe(catchError(this.handleError));

  }

  addStudent(student): Observable<Student> {
    console.log(student);
    const url: string = this.apiBaseUrl + '/students';
    return this.http
      .post<Student>(url, student, {
        headers: new HttpHeaders({
          'Content-Type': 'application/json'
        })
      })
      .pipe(catchError(this.handleError));

  }

  editStudent(student): Observable<Student> {
    console.log(student);
    const url: string = this.apiBaseUrl + '/students/' + student.id;
    return this.http
      .put<Student>(url, student, {
        headers: new HttpHeaders({
          'Content-Type': 'application/json'
        })
      })
      .pipe(catchError(this.handleError));

  }

  deleteStudent(id: String) {
    const url: string = this.apiBaseUrl + '/students/' + id;
    console.log(url);
    return this.http.delete(url).pipe(catchError(this.handleError));
  }

  onGetStudent(id: String) {
    const url: string = this.apiBaseUrl + '/students/' + id;
    return this.http.get(url).pipe(catchError(this.handleError));
  }

  private handleError(error: any): Promise<any> {
    console.log('Something went wrong ', error);
    return Promise.reject(error.message || error);
  }

  getStudents(): Promise<Student[]> {
    const url: string = this.apiBaseUrl + '/students';
    return this.http
      .get(url)
      .toPromise()
      .then(response => response as Student[])
      .catch(this.handleError);
  }

  getAttendance(student): Promise<Attendance[]> {
    console.log(student);
    const url: string = this.apiBaseUrl + '/students/' + student.id + '/attendances';
    return this.http
      .get(url)
      .toPromise()
      .then(response => response as Attendance[])
      .catch(this.handleError);
  }

  getOneStudent(id: String): Promise<Student> {
    const url: string = this.apiBaseUrl + '/students/' + id;
    return this.http
      .get(url)
      .toPromise()
      .then(response => response as Student)
      .catch(this.handleError);
  }

  saveProfile(student) {
    const url: string = this.apiBaseUrl + '/students/' + student.id;
    return this.http
      .put<Student>(url, student, {
        headers: new HttpHeaders({
          'Content-Type': 'application/json'
        })
      })
      .pipe(catchError(this.handleError));
  }

  savePhoto(student, selectedFile) {
    const url: string = this.apiBaseUrl + '/students/' + student.id;
    student.image = selectedFile;
    return this.http
      .put<Student>(url, student, {
        headers: new HttpHeaders({
          'Content-Type': 'application/json'
        })
      })
      .pipe(catchError(this.handleError));
  }

  getCourses(): Promise<Course[]> {
    const url: string = this.apiBaseUrl + '/courses';
    return this.http
      .get(url)
      .toPromise()
      .then(response => response as Course[])
      .catch(this.handleError);
  }


  registerCourse(studentId, courses): Observable<Course> {
    const url: string = this.apiBaseUrl + '/students/' + studentId + '/courses';
    return this.http
      .post<Course>(url, courses, {
        headers: new HttpHeaders({
          'Content-Type': 'application/json'
        })
      })
      .pipe(catchError(this.handleError));
  }

  getCoursesForOne(student): Promise<Course[]> {
    const url: string = this.apiBaseUrl + '/students/' + student.id + '/courses';
    return this.http
      .get(url)
      .toPromise()
      .then(response => response as Course[])
      .catch(this.handleError);
  }

  getAllCourses(): Promise<Course[]> {
    const url: string = this.apiBaseUrl + '/courses';
    return this.http
      .get(url)
      .toPromise()
      .then(response => response as Course[])
      .catch(this.handleError);
  }

  deleteCourse(id,student) {
    const url: string = this.apiBaseUrl + '/students/' + student.id+"/courses/"+id;
    return this.http.delete(url).pipe(catchError(this.handleError));;
  }

  deleteAccount(student) {
    const url: string = this.apiBaseUrl + '/users/' + student.id;
    return this.http.delete(url).pipe(catchError(this.handleError));

  }

  getAttendanceForCourse(course) : Promise<Attendance[]> {
    const url: string = this.apiBaseUrl + '/courses/' + course.id + '/attendances';
    console.log(url)
    return this.http
      .get(url)
      .toPromise()
      .then(response => response as Attendance[])
      .catch(this.handleError);
  }
}
