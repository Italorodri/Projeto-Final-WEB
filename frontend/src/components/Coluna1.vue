<template>
    <div class="col1">
        <ul>
            <li><router-link to="/home"><i class="bi bi-house"></i> <span class="nomeTela">Página Central</span></router-link></li>
            <li><router-link to="/perfil"><i class="bi bi-person-circle"></i> <span class="nomeTela">Perfil</span></router-link></li>
            <li><router-link to="/perguntas"><i class="bi bi-question-circle"></i> <span class="nomeTela">Perguntas</span></router-link></li>
            <li><router-link to="/ajuda"><i class="bi bi-chat-right-text-fill"></i> <span class="nomeTela">Ajuda</span></router-link></li>
            <li><router-link to="/sobrenos"><i class="bi bi-info-circle-fill"></i> <span class="nomeTela">Sobre nós</span></router-link></li>
        </ul>
    </div>
</template>

<script>
    export default ({
        name: "Coluna1"
    })
</script>

<style scoped>
    .col1{
        background-color: black;
        width: 15%;
        height: 100%;
        display: flex;
        flex-flow: column wrap;
        justify-content: space-around;
        position: fixed;
    }

    .col1 ul{
        height: 100%;
        display: flex;
        flex-flow: column wrap;
        justify-content: space-evenly;
        padding: 0px;
    }

    .col1 li, .col1 li a{
        list-style-type: none;
        color: white;
        text-decoration: none;
        font-weight: bold;
        font-size: 18px;
    }

    .col1 li{
        width: 100%;
        padding-left: 20px;
        display: flex;
        align-items: center;
    }

    .col1 li:hover{
        background-color: white;
        transition: 1s;
    }

    .col1 li:hover a {
        color: black;
    }

    .col1 li a{
        width: 100%;
        height: 90px;
        display: flex;
        align-items: center;
    }

    /*.col1 li a:hover{
        background-color: white;
        color: black;
    }*/

    .col1 li a i{
        padding: 0px;
        margin-right: 10px;
        font-size: 30px;
    }
</style>