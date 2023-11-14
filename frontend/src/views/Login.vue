<template>
  <div class="login_page">
    <ImagensBG />
    <div class="login">
        <h2><strong>Login</strong></h2>
        <form>
            <section>
                <div class="form-floating email">
                    <input type="email" class="form-control" id="nome" placeholder="Nome" required>
                    <label>E-mail:</label>
                </div>
                <div class="form-floating senha">
                    <input type="password" class="form-control" id="confirmar" placeholder="Senha" required>
                    <label>Senha:</label>
                </div>
            </section>
            <footer>
                <router-link to="/home"><button type="submit" class="entrar btn btn-primary">Entrar</button></router-link>
            </footer>
        </form>
        <router-link to="/"><button class="voltar btn btn-danger">Voltar</button></router-link>
    </div>
  </div>
</template>

<script>
    import ImagensBG from '../components/ImagensBG.vue'

    export default ({
        name: "Login",
        data(){
            return {
                
            }
        },
        components:{
          ImagensBG
        },
        methods:{
            
        },
        mounted(){
            
        }
    })
</script>

<style scoped>
    .login_page{
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .login{
        width: 40%;
        height: fit-content;
        border-radius: 10px;
        display: flex;
        flex-flow: column;
        justify-items: center;
        align-items: center;
        background-color: black;
        position: absolute;
        border: 10px solid white;
        z-index: 2;
    }

    h2{
        color: white;
        margin-top: 30px;
        margin-bottom: 40px;
    }

    form{
        width: 100%;
    }

    section{
        width: 100%;
        display: flex;
        flex-flow: column wrap;
        align-content: center;
    }

    label{
        font-weight: bold;
    }

    .form-floating{
        width: 70%;
    }

    .email{
        margin-bottom: 20px;
    }

    .senha{
        margin-bottom: 30px;
    }

    footer{
        display: flex;
        justify-content: center;
    }

    .entrar, .voltar{
        width: 150px;
        padding: 5px;
        margin-bottom: 20px;
        font-size: 20px;
        font-weight: bold;
    }

    .entrar:hover{
        background-color: rgb(0, 52, 100);
        border-color: rgb(0, 0, 100);
    }

    .voltar:hover{
        background-color: #ff0019;
        border-color: #ff0019;
    }

    @media only screen and (min-width: 100px) and (max-width: 1100px){
        img{
            height: 201.5px;
        }
    }

    /* Smartphones (600px para baixo) */
    @media only screen and (max-width: 600px) {
        .login{
            width: 80%;
        }

        .form-floating{
            width: 70%;
        }
    }

    /*Dispostivos Médios (Tablets deitados, até 768px) */
    @media only screen and (min-width: 601px) and (max-width: 782px) {
        .login{
            width: 70%;
        }

        .form-floating{
            width: 65%;
        }
    }

    @media only screen and (min-width: 783px) and (max-width: 920px) {
        .login{
            width: 60%;
        }

        .form-floating{
            width: 70%;
        }
    }

    @media only screen and (min-width: 921px) and (max-width: 1022px) {
        .login{
            width: 50%;
        }

        .form-floating{
            width: 70%;
        }
    }

    /* Super Largos (Telas maiores laptops, desktops e até TVs, 1200px para cima) */
    @media only screen and (min-width: 1023px) and (max-width: 1112px) {
        .login{
            width: 45%;
        }

        .form-floating{
            width: 70%;
        }
    }
</style>