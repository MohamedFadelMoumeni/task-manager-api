const express = require('express');
const connectDB = require('./db/connect');
const tasksRoutes = require('./routes/tasks');
require("dotenv").config();
const app = express();

app.use(express.json());
app.use("/api/v1/tasks", tasksRoutes);

const port = process.env.PORT || 3000;

const start  = async () => {
    try{
        await connectDB(process.env.MONGO_URI)
        app.listen(port, () => console.log(`server started at port 3000`));

    }catch(e){
        console.log(e.message);
    }
}

start();


