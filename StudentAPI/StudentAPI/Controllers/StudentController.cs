using Microsoft.Ajax.Utilities;
using StudentAPI.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Text;
using System.Web.Http;

namespace StudentAPI.Controllers
{
    public class StudentController : ApiController
    {
        private StudentContext DB;

        public StudentController()
        {
            DB = new StudentContext();
        }

        public IHttpActionResult GetStudent()
        {
            List<Student> studentsDB = new List<Student>();
            List<StudentModel> students = new List<StudentModel>();
            studentsDB = DB.Students.ToList();
            for (int i = 0; i < DB.Students.Count(); i++)
            {
                var temp = new StudentModel();
                temp.ID = studentsDB[i].ID;
                temp.Name = studentsDB[i].Name;
                temp.Age = studentsDB[i].Age;
                temp.Email = studentsDB[i].Email;
                if (studentsDB[i].ProfilePicture != null)
                {
                    temp.ProfilePicture = Encoding.ASCII.GetString(studentsDB[i].ProfilePicture);
                }
                students.Add(temp);
            }
            return Ok(students);
        }

        public IHttpActionResult GetStudent(int id)
        {
            Student std = DB.Students.Find(id);
            StudentModel studentModel;
            if (std != null) 
            {
                if(std.ProfilePicture!=null)
                    studentModel = new StudentModel()
                    {
                        ID = std.ID,
                        Age = std.Age,
                        Name = std.Name,
                        Email = std.Email,
                        ProfilePicture = Encoding.ASCII.GetString(std.ProfilePicture)
                    };
                else
                    studentModel = new StudentModel()
                    {
                        ID = std.ID,
                        Age = std.Age,
                        Name = std.Name,
                        Email = std.Email,
                        ProfilePicture = null
                    };
                return Ok(studentModel);
            }
            return NotFound();
        }

        public IHttpActionResult PostStudent(StudentModel std)
        {
            if(ModelState.IsValid)
            {
                Student student;
                if(std.ProfilePicture != null)
                    student = new Student()
                    {
                        ProfilePicture = Encoding.ASCII.GetBytes(std.ProfilePicture),
                        Name = std.Name,
                        Age = std.Age,
                        Email = std.Email
                    };
                else
                    student = new Student()
                    {
                        ProfilePicture = null,
                        Name = std.Name,
                        Age = std.Age,
                        Email = std.Email
                    };

                DB.Students.Add(student);
                DB.SaveChanges();
                return Ok(std);
            }
            return StatusCode(HttpStatusCode.BadRequest);
        }

        public IHttpActionResult PutStudent(StudentModel std)
        {
            if (ModelState.IsValid)
            {
                Student s = DB.Students.Find(std.ID);
                s.Name = std.Name;
                s.Email = std.Email;
                s.Age = std.Age;
                s.ProfilePicture = s.ProfilePicture;
                DB.SaveChanges();
                return Ok(std);
            }
            return StatusCode(HttpStatusCode.BadRequest);
        }

        public IHttpActionResult DeleteStudent(int id)
        {
            Student std = DB.Students.Find(id);
            if (std != null) 
            {
                DB.Students.Remove(std);
                DB.SaveChanges();
                return Ok(std);
            }
            return NotFound();
        }
        
    }
}
