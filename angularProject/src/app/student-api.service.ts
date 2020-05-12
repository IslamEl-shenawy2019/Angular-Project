import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class StudentApiService {
  private url = 'http://localhost:63139/api/student';
  constructor(private http:HttpClient ) { }
  getStudents(){
    var students;
    this.http.get(this.url)
    .subscribe((resposnse) =>
      {
        console.log(resposnse);
        students=resposnse;
    })
    return students;
  }
  getStudent(id:number){
    var student;
    this.http.get(this.url+'/'+id)
    .subscribe((response) => {
      console.log(response);
      student=response;
    })
    return student;
  }
  postStudent(student){
    this.http.post(this.url,student)
    .subscribe((response) => {
      console.log(student);
    })
  }
}
