require('dotenv').config();
const PORT=process.env.PORT;

const express=require("express");

const app=express();

const connectWithDB=require('./utils/database');
connectWithDB();

const { v4: uuidv4 } = require('uuid');
const ingestRouter = require('./routes/ingest');
const statusRouter = require('./routes/status');


app.use(express.json());
app.use('/ingest', ingestRouter);
app.use('/status', statusRouter);

app.listen(PORT,()=>{
    console.log(`Server started on ${PORT}`);
}) 