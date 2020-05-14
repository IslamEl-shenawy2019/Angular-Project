import { Component, OnInit } from '@angular/core';
import { StudentApiService } from '../student-api.service';
import { Router } from '@angular/router'


@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {
  ProfilePicture;
  student:
  {Name:string,
  Age:number,
  Email:string
};
    ngOnInit(): void {
    }
  constructor(private studentApiService:StudentApiService , private routerOBJ : Router) { }
  handleFileInput(files: FileList) {
    var that=this;
    var reader  = new FileReader();
    reader.onloadend = function () {
      //console.log(typeof reader.result);
      that.ProfilePicture=reader.result;
    }
  reader.readAsDataURL(files[0]);
   }
  Submit(studentData){
    studentData.value['ProfilePicture']=this.ProfilePicture;
    console.log(studentData.value);
    this.studentApiService.postStudent(studentData.value);
    //here will post this student obj in the Api PostStudent
    this.routerOBJ.navigate(['..']);
  }
}
