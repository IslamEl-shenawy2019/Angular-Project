import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class StudentApiService {
  private url = 'http://localhost:63139/api/student';
  constructor(private http:HttpClient ) { }


  getStudents(){
    return this.http.get(this.url);
  }

  getStudent(id:number){
    return this.http.get(this.url+'/'+id);
  }

  postStudent(student){
    this.http.post(this.url,student)
    .subscribe((response) => {
      console.log(response);
    })
  }

  deleteStudent(id:number){
    console.log("Delete")
    this.http.delete(this.url + '/' +id)
    .subscribe((response) => {
      
    })
  }

  putStudent(student){
    console.log("Edit")
    this.http.put(this.url,student)
    .subscribe((response) => {
      
    })
  }

  
}
