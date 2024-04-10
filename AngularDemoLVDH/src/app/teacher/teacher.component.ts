import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'teacher',
  templateUrl: './teacher.component.html',
  styleUrl: './teacher.component.css',
})
export class TeacherComponent implements OnChanges {
  // ToDo implement the new properties
  @Input() public teacherId: number = 0;
  @Output() public teacherIdChanged = new EventEmitter<number>();

  ngOnChanges(changes: SimpleChanges) {
    if (changes['teacherId']) {
      this.__UpdateTeacherId();
    }
  }
  private __UpdateTeacherId(): void {
    this.teacherIdChanged.emit(this.teacherId);
  }
}
