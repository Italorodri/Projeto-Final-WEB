<template>
  <div class="seja_bem_vindo">
    <ImagensBG />
    <div class="bem-vindo">
        <img class="logo" src="/img/logo.png" alt="Logo">
        <h2><strong>Seja Bem-Vindo ao <span class="text-primary">Adote Aí!</span></strong></h2>
        <div class="loginOuCadastro">
            <router-link to="/login"><button class="login btn btn-primary">Fazer Login</button></router-link>
            <router-link to="/cadastro"><button class="cadastro btn btn-primary">Cadastrar-se</button></router-link>
        </div>
        <router-link to="/home"><button class="visitante btn btn-primary">Sou visitante</button></router-link>
    </div>
  </div>
</template>

<script>
    import ImagensBG from '../components/ImagensBG.vue'

    export default ({
        name: "SejaBemVIndo",
        components: {
          ImagensBG
        }
    })
</script>

<style scoped>
  .seja_bem_vindo{
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .imagens{
      display: flex;
      flex-flow: row wrap;
      z-index: 1;
  }

  img{
      width: 20%;
      height: 206.33px;
  }

  .bem-vindo{
      width: 45%;
      height: fit-content;
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

  .logo{
      width: 150px;
      height: auto;
      margin-top: 20px;
      border-radius: 80px;
  }

  span{
      color: #0d6efd;
  }

  h2{
      color: white;
      margin-top: 15px;
      margin-bottom: 30px;
  }

  .loginOuCadastro{
      width: 100%;
      display: flex;
      flex-flow: row wrap;
      justify-content: center;
  }

  .login{
      margin-right: 20px;
  }

  .cadastro{
      margin-left: 20px;
  }

  .visitante, .login, .cadastro{
      padding: 15px;
      margin-bottom: 20px;
      font-size: 20px;
      font-weight: bold;
  }

  .visitante:hover, .login:hover, .cadastro:hover{
      background-color: rgb(0, 0, 100);
      border-color: rgb(0, 0, 100);
  }

  @media only screen and (min-width: 100px)  and (max-width: 1100px){
      img{
          height: 201.5px;
      }

      .visitante, .login, .cadastro{
          width: fit-content;
          height: 50px;
          display: flex;
          align-items: center;
      }

      a{
          width: fit-content;
          height: 50px;
          text-decoration: none;
          margin-bottom: 20px;
      }
  }

  /* Smartphones (600px para baixo) */
  @media only screen and (max-width: 600px) {
      .bem-vindo{
          width: 80%;
      }
  }

  /*Dispostivos Médios (Tablets deitados, até 768px) */
  @media only screen and (min-width: 601px) and (max-width: 782px) {
      .bem-vindo{
          width: 80%;
      }
  }

  @media only screen and (min-width: 783px) and (max-width: 920px) {
      .bem-vindo{
          width: 60%;
      }
  }

  @media only screen and (min-width: 921px) and (max-width: 1022px) {
      .bem-vindo{
          width: 50%;
      }
  }

  /* Super Largos (Telas maiores laptops, desktops e até TVs, 1200px para cima) */
  @media only screen and (min-width: 1023px) and (max-width: 1112px) {
      .bem-vindo{
          width: 45%;
      }
  }
</style>
