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
            <div class="logout" @click="logout">Log Out</div>
            <router-link to="/"><img src="/img/logo.png" alt="Logo do Adote Aí"></router-link>
            <div v-show="mostrar_btn" class="btn_perfil2" v-if="mostrar_btn"></div>
            <div class="btn_perfil" v-else>
                <button class="perfil btn btn-secondary" @click="redirectToProfile">
                    <img :src="userPhoto" alt="Foto de Perfil" id="perfil-foto">
                    {{ userName }}
                </button>
            </div>
        </div>
    </header>
</template>

<script>
    export default ({
        name: "Header",
        props: {
            mostrar_btn: Boolean,
        },
        data() {
            return {
            userName: "Username", // Nome do usuário padrão ou obtido do backend
            userPhoto: "/img/default-profile-pic.jpg", // URL da foto de perfil padrão ou obtida do backend
            };
        },
        methods: {
            redirectToProfile() {
            // Implemente a navegação para a página de perfil
            this.$router.push("/perfil");
            },
            // Outros métodos, como obter detalhes do usuário do backend, se necessário
            async obterDetalhesUsuario() {
                const token = localStorage.getItem('token');

                if (token) {
                    try {
                        const response = await axios.get('http://localhost:1337/users/me', {
                        headers: {
                            Authorization: `Bearer ${token}`,
                        },
                        });

                        // Atualize as propriedades userName e userPhoto com os dados do usuário
                        this.userName = response.data.username;
                        this.userPhoto = response.data.photo.url;
                    } catch (error) {
                        console.error('Erro ao obter detalhes do usuário:', error);
                        // Lide com o erro de obtenção de detalhes do usuário de acordo com suas necessidades
                    }
                }
            },
            logout() {
                // Limpar as informações do usuário ao fazer logout
                localStorage.removeItem('token');
                this.userName = "Username";
                this.userPhoto = "/img/default-profile-pic.jpg";

                // Redirecionar para a página de login ou para a página inicial
                this.$router.push("/login");
            }
        },
        mounted() {
            // Chame a função para obter detalhes do usuário quando o componente é montado
            this.obterDetalhesUsuario();
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

    #perfil-foto{
        width: 30px;
        height: 30px;
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