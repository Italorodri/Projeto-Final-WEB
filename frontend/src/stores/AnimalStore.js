//import api from "../services/api";
import { defineStore } from 'pinia'

export const useAnimalStore = defineStore('animalStore', {
    state: () => ({
        animals: []
    }),
    getters:{
        saves(){
            return this.animals.filter(t => t.salvo);
        },
        criados(){
            return this.animals.filter(t => t.criado);
        }
    },
    actions:{
        async getAnimals(){
            const res = await fetch('http://localhost:3000/animals');
            const data = await res.json();

            this.animals = data;
        },
        async addAnimal(animal){
            this.animals.push(animal);

            const res = await fetch('http://localhost:3000/animals', {
                method: 'POST',
                body: JSON.stringify(animal),
                headers: {'Content-Type': 'application/json'}
            });

            if(res.error){
                console.log(res.error);
            }
        },
        async deleteAnimal(id){
            this.animals = this.animals.filter(t => {
                return t.id !== id;
            });

            const res = await fetch('http://localhost:3000/animals/'+id, {
                method: 'DELETE',
            });

            if(res.error){
                console.log(res.error);
            }
        },
        async salvarAnimal(id){
            const animal = this.animals.find(t => t.id === id);
            animal.salvo = !animal.salvo;

            const res = await fetch('http://localhost:3000/animals/'+id, {
                method: 'PATCH',
                body: JSON.stringify({ salvo: animal.salvo}),
                headers: {'Content-Type': 'application/json'}
            });

            if(res.error){
                console.log(res.error);
            }
        }
    }
})