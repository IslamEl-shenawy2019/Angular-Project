import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router'
import { NgModule } from '@angular/core';
import { HttpClientModule }    from '@angular/common/http';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { StudentsComponent } from './students/students.component';
import { AboutComponent } from './about/about.component';
import { AddStudentComponent } from './add-student/add-student.component';
import { StudentProfileComponent } from './student-profile/student-profile.component';
import { StudentApiService } from './student-api.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    StudentsComponent,
    AboutComponent,
    AddStudentComponent,
    StudentProfileComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: '' , component : StudentsComponent },
      { path: 'About' , component : AboutComponent },
      { path: 'AddStudent' , component : AddStudentComponent },
      { path: 'Profile/:id' , component : StudentProfileComponent,pathMatch:'full' },
    ])
  ],
  providers: [
    StudentApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
