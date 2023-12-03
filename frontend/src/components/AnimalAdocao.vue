<template>
    <div class="linha">
        <!-- <div class="caixa" data-bs-toggle="modal" data-bs-target=".animal1">
            <img src="#" alt="Nenhuma imagem ainda">
            <h2 class="reduzido">Suzy</h2>
            <p class="reduzido"><strong>Tipo de animal:</strong> </p>
            <p class="reduzido"><strong>Idade:</strong> </p>
            <p class="reduzido"><strong>Sexo:</strong> </p>
        </div>

        /*
            Da HOME
            <div class="caixa" data-bs-toggle="modal" data-bs-target=".animal1">
                <img src="https://images.pexels.com/photos/15347387/pexels-photo-15347387/free-photo-of-animal-bicho-fotografia-animal-fotografia-de-animais.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1260&amp;h=750&amp;dpr=1" alt="grátis Foto profissional grátis de animal, cachorro, cachorros Foto profissional">
                <h2 class="reduzido">Suzy</h2>
                <p class="reduzido"><strong>Tipo de animal:</strong> Cachorro</p>
                <p class="reduzido"><strong>Idade:</strong> 4 anos</p>
                <p class="reduzido"><strong>Sexo:</strong> Fêmea</p>
            </div>
        */

        <div class="modal animal1" tabindex="-1">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="card">
                        <img src="https://images.pexels.com/photos/15347387/pexels-photo-15347387/free-photo-of-animal-bicho-fotografia-animal-fotografia-de-animais.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1260&amp;h=750&amp;dpr=1" alt="grátis Foto profissional grátis de animal, cachorro, cachorros Foto profissional">
                        <div class="card-body">
                        <h5 class="card-title d-flex justify-content-center">Nome: </h5>
                        <div class="card-text descricao d-flex align-content-left">
                                <p><strong>Tipo de animal:</strong> </p>
                                <p><strong>Sexo:</strong> </p>
                                <p><strong>Idade:</strong> </p>
                                <p><strong>Vacinado(a):</strong> </p>
                                <p><strong>Castrado(a):</strong> </p>
                                <p><strong>Detalhes adicionais:</strong> </p>
                        </div>
                        <div class="botoes">
                            <button type="submit" class="adotar btn btn-primary">Quero adotar</button>
                            <button type="submit" class="cancelar btn btn-danger">Cancelar</button>
                        </div>
                        <form id="formulario" class="formulario2">
                            <div>
                                <label for="inputText" class="form-label"></label>
                                <textarea @keydown="contagemTexto()" class="form-control" id="inputText" placeholder="Comente algo..."></textarea>
                            </div>
                            <div class="row mt-3 mb-3">
                                <strong><span class="contadorModal d-flex justify-content-center"></span></strong>
                            </div>
                            <div class="btn-comentar d-flex justify-content-center py-2">
                                <button @click="comentar()" type="submit" id="Comentar" class="Comentar btn btn-primary" disabled>Comentar</button>
                            </div>
                        </form>
                        <div id="commentPost"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div> -->

        <div v-for="animal in animalStore.saves" :key="animal.id" class="caixa" data-bs-toggle="modal" :data-bs-target="'#animalModal-' + animal.id">
            <AnimalDetails :animal="animal" />
        </div>

        <div v-for="animal in animalStore.animals" :key="animal.id">
            <div class="modal" :id="'animalModal-' + animal.id" tabindex="-1">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="card">
                            <img :src="animal.imagem">
                            <div class="card-body">
                                <h5 class="card-title d-flex justify-content-center">Nome: {{ animal.nome }}</h5>
                                <div class="card-text descricao d-flex align-content-left">
                                        <p><strong>Tipo de animal:</strong> {{ animal.tipo }}</p>
                                        <p><strong>Sexo:</strong> {{ animal.sexo }}</p>
                                        <p><strong>Idade:</strong> {{ animal.idade }}</p>
                                        <p><strong>Vacinado(a):</strong> {{ animal.vacinado }}</p>
                                        <p><strong>Castrado(a):</strong> {{ animal.castrado }}</p>
                                        <p><strong>Detalhes adicionais:</strong> {{ animal.detalhes }}</p>
                                </div>
                                <div class="botoes">
                                    <button type="submit" class="adotar btn btn-primary" @click="animalStore.salvarAnimal(animal.id), adotarAnimal(animal.id)"  :disabled="adotarDesabilitado">Quero adotar</button>
                                    <button type="submit" class="cancelar btn btn-danger" @click="animalStore.salvarAnimal(animal.id), cancelarAdocao(animal.id)" :disabled="cancelarDesabilitado">Cancelar</button>
                                </div>
                                <form id="formulario" class="formulario3">
                                    <div>
                                        <label for="inputText" class="form-label"></label>
                                        <textarea @keydown="contagemTexto()" class="form-control" id="inputText" placeholder="Comente algo..."></textarea>
                                    </div>
                                    <div class="row mt-3 mb-3">
                                        <strong><span class="contadorModal d-flex justify-content-center"></span></strong>
                                    </div>
                                    <div class="btn-comentar d-flex justify-content-center py-2">
                                        <button @click="comentar()" type="submit" id="Comentar" class="Comentar btn btn-primary" disabled>Comentar</button>
                                    </div>
                                </form>
                                <div id="commentPost"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import { useAnimalStore } from '../stores/AnimalStore'
    import AnimalDetails from '../components/AnimalDetails.vue'

    export default ({
        name: "AnimalAdocao",
        data(){
            return {
                adotarDesabilitado: true,
                cancelarDesabilitado: false
            }
        },
        setup(){
            const animalStore = useAnimalStore();

            return { animalStore };
        },
        components:{
            AnimalDetails
        },
        methods:{
            adotarAnimal(animalId) {
                this.adotarDesabilitado = true;
                this.cancelarDesabilitado = false;
            },
            cancelarAdocao(animalId) {
                this.cancelarDesabilitado = true;
                this.adotarDesabilitado = false;
            },
            contagemTexto(){
                const limite = 300;

                function text(textarea, textoContagem, btn) {
                    let tamanho = textarea.value.length;
                    let cont = limite - tamanho;
                    let frasePronta;
                    
                    textoContagem.innerHTML = cont;

                    const palavra = textarea.value;
                    
                    if(cont < 200 && cont >= 101){
                        textoContagem.style.color = "rgb(0, 0, 175)";
                        btn.disabled = false;
                        frasePronta = " caracteres restantes";
                    }else if(cont <= 100 && cont >= 51){
                        textoContagem.style.color = "green";
                        btn.disabled = false;
                        frasePronta = " caracteres restantes";
                    }else if(cont <= 50 && cont >= 21){
                        textoContagem.style.color = "rgb(197, 197, 25)";
                        btn.disabled = false;
                        frasePronta = " caracteres restantes";
                    }else if(cont <= 20 && cont > 0){
                        textoContagem.style.color = "orange";
                        btn.disabled = false;
                        frasePronta = " caractere(s) restante(s)";
                    }else if(cont <= 0){
                        textoContagem.style.color = "red";
                        btn.disabled = true;
                        frasePronta = "! Limite atingido";
                    }else if(palavra == ""){
                        textoContagem.style.color = "black";
                        btn.disabled = true;
                        frasePronta = " caracteres disponíneis";
                    }else{
                        textoContagem.style.color = "dark-gray";
                        btn.disabled = false;
                        frasePronta = " letras restantes";
                    }

                    textoContagem.innerHTML += frasePronta;
                }

                const qtd = document.querySelectorAll("#Comentar");
                const textareas = document.getElementsByTagName("textarea");
                const contadores = document.querySelectorAll(".contadorModal");

                for (let i = 0; i < textareas.length; ++i) {
                    textareas[i].addEventListener("input", function () {
                        this.style.height = "auto";
                        this.style.height = `${this.scrollHeight}px`;

                        text(textareas[i], contadores[i], qtd[i]);
                    });
                }
            },
            comentar(){
                const textComment = document.querySelectorAll("#inputText");
                const form = document.querySelectorAll("#formulario");
                const commentPost = document.querySelectorAll("#commentPost");

                for (let i = 0; i < form.length; ++i) {
                    const handleSubmit = (event) => {
                        event.preventDefault();

                        let p = document.createElement("p");
                        p.classList = "p-2 d-flex text-wrap flex-wrap comment";
                        p.style.overflowWrap = "anywhere";
                        p.innerHTML = `<strong>Username: </strong> &nbsp ${textComment[i].value}`;
                        commentPost[i].appendChild(p);
                        textComment[i].value = "";

                        form[i].removeEventListener("submit", handleSubmit);
                    };

                    form[i].addEventListener("submit", handleSubmit);
                }
            }
        },
        mounted() {
            window.onload = () => {
                const qtd = document.querySelectorAll("#Comentar");
                const textareas = document.getElementsByTagName("textarea");

                for (let i = 0; i < textareas.length; ++i) {
                    console.log(qtd.length);
                }
            }
        }
    })
</script>

<style scoped>
    #salvos .caixa img, #editar .caixa img{
        width: 100%;
        height: auto;
        border-radius: 20px;
    }

    #salvos .caixa h2, #editar .caixa h2{
        border: none;
    }
    
    #salvos .linha .caixa, #editar .linha .caixa{
        margin-top: 20px;
        margin-left: 25px;
        margin-bottom: 10px;
        width: 350px;
        height: fit-content;
        box-shadow: 0px 8px 10px black;
        border-radius: 20px;
        background-color: white;
        display: flex;
        flex-flow: column wrap;
    }

    #salvos .caixa:hover, #editar .caixa:hover{
        background-color: rgb(184, 184, 184);
    }

    .descricao{
        display: flex;
        flex-flow: column wrap;
    }

    h2{
        margin-top: 20px;
        margin-bottom: 15px;
        display: flex;
        align-self: center;
    }

    .reduzido{
        margin-left: 15px;
    }

    .card{
        height: fit-content;
    }

    .card img{
        width: 100%;
        height: fit-content;
        margin-bottom: 20px;
    }

    .card-body{
        display: flex;
        flex-flow: column wrap;
    }

    .botoes{
        display: flex;
        justify-content: center;
        margin-top: 30px;
    }

    .adotar{
        margin-right: 20px;
    }

    .btn-comentar{
        margin-top: 10px;
    }
</style>