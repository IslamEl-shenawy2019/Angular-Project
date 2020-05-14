using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace StudentAPI.Models
{
    public class StudentContext:DbContext
    {
        public StudentContext():base("name=StudentConnection")
        {

        }

        public virtual DbSet<Student> Students { get; set; }
    }
}