import { PrismaClient, Blog } from "@prisma/client";

export async function getUserBlogsModel ( id : number ) : Promise<Blog[]>
{
    const prisma = new PrismaClient();
    const usersBlogs = await prisma.blog.findMany(
        {
            where : {
                userId : id
            }
        }
        )
        return usersBlogs;
}