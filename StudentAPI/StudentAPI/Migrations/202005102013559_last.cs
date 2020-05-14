namespace StudentAPI.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class last : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.Students",
                c => new
                    {
                        ID = c.Int(nullable: false, identity: true),
                        Name = c.String(nullable: false, maxLength: 8),
                        Age = c.Int(nullable: false),
                        Email = c.String(nullable: false),
                        ProfilePicture = c.Binary(),
                    })
                .PrimaryKey(t => t.ID);
        }

        public override void Down()
        {
            DropTable("dbo.Students");
        }
    }
}
