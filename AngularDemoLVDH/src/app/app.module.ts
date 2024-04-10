import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TeacherAppointmentComponent } from './teacher-appointment/teacher-appointment.component';
import { TeacherComponent } from './teacher/teacher.component';
import { StudentComponent } from './student/student.component';
import { LabelModule } from '@progress/kendo-angular-label';
import { TextBoxModule } from '@progress/kendo-angular-inputs';

@NgModule({
  declarations: [
    AppComponent,
    TeacherAppointmentComponent,
    TeacherComponent,
    StudentComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, LabelModule, TextBoxModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
