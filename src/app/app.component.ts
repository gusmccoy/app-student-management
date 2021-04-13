import { Component, OnInit } from '@angular/core';
import { StudentService } from './student-service';
import { Student } from './student.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'seminar-demo-fe';

  students: Student[] = [];
  editing: boolean = false;
  selectedstudent: Student | undefined;

  constructor(private studentService: StudentService) { }

  ngOnInit() {
    this.studentService.populateWithTestData().subscribe();
  }

  getAllStudents(): void {
    this.studentService.getAllStudents().subscribe(data => this.students = data);
  }

  deleteStudent(): void {
    console.log("Delete Called");
    this.studentService.deleteStudent(this.students[this.students.length - 1].id).subscribe();
    this.students.pop();
  }

  onRowEditSave(student: Student) {
    console.log('Row edit saved ID = ' + student.id);
    this.studentService.postNewStudent(student).subscribe();
  }

  onRowEditInit(student: Student) {
    this.editing = true;
  }

  newRow() {
    return { id: this.students.length + 1, firstName: '', lastName: '', major: '', gpa: '' };
  }
}
