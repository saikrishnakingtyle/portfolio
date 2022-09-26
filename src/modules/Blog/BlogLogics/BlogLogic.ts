import { Blog } from "@prisma/client";
import { getUserBlogsModel } from "../BlogModels/BlogModel";

export async function getUserBlogsLogic (id: number)
{
    try {
    const userBlogs = await getUserBlogsModel (id);
    return userBlogs;
    } catch (error) {
        console.log(error)
    }
}