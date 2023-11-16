import { Animal } from "../models/animais/Animal.js";
import { AnimaisLista } from "../models/animais/Animais.js";

const list = new AnimaisLista();

let msg = "VIA CONTROLLER - Erro no dado:"

function verifyImage(url) {
    var extensoesPermitidas = ['jpg', 'jpeg', 'png', 'gif', 'bmp'];

    console.log(url)

    var extensao = url.split('.').pop().toLowerCase();

    return extensoesPermitidas.includes(extensao);
}


/// ver todos
export const getTodosAnimais = (req, res) => {
    const animais = list.getTodosAnimais();


    if (!animais.length) {
        return res.status(404).send({
            message: "Nenhum animal cadastrado!",
            status: "Not found",
            origem: "controller"

        })
    }

    return res.status(200).send({
        message: 'Todos os animais via controller',
        status: "200 OK",
        data: animais,
        quantidade: animais.length

    })


};


//ver por id
export const getAnimalPorID = (req, res) => {
    const { id } = req.params;
    return res.status(200).send({
        message: `Animal com ID ${id}`,
        origem: "Controller",
    });
};


///criar
export const createAnimal = (req, res) => {
    const { nome, tipo, idade, cor, img, status } = req.body;
    let msg = "VIA CONTROLLER - Erro no dado:"
    let cont = 0;

    if (nome.length < 3 || nome.length > 50) {
        msg += "Nome"
        cont++
    }

    if (typeof idade != 'number' || idade == "") {
        if (idade < 0 || Number.isInteger(idade) == false) {
            msg += "idade"
            cont++
        }
    }

    if (tipo.length > 30 || tipo == "") {
        msg += "cor"
        cont++
    }

    if (verifyImage(img) == false) {
        cont++;
        msg += "img";
    }

    if (typeof status != 'boolean' || status == "") {
        msg += "status"
        cont++
    }

    const animalNovo = new Animal(nome, tipo, idade, cor, img, status);
    console.log(animalNovo)

    if (cont == 0) {
        list.createAnimal(animalNovo);
        res.status(200).send({ message: "Animal cadastrado!", origem: "controller", data: "animal" })
    } else {
        res.status(400).send({ message: msg, status: "Not found" })
    }

}

/// editar
export const updateAnimal = (req, res) => {
    const { id } = req.params;
    const { nome, tipo, idade, cor, img, status } = req.body;

    let msg = "VIA CONTROLLER - Erro no dado:"
    let cont = 0;

    if (nome.length < 3 || nome.length > 50) {
        msg += "Nome"
        cont++
    }

    if (typeof idade != 'number' || idade == "") {
        if (idade < 0 || Number.isInteger(idade) == false) {
            msg += "idade"
            cont++
        }
    }

    if (tipo.length > 30 || tipo == "") {
        msg += "cor"
        cont++
    }

    if (typeof status != 'boolean' || status == "") {
        msg += "status"
        cont++
    }

    const animalNovo = new Animal(nome, tipo, idade, cor, img, status);

    if (cont == 0) {
        list.updateAnimal(Animal.id);
        res.status(200).send({ message: "Animal editado com sucesso!", origem: "controller", data: "animal" })
    } else {
        res.status(400).send({ message: msg, status: "Not found" })
    }

    return res.status(200).send({
        message: `Rota PUT animal com ID: ${id}`,
        origem: "Controller"
    });
}


///remover
export const removeAnimal = (req, res) => {
    const { id } = req.params;
    return res.status(200).
        send({
            message: `Rota DELETE animal com ID: ${id}`,
            origem: "Controller"
        });
}

