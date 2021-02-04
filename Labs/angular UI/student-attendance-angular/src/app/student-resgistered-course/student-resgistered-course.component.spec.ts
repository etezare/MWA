import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentResgisteredCourseComponent } from './student-resgistered-course.component';

describe('StudentResgisteredCourseComponent', () => {
  let component: StudentResgisteredCourseComponent;
  let fixture: ComponentFixture<StudentResgisteredCourseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentResgisteredCourseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentResgisteredCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
