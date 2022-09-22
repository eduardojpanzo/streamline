import express from 'express'
import { router } from './routes';

const app = express();

app.use(express.json());

app.use(router);

app.listen(2447, ()=>console.log("seerver is running"));