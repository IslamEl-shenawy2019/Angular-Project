import { Component, OnInit } from '@angular/core';
import { StudentApiService } from '../student-api.service';
import {Output} from '@angular/core'


@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

constructor(private studentApiService:StudentApiService) { }

@Output( ) Students :any[]

  ngOnInit(): void {

    this.studentApiService.getStudents().subscribe((response) => {

      this.PopulateStudents(response)

    })

  }

  PopulateStudents(data){
    this.Students = data;
  }
  
}
