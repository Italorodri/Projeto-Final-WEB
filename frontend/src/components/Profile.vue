<template>
    <div class="profile">
        <div class="foto">
            <img src="#" alt="Foto de perfil">
        </div>
        <div class="dados_apagar">
            <div class="dados_pessoais">
                <div class="col">
                    <p class="espaco_up"><strong>Nome:</strong> Nome de usuário</p>
                    <p><strong>E-mail:</strong> useremail@gmail.com</p>
                    <p><strong>Telefone:</strong> DD 9XXXXXXXX</p>
                </div>
                <div class="col">
                    <p class="espaco_up"><strong>Deseja:</strong> Adotar/Colocar pra adoção</p>
                </div>
            </div>
            <div class="apagar_conta">
                <button class="editar_conta btn btn-warning" data-bs-toggle="modal" data-bs-target=".dado">Editar conta</button>
                <button type="submit" class="excluir_conta btn btn-danger">Apagar conta</button>
            </div>

            <div class="modal dado" tabindex="-1">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="card">
                            <div class="card-body">
                                <div class="card-text descricao d-flex align-content-left">
                                    <form id="formulario1">
                                        <FotoSelect />
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
                                                    <input type="tel" class="form-control" id="telefone" placeholder="Nº de telefone" minlength="11" maxlength="11" required>
                                                    <label for="telefone">Telefone:</label>
                                                </div>
                                            </div>
                                            <div class="col dados2">
                                                <div class="textoData">
                                                    <h6><strong>Data de nascimento:</strong></h6>
                                                    <input type="date" name="data" id="data" required>
                                                </div>
                        
                                                <div class="papelUsuario">
                                                    <h6><strong>Eu desejo:</strong></h6>
                                                    <select class="form-select" aria-label="Desejo">
                                                        <option value="1">Colocar pra adoção</option>
                                                        <option value="2">Adotar</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                        <footer class="row">
                                            <button type="submit" class="confirmar btn btn-primary">Confirmar</button>
                                        </footer>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import FotoSelect from '../components/FotoSelect.vue'

    export default ({
        name: "Profile",
        components: {
            FotoSelect
        }
    })
</script>

<style scoped>
    section{
        /*background-color: gray;*/
        background-color: rgb(0, 63, 145);
        display: flex;
        flex-flow: column wrap;
    }
    
    .profile{
        width: 100%;
        height: 140px;
        display: flex;
        flex-flow: row wrap;
        align-items: center;
        margin-bottom: 0px;
    }

    .profile img{
        margin-top: 10px;
        margin-bottom: 10px;
        margin-left: 70px;
        margin-right: 70px;
        border-radius: 30px;
        width: 75px;
        height: auto;
    }

    .profile p{
        color: white;
    }

    .dados_pessoais{
        width: 500px;
        height: 110%;
        display: flex;
        flex-flow: column wrap;
    }

    .espaco_up{
        margin-top: 15px;
    }

    .profile button{
        margin-left: 250px;
        font-weight: bold;
    }

    .editar_conta{
        margin-right: 10px;
        color: white;
        background-color: #d19d00;
        border-color: #d19d00;
    }

    .editar_conta:hover{
        color: white;
        background-color: #ffc107;
    }

    .excluir_conta:hover{
        background-color: #ff0019;
    }

    #formulario1{
        display: flex;
        flex-flow: column;
    }

    #alterar_foto{
        width: fit-content;
        display: flex;
        align-self: center;
        margin-bottom: 20px;
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

    div.form-floating{
        margin-bottom: 25px;
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

    /* Smartphones (600px para baixo) */
    @media only screen and (max-width: 600px) {
        .profile{
            height: fit-content;
            flex-flow: column wrap;
            justify-content: center;
            align-items: center;
            margin-top: 20px;
            margin-bottom: 35px;
        }

        .dados_apagar{
            display: flex;
            flex-flow: column;
            align-items: center;
        }

        .dados_pessoais{
            width: 100%;
            height: fit-content;
            margin-top: 20px;
        }

        .dados_pessoais p{
            margin-left: 45px;
        }

        .espaco_up{
            margin-top: 0px;
        }

        .profile button{
            margin-top: 25px;
            margin-left: 0px;
        }
    }

    /*Dispostivos Médios (Tablets deitados, até 768px) */
    @media only screen and (min-width: 601px) and (max-width: 782px) {
        .profile{
            height: fit-content;
            flex-flow: column wrap;
            justify-content: center;
            align-items: center;
            margin-top: 20px;
            margin-bottom: 35px;
        }

        .dados_apagar{
            width: 100%;
            display: flex;
            flex-flow: row;
            align-items: center;
            justify-content: space-evenly;
        }

        .dados_pessoais{
            width: fit-content;
            height: fit-content;
            margin-top: 20px;
        }

        .dados_pessoais p{
            margin-left: 45px;
        }

        .apagar_conta{
            width: fit-content;
            display: flex;
            flex-flow: column wrap;
            align-items: center;
            margin-right: 0px;
        }

        .editar_conta{
            margin-right: 0px;
        }

        .espaco_up{
            margin-top: 0px;
        }

        .profile button{
            margin-top: 25px;
            margin-left: 0px;
        }
    }

    @media only screen and (min-width: 783px) and (max-width: 920px) {
        .profile{
            width: 100%;
            height: 150px;
            margin-bottom: 35px;
        }

        .foto{
            width: 25%;
        }

        .dados_apagar{
            width: 75%;
            display: flex;
            flex-flow: row;
            align-items: center;
            justify-content: space-between;
        }

        .dados_pessoais{
            width: fit-content;
            height: fit-content;
            margin-top: 20px;
        }

        .dados_pessoais p{
            margin-left: 45px;
        }

        .espaco_up{
            margin-top: 0px;
        }

        .apagar_conta{
            width: fit-content;
            display: flex;
            flex-flow: column wrap;
            align-items: center;
            margin-right: 50px;
        }

        .editar_conta{
            margin-right: 0px;
        }

        .profile button{
            margin-top: 25px;
            margin-left: 0px;
        }
    }

    @media only screen and (min-width: 921px) and (max-width: 1022px) {
        .profile{
            width: 100%;
            height: 190px;
            justify-content: space-around;
        }

        .foto{
            width: 25%;
        }

        .dados_apagar{
            width: 75%;
            display: flex;
            flex-flow: row;
            align-items: center;
            justify-content: space-between;
        }

        .dados_pessoais{
            width: fit-content;
            height: fit-content;
        }

        .espaco_up{
            margin-top: 0px;
        }

        .apagar_conta{
            margin-right: 25px;
        }

        .profile button{
            margin-left: 0px;
        }
    }

    /* Super Largos (Telas maiores laptops, desktops e até TVs, 1200px para cima) */
    @media only screen and (min-width: 1023px) and (max-width: 1112px) {
        .profile{
            width: 100%;
            height: 190px;
            justify-content: space-evenly;
        }

        .dados_apagar{
            width: 75%;
            display: flex;
            flex-flow: row;
            align-items: center;
            justify-content: space-between;
        }
        
        .foto{
            width: 25%;
        }
        
        .dados_pessoais{
            width: fit-content;
            height: fit-content;
        }

        .apagar_conta{
            display: flex;
            justify-content: end;
            margin-right: 25px;
        }
        
        .profile button{
            margin-left: 0px;
        }

        .espaco_up{
            margin-top: 0px;
        }
    }

    @media only screen and (min-width: 1113px) {
        .foto{
            width: 25%;
        }

        .dados_apagar{
            width: 75%;
            display: flex;
            flex-flow: row;
            align-items: center;
            justify-content: space-between;
        }

        .dados_pessoais{
            width: fit-content;
            height: fit-content;
            flex-flow: row wrap;
            margin-top: 10px;
        }

        .apagar_conta{
            width: 50%;
            display: flex;
            justify-content: end;
            margin-right: 25px;
        }
        
        .profile button{
            margin-left: 0px;
        }

        .espaco_up{
            margin-top: 0px;
        }
    }
</style>