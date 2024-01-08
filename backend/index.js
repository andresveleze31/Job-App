import express from "express";
import dotenv from "dotenv";
import conectarDB from "./config/db.js";

import candidateRoutes from "./routes/candidateRoutes.js";

const app = express();

app.use(express.json());

dotenv.config();

conectarDB();

//Routing
app.use("/api/candidates", candidateRoutes);

app.listen(process.env.PORT, () => {
    console.log(`Escuchando en puerto ${process.env.PORT}`);
})