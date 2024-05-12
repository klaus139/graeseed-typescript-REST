import { app } from "./app";
import connectDB from "./utils/db";
require("dotenv").config();
//cloudinary config



const port = 8000;

//create server
app.listen(port, () => {
    console.log(`Server is connected with port ${port}`);
connectDB();
})
