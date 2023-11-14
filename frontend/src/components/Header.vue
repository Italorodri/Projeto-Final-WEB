<template>
    <header>
        <div class="imagens">
            <img src="https://images.pexels.com/photos/16652378/pexels-photo-16652378/free-photo-of-animais-bichos-bandana-lenco.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="cachorro para adocao">
            <img src="https://images.pexels.com/photos/3790942/pexels-photo-3790942.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="cachorro para adocao">
            <img src="https://images.pexels.com/photos/18225434/pexels-photo-18225434/free-photo-of-abandonado-perdido-fotografia-animal-fotografia-de-animais.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="gatos para adocao">
            <img src="https://images.pexels.com/photos/1416787/pexels-photo-1416787.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="gatos para adocao">
            <img src="https://images.pexels.com/photos/3581058/pexels-photo-3581058.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="cachorro para adocao">
        </div>
        <div class="header_frente">
            <router-link to="/login" class="logout">Log Out</router-link>
            <router-link to="/"><img src="/img/logo.png" alt="Logo do Adote Aí"></router-link>
            <div v-show="mostrar_btn" class="btn_perfil2" v-if="mostrar_btn"></div>
            <router-link to="/perfil" class="btn_perfil" v-else><button class="perfil btn btn-secondary"><i class="bi bi-person"></i>  Username</button></router-link>
        </div>
    </header>
</template>

<script>
    export default ({
        name: "Header",
        props: {
            mostrar_btn: Boolean
        }
    })
</script>

<style scoped>
    header{
        height: 100px;
    }

    .imagens{
        display: flex;
        flex-flow: row wrap;
        z-index: 1;
    }

    .imagens img{
        width: 20%;
        height: 100px;
    }

    .header_frente{
        height: 100px;
        display: flex;
        flex-flow: row wrap;
        justify-content: space-between;
        align-items: center;
        position: relative;
        top: -100px;
        z-index: 2;
    }

    .logout{
        margin-left: 60px;
        font-weight: bold;
        padding: 10px;
        background-color: rgb(255, 153, 0);
        border-radius: 5px;
    }

    .logout:hover{
        background-color: rgb(223, 70, 0);
        color: white;
    }

    .header_frente img{
        width: auto;
        height: 90px;
        border-radius: 90px;
        position: 0;
    }

    .perfil{
        margin-right: 40px;
        width: 150px;
        height: 50px;
        font-weight: bold;
        border: none;
        background-color: rgb(0, 145, 12);
        display: flex;
        flex-flow: row wrap;
        justify-content: space-evenly;
        align-items: center;
    }

    .perfil:hover{
        background-color: rgb(0, 92, 8);
        border: none;
    }

    button i{
        font-size: 25px;
        margin-right: 5px;
        padding: 0px;
    }

    header a{
        text-decoration: none;
    }

    .logout{
        color: white;
        text-decoration: none;
        font-weight: bold;
        font-size: 18px;
    }
</style>