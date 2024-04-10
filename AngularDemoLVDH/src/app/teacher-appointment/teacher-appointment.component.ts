import { Component } from '@angular/core';

@Component({
  selector: 'teacher-appointment',
  templateUrl: './teacher-appointment.component.html',
  styleUrl: './teacher-appointment.component.css',
})
export class TeacherAppointmentComponent {
  public teacherIdSum: number = 0;
  public teacherIdParent: string = '';
  public teacherIdChild: number = 0;

  public changeTeacherId(value: any): void {
    this.teacherIdChild = Number(this.teacherIdParent);
  }

  public teacherIdChanged(value: any): void {
    // Gets called when the teacher id changed. The value is the changed teacher id.

    // Sums up the changed teacher ids and displays them
    this.teacherIdSum += value;
  }
}
