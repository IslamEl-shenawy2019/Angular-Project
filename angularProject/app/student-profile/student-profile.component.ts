import { Component, OnInit, Output } from '@angular/core';
import { StudentApiService } from '../student-api.service';
import { Router } from '@angular/router'
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-student-profile',
  templateUrl: './student-profile.component.html',
  styleUrls: ['./student-profile.component.css']
})
export class StudentProfileComponent implements OnInit {

  constructor(private router: ActivatedRoute , private studentApiService:StudentApiService , private routerObj: Router) { }

  @Output() Student:any

  StudentID:number

  profileForm = new FormGroup({
    ID: new FormControl(''),
    Name : new FormControl('',Validators.maxLength(8)),
    Age: new FormControl('',Validators.compose([Validators.max(60),Validators.min(18)])),
    Email: new FormControl(''),
    ProfilePicture : new FormControl('')
  });

  ngOnInit(): void {
    // console.log(this.router.params['value'].id)
    this.StudentID = this.router.params['value'].id;
    this.studentApiService.getStudent(this.StudentID).subscribe((response) => {
    //console.log(response)
    this.PopulateStudent(response)
    this.profileForm.setValue(
      {
        ID:this.Student.ID,
        Name:this.Student.Name,
        Age:this.Student.Age,
        Email:this.Student.Email,
        ProfilePicture : this.Student.ProfilePicture
      })

    })
   }

   PopulateStudent(data){
    //  console.log(data)
      this.Student = data;
   }

   deleteStudent(){
    this.studentApiService.deleteStudent(this.StudentID);
    alert("Student Deleted !!");
    this.routerObj.navigate(['..']);
   }

   onSubmit() {
    // console.log(this.profileForm.value);
    this.Student = this.profileForm.value;
    this.studentApiService.putStudent(this.Student);
    alert("Student Edited Sucessfully !!");
    this.routerObj.navigate(['..']);
  }

  }
  


