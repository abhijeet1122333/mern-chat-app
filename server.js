const express = require('express');
const dotenv = require("dotenv");
const { chats } = require("./data/data");
const connectDB = require("./config/db");
const colors = require("colors");
const userRoutes = require("./routes/userRoutes");
dotenv.config();
connectDB();
const app = express();
app.use(express.json());

app.get('/',(req,res) => {
    res.send("API is Running Successfully");
});
 app.use('/api/user',userRoutes)
const PORT = process.env.PORT  || 5500

app.listen(5500, console.log(`Server started on PORT ${PORT}`.yellow.bold));

