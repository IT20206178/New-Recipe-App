const express = require("express");
const mongoose= require("mongoose");
const bodyParser=require("body-parser");
const cors=require("cors");
const dotenv = require("dotenv");

const app=express();
dotenv.config();

const PORT=process.env.PORT || 8070;

app.use(cors());
app.use(bodyParser.json());   //pass key value pairs
app.use(express.json());


const URL = process.env.MONGODB_URL;

mongoose.connect(URL, {
    _useCreateIndex: true,
    get useCreateIndex() {
        return this._useCreateIndex;
    },
    set useCreateIndex(value) {
        this._useCreateIndex = value;
    },
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useFindAndModify:false
});

const connection = mongoose.connection;
connection.once("open",()=>{
    console.log("Mongodb Connection success!");
});

app.listen(PORT,()=>{
    console.log(`Server is up and running on port number: ${PORT}`)
});
