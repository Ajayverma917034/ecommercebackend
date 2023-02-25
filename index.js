import express from 'express';

import dotenv from 'dotenv';
import cors from 'cors';
import bodyParser from 'body-parser';

import Connection from './database/db.js';
import DefaultData from './default.js';
import router from './routes/route.js';

const app = express();
dotenv.config();

app.use(cors());
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }))
app.use('/', router);
// const UTL = process.env.URL



const port = process.env.PORT || 8000;
const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;

const Url = `mongodb://${USERNAME}:${PASSWORD}@ac-c8oawuf-shard-00-00.bouabmm.mongodb.net:27017,ac-c8oawuf-shard-00-01.bouabmm.mongodb.net:27017,ac-c8oawuf-shard-00-02.bouabmm.mongodb.net:27017/?ssl=true&replicaSet=atlas-110j7b-shard-0&authSource=admin&retryWrites=true&w=majority`;

// const Url = process.env.URL
Connection(Url);

app.listen(port, () => {
    console.log(`server is running   on port ${port}`);
});

DefaultData();