import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacultyEditRegisteredCourseComponent } from './faculty-edit-registered-course.component';

describe('FacultyEditRegisteredCourseComponent', () => {
  let component: FacultyEditRegisteredCourseComponent;
  let fixture: ComponentFixture<FacultyEditRegisteredCourseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FacultyEditRegisteredCourseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FacultyEditRegisteredCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
