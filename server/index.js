import express from 'express';
import bodyParser from 'body-parser';
import env from 'dotenv';
import pg from "pg";
import cors from 'cors';

const app = express();
app.use(bodyParser.urlencoded({extended:true}));
app.use(cors());
env.config();

const db = new pg.Client({
    user: process.env.PG_USER,
    host: process.env.PG_HOST,
    database: process.env.PG_DB,
    password: process.env.PG_PASS,
    port: process.env.PG_PORT,
});
db.connect();

app.get('/get/listItems', async (req,res)=> {
    const result = await db.query("SELECT * FROM todoItems");
    res.json(result.rows);
    console.log("GET");
});

app.post('/post/item', async (req,res) => {
    await db.query("INSERT INTO todoItems(name,descr) VALUES ($1,$2)",[req.body.name,req.body.descr]);
    console.log("POST",req.body);
});

app.post('/patch/:id',(req,res)=>{
    const id = req.params.id;
    db.query('UPDATE todoitems SET name = $1, descr = $2 WHERE id = $3',[req.body.name,req.body.descr,req.params.id]);
})

app.listen(process.env.PORT, () => {
    console.log(`Server running on port 3000`);
});