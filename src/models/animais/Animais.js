export class AnimaisLista{
    constructor(){
        this.animais = [];
    }

    getTodosAnimais(){
        return this.animais;
    }

    getAnimalPorID(){
        return this.animais;
        find((animal) => animal.id ==id)
    } 

    createAnimal(animal){
        console.log("entrou no add", animal)
        this.animais.push(animal);
    }


//falta checar img, e ver se o tipo está certo!!

    updateAnimal(id, nome, tipo, idade, cor, img, status){
        const animal = this.getAnimalPorID(id);

        animal.nome = nome;
        animal.tipo = tipo;
        animal.idade = idade;
        animal.cor = cor;
        animal.img = img;
        animal.status = status;

        return animal;
    }

    removeAnimal(animalID){
        this.animais = this.animais.filter((animal) => animal.id != animalID);
    }
    }
