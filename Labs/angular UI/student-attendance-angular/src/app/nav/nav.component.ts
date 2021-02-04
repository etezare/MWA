import {Component, OnInit,OnChanges, SimpleChanges} from '@angular/core';
import {Router} from '@angular/router';
import {StudentServiceService} from '../student-service.service';
import {SCREEN_SIZE} from '../size-detector/size-detector.component';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit, OnChanges {
  user;
  isfaculty: boolean;
  isloggedIn: boolean;
  size: SCREEN_SIZE;
  constructor(private router: Router,private resizeSvc: StudentServiceService) {
    this.isloggedIn = false;
    // this.resizeSvc.onResize$.subscribe(x => {
    //   this.size = x;
    // });
  }

  ngOnChanges(changes: SimpleChanges): void {

    }

  ngOnInit(): void {
    this.user = localStorage.getItem('user');
    console.log(this.user);
    if (this.user == 'faculty') {
      this.isfaculty = true;
      this.isloggedIn = true;
    } else if (this.user == null) {
      this.isloggedIn = false;
    } else {
      this.isfaculty = false;
      this.isloggedIn = true;
    }
    }


  logoutHandler() {
    localStorage.clear();
    this.isloggedIn = false;
    this.router.navigate(['']);
  }

}
