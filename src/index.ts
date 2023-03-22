import express, { Request, Response } from 'express';
import morgan from 'morgan';


const app = express();

app.use(morgan('dev'));


app.get('/',(req:Request,res:Response)=>{
    res.json({hello: 'world'});
})

const port = Number(process.env.PORT ?? 8080)
app.listen(port,'0.0.0.0',()=>{
    console.log(`started port at ${port}`);
    
})