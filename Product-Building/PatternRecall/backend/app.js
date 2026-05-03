import express from "express";
import cors from "cors";
import patternRoutes from "./routes/patternRoutes.js"


const app = express();

app.use(cors());
app.use(express.json());

// connecting route to app 

app.use("/api",patternRoutes)


export default app;