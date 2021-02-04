import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacultyRegisterCourseComponent } from './faculty-register-course.component';

describe('FacultyRegisterCourseComponent', () => {
  let component: FacultyRegisterCourseComponent;
  let fixture: ComponentFixture<FacultyRegisterCourseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FacultyRegisterCourseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FacultyRegisterCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
