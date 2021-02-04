import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacultyQrCodeComponent } from './faculty-qr-code.component';

describe('FacultyQrCodeComponent', () => {
  let component: FacultyQrCodeComponent;
  let fixture: ComponentFixture<FacultyQrCodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FacultyQrCodeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FacultyQrCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
