import dotenv from 'dotenv';
dotenv.config();
import 'reflect-metadata';
import './shared/infra/typeorm'; // Database configuration
import express from 'express';
import User from './modules/user/infra/typeorm/entities/User';

import { route } from './router';
const app = express();

app.use(express.json());
app.use(route);

// app.get('/', async (req, res) => {
//   try {
//     const user = new User();
//     user.firstName = 'Timber';
//     user.lastName = 'Saw';
//     user.age = 25;
//     await user.save();

//     res.send(await User.find());
//   } catch (err) {
//     console.log(err);
//   }
// });

export default app;
