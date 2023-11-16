import { Router } from "express";
import { 
    createAnimal, 
    getAnimalPorID, 
    getTodosAnimais, 
    removeAnimal, 
    updateAnimal } 
from "../controllers/animais.controller.js";

const rotaAnimais = Router();

rotaAnimais.get("/", getTodosAnimais);

rotaAnimais.get("/:id", getAnimalPorID);

rotaAnimais.post("/", createAnimal);

rotaAnimais.put("/:id", updateAnimal);

rotaAnimais.delete("/:id", removeAnimal);


export default rotaAnimais;

