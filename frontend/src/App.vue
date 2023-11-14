<template>
  <div id="app">
    <!--<Navbar />-->
    <router-view/>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'

export default ({
  name: "App",
  components: {
    Navbar
  }
})
</script>

<style>
  *{
    padding: 0px;
    margin: 0px;
    box-sizing: border-box;
  }

  .pagina_central{
    display: flex;
  }

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

  .col1 li a i{
      padding: 0px;
      margin-right: 10px;
      font-size: 30px;
  }

  .col2{
      width: 85%;
      height: 100%;
      margin-left: 15%;
      display: inline-block;
  }

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

  button i{
      font-size: 25px;
      margin-right: 5px;
      padding: 0px;
  }

  header a{
      text-decoration: none;
  }

  .logout, nav a{
      color: white;
      text-decoration: none;
      font-weight: bold;
      font-size: 18px;
  }

  nav{
      width: 100%;
      height: 40px;
      background-color: rgb(0, 86, 199);
      display: flex;
      flex-flow: row wrap;
      justify-content: space-evenly;
      position: sticky;
      top: 0;
  }

  nav div{
      width: 25%;
      display: flex;
  }

  nav div a{
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
  }

  nav div a:hover{
      color: white;
      border-radius: 4px;
      border-bottom: 4px solid white;
      transition: .25s;
  }

  .conteudo {
      width: 100%;
      /*height: 486px;*/
      height: 467px;
      display: none;
      overflow: auto;
      background-color: rgb(112, 174, 255);
  }
</style>
