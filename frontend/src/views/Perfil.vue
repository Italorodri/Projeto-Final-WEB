<template>
        <div class="pagina_central perfil_page">
            <Coluna1 />
            <div class="col2">
                <Header :mostrar_btn="mostrar_btn" />
                <section>
                    <Profile />
                    <div class="content">
                        <nav>
                            <div>
                                <a href="#" @click="mostrarSecao('salvos')">Salvos</a>
                            </div>
                            <div>
                                <a href="#" @click="mostrarSecao('editar')">Editar</a>
                            </div>
                        </nav>
                        <hr>
                        <section id="salvos" class="conteudo secao-ativa" v-show="secaoAtiva === 'salvos'">
                            <div class="linha">
                                <AnimalAdocao />
                                <AnimalPedido />
                            </div>
                        </section>
                        
                        <section id="editar" class="conteudo secao-ativa" v-show="secaoAtiva === 'editar'">
                            <div class="linha">
                                <AnimalCriado />
                            </div>

                            <AnimalAdd />
                        </section>
                    </div>
                </section>
            </div>
        </div>
</template>

<script>
    import Coluna1 from '../components/Coluna1.vue'
    import Header from '../components/Header.vue'
    import Profile from '../components/Profile.vue'
    import AnimalAdocao from '../components/AnimalAdocao.vue'
    import AnimalPedido from '../components/AnimalPedido.vue'
    import AnimalCriado from '../components/AnimalCriado.vue'
    import AnimalAdd from '../components/AnimalAdd.vue'

    export default ({
        name: "Perfil",
        data(){
            return {
                secaoAtiva: 'salvos',
                mostrar_btn: true
            }
        },
        components:{
          Coluna1,
          Header,
          Profile,
          AnimalAdocao,
          AnimalPedido,
          AnimalCriado,
          AnimalAdd
        },
        methods:{
            mostrarSecao(secao) {
                // Ocultando todas as seções
                this.secaoAtiva = secao;
            }
        }
    })
</script>

<style scoped>
    .btn_perfil2{
        width: 165px;
    }

    section{
        /*background-color: gray;*/
        background-color: rgb(0, 63, 145);
        display: flex;
        flex-flow: column wrap;
    }

    section#editar, section#salvos{
        height: 315px;
    }

    nav{
        width: 100%;
        height: 50px;
        /*background-color: gray;*/
        background-color: rgb(0, 86, 199);
        display: flex;
        flex-flow: row wrap;
        justify-content: space-evenly;
        position: sticky;
        top: 0;
    }

    nav div{
        width: 50%;
        display: flex;
    }

    hr{
        margin-top: 0px;
        margin-bottom: 0px;
        border: 1px solid white;
        opacity: 100%;
    }

    .conteudo {
        /*background-color: gray;*/
        background-color: rgb(112, 174, 255);
    }

    .secao-ativa {
        display: block;
    }

    .linha{
        display: flex;
        flex-flow: row wrap;
    }

    #salvos, #editar{
        height: 334px;
    }

    nav a:hover{
        font-size: 24px;
    }
</style>