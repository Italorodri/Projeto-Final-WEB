<template>
    <div class="ajuda_page">
        <div class="pagina_central">
            <Coluna1 />
            <div class="col2">
                <Header :mostrar_btn="mostrar_btn" />
                <AjudaSC />
            </div>
        </div>
    </div>
</template>

<script>
    import Coluna1 from '../components/Coluna1.vue'
    import Header from '../components/Header.vue'
    import AjudaSC from '../components/AjudaSC.vue'

    export default ({
        name: "Ajuda",
        data(){
            return {
                mostrar_btn: false
            }
        },
        components:{
          Coluna1,
          Header,
          AjudaSC
        },
        methods:{
            
        },
        mounted(){
            
        }
    })
</script>