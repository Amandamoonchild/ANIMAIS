import { Router } from "express";
import rotaAnimais from "./animais.routes.js";

const rotas = Router();

rotas.use("/animais", rotaAnimais);

rotas.get("/", (req, res) => {
    return res.status(200).send({ message: "Servidor 200 OK!"});
});

export default rotas;