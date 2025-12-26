import express,{Application, Request, Response} from 'express';
import bodyParser from 'body-parser';
import { connectDatabase } from './database/mongodb';
import { PORT } from './config';


import dotenv from "dotenv";
dotenv.config();
console.log(process.env.PORT);


import authRoutes from "./route/auth.route"
import bookRoutes from './route/book.route';

const app:Application = express();

// const PORT :number=3003;

app.use(bodyParser.json());

app.use('/api/auth', authRoutes);

app.get('/',(req:Request, res:Response)=>{
    console.log("hello")
    return res.send('Hello World');
});

app.use('/api/book', bookRoutes)



async function startServer(){
    await connectDatabase();
    app.listen(
    PORT,()=>{
        console.log(`Server: http://localhost:${PORT}`);
    }
);
}


startServer();