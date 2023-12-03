<template>
    <div class="cadastro_page">
        <ImagensBG />
        <div class="cadastro">
            <form class="formulario" @submit="verificarForm($event)">
                <header class="row">
                    <div class="col"></div>
                    <div class="col titulo">
                        <h4 class="criar-conta">Criar Conta</h4>
                    </div>
                    <div class="col close">
                        <router-link to="/"><button type="button" id="meuBotaoFechar" class="btn-close" aria-label="Close"></button></router-link>
                    </div>
                    <hr>
                </header>
                <section>
                    <div class="row">
                        <div class="col dados1">
                            <div class="form-floating">
                                <input type="text" class="form-control" id="nome" placeholder="Nome" required>
                                <label for="nome">Nome:</label>
                            </div>
                            <div class="form-floating">
                                <input type="email" class="form-control" id="email" placeholder="email@example.com" required>
                                <label for="email">Email:</label>
                            </div>
                            <div class="form-floating">
                                <input type="password" class="form-control" id="senha" placeholder="Senha" minlength="6" required>
                                <label for="senha">Senha:</label>
                            </div>
                            <div class="form-floating">
                                <input type="password" class="form-control" id="confirmar" placeholder="Confirmar senha" minlength="6" required>
                                <label for="confirmar">Confirmação de senha:</label>
                            </div>
                            <div class="form-floating">
                                <input type="tel" pattern="[0-9]{11}" class="form-control" id="telefone" placeholder="Nº de telefone" minlength="11" maxlength="11" required>
                                <label for="telefone">Telefone:</label>
                            </div>
                        </div>
                        <div class="col dados2">
                            <div class="textoData">
                                <h6><strong>Por favor informe sua data de nascimento</strong></h6>
                                <input type="date" name="data" id="data" required>
                            </div>

                            <div class="papelUsuario">
                                <h6><strong>Eu desejo:</strong></h6>
                                <select class="form-select" aria-label="Desejo" id="desejo">
                                    <option value="1">Colocar pra adoção</option>
                                    <option value="2">Adotar</option>
                                </select>
                            </div>
        
                            <div class="textoTermos">
                                <h6>Você concorda com os nossos <span class="termos" @click="mostrarTermos" data-bs-toggle="modal" data-bs-target=".termo">Termos de Política de Privacidade</span>?</h6>
                            </div>
        
                            <div class="form-check my-2 radio">
                                <input class="form-check-input sim" type="radio" name="radioOptions" id="Sim" value="sim" @click="liberarBtn" unchecked>
                                <label class="form-check-label" for="Sim">Sim</label>
                            </div>
                            <div class="form-check radio">
                                <input class="form-check-input" type="radio" name="radioOptions" id="Nao" value="nao" @click="bloquearBtn">
                                <label class="form-check-label" for="Nao">Não</label>
                            </div>
                        </div>
                    </div>
                </section>
                <footer class="row">
                    <div class="footer">
                        <!-- <router-link to="/home"><button type="submit" class="inscrever btn btn-primary" @click="verificarForm">Confirmar</button></router-link> -->
                        <button type="submit" id="inscrever" class="btn btn-primary" disabled>Confirmar</button>
                    </div>
                </footer>
            </form>
        </div>

        <div class="modal termo" id="termoModal" tabindex="-1">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="card">
                        <div class="card-body">
                            <div class="card-text descricao d-flex align-content-left">
                                <p v-html="termosDeUso"></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
    import ImagensBG from '../components/ImagensBG.vue'
    import axios from 'axios';

    export default ({
        name: "Cadastro",
        data(){
            return {
                termosDeUso: `Termos de Uso\n
Bem-vindo ao Adote Aí!\n
Ao usar este site, você concorda em cumprir e ficar vinculado aos seguintes termos e condições de uso. Se você não concordar com alguma parte destes termos, por favor, não use nosso site.\n
Responsabilidade: O Adote Aí! não se responsabiliza por qualquer conteúdo impreciso ou desatualizado presente no site.\n
Uso Adequado: Este site destina-se ao uso relacionado à adoção de animais. O uso indevido do site para atividades ilegais ou não relacionadas não é permitido.\n
Registro: Ao se registrar, você concorda em fornecer informações precisas e atualizadas. Você é responsável pela segurança de sua conta e senha.\n
Rescisão: Reservamo-nos o direito de encerrar contas de usuários que violem estes termos de uso.\n
Privacidade: Suas informações pessoais serão tratadas de acordo com nossa Política de Privacidade.\n
Alterações: Reservamo-nos o direito de modificar estes termos a qualquer momento. Recomendamos que você revise periodicamente os termos para ficar atualizado.\n
Informações Coletadas:\n
Dados Pessoais: Podemos coletar informações pessoais, como nome, endereço de e-mail e localização, para facilitar a adoção de animais.\n
Uso das Informações:\n
Finalidade: As informações coletadas serão usadas exclusivamente para facilitar o processo de adoção de animais e para melhorar nossos serviços.\n
Compartilhamento de Informações:\n
Terceiros: Não compartilhamos informações pessoais com terceiros sem o seu consentimento, exceto quando exigido por lei.\n
Segurança: Implementamos medidas de segurança para proteger suas informações pessoais contra acesso não autorizado.\n
Cookies: Podemos usar cookies para melhorar a experiência do usuário. Você pode optar por desativar os cookies nas configurações do seu navegador.\n
Alterações na Política de Privacidade:\n
Atualizações: Esta política pode ser atualizada de tempos em tempos.`,
            }
        },
        components:{
          ImagensBG
        },
        methods:{
            async verificarForm(e){
                this.verifConfSenha(e);
                this.verificarTele(e);
                this.verificarData(e);

                if (!e.defaultPrevented) {
                    await this.criarNovoUsuario();
                }
            },
            verifConfSenha(e){
                let senha = document.getElementById("senha");
                let confSenha = document.getElementById("confirmar");

                if(!(senha.value === confSenha.value)){
                    e.preventDefault();

                    alert("Senha e Confirmar senha devem ser iguais");
                    return;
                }
            },
            verificarTele(e){
                let telefone = document.getElementById("telefone").value.trim();

                if(!(telefone[0] == "8") || !(telefone[2] == "9") || (!(telefone[3] == "9" && telefone[4] == "9") && !(telefone[3] == "8" && telefone[4] == "8")) ){
                    e.preventDefault();

                    alert("Número de telefone inválido");
                    return;
                }
            },
            verificarData(e){
                let dataPreenchida = document.getElementById("data").value.trim();

                if(dataPreenchida == ""){
                    e.preventDefault();

                    alert("Informe a sua data de nascimento");
                    return;
                }else{    
                    let dataHoje = new Date();

                    let dataMin = dataHoje.getFullYear()-18+"-"+(dataHoje.getMonth()+1)+"-"+dataHoje.getDate();

                    if(dataPreenchida > dataMin){
                        e.preventDefault();

                        alert("É preciso ter no mínimo 18 anos para poder adotar um animal, ou colocar um para adoção");
                        return;
                    }

                    //this.$router.push('/home');
                }
            },
            async criarNovoUsuario() {
                const nome = document.getElementById("nome").value;
                const email = document.getElementById("email").value;
                const senha = document.getElementById("senha").value;
                const telefone = document.getElementById("telefone").value;
                const dataNascimento = document.getElementById("data").value;
                const desejo = document.getElementById("desejo").value;

                try {
                    const response = await axios.post('http://localhost:1337/sua-rota-no-strapi', {
                        nome,
                        email,
                        senha,
                        telefone,
                        dataNascimento,
                        desejo,
                    });

                    console.log('Usuário criado com sucesso:', response.data);
                    this.$router.push("/home");
                } catch (error) {
                    console.error('Erro ao criar novo usuário:', error);
                }
            },
            liberarBtn(){
                const opcoesTermo = document.querySelectorAll('input[name="radioOptions"]:checked');
                const opcoesTermoNao = document.querySelectorAll('input[id="Nao"]:checked');

                if(opcoesTermo.length === 1 && opcoesTermoNao.length === 0){
                    let botao = document.getElementById("inscrever");
                    botao.disabled = false;
                }
            },
            bloquearBtn(){
                const opcoesTermo = document.querySelectorAll('input[name="radioOptions"]:checked');
                const opcoesTermoNao = document.querySelectorAll('input[id="Nao"]:checked');

                if(opcoesTermo.length === 1 && opcoesTermoNao.length === 1){
                    let botao = document.getElementById("inscrever");
                    botao.disabled = true;
                }
            }
        },
        mounted(){
            
        }
    })
</script>

<style scoped>
    .cadastro_page{
        display: flex;
        position: relative;
        justify-content: center;
        align-items: center;
    }

    form{
        width: 100%;
        display: flex;
        flex-flow: column wrap;
        align-items: center;
    }

    .cadastro{
        width: 60%;
        height: 80.4%;
        border-radius: 10px;
        display: flex;
        flex-flow: column;
        justify-items: center;
        align-items: center;
        background-color: black;
        border: 10px solid white;
        position: absolute;
        z-index: 2;
    }

    .descricao {
        white-space: pre-line;
    }

    header{
        width: 100%;
        height: 20%;
        display: flex;
        flex-flow: row wrap;
        align-content: center;
        position: relative;
    }

    #meuBotaoFechar {
        background-color: #dc3545;
        opacity: 1;
    }

    #meuBotaoFechar:hover{
        background-color: #ff0019;
    }

    h4, h6, .form-check-label, hr{
        color: white;
    }

    hr{
        width: 100%;
        border: 2px solid white;
        opacity: 100%;
    }

    .titulo{
        margin: 0px;
        padding: 0px;
    }

    .criar-conta{
        text-align: center;
    }

    .close{
        display: flex;
        justify-content: end;
        margin-bottom: 15px;
    }

    #data{
        padding: 10px;
        border-radius: 5px;
    }

    h2{
        color: white;
        margin-top: 30px;
        margin-bottom: 50px;
    }

    label{
        font-weight: bold;
    }

    div.col{
        margin-left: 20px;
        margin-right: 20px;
    }

    .form-floating{
        margin-bottom: 15px;
    }

    .textoData{
        margin-bottom: 15px;
    }
    .textTermos{
        margin-bottom: 20px;
    }

    .papelUsuario{
        width: 56%;
        margin-bottom: 15px;
    }

    .termos{
        text-decoration: underline;
        color: blue;
    }

    footer{
        width: fit-content;
        height: fit-content;
        position: relative;
    }

    #inscrever{
        margin-bottom: 20px;
        font-size: 20px;
        font-weight: bold;
        display: flex;
    }

    #inscrever:hover{
        background-color: rgb(0, 0, 100);
        border-color: rgb(0, 0, 100);
    }

    /*#inscrever router-link{
        text-decoration-color: white;
        color: white;
        text-decoration: none;
    }*/

    a{
        text-decoration: none;
    }

    @media only screen and (min-width: 100px) and (max-width: 1100px){
        img{
            height: 201.5px;
        }
    }

    /* Smartphones (600px para baixo) */
    @media only screen and (max-width: 600px) {
        .cadastro{
            width: 95%;
            height: fit-content;
        }

        header{
            height: 100px;
        }

        .criar-conta{
            width: 150px;
            margin-bottom: 17px;
        }

        div.col{
            padding: 0px;
            margin-left: 19px;
        }

        div.dados1{
            margin-right: 0px;
        }

        footer{
            left: 27.5%;
            bottom: 40px;
        }

        .papelUsuario{
            width: 90%;
            margin-bottom: 15px;
        }
    }

    /*Dispostivos Médios (Tablets deitados, até 768px) */
    @media only screen and (min-width: 601px) and (max-width: 782px) {
        .cadastro{
            width: 95%;
            height: fit-content;
        }

        header{
            height: 100px;
        }

        .titulo{
            display: flex;
            justify-content: center;
        }

        .criar-conta{
            width: fit-content;
            margin-bottom: 17px;
        }

        div.col{
            padding: 0px;
            margin-left: 19px;
        }

        div.dados1{
            margin-right: 0px;
        }

        footer{
            left: 27.5%;
            bottom: 40px;
        }

        .papelUsuario{
            width: 70%;
            margin-bottom: 15px;
        }
    }

    @media only screen and (min-width: 783px) and (max-width: 920px) {
        .cadastro{
            width: 85%;
            height: 500px;
        }

        header{
            height: 100px;
        }

        .titulo{
            display: flex;
            justify-content: center;
        }

        .criar-conta{
            width: fit-content;
            margin-bottom: 17px;
        }

        div.col{
            padding: 0px;
            margin-left: 19px;
        }

        div.dados1{
            margin-right: 0px;
        }

        footer{
            left: 27.5%;
            bottom: 75px;
        }
    }

    @media only screen and (min-width: 921px) and (max-width: 1022px) {
        .cadastro{
            width: 80%;
            height: 500px;
        }

        header{
            height: 100px;
        }

        .criar-conta{
            width: 150px;
            margin-bottom: 17px;
        }

        div.col{
            padding: 0px;
            margin-left: 19px;
        }

        div.dados1{
            margin-right: 0px;
        }

        footer{
            left: 27.5%;
            bottom: 75px;
        }
    }

    /* Super Largos (Telas maiores laptops, desktops e até TVs, 1200px para cima) */
    @media only screen and (min-width: 1023px) and (max-width: 1112px) {
        .cadastro{
            width: 72%;
            height: 500px;
        }

        header{
            height: 100px;
        }

        .criar-conta{
            width: 150px;
            margin-bottom: 17px;
        }

        div.col{
            padding: 0px;
            margin-left: 30px;
        }

        div.dados1{
            margin-right: 0px;
        }

        footer{
            left: 27.5%;
            bottom: 75px;
        }
    }

    @media only screen and (min-width: 1113px) {
        footer{
            left: -31.5%;
            top: 82%;
        }
    }
</style>