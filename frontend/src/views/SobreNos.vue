<template>
    <div class="sobrenos_page">
        <div class="pagina_central">
            <Coluna1 />
            <div class="col2">
                <Header :mostrar_btn="mostrar_btn" />
                <SobreNosSC />
                <SobreNosFooter />
            </div>
        </div>
    </div>
</template>

<script>
    import Coluna1 from '../components/Coluna1.vue'
    import Header from '../components/Header.vue'
    import SobreNosSC from '../components/SobreNosSC.vue'
    import SobreNosFooter from '../components/SobreNosFooter.vue'

    export default ({
        name: "SobreNos",
        data(){
            return {
                mostrar_btn: false
            }
        },
        components:{
          Coluna1,
          Header,
          SobreNosSC,
          SobreNosFooter
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