import { PrismaClient, User } from "@prisma/client";

export async function getUser(email: string, password: string): Promise<User> {
    const prisma = new PrismaClient();
        const users = await prisma.user.findFirst({
            where: {
                mail: email,
                password: password
            },
          })
        console.log(users);
        return users;
}

export async function getUserData(id: number)
{
    const prisma = new PrismaClient();
    const userData = await prisma.user.findFirst(
        {
            where: {
                id: id
            }
        }
        );
        console.log(userData);
        return userData;
}