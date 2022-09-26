import express from 'express';
import { PrismaClient } from '@prisma/client';
import { headstart } from './startup/headstart'
import { middleware } from './middleware/middleware';
const app = express();
const port = 3000;

app.use(middleware);
// app.use('/user', require('./modules/User/UserRoutes/UserRoute'));
console.log("what")
app.use('/blog', require('./modules/Blog/BlogRoutes/BlogRoute'));
console.log("what")
// app.use('/contact', require('./routes/userRoutes/UserRoute'));

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});