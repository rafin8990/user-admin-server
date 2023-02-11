const express=require('express');
const cors=require('cors');
const { MongoClient, ServerApiVersion } = require('mongodb');
const app=express();
const port=process.env.PORT || 5000 ;
require('dotenv').config();


app.use(express.json());
app.use(cors());




const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.nuouh7o.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
 async function run (){
    try{

    }
    finally{

    }
 }
 run().catch(error=>console.error(error))


app.get('/', (req, res)=>{
    res.send('admin user server is running')
});

app.listen(port, ()=>{
    console.log(`admin user server is running on port ${port}`)
});