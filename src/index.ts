import { PrismaClient } from '@prisma/client';
import express, { Request, Response } from 'express';
import morgan from 'morgan';

const db = new PrismaClient({log:['error','info','query','warn']}) //what we want to log

const seedDatabase = async() =>{
    if((await db.post.count())===0){
        await db.post.createMany({
            data: [{
                id: 'one',
                slug : 'first-page',
                title : 'First Page',
                publishedAt : new Date()
            },
            {
                id: 'two',
                slug :'draft-post',
                title: "Drafts"
            }

        ]
        })
    }
}

seedDatabase()
const app = express();

app.use(morgan('dev'));


app.get('/', async(req:Request,res:Response)=>{
    // debugger;
    const posts = await db.post.findMany()
    res.json(posts);
})

const port = Number(process.env.PORT ?? 8080)
app.listen(port,'0.0.0.0',()=>{
    console.log(`started port at ${port}`);
    
})