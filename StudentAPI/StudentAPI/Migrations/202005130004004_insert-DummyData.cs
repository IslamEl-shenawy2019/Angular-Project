namespace StudentAPI.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class insertDummyData : DbMigration
    {
        public override void Up()
        {
            Sql("Insert Into Students(Name,Age,Email) Values('Hamada', '23', 'H@a')");
        }
        
        public override void Down()
        {
        }
    }
}
