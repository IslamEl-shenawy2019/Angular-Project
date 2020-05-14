using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace StudentAPI.Models
{
    public class Student
    {
        [Key]
        public int ID { get; set; }
        [Required]
        [StringLength(8)]
        public string Name { get; set; }
        [Required]
        [Range(18,60)]
        public int Age { get; set; }
        [Required]
        [EmailAddress]
        public string Email { get; set; }
        //[Required]
        public byte [] ProfilePicture { get; set; }

    }
}