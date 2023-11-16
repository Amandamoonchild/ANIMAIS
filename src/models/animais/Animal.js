import {v4 as uuidv4} from 'uuid';

export class Animal{
    constructor(nome, tipo, idade, cor, img, status, id){
        this.id = uuidv4();
        this.nome = nome;
        this.tipo = tipo;
        this.idade = idade;
        this.cor = cor;
        this.img = img;
        this.status = status;
    }
}