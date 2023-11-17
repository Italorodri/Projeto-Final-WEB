<template>
        <div class="pagina_central perfil_page">
            <Coluna1 />
            <div class="col2">
                <Header :mostrar_btn="mostrar_btn" />
                <section>
                    <Profile />
                    <div class="content">
                        <nav>
                            <div>
                                <a href="#" @click="mostrarSecao('salvos')">Salvos</a>
                            </div>
                            <div>
                                <a href="#" @click="mostrarSecao('editar')">Editar</a>
                            </div>
                        </nav>
                        <hr>
                        <section id="salvos" class="conteudo secao-ativa" v-show="secaoAtiva === 'salvos'">
                            <div class="linha">
                                <div class="caixa" data-bs-toggle="modal" data-bs-target=".animal1">
                                    <img src="#" alt="Nenhuma imagem ainda">
                                    <h2 class="reduzido">Suzy</h2>
                                    <p class="reduzido"><strong>Tipo de animal:</strong> </p>
                                    <p class="reduzido"><strong>Idade:</strong> </p>
                                    <p class="reduzido"><strong>Sexo:</strong> </p>
                                </div>
                                <div class="caixa" data-bs-toggle="modal" data-bs-target=".pedido">
                                    <img src="#" alt="Nenhuma imagem ainda">
                                    <h2 class="reduzido">Fulano quer adotar Suzy</h2>
                                    <p class="reduzido"><strong>E-mail:</strong> </p>
                                    <p class="reduzido"><strong>Idade:</strong> </p>
                                    <p class="reduzido"><strong>Telefone:</strong> </p>
                                </div>
                
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
                                                        <button @click="comentar()" type="submit" id="Comentar" class="Comentar btn btn-primary">Comentar</button>
                                                    </div>
                                                </form>
                                                <div id="commentPost"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="modal pedido" tabindex="-1">
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
                                                        <p><strong>Fulano quer adotar Suzy</strong> </p>
                                                </div>
                                                <div class="botoes">
                                                    <button type="submit" class="adotar btn btn-primary">Aceitar</button>
                                                    <button type="submit" class="cancelar btn btn-danger">Negar</button>
                                                </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        
                        <section id="editar" class="conteudo secao-ativa" v-show="secaoAtiva === 'editar'">
                            <div class="linha">
                                <div class="caixa" data-bs-toggle="modal" data-bs-target=".animal2">
                                    <img src="#" alt="Nenhuma imagem ainda">
                                    <h2 class="reduzido">Edgar</h2>
                                    <p class="reduzido"><strong>Tipo de animal:</strong> </p>
                                    <p class="reduzido"><strong>Idade:</strong> </p>
                                    <p class="reduzido"><strong>Sexo:</strong> </p>
                                </div>
                
                                <div class="modal animal2" tabindex="-1">
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
                                                    <button type="submit" class="cancelar btn btn-danger">Excluir</button>
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
                                                        <button @click="comentar()" type="submit" id="Comentar" class="Comentar btn btn-primary">Comentar</button>
                                                    </div>
                                                </form>
                                                <div id="commentPost"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <button class="add_animal" alt="Adicionar animal para adoção"  data-bs-toggle="modal" data-bs-target=".animal3"><i class="bi bi-plus"></i></button>
                            
                            <div class="modal animal3" tabindex="-1">
                                <div class="modal-dialog">
                                    <div class="modal-content">
                                        <div class="modal-header">
                                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                        </div>
                                        <div class="card">
                                            <!-- <img src="#" alt="Foto do animal"> -->
                                            <div class="card-body">
                                                <div class="card-text descricao d-flex align-content-left">
                                                    <form id="formulario" class="formulario4">
                                                        <img src="#" alt="Foto do animal">
                                                        <div class="selecionar_foto">
                                                            <button type="button" id="alterar_foto" class="btn btn-dark">Selecionar foto</button>
                                                        </div>
                                                        <div class="form-floating">
                                                            <select class="tipo_animal" name="tipo de animal" required>
                                                                <option selected disabled value="">Tipo de animal:</option>
                                                                <option value="Cachorro">Cachorro</option>
                                                                <option value="Cavalo">Cavalo</option>
                                                                <option value="Furão">Furão</option>
                                                                <option value="Gato">Gato</option>
                                                                <option value="Galinha">Galinha</option>
                                                                <option value="Gecko">Gecko</option>
                                                                <option value="Hamster">Hamster</option>
                                                                <option value="Papagaio">Papagaio</option>
                                                                <option value="Peixe">Peixe</option>
                                                                <option value="Porco">Porco</option>
                                                                <option value="Porquinho-da-Índia">Porquinho-da-Índia</option>
                                                                <option value="Rato">Rato</option>
                                                            </select>
                                                        </div>
                                                        <div class="form-floating">
                                                            <p>Sexo:</p>
                                                            <div class="form-check radio">
                                                                <input class="form-check-input sim" type="radio" name="sexo" id="femea" value="femea">
                                                                <label class="form-check-label" for="femea">Fêmea</label>
                                                            </div>
                                                            <div class="form-check radio">
                                                                <input class="form-check-input" type="radio" name="sexo" id="macho" value="macho">
                                                                <label class="form-check-label" for="macho">Macho</label>
                                                            </div>
                                                        </div>
                                                        <div class="form-floating">
                                                            <input type="number" class="form-control" id="idade" placeholder="Idade:" minlength="1" maxlength="2" required>
                                                            <label for="idade">Idade:</label>
                                                            <select class="tempo_de_vida" name="tempo de vida" required>
                                                                <option selected value="Meses">Mês/Meses</option>
                                                                <option value="Anos">Ano(s)</option>
                                                            </select>
                                                        </div>
                                                        <div class="form-floating">
                                                            <p>Vacinado(a):</p>
                                                            <div class="form-check radio">
                                                                <input class="form-check-input sim" type="radio" name="vacinado" id="Sim_vac" value="sim">
                                                                <label class="form-check-label" for="Sim_vac">Sim</label>
                                                            </div>
                                                            <div class="form-check radio">
                                                                <input class="form-check-input" type="radio" name="vacinado" id="Nao_vac" value="nao">
                                                                <label class="form-check-label" for="Nao_vac">Não</label>
                                                            </div>
                                                        </div>
                                                        <div class="form-floating">
                                                            <p>Castrado(a):</p>
                                                            <div class="form-check radio">
                                                                <input class="form-check-input sim" type="radio" name="castrado" id="Sim_cas" value="sim">
                                                                <label class="form-check-label" for="Sim_cas">Sim</label>
                                                            </div>
                                                            <div class="form-check radio">
                                                                <input class="form-check-input" type="radio" name="castrado" id="Nao_cas" value="nao">
                                                                <label class="form-check-label" for="Nao_cas">Não</label>
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <label for="detalhes_add" class="form-label">Detalhes adicionais: (Opcional)</label>
                                                            <textarea class="form-control" id="detalhes_add"></textarea>
                                                        </div>
                                                        <div class="botoes">
                                                            <button type="submit" class="colocar btn btn-primary">Postar</button>
                                                            <button type="submit" class="desfazer btn btn-danger">Excluir</button>
                                                        </div>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                    </div>
                </section>

            </div>
        </div>
</template>

<script>
    import Coluna1 from '../components/Coluna1.vue'
    import Header from '../components/Header.vue'
    import Profile from '../components/Profile.vue'

    export default ({
        name: "Perfil",
        data(){
            return {
                secaoAtiva: 'salvos',
                mostrar_btn: true
            }
        },
        components:{
          Coluna1,
          Header,
          Profile
        },
        methods:{
            mostrarSecao(secao) {
                // Ocultando todas as seções
                this.secaoAtiva = secao;
            },
            contagemTexto(){
                const limite = 100;

                function text(textarea, textoContagem, btn) {
                    let tamanho = textarea.value.length;
                    let cont = limite - tamanho;
                    let frasePronta;
                    
                    textoContagem.innerHTML = cont;

                    const palavra = textarea.value;

                    if(cont < 50 && cont >= 21){
                        textoContagem.style.color = "yellow";
                        btn.disabled = false;
                        frasePronta = " letras restantes";
                    }else if(cont <= 20 && cont >= 0){
                        textoContagem.style.color = "orange";
                        btn.disabled = false;
                        frasePronta = " letras restantes";
                    }else if(cont < 0){
                        textoContagem.style.color = "red";
                        btn.disabled = true;
                        frasePronta = "! Limite superado";
                    }else if(palavra == ""){
                        textoContagem.style.color = "black";
                        btn.disabled = true;
                        frasePronta = " letras disp.";
                    }else{
                        textoContagem.style.color = "purple";
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
    .btn_perfil2{
        width: 165px;
    }

    section{
        /*background-color: gray;*/
        background-color: rgb(0, 63, 145);
        display: flex;
        flex-flow: column wrap;
    }

    section#editar, section#salvos{
        height: 315px;
    }

    nav{
        width: 100%;
        height: 50px;
        /*background-color: gray;*/
        background-color: rgb(0, 86, 199);
        display: flex;
        flex-flow: row wrap;
        justify-content: space-evenly;
        position: sticky;
        top: 0;
    }

    nav div{
        width: 50%;
        display: flex;
    }

    hr{
        margin-top: 0px;
        margin-bottom: 0px;
        border: 1px solid white;
        opacity: 100%;
    }

    .conteudo {
        /*background-color: gray;*/
        background-color: rgb(112, 174, 255);
    }

    .secao-ativa {
        display: block;
    }

    .linha{
        display: flex;
        flex-flow: row wrap;
    }

    #salvos, #editar{
        height: 334px;
    }

    nav a:hover{
        font-size: 24px;
    }

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

    .add_animal{
        background-color: white;
        border-radius: 20px;
        width: 50px;
        height: 50px;
        display: flex;
        justify-content: center;
        align-items: center;
        position: fixed;
        right: 30px;
        bottom: 30px;
    }

    .add_animal i{
        font-size: 36px;
        margin: 0px;
    }

    div.form-floating{
        margin-bottom: 25px;
    }

    label{
        font-weight: bold;
    }

    .colocar{
        margin-right: 20px;
    }

    .form-floating{
        display: flex;
        flex-flow: row wrap;
        align-items: center;
        font-weight: bold;
    }

    .form-floating p{
        margin: 0px;
    }

    div.form-check{
        margin-left: 15px;
    }

    .form-floating select.tipo_animal{
        width: 50%;
        height: 50px;
        border: 1px solid #ced4da;
        border-radius: 10px;
        font-weight: bold;
        padding-left: 10px;
        appearance: none;
        -webkit-appearance: none;
        -moz-appearance: none;
        background: url('https://www.freeiconspng.com/uploads/black-arrow-down-icon-png-16.png') no-repeat right center;
        background-size: 20px 20px;
        background-position-x: 195px;
    }

    option{
        background-color: black;
        color: white;
    }

    #idade{
        width: 25%;
    }

    .form-floating select.tempo_de_vida{
        width: 150px;
        height: 58px;
        border: 1px solid #ced4da;
        border-radius: .25rem;
        margin-left: 10px;
        font-weight: bold;
        padding-left: 10px;
        appearance: none;
        -webkit-appearance: none;
        -moz-appearance: none;
        background: url('https://www.freeiconspng.com/uploads/black-arrow-down-icon-png-16.png') no-repeat right center;
        background-size: 20px 20px;
        background-position-x: 120px;
    }

    .formulario4{
        display: flex;
        flex-flow: column;
    }

    .selecionar_foto{
        display: flex;
        justify-content: center;
        margin-bottom: 20px;
    }

    #alterar_foto{
        width: fit-content;
        font-weight: bold;
    }

    footer{
        display: flex;
        justify-content: center;
    }

    .textoData{
        margin-bottom: 20px;
    }

    #data{
        padding: 10px;
        border-radius: 5px;
    }

    .confirmar{
        width: fit-content;
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

    .descricao{
        display: flex;
        flex-flow: column wrap;
    }
</style>