import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";
import { Student } from "./student.model";

@Injectable()
export class StudentService {

    constructor(private http: HttpClient) {}

    populateWithTestData(): Observable<string[]> {
        return this.http.get<string[]>('http://localhost:8080/populate');
    }

    getAllStudents(): Observable<Student[]> {
        return this.http.get<Student[]>('http://localhost:8080/student/all');
    }

    postNewStudent(student: Student): Observable<any> {
        return this.http.post(`http://localhost:8080/student/new`, student);
    }

    updateStudent(student: Student): Observable<any> {
        return this.http.put(`http://localhost:8080/student/update`, student);
    }

    deleteStudent(id: number): Observable<any> {
        return this.http.delete(`http://localhost:8080/student/delete/${id}`);
    }
}