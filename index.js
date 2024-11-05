import express, { json } from "express"
import appRouter from "./routes/index.js";

const app = express();

//middlewares
app.use(express.json())


app.use("api/v1/products", appRouter)

const PORT = process.env.PORT || 5000;  
app.listen(PORT, ()=>console.log("Server is running at port: ", PORT))