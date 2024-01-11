import express from "express";
import dotenv from "dotenv";
import conectarDB from "./config/db.js";
import cors from "cors";

import candidateRoutes from "./routes/candidateRoutes.js";
import foreignRoutes from "./routes/foreignRoutes.js";
import { ingresarDatos } from "./config/seed.js";

const app = express();

app.use(express.json());

dotenv.config();

conectarDB();

//Configurar CORS.
const whiteList = [process.env.FRONT_URL || "http://localhost:5173"];
const corsOptions = {
    origin: function(origin, callback){
        if(whiteList.includes(origin)){
            //Puede Consultar API
            callback(null, true);
        }else{
            //No esta Permitido
            callback(new Error("Error de Cors"));
        }
    }
}
app.use(cors(corsOptions))

//Seeding

//Routing
app.use("/api/candidates", candidateRoutes);
app.use("/api/foreign", foreignRoutes);

app.listen(process.env.PORT, () => {
    console.log(`Escuchando en puerto ${process.env.PORT}`);
})