<template>
    <div>
        <div class="caixa" data-bs-toggle="modal" data-bs-target=".pedido">
            <img src="#" alt="Nenhuma imagem ainda">
            <h2 class="reduzido">Fulano quer adotar Suzy</h2>
            <p class="reduzido"><strong>E-mail:</strong> </p>
            <p class="reduzido"><strong>Idade:</strong> </p>
            <p class="reduzido"><strong>Telefone:</strong> </p>
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
</template>

<script>
    export default ({
        name: "AnimalPedido"
    })
</script>

<style scoped>
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