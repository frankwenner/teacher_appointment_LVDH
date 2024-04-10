import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherAppointmentComponent } from './teacher-appointment.component';

describe('TeacherAppointmentComponent', () => {
  let component: TeacherAppointmentComponent;
  let fixture: ComponentFixture<TeacherAppointmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TeacherAppointmentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TeacherAppointmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
