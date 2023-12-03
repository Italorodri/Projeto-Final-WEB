<template>
  <div class="home_page">
    <div class="pagina_central home">
        <Coluna1 />
        <div class="col2">
            <Header :mostrar_btn="mostrar_btn" />
            <nav>
                <div>
                    <a href="#" @click="mostrarSecao('animais')">Animais</a>
                </div>
                <div>
                    <a href="#" @click="mostrarSecao('caracteristicas')">Características</a>
                </div>
                <div>
                    <a href="#" @click="mostrarSecao('informacoes')">Informações</a>
                </div>
                <div>
                    <a href="#" @click="mostrarSecao('ajudenos')">Ajude-nos</a>
                </div>
            </nav>

            <section id="animais" class="conteudo secao-ativa" v-show="secaoAtiva === 'animais'">
                <div class="linha">
                    <div v-for="animal in animalStore.animals" :key="animal.id" class="caixa" data-bs-toggle="modal" :data-bs-target="'#animalModal-' + animal.id">
                        <AnimalDetails :animal="animal" />
                    </div>

                    <div v-for="animal in animalStore.animals" :key="animal.id">
                        <div class="modal" :id="'animalModal-' + animal.id" tabindex="-1">
                            <div class="modal-dialog">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div class="card">
                                        <img :src="animal.imagem">
                                        <div class="card-body">
                                            <h5 class="card-title d-flex justify-content-center">Nome: {{ animal.nome }}</h5>
                                            <div class="card-text descricao d-flex align-content-left">
                                                    <p><strong>Tipo de animal:</strong> {{ animal.tipo }}</p>
                                                    <p><strong>Sexo:</strong> {{ animal.sexo }}</p>
                                                    <p><strong>Idade:</strong> {{ animal.idade }}</p>
                                                    <p><strong>Vacinado(a):</strong> {{ animal.vacinado }}</p>
                                                    <p><strong>Castrado(a):</strong> {{ animal.castrado }}</p>
                                                    <p><strong>Detalhes adicionais:</strong> {{ animal.detalhes }}</p>
                                            </div>
                                            <div class="botoes">
                                                <button type="submit" class="adotar btn btn-primary" @click="animalStore.salvarAnimal(animal.id), adotarAnimal(animal.id)"  :disabled="adotarDesabilitado">Quero adotar</button>
                                                <button type="submit" class="cancelar btn btn-danger" @click="animalStore.salvarAnimal(animal.id), cancelarAdocao(animal.id)" :disabled="cancelarDesabilitado">Cancelar</button>
                                            </div>
                                            <form id="formulario" class="formulario3">
                                                <div>
                                                    <label for="inputText" class="form-label"></label>
                                                    <textarea @keydown="contagemTexto()" class="form-control" id="inputText" placeholder="Comente algo..."></textarea>
                                                </div>
                                                <div class="row mt-3 mb-3">
                                                    <strong><span class="contadorModal d-flex justify-content-center"></span></strong>
                                                </div>
                                                <div class="btn-comentar d-flex justify-content-center py-2">
                                                    <button @click="comentar()" type="submit" id="Comentar" class="Comentar btn btn-primary" disabled>Comentar</button>
                                                </div>
                                            </form>
                                            <div id="commentPost"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
            <section id="caracteristicas" class="conteudo secao-ativa" v-show="secaoAtiva === 'caracteristicas'">
                <div class="page">
                    <div class="caixa">
                        <div class="imagem">
                            <img src="https://images.pexels.com/photos/4422100/pexels-photo-4422100.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1260&amp;h=750&amp;dpr=1" alt="grátis Foto profissional grátis de acariciando, amante dos animais, animal de estimação Foto profissional">
                        </div>
                        <div class="informacao">
                            <h2 class="reduzido">Cachorros</h2>
                            <p class="reduzido"><strong>Expectativa de vida:</strong> 10 - 20 anos</p>
                            <p class="reduzido"><strong>Altura:</strong> 15 - 110 centímetros (Até o ombro)</p>
                            <p class="reduzido"><strong>Período de gestação:</strong> 58 - 68 dias</p>
                            <p class="reduzido"><strong>Horas de sono:</strong> 12 - 14 horas (Adulto)</p>
                        </div>
                    </div>
                    <div class="caixa invertido">
                        <div class="imagem">
                            <img src="https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&amp;cs=tinysrgb&amp;w=1260&amp;h=750&amp;dpr=1" srcset="https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&amp;cs=tinysrgb&amp;w=1260&amp;h=750&amp;dpr=1 1x, https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&amp;cs=tinysrgb&amp;w=1260&amp;h=750&amp;dpr=2 2x" alt="grátis Gato Cinza De Pelo Curto Foto profissional" class="spacing_noMargin__Q_PsJ PhotoZoom_image__iR_Ia" width="3456" height="2304" style="transform: none; background: rgb(89, 82, 79);">
                        </div>
                        <div class="informacao">
                            <h2 class="reduzido">Gatos</h2>
                            <p class="reduzido"><strong>Expectativa de vida:</strong> 12 - 18 anos</p>
                            <p class="reduzido"><strong>Altura:</strong> 23 - 25 centímetros</p>
                            <p class="reduzido"><strong>Período de gestação:</strong> 65 dias</p>
                            <p class="reduzido"><strong>Horas de sono:</strong> 12 - 16 horas</p>
                        </div>
                    </div>
                    <div class="caixa">
                        <div class="imagem">
                            <img src="https://images.pexels.com/photos/3432929/pexels-photo-3432929.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1260&amp;h=750&amp;dpr=1" srcset="https://images.pexels.com/photos/3432929/pexels-photo-3432929.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1260&amp;h=750&amp;dpr=1 1x, https://images.pexels.com/photos/3432929/pexels-photo-3432929.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1260&amp;h=750&amp;dpr=2 2x" alt="grátis Foto profissional grátis de alimentação, bonitinho, fechar-se Foto profissional" class="spacing_noMargin__Q_PsJ PhotoZoom_image__iR_Ia" width="4367" height="3651" style="transform: none; background: rgb(160, 144, 125);">
                        </div>
                        <div class="informacao">
                            <h2 class="reduzido">Hamsters</h2>
                            <p class="reduzido"><strong>Expectativa de vida:</strong> 2 - 3 anos</p>
                            <p class="reduzido"><strong>Comprimento:</strong> 4,5 - 13 centímetros</p>
                            <p class="reduzido"><strong>Período de gestação:</strong> 20 - 22 dias</p>
                            <p class="reduzido"><strong>Horas de sono:</strong> 6 - 14 horas</p>
                        </div>
                    </div>
                    <div class="caixa invertido">
                        <div class="imagem">
                            <img src="https://images.pexels.com/photos/9214628/pexels-photo-9214628.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1260&amp;h=750&amp;dpr=1" srcset="https://images.pexels.com/photos/9214628/pexels-photo-9214628.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1260&amp;h=750&amp;dpr=1 1x, https://images.pexels.com/photos/9214628/pexels-photo-9214628.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1260&amp;h=750&amp;dpr=2 2x" alt="grátis Foto profissional grátis de animal, animal de estimação, arara Foto profissional" class="spacing_noMargin__Q_PsJ PhotoZoom_image__iR_Ia" width="4368" height="2893" style="transform: none; background: rgb(67, 93, 56);">
                        </div>
                        <div class="informacao">
                            <h2 class="reduzido">Papagaios</h2>
                            <p class="reduzido"><strong>Expectativa de vida:</strong> 80 anos</p>
                            <p class="reduzido"><strong>Altura:</strong> 35 - 37 centímetros</p>
                            <p class="reduzido"><strong>Período de gestação:</strong> 24 - 29 dias</p>
                            <p class="reduzido"><strong>Horas de sono:</strong> 10 - 12 horas</p>
                        </div>
                    </div>
                    <div class="caixa">
                        <div class="imagem">
                            <img src="https://images.pexels.com/photos/58875/pexels-photo-58875.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1260&amp;h=750&amp;dpr=1" srcset="https://images.pexels.com/photos/58875/pexels-photo-58875.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1260&amp;h=750&amp;dpr=1 1x, https://images.pexels.com/photos/58875/pexels-photo-58875.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1260&amp;h=750&amp;dpr=2 2x" alt="grátis Cavalo Branco Perto De Hay Stack Durante O Dia Foto profissional" class="spacing_noMargin__Q_PsJ PhotoZoom_image__iR_Ia" width="4368" height="2912" style="transform: none; background: rgb(127, 124, 108);">
                        </div>
                        <div class="informacao extra">
                            <h2 class="reduzido">Cavalos</h2>
                            <p class="reduzido"><strong>Expectativa de vida:</strong> 25 - 30 anos</p>
                            <p class="reduzido"><strong>Altura:</strong> 0,7 - 2 metros</p>
                            <p class="reduzido"><strong>Comprimento:</strong> 2,4 metros (Adulto)</p>
                            <p class="reduzido"><strong>Período de gestação:</strong> 11 - 12 meses</p>
                            <p class="reduzido"><strong>Horas de sono:</strong> 3 horas</p>
                        </div>
                    </div>
                    <div class="caixa invertido">
                        <div class="imagem">
                            <img src="https://images.pexels.com/photos/7013008/pexels-photo-7013008.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1260&amp;h=750&amp;dpr=1" srcset="https://images.pexels.com/photos/7013008/pexels-photo-7013008.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1260&amp;h=750&amp;dpr=1 1x, https://images.pexels.com/photos/7013008/pexels-photo-7013008.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1260&amp;h=750&amp;dpr=2 2x" alt="grátis Foto profissional grátis de adorável, animal doméstico, bonitinho Foto profissional" class="spacing_noMargin__Q_PsJ PhotoZoom_image__iR_Ia" width="3543" height="2362" style="transform: none; background: rgb(198, 167, 155);">
                        </div>
                        <div class="informacao extra">
                            <h2 class="reduzido">Porcos</h2>
                            <p class="reduzido"><strong>Expectativa de vida:</strong> 15 - 20 anos</p>
                            <p class="reduzido"><strong>Altura:</strong> 0,25 - 1,1 metros</p>
                            <p class="reduzido"><strong>Comprimento:</strong> 0,55 - 2,1 metros</p>
                            <p class="reduzido"><strong>Período de gestação:</strong> 112 - 120 dias</p>
                            <p class="reduzido"><strong>Horas de sono:</strong> 5 horas</p>
                        </div>
                    </div>
                    <div class="caixa">
                        <div class="imagem">
                            <img src="https://images.pexels.com/photos/10926606/pexels-photo-10926606.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1260&amp;h=750&amp;dpr=1" srcset="https://images.pexels.com/photos/10926606/pexels-photo-10926606.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1260&amp;h=750&amp;dpr=1 1x, https://images.pexels.com/photos/10926606/pexels-photo-10926606.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1260&amp;h=750&amp;dpr=2 2x" alt="grátis Foto profissional grátis de água, animal, animal de estimação Foto profissional" class="spacing_noMargin__Q_PsJ PhotoZoom_image__iR_Ia" width="3933" height="2390" style="transform: none; background: rgb(123, 159, 157);">
                        </div>
                        <div class="informacao">
                            <h2 class="reduzido">Porcos-da-Índia</h2>
                            <p class="reduzido"><strong>Expectativa de vida:</strong> 4 - 9 anos</p>
                            <p class="reduzido"><strong>Comprimento:</strong> 20 - 40 centímetros</p>
                            <p class="reduzido"><strong>Período de gestação:</strong> 59 - 72 dias</p>
                            <p class="reduzido"><strong>Horas de sono:</strong> 9,4 horas</p>
                        </div>
                    </div>
                    <div class="caixa invertido">
                        <div class="imagem">
                            <img src="https://images.pexels.com/photos/5475197/pexels-photo-5475197.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1260&amp;h=750&amp;dpr=1" srcset="https://images.pexels.com/photos/5475197/pexels-photo-5475197.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1260&amp;h=750&amp;dpr=1 1x, https://images.pexels.com/photos/5475197/pexels-photo-5475197.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1260&amp;h=750&amp;dpr=2 2x" alt="grátis Foto profissional grátis de animal, fechar-se, gecko leopardo Foto profissional" class="spacing_noMargin__Q_PsJ PhotoZoom_image__iR_Ia" width="3000" height="2000" style="transform: none; background: rgb(232, 223, 214);">
                        </div>
                        <div class="informacao">
                            <h2 class="reduzido">Gecko</h2>
                            <p class="reduzido"><strong>Expectativa de vida:</strong> 15 anos (20 em cativeiro)</p>
                            <p class="reduzido"><strong>Comprimento:</strong> 25 centímetros</p>
                            <p class="reduzido"><strong>Período de incubação:</strong> 48 - 53 dias</p>
                            <p class="reduzido"><strong>Horas de sono:</strong> Ciclos de 10 a 15 minutos seguidos de 5 a 10 minutos de atividade</p>
                        </div>
                    </div>
                    <div class="caixa">
                        <div class="imagem">
                            <img src="https://images.pexels.com/photos/7179720/pexels-photo-7179720.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1260&amp;h=750&amp;dpr=1" srcset="https://images.pexels.com/photos/7179720/pexels-photo-7179720.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1260&amp;h=750&amp;dpr=1 1x, https://images.pexels.com/photos/7179720/pexels-photo-7179720.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1260&amp;h=750&amp;dpr=2 2x" alt="grátis Foto profissional grátis de animal, bigodes de gato, fechar-se Foto profissional" class="spacing_noMargin__Q_PsJ PhotoZoom_image__iR_Ia" width="6000" height="4000" style="transform: none; background: rgb(128, 137, 141);">
                        </div>
                        <div class="informacao">
                            <h2 class="reduzido">Furões</h2>
                            <p class="reduzido"><strong>Expectativa de vida:</strong> 5 - 10 anos</p>
                            <p class="reduzido"><strong>Comprimento:</strong> 38 centímetros (Sem cauda)</p>
                            <p class="reduzido"><strong>Período de gestação:</strong> 42 dias</p>
                            <p class="reduzido"><strong>Horas de sono:</strong> 14 - 18 horas</p>
                        </div>
                    </div>
                </div>
            </section>
            
            <section id="informacoes" class="conteudo secao-ativa" v-show="secaoAtiva === 'informacoes'">
                <div class="sobre">
                    <p><strong>Aqui apresentamos os cuidados necessários que se deve ter com o(s) animal(ais) de estimação de forma mais detalhada. Por favor, pedimos que preste atenção a estes detalhes pois é importante tanto para o seu bichinho quanto para o ambiente de sua casa.</strong></p>
                </div>
                <ul>
                    <li>Cuidados com a Alimentação:</li>
                    <div class="detalhes excecao">
                        <div class="lista">
                            <ol>
                                <li>Escolha uma dieta adequada para a espécie, raça e idade do animal.</li>
                                <li>Alimente o animal em horários regulares e evite dar comida em excesso.</li>
                                <li>Mantenha sempre água limpa e fresca disponível.</li>
                                <li>Evite alimentar o animal com alimentos humanos que possam ser tóxicos.</li>
                            </ol>
                        </div>
                        <div class="img">
                            <img class="cp_picture__img" src="https://images.ctfassets.net/pjshm78m9jt4/103757_header/ec6c93c152d6ca5ae35c4910727f3248/importedImage103757_header?fm=jpg&amp;fit=fill&amp;w=400&amp;h=225&amp;q=80">
                        </div>
                    </div>

                    <li>Cuidados com a Saúde:</li>
                    <div class="detalhes excecao">
                        <div class="lista">
                            <ol>
                                <li>Agende consultas regulares com um veterinário para check-ups de saúde.</li>
                                <li>Mantenha o animal atualizado nas vacinas e tratamentos preventivos.</li>
                                <li>Esteja atento a sinais de doença, como falta de apetite, letargia ou alterações comportamentais.</li>
                                <li>Cuide da saúde bucal, escovando os dentes do animal regularmente.</li>
                            </ol>
                        </div>
                        <div class="img">
                            <img src="https://img.freepik.com/premium-photo/vet-applies-bandage-injured-dog-s-head_199743-11481.jpg" alt="Photo the vet applies a bandage to the injured dog's head">
                        </div>
                    </div>

                    <li>Cuidados com a Higiene:</li>
                    <div class="detalhes">
                        <div class="lista">
                            <ol>
                                <li>Mantenha o ambiente limpo e seguro para o animal.</li>
                                <li>Banhe e escove o animal de acordo com a necessidade da raça.</li>
                                <li>Cuide das unhas do animal para evitar problemas de saúde e arranhões.</li>
                                <li>Certifique-se de que a cama e a área de descanso do animal estejam limpas e confortáveis.</li>
                            </ol>
                        </div>
                        <div class="img">
                            <img src="https://www.clubvet.com.tr/wp-content/uploads/2021/10/blog-7-main.jpg" alt="FUNGUS DISEASE IN CATS">
                        </div>
                    </div>

                    <li>Cuidados com o Exercício:</li>
                    <div class="detalhes">
                        <div class="lista">
                            <ol>
                                <li>Forneça exercício regular e atividades adequadas à energia do animal.</li>
                                <li>Passeie com cães diariamente para estimular a mente e o corpo.</li>
                                <li>Brinque com brinquedos interativos que desafiem o animal mentalmente.</li>
                            </ol>
                        </div>
                        <div class="img">
                            <img src="https://www.dailypress.com/wp-content/uploads/migration/2023/04/29/Z7BSFTS4AK7OBRPGVDEACM75KY.jpg?w=620" alt="This fat cat's story went around the world, and a Virginia woman had to  have him. – Daily Press">
                        </div>
                    </div>

                    <li>Cuidados com o Comportamento:</li>
                    <div class="detalhes">
                        <div class="lista">
                            <ol>
                                <li>Socialize o animal desde jovem para promover uma personalidade equilibrada.</li>
                                <li>Treine o animal com base em reforço positivo para obediência e boas maneiras.</li>
                                <li>Esteja atento a problemas de comportamento, como agressão, ansiedade ou medo.</li>
                            </ol>
                        </div>
                        <div class="img">
                            <img src="https://www.yarrah.com/media/1d/ae/e3/1648219573/yarrah-correcting-your-cats-bad-behaviour.jpeg">
                        </div>
                    </div>

                    <li>Cuidados com a Segurança:</li>
                    <div class="detalhes">
                        <div class="lista">
                            <ol>
                                <li>Mantenha o animal em segurança com cercas e/ou coleiras adequadas.</li>
                                <li>Evite deixar produtos perigosos ao alcance do animal.</li>
                                <li>Esteja ciente dos perigos do ambiente, como plantas tóxicas.</li>
                            </ol>
                        </div>
                        <div class="img">
                            <img alt="File:Fighting cat (crop).jpg" src="//upload.wikimedia.org/wikipedia/commons/thumb/1/16/Fighting_cat_%28crop%29.jpg/800px-Fighting_cat_%28crop%29.jpg">
                        </div>
                    </div>

                    <li>Cuidados em Clima Extremo:</li>
                    <div class="detalhes">
                        <div class="lista">
                            <ol>
                                <li>Proteja o animal do calor excessivo, fornecendo sombra e água fresca.</li>
                                <li>Mantenha o animal aquecido em climas frios com roupas e abrigo adequado.</li>
                            </ol>
                        </div>
                        <div class="img">
                            <img alt="r/goldenretrievers - Ice Pool" src="https://preview.redd.it/477ezab1ju711.jpg?width=640&amp;crop=smart&amp;auto=webp&amp;s=9ee5d1294b496e1fcf05bba76a5a174f12a2c9f4">
                        </div>
                    </div>

                    <li>Cuidados com a Esterilização/Castração:</li>
                    <div class="detalhes">
                        <div class="lista">
                            <ol>
                                <li>Considere a esterilização/castração para evitar reprodução indesejada.</li>
                                <li>Consulte o veterinário sobre o momento adequado para realizar o procedimento.</li>
                            </ol>
                        </div>
                        <div class="img">
                            <img src="https://thecuencadispatch.com/wp-content/uploads/2018/04/Pets.jpg" alt="">
                        </div>
                    </div>
                </ul>
            </section>
            
            <section id="ajudenos" class="conteudo secao-ativa" v-show="secaoAtiva === 'ajudenos'">
                <div class="ajConteudo">
                    <div class="col dados">
                        <p class="titulo"><strong>Ajude o nosso projeto</strong></p>
                        <p class="texto_apelativo">Este é um projeto sem fins lucrativos, desenvolvido com a finalidade de ajudar animais a encontrarem um novo lar. Mas se quiser nos apoiar e a manter este projeto funcionando, estamos abertos a doações. <i class="bi bi-heart-fill"></i></p>
                        <p class="email"><i class="bi bi-envelope"></i><strong>E-mail:</strong> <i>adote_aiAnimais@gmail.com</i></p>
                        <p class="telefone"><i class="bi bi-telephone"></i><strong>Telefone:</strong> <i><u>+55 0800 813 7642</u></i></p>
                        <p class="cnpj"><i class="bi bi-file-earmark-text"></i><strong>CNPJ:</strong> <i><u>30.025.805/0001-50</u></i></p>
                    </div>
                    <div class="col pix">
                        <img src="/img/qrcode.png" id="qr_code">
                        <h2>CÓDIGO QR</h2>
                        <h4>Nome: <u>Adote Aí Secretaria</u></h4>
                    </div>
                </div>
            </section>
        </div>
    </div>
  </div>
</template>

<script>
    import Coluna1 from '../components/Coluna1.vue'
    import Header from '../components/Header.vue'
    import CaracteristicasHome from '../components/CaracteristicasHome.vue'
    import { useAnimalStore } from '../stores/AnimalStore'
    import AnimalDetails from '../components/AnimalDetails.vue'

    export default ({
        name: "Home",
        data(){
            return {
                secaoAtiva: 'animais',
                mostrar_btn: false,
                adotarDesabilitado: false,
                cancelarDesabilitado: true
            }
        },
        setup(){
            const animalStore = useAnimalStore();

            animalStore.getAnimals();

            return { animalStore };
        },
        components:{
          Coluna1,
          Header,
          AnimalDetails,
          CaracteristicasHome
        },
        methods:{
            mostrarSecao(secao) {
                this.secaoAtiva = secao;
            },
            adotarAnimal(animalId) {
                this.adotarDesabilitado = true;
                this.cancelarDesabilitado = false;
            },
            cancelarAdocao(animalId) {
                this.cancelarDesabilitado = true;
                this.adotarDesabilitado = false;
            },
            contagemTexto(){
                const limite = 300;

                function text(textarea, textoContagem, btn) {
                    let tamanho = textarea.value.length;
                    let cont = limite - tamanho;
                    let frasePronta;
                    
                    textoContagem.innerHTML = cont;

                    const palavra = textarea.value;
                    
                    if(cont < 200 && cont >= 101){
                        textoContagem.style.color = "rgb(0, 0, 175)";
                        btn.disabled = false;
                        frasePronta = " caracteres restantes";
                    }else if(cont <= 100 && cont >= 51){
                        textoContagem.style.color = "green";
                        btn.disabled = false;
                        frasePronta = " caracteres restantes";
                    }else if(cont <= 50 && cont >= 21){
                        textoContagem.style.color = "rgb(197, 197, 25)";
                        btn.disabled = false;
                        frasePronta = " caracteres restantes";
                    }else if(cont <= 20 && cont > 0){
                        textoContagem.style.color = "orange";
                        btn.disabled = false;
                        frasePronta = " caractere(s) restante(s)";
                    }else if(cont <= 0){
                        textoContagem.style.color = "red";
                        btn.disabled = true;
                        frasePronta = "! Limite atingido";
                    }else if(palavra == ""){
                        textoContagem.style.color = "black";
                        btn.disabled = true;
                        frasePronta = " caracteres disponíneis";
                    }else{
                        textoContagem.style.color = "dark-gray";
                        btn.disabled = false;
                        frasePronta = " letras restantes";
                    }

                    textoContagem.innerHTML += frasePronta;
                }

                const qtd = document.querySelectorAll("#Comentar");
                const textareas = document.getElementsByTagName("textarea");
                const contadores = document.querySelectorAll(".contadorModal");

                for (let i = 0; i < textareas.length; ++i) {
                    textareas[i].addEventListener("input", function () {
                        this.style.height = "auto";
                        this.style.height = `${this.scrollHeight}px`;

                        text(textareas[i], contadores[i], qtd[i]);
                    });
                }
            },
            comentar(){
                const textComment = document.querySelectorAll("#inputText");
                const form = document.querySelectorAll("#formulario");
                const commentPost = document.querySelectorAll("#commentPost");

                for (let i = 0; i < form.length; ++i) {
                    const handleSubmit = (event) => {
                        event.preventDefault();

                        let p = document.createElement("p");
                        p.classList = "p-2 d-flex text-wrap flex-wrap comment";
                        p.style.overflowWrap = "anywhere";
                        p.innerHTML = `<strong>Username: </strong> &nbsp ${textComment[i].value}`;
                        commentPost[i].appendChild(p);
                        textComment[i].value = "";

                        form[i].removeEventListener("submit", handleSubmit);
                    };

                    form[i].addEventListener("submit", handleSubmit);
                }
            }
        },
        mounted(){

        }
    })
</script>

<style scoped>
    html {
        scroll-behavior: smooth;
    }

    .pagina_central{
        /*height: 100%;
        height: 619px;*/
        display: flex;
    }

    .col2{
        width: 85%;
        height: 100%;
        margin-left: 15%;
        display: inline-block;
    }

    nav a{
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

    .secao-ativa {
        display: block;
    }

    .linha{
        display: flex;
        flex-flow: row wrap;
        padding-bottom: 30px;
    }

    #animais .caixa img{
        width: 100%;
        height: auto;
        border-radius: 20px;
    }

    #animais .caixa h2{
        border: none;
    }

    #animais .caixa{
        margin-top: 20px;
        margin-left: 12.5px;
        margin-right: 12.5px;
        margin-bottom: 10px;
        width: 350px;
        height: fit-content;
        box-shadow: 0px 8px 10px black;
        border-radius: 20px;
        background-color: white;
        display: flex;
        flex-flow: column wrap;
    }

    #animais .caixa:hover{
        background-color: rgb(184, 184, 184);
    }

    .descricao{
        display: flex;
        flex-flow: column wrap;
    }

    h2{
        margin-top: 20px;
        margin-bottom: 15px;
        display: flex;
        align-self: center;
    }

    .reduzido{
        margin-left: 15px;
    }

    .card{
        height: fit-content;
    }

    .card img{
        width: 100%;
        height: fit-content;
    }

    .card-body{
        display: flex;
        flex-flow: column wrap;
    }

    .botoes{
        display: flex;
        justify-content: center;
        margin-top: 10px;
    }

    .adotar{
        margin-right: 20px;
    }

    .btn-comentar{
        margin-top: 10px;
    }

    .page{
        width: 100%;
        display: flex;
        flex-flow: column wrap;
        justify-content: center;
        align-items: center;
    }

    #caracteristicas .caixa{
        width: 95%;
        height: 250px;
        margin-top: 20px;
        margin-left: 2.5%;
        margin-bottom: 20px;
        box-shadow: 0px 8px 10px black;
        border-radius: 20px;
        background-color: white;
        display: flex;
        flex-flow: row wrap;
        align-items: center;
    }

    #caracteristicas .caixa img{
        width: auto;
        height: 200px;
        border-radius: 5px;
        margin-left: 25px;
        margin-right: 20px;
    }

    div.informacao{
        height: 100%;
    }

    div.informacao h2{
        margin-bottom: 20px;
    }

    div.extra p{
        margin-bottom: 8px;
    }

    #caracteristicas .invertido{
        display: flex;
        flex-flow: row-reverse wrap;
        justify-content: space-between;
        align-items: center;
    }

    #caracteristicas .invertido .informacao{
        margin-left: 25px;
    }

    #caracteristicas .invertido img{
        margin-left: 20px;
        margin-right: 25px;
    }

    #informacoes{
        background-color: white;
    }

    .sobre{
        margin-top: 50px;
    }

    #informacoes .sobre p{
        font-size: 24px;
        margin-right: 50px;
    }

    #informacoes ul > li{
        font-weight: bold;
        font-size: 28px;
        color: rgb(0, 86, 199);
        margin-bottom: 15px;
        margin-left: 50px;
    }

    #informacoes ol > li{
        font-weight: bold;
        font-size: 20px;
        color: rgb(0, 0, 0);
        margin-bottom: 15px;
        margin-left: 50px;
    }

    #informacoes p{
        padding-bottom: 30px;
        font-size: 20px;
        margin-left: 50px;
    }

    .detalhes{
        width: 100%;
        /*height: 275px;*/
        height: fit-content;
        display: flex;
        flex-flow: row wrap;
        margin-bottom: -20px;
    }

    .excecao{
        margin-bottom: 40px;
    }

    #informacoes .lista{
        width: 675px;
    }

    #informacoes .img{
        width: 400px;
        height: auto;
        margin-left: 20px;
        display: flex;
        justify-content: center;
    }

    #informacoes img{
        width: auto;
        height: 210px;
        border-radius: 5px;
    }

    .ajConteudo{
        /*height: 100%;*/
        /*height: 486px;*/
        display: flex;
        flex-flow: row wrap;
    }

    .col{
        display: flex;
        flex-flow: column wrap;
    }

    .dados{
        width: 100%;
        align-items: center;
        color: black;
    }

    .dados .titulo{
        margin-top: 50px;
        margin-bottom: 15px;
        color: gold;
        font-size: 48px;
    }

    .dados .email, .dados .telefone, .dados .cnpj{
        width: auto;
        align-self: flex-start;
    }

    .texto_apelativo{
        margin-left: 50px;
        margin-right: 50px;
        margin-bottom: 20px;
        font-size: 20px;
    }

    .dados i.bi{
        color: black;
        margin-right: 5px;
        margin-left: 50px;
    }

    i.bi.bi-heart-fill{
        color: red;
        margin-left: 0px;
    }

    .pix{
        align-items: center;
    }

    #qr_code{
        width: 300px;
        height: auto;
        border-radius: 20px;
        margin-top: 37px;
    }

    /* Smartphones (600px para baixo) */
    @media only screen and (max-width: 600px) {

        .nomeTela, .btn_perfil{
            display: none;
        }

        .header_frente{
            flex-flow: row-reverse;
            justify-content: space-evenly;
        }

        header + nav a{
            font-size: 14px;
        }

        .linha{
            flex-flow: column wrap;
            align-items: center;
        }

        #animais .caixa{
            margin-left: 0px;
            width: 300px;
        }

        .modal-dialog{
            display: flex;
            justify-content: center;
        }

        .modal-content{
            width: 400px;
        }

        .ajConteudo{
            flex-flow: column nowrap;
            align-items: center;
            justify-content: center;
        }

        .dados .titulo{
            margin-top: 40px;
            margin-bottom: 25px;
            text-align: center;
        }

        .pix{
            margin-top: 20px;
            margin-bottom: 20px;
        }

        .detalhes{
            height: fit-content;
            margin-bottom: 40px;
        }

        #informacoes ul{
            padding-left: 0px;
            padding-right: 10px;
        }

        #caracteristicas .caixa{
            height: fit-content;
            flex-flow: column wrap;
            padding-top: 20px;
            padding-bottom: 20px;
        }

        #caracteristicas .imagem{
            display: flex;
            justify-content: center;
        }

        #caracteristicas .caixa img{
            width: 90%;
            height: auto;
            margin: 0px;
        }

        div.informacao{
            width: 100%;
            display: flex;
            flex-flow: column wrap;
        }

        #caracteristicas .invertido .informacao{
            margin-left: 0px;
        }
        
        #caracteristicas .invertido img{
            margin-left: 0px;
            margin-right: 0px;
        }

        p.reduzido{
            margin-left: 30px;
        }

        h2.reduzido{
            margin-left: 0px;
        }
    }

    /*Dispostivos Médios (Tablets deitados, até 768px) */
    @media only screen and (min-width: 601px) and (max-width: 782px) {

        .nomeTela{
            display: none;
        }

        .col1 li a{
            justify-content: center;
        }

        .col1 li{
            padding-left: 0px;
        }

        .col1 li a i{
            margin-right: 0px;
        }

        header + nav a{
            font-size: 16px;
        }

        .linha{
            width: 100%;
            flex-flow: row wrap;
            justify-content: space-evenly;
            align-items: center;
        }

        #animais .caixa{
            width: 275px;
            margin-left: 5px;
            margin-right: 0px;
        }

        .modal-dialog{
            display: flex;
            justify-content: center;
        }

        .modal-content{
            width: 425px;
        }

        .ajConteudo{
            flex-flow: column nowrap;
            align-items: center;
            justify-content: center;
        }

        .dados .titulo{
            margin-top: 40px;
            margin-bottom: 25px;
            text-align: center;
        }

        .pix{
            margin-top: 30px;
            margin-bottom: 20px;
        }

        .detalhes{
            flex-flow: column nowrap;
            height: fit-content;
            justify-content: center;
            align-items: center;
            margin-bottom: 40px;
        }

        #informacoes ul{
            padding-left: 0px;
            padding-right: 10px;
        }

        .lista ol{
            padding-left: 110px;
            padding-right: 90px;
        }

        .detalhes .img{
            width: 100%;
            align-items: center;
            justify-content: center;
        }

        #caracteristicas .caixa{
            width: 70%;
            height: fit-content;
            flex-flow: column wrap;
            padding-top: 20px;
            padding-bottom: 20px;
            position: relative;
        }

        #caracteristicas .imagem{
            display: flex;
            justify-content: center;
        }

        #caracteristicas .caixa img{
            width: auto;
            height: 210px;
            margin-left: 0px;
            margin-right: 0px;
        }

        div.informacao{
            width: 100%;
            display: flex;
            flex-flow: column wrap;
        }

        #caracteristicas .invertido .informacao{
            margin-left: 0px;
        }
        
        #caracteristicas .invertido img{
            margin-left: 0px;
            margin-right: 0px;
        }

        p.reduzido{
            margin-left: 30px;
        }

        h2.reduzido{
            margin-left: 0px;
        }
    }

    @media only screen and (min-width: 783px) and (max-width: 920px) {
        #animais .caixa{
            width: 250px;
            margin-left: 5px;
            margin-right: 0px;
        }

        .linha{
            justify-content: space-evenly;
            align-items: center;
        }

        .ajConteudo{
            margin-bottom: 20px;
        }

        .dados .titulo{
            margin-top: 40px;
            margin-bottom: 25px;
            text-align: center;
        }

        .pix{
            justify-content: center;
        }

        .detalhes{
            flex-flow: column nowrap;
            height: fit-content;
            justify-content: center;
            align-items: center;
            margin-bottom: 40px;
        }

        #informacoes ul > li{
            margin-left: 15px;
        }

        .lista ol{
            padding-left: 20px;
            padding-right: 50px;
        }

        .detalhes .img{
            width: 100%;
            align-items: center;
            justify-content: center;
        }

        .page{
            flex-flow: row wrap;
            justify-content: space-evenly;
        }

        #caracteristicas .caixa{
            width: 40%;
            height: fit-content;
            flex-flow: column wrap;
            padding-top: 20px;
            padding-bottom: 20px;
        }

        #caracteristicas .imagem{
            display: flex;
            justify-content: center;
        }

        #caracteristicas .caixa img{
            width: 90%;
            height: auto;
            margin: 0px;
        }

        div.informacao{
            width: 100%;
            display: flex;
            flex-flow: column wrap;
        }

        #caracteristicas .invertido .informacao{
            margin-left: 0px;
        }
        
        #caracteristicas .invertido img{
            margin-left: 0px;
            margin-right: 0px;
        }

        p.reduzido{
            padding-left: 10px;
            padding-right: 10px;
        }

        h2.reduzido{
            margin-left: 0px;
        }
    }

    /* Dispostivos Largos (laptops/desktops, 992px para cima) */
    @media only screen and (min-width: 770px) and (max-width: 1022px) {
        .col1 li{
            padding-left: 0px;
        }

        .col1 li a{
            flex-flow: column wrap;
            justify-content: center;
            align-items: center;
        }

        .col1 li a i{
            margin-right: 0px;
        }
        
        .linha{
            justify-content: space-evenly;
            align-items: center;
        }

        .ajConteudo{
            margin-bottom: 20px;
        }

        .dados .titulo{
            margin-top: 40px;
            margin-bottom: 25px;
            text-align: center;
        }

        .pix{
            justify-content: center;
        }

        .detalhes{
            flex-flow: column nowrap;
            height: fit-content;
            justify-content: center;
            align-items: center;
            margin-bottom: 40px;
        }

        #informacoes ul > li{
            margin-left: 50px;
        }

        .lista ol{
            padding-left: 50px;
            padding-right: 50px;
        }

        .detalhes .img{
            width: 100%;
            align-items: center;
            justify-content: center;
        }
    }

    @media only screen and (min-width: 921px) {
        #caracteristicas .invertido{
            display: flex;
            flex-flow: row-reverse nowrap;
            justify-content: space-between;
            align-items: center;
        }

        #caracteristicas .caixa{
            height: 270px;
        }
    }

    /*
    #caracteristicas .invertido{
            display: flex;
            flex-flow: row-reverse nowrap;
            justify-content: space-between;
            align-items: center;
        }
    */

    /* Super Largos (Telas maiores laptops, desktops e até TVs, 1200px para cima) */
    @media only screen and (min-width: 1023px) {
        .linha{
            justify-content: space-evenly;
        }

        .ajConteudo{
            margin-bottom: 20px;
        }

        .dados .titulo{
            margin-top: 40px;
            margin-bottom: 25px;
            text-align: center;
        }

        .pix{
            justify-content: center;
        }

        .dados .titulo{
            margin-top: 40px;
            margin-bottom: 25px;
            text-align: center;
        }

        .detalhes{
            flex-flow: row wrap;
            margin-bottom: 40px;
        }

        #informacoes div.lista{
            width: 50%;
        }

        .lista ol, .lista li{
            margin-left: 0px;
        }

        #informacoes .img{
            width: 50%;
            margin-left: 0px;
        }
    }
</style>