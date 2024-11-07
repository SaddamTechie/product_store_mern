import express from 'express'; 
import { connectDB } from './config/db.js';
import dotenv from 'dotenv';
import path from "node:path"
import router from './routes/product.route.js';

dotenv.config();

const app = express();

const PORT = process.env.PORT || 8000;

const __dirname = path.resolve();

app.use(express.json()); //allows us to accept JSON data in the req.body;

app.use("/api/products",router)

if (process.env.NODE_ENV === "production") {
   app.use(express.static(path.join(__dirname,"/frontend/dist")));

   app.get("*",(req,res)=>{
    res.sendFile(path.resolve(__dirname,"frontend","dist","index.html"));
   })
}

app.listen(PORT,()=>{
    connectDB();
    console.log(`Server Started at http://localhost:${PORT}`);
})

