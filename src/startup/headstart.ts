import { PrismaClient } from "@prisma/client";

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