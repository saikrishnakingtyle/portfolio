import { prisma, PrismaClient } from "@prisma/client";

export class headstart {
    async blogInsert():Promise<any>
    {
        const prisma = new PrismaClient()
        const user2 = await prisma.blog.create({
            data:{
              title: "test",
              content: "testing",
              link: "www.google.com",
              publish: true,
              userId: 1,
              createdAt: new Date()
            }
          }
          )
          console.log(user2)
    }
    async bulkInsertActivityLogs()
    {
        const prisma = new PrismaClient();
        const activityLogs = await prisma.activityLogs.createMany(
            {
                data: [
                    {
                        date: "27-09-2022",
                        description: "worked on some of the modules in inventory."
                    },
                    {
                        date: "26-09-2022",
                        description: "Attended a interview and it didn't go well as expected."
                    }
                ]
            }
        )
    }
    async bulkInsertWorkLogs()
    {
        const prisma = new PrismaClient();
        const workLogs = await prisma.workLogs.createMany(
            {
                data: [
                    {
                        activityLogId: 1,
                        title: "testing",
                        description: "this is a test.",
                        content: "this is just a test."
                    },
                    {
                        activityLogId: 2,
                        title: "testing",
                        description: "this is a test.",
                        content: "this is just a test."
                    },
                    {
                        activityLogId: 3,
                        title: "testing",
                        description: "this is a test.",
                        content: "this is just a test."
                    }
                ]
            }
        )
        
        return workLogs;
    }
    async singleWorkLogsInsert(){
        const prisma = new PrismaClient();
        const worklog = await prisma.workLogs.create(
            {
                data: {
                            activityLogId: 1,
                            title: "testing",
                            description: "this is a test.",
                            content: "this is just a test."
                }
            }
        )
        return worklog;
    }
    async bulkInsert()
    {
        const prisma = new PrismaClient();
        const blogs = await prisma.blog.createMany({
            data: [
                {
                    title: "test",
                    content: "testing",
                    link: "www.google.com",
                    publish: true,
                    userId: 1,
                    createdAt: new Date()
                  },{
                    title: "test",
                    content: "testing",
                    link: "www.google.com",
                    publish: true,
                    userId: 2,
                    createdAt: new Date()
                  }
            ]
        })
        console.log(blogs)
        // return blogs;
    }
    async getAllBlog() 
    {
        const prisma = new PrismaClient()
        const user1 = await prisma.blog.findMany();
        console.log(user1)
    }
    async userInsert()
    {
        try{
        const prisma = new PrismaClient()
        const data = await prisma.user.create({
            data: {
                name: "Sai Krishna",
                mail: "saikingstryl@gmail.com",
                password: "helloworld",
                isActive: true,
            }
        })
        console.log(data)
    } catch(error) {
        console.log(error)
    }
    }
    async getAllUser() 
    {
        const prisma = new PrismaClient();
        const users = await prisma.user.findMany();
        console.log(users);
    }
}