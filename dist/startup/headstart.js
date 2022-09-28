"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.headstart = void 0;
const client_1 = require("@prisma/client");
class headstart {
    blogInsert() {
        return __awaiter(this, void 0, void 0, function* () {
            const prisma = new client_1.PrismaClient();
            const user2 = yield prisma.blog.create({
                data: {
                    title: "test",
                    content: "testing",
                    link: "www.google.com",
                    publish: true,
                    userId: 1,
                    createdAt: new Date()
                }
            });
            console.log(user2);
        });
    }
    bulkInsertActivityLogs() {
        return __awaiter(this, void 0, void 0, function* () {
            const prisma = new client_1.PrismaClient();
            const activityLogs = yield prisma.activityLogs.createMany({
                data: [
                    {
                        date: "27-09-2022",
                        description: "worked on some of the modules in inventory.",
                        userId: 1
                    },
                    {
                        date: "26-09-2022",
                        description: "Attended a interview and it didn't go well as expected.",
                        userId: 1
                    }
                ]
            });
            return activityLogs;
        });
    }
    bulkInsertWorkLogs() {
        return __awaiter(this, void 0, void 0, function* () {
            const prisma = new client_1.PrismaClient();
            const workLogs = yield prisma.workLogs.createMany({
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
                        activityLogId: 1,
                        title: "testing",
                        description: "this is a test.",
                        content: "this is just a test."
                    }
                ]
            });
            return workLogs;
        });
    }
    singleWorkLogsInsert() {
        return __awaiter(this, void 0, void 0, function* () {
            const prisma = new client_1.PrismaClient();
            const worklog = yield prisma.workLogs.create({
                data: {
                    activityLogId: 1,
                    title: "testing",
                    description: "this is a test.",
                    content: "this is just a test."
                }
            });
            return worklog;
        });
    }
    bulkInsert() {
        return __awaiter(this, void 0, void 0, function* () {
            const prisma = new client_1.PrismaClient();
            const blogs = yield prisma.blog.createMany({
                data: [
                    {
                        title: "test",
                        content: "testing",
                        link: "www.google.com",
                        publish: true,
                        userId: 1,
                        createdAt: new Date()
                    }, {
                        title: "test",
                        content: "testing",
                        link: "www.google.com",
                        publish: true,
                        userId: 2,
                        createdAt: new Date()
                    }
                ]
            });
            console.log(blogs);
            // return blogs;
        });
    }
    getAllBlog() {
        return __awaiter(this, void 0, void 0, function* () {
            const prisma = new client_1.PrismaClient();
            const user1 = yield prisma.blog.findMany();
            console.log(user1);
        });
    }
    userInsert() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const prisma = new client_1.PrismaClient();
                const data = yield prisma.user.create({
                    data: {
                        name: "Sai Krishna",
                        mail: "saikingstyle@gmail.com",
                        password: "helloworld",
                        isActive: true,
                    }
                });
                console.log(data);
            }
            catch (error) {
                console.log(error);
            }
        });
    }
    getAllUser() {
        return __awaiter(this, void 0, void 0, function* () {
            const prisma = new client_1.PrismaClient();
            const users = yield prisma.user.findMany();
            console.log(users);
        });
    }
}
exports.headstart = headstart;
//# sourceMappingURL=headstart.js.map