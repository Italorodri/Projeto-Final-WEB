<template>
  <div class="perguntas_page">
    <div class="pagina_central">
        <Coluna1 />
        <div class="col2">
            <Header :mostrar_btn="mostrar_btn" />
            <PerguntasSC />
        </div>
    </div>
  </div>
</template>

<script>
    import Coluna1 from '../components/Coluna1.vue'
    import Header from '../components/Header.vue'
    import PerguntasSC from '../components/PerguntasSC.vue'

    export default ({
        name: "Perguntas",
        data(){
            return {
                mostrar_btn: false
            }
        },
        components:{
          Coluna1,
          Header,
          PerguntasSC
        },
        methods:{
            
        },
        mounted(){
            
        }
    })
</script>

<style scoped>
  #perfil-foto{
    width: 30px;
    height: 30px;
  }
</style>