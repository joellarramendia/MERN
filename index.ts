import express, {Express, Request, Response} from 'express';
import dotenv from 'dotenv';

//Configuration the .env file
dotenv.config();

//Create Express App
const app: Express = express();
const port: string | number = process.env.PORT || 8000;

//Define the first Route of APP
app.get('/', (req: Request, res: Response) => {
    // Send Hello World
    res.send('Welcome to APP Express + TS + Nodemon + Jest + Swagger + Mongoose');
});

//Define the second Route of APP
app.get('/hello', (req: Request, res: Response) => {
    // Send Hello World
    res.send('Welcome to GET Route: Hello World');
});



//Execute APP and Listen Requests to PORT
app.listen(port, () => {
    console.log(`EXPRESS SERVER: Running at http://localhost:${port}`);
})