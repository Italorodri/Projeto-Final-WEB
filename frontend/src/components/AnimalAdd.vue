<template>
    <div>
        <button class="add_animal" alt="Adicionar animal para adoção"  data-bs-toggle="modal" data-bs-target=".animal3"><i class="bi bi-plus"></i></button>
                            
        <div class="modal animal3" tabindex="-1">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="card">
                        <!-- <img src="#" alt="Foto do animal"> -->
                        <div class="card-body">
                            <div class="card-text descricao d-flex align-content-left">
                                <form id="formulario" class="formulario4" @submit="handleSubmit">
                                    <!-- <FotoSelect /> -->
                                    <div id="lugarDeImagem2" :style="{ 'background-image': `url(${imgSelecionada2})` }" @click="selectImage2">
                                        <img src="/img/IconHumanAnimal.png" id="icon2">
                                    </div>

                                    <label for="fileInput2" class="inputPersonalizado2">
                                        Alterar foto
                                    </label>
                                    <input id="fileInput2" ref="fileInput" type="file" @input="pickFile2" accept="image/jpeg, image/png">
                                    
                                    <div class="name">
                                        <div class="form-floating">
                                            <input v-model="name" type="text" class="form-control" id="nome" placeholder="Nome" required>
                                            <label for="nome">Nome:</label>
                                        </div>
                                    </div>
                                    <div class="form-floating">
                                        <select v-model="type" class="tipo_animal" name="tipo de animal" required>
                                            <option selected disabled value="">Tipo de animal:</option>
                                            <option value="Cachorro">Cachorro</option>
                                            <option value="Cavalo">Cavalo</option>
                                            <option value="Furão">Furão</option>
                                            <option value="Gato">Gato</option>
                                            <option value="Galinha">Galinha</option>
                                            <option value="Gecko">Gecko</option>
                                            <option value="Hamster">Hamster</option>
                                            <option value="Papagaio">Papagaio</option>
                                            <option value="Peixe">Peixe</option>
                                            <option value="Porco">Porco</option>
                                            <option value="Porquinho-da-Índia">Porquinho-da-Índia</option>
                                            <option value="Rato">Rato</option>
                                        </select>
                                    </div>
                                    <div class="form-floating">
                                        <p>Sexo:</p>
                                        <div class="form-check radio">
                                            <input v-model="sexo1" class="form-check-input sim" type="radio" name="sexo" id="femea" value="femea">
                                            <label class="form-check-label" for="femea">Fêmea</label>
                                        </div>
                                        <div class="form-check radio">
                                            <input v-model="sexo2" class="form-check-input" type="radio" name="sexo" id="macho" value="macho">
                                            <label class="form-check-label" for="macho">Macho</label>
                                        </div>
                                    </div>
                                    <div class="linha">
                                        <div class="form-floating" id="idadeff">
                                            <input v-model="idades" type="number" class="form-control" id="idade" placeholder="Idade:" minlength="1" maxlength="2" required>
                                            <label for="idade">Idade:</label>
                                        </div>
                                        <div class="form-floating">
                                            <select v-model="tempo" class="tempo_de_vida" name="tempo de vida" required>
                                                <option selected disabled value="">Tempo de vida</option>
                                                <option value="Meses">Mês/Meses</option>
                                                <option value="Anos">Ano(s)</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="form-floating">
                                        <p>Vacinado(a):</p>
                                        <div class="form-check radio">
                                            <input v-model="vacinado1" class="form-check-input sim" type="radio" name="vacinado" id="Sim_vac" value="sim">
                                            <label class="form-check-label" for="Sim_vac">Sim</label>
                                        </div>
                                        <div class="form-check radio">
                                            <input v-model="vacinado2" class="form-check-input" type="radio" name="vacinado" id="Nao_vac" value="nao">
                                            <label class="form-check-label" for="Nao_vac">Não</label>
                                        </div>
                                    </div>
                                    <div class="form-floating">
                                        <p>Castrado(a):</p>
                                        <div class="form-check radio">
                                            <input v-model="castrado1" class="form-check-input sim" type="radio" name="castrado" id="Sim_cas" value="sim">
                                            <label class="form-check-label" for="Sim_cas">Sim</label>
                                        </div>
                                        <div class="form-check radio">
                                            <input v-model="castrado2" class="form-check-input" type="radio" name="castrado" id="Nao_cas" value="nao">
                                            <label class="form-check-label" for="Nao_cas">Não</label>
                                        </div>
                                    </div>
                                    <div>
                                        <label for="detalhes_add" class="form-label">Detalhes adicionais: (Opcional)</label>
                                        <textarea v-model="details" class="form-control" id="detalhes_add"></textarea>
                                    </div>
                                    <div class="botoes">
                                        <button type="submit" class="colocar btn btn-primary">Postar</button>
                                        <button type="submit" class="desfazer btn btn-danger">Excluir</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import FotoSelect from '../components/FotoSelect.vue'
    import { useAnimalStore } from '../stores/AnimalStore';
    import { ref } from 'vue'

    export default ({
        name: "AnimalAdd",
        setup(){
            const animalStore = useAnimalStore;

            const finalizarFormulario = (e) => {
                console.log("Entrou em finalizarFormulario()");

                const opcoesSexo = document.querySelectorAll('input[name="sexo"]:checked');
                const opcoesVacinado = document.querySelectorAll('input[name="vacinado"]:checked');
                const opcoesCastrado = document.querySelectorAll('input[name="castrado"]:checked');

                if (opcoesSexo.length === 0 || opcoesVacinado.length === 0 || opcoesCastrado.length === 0) {
                    e.preventDefault();

                    alert('Não se esqueça de preencher todos os atributos do animal.');
                    return false;
                }

                if (!this.imgSelecionada2) {
                    e.preventDefault();

                    alert("Por favor, selecione uma foto");
                    return false;
                }
            }

            const name = ref('');
            const type = ref('');
            const sexo1 = ref('');
            const sexo2 = ref('');
            const idades = ref('');
            const tempo = ref('');
            const vacinado1 = ref('');
            const vacinado2 = ref('');
            const castrado1 = ref('');
            const castrado2 = ref('');
            const details = ref('');

            const handleSubmit = (e) => {
                if(finalizarFormulario(e)){
                    let sex;
                    if(sexo1.value.length > 0){
                        sex = sexo1;
                    }else{
                        sex = sexo2;
                    }

                    let age = idades.value+" "+tempo.value;

                    let vacinated;
                    if(vacinado1.value.length > 0){
                        vacinated = vacinado1;
                    }else{
                        vacinated = vacinado2;
                    }

                    let castra;
                    if(castrado1.value.length > 0){
                        castra = castrado1;
                    }else{
                        castra = castrado2;
                    }
                    
                    animalStore.addAnimal({
                        id: Math.floor(Math.random()*10000),
                        nome: name,
                        //imagem: imgSelecionada2,
                        tipo: type.value,
                        sexo: sex.value,
                        idade: age,
                        vacinado: vacinated.value,
                        castrado: castra.value,
                        detalhes: details.value,
                        salvo: false,
                        criado: true
                    })

                    name.value = '';
                    type.value = '';
                    sexo1.value = '';
                    sexo2.value = '';
                    idades.value = '';
                    tempo.value = '';
                    vacinado1.value = '';
                    vacinado2.value = '';
                    castrado1.value = '';
                    castrado2.value = '';
                    details.value = '';
                }
            }

            return { handleSubmit, type, sexo1,sexo2,idades,tempo,vacinado1,vacinado2,castrado1,castrado2,details }
        },
        components: {
            FotoSelect
        },
        data() {
            return {
                imgSelecionada2: null
            };
        },
        methods: {
            selectImage2 () {
                this.$refs.fileInput.click()
            },
            pickFile2 () {
                let input = this.$refs.fileInput
                let file = input.files
                if (file && file[0]) {
                    let reader = new FileReader
                    reader.onload = e => {
                        this.imgSelecionada2 = e.target.result
                        //this.$emit("imagemSelecionada", this.imgSelecionada)
                    }
                    reader.readAsDataURL(file[0])
                    //this.$emit('input', file[0])
                }

                this.sumir();
            },
            sumir(){
                let icon = document.getElementById("icon2");
                icon.style.display = "none";

                let lugarDeImagem2 = document.getElementById("lugarDeImagem2");
                lugarDeImagem2.style.height = "300px";
                lugarDeImagem2.style.width = "100%";
            }
        }
    })
</script>

<style scoped>
    #fotoSelect2{
        display: flex;
        flex-flow: column;
    }

    #lugarDeImagem2 {
        width: 200px;
        height: 200px;
        display: block;
        cursor: pointer;
        margin: 0 auto 30px;
        background-size: cover;
        background-position: center center;
        border-radius: 5px;
    }

    .inputPersonalizado2 {
        width: fit-content;
        display: flex;
        align-self: center;
        margin-bottom: 40px;
        font-weight: bold;
        background: #212529;
        padding: 10px 15px;
        color: white;
        cursor: pointer;
        border-radius: 0.375rem;
    }

    .inputPersonalizado2:hover {
        background: #424649;
    }

    #icon2{
        width: 200px;
        height: 200px;
        border-radius: 130px;
    }

    #fileInput2{
        display: none;
    }




    .add_animal{
        background-color: white;
        border-radius: 20px;
        width: 50px;
        height: 50px;
        display: flex;
        justify-content: center;
        align-items: center;
        position: fixed;
        right: 30px;
        bottom: 30px;
    }

    .add_animal i{
        font-size: 36px;
        margin: 0px;
    }

    div.form-floating{
        margin-bottom: 25px;
    }

    label{
        font-weight: bold;
    }

    .colocar{
        margin-right: 20px;
    }

    .form-floating{
        display: flex;
        flex-flow: row wrap;
        align-items: center;
        font-weight: bold;
    }

    .form-floating p{
        margin: 0px;
    }

    .linha{
        display: flex;
        flex-flow: row wrap;
    }

    div.form-check{
        margin-left: 15px;
    }

    .form-floating select.tipo_animal{
        width: 50%;
        height: 50px;
        border: 1px solid #ced4da;
        border-radius: 10px;
        font-weight: bold;
        padding-left: 10px;
        appearance: none;
        -webkit-appearance: none;
        -moz-appearance: none;
        background: url('https://www.freeiconspng.com/uploads/black-arrow-down-icon-png-16.png') no-repeat right center;
        background-size: 20px 20px;
        background-position-x: 195px;
    }

    option{
        background-color: black;
        color: white;
    }

    .name{
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    /*#nome{
        width: 50%;
    }*/

    #idade{
        width: 100px;
    }

    .form-floating select.tempo_de_vida{
        width: 165px;
        height: 58px;
        border: 1px solid #ced4da;
        border-radius: .25rem;
        margin-left: 10px;
        font-weight: bold;
        padding-left: 10px;
        appearance: none;
        -webkit-appearance: none;
        -moz-appearance: none;
        background: url('https://www.freeiconspng.com/uploads/black-arrow-down-icon-png-16.png') no-repeat right center;
        background-size: 20px 20px;
        background-position-x: 130px;
    }

    .formulario4{
        display: flex;
        flex-flow: column;
    }

    .selecionar_foto{
        display: flex;
        justify-content: center;
        margin-bottom: 20px;
    }

    #alterar_foto{
        width: fit-content;
        font-weight: bold;
    }

    footer{
        display: flex;
        justify-content: center;
    }

    .textoData{
        margin-bottom: 20px;
    }

    #data{
        padding: 10px;
        border-radius: 5px;
    }

    .confirmar{
        width: fit-content;
    }

    .card{
        height: fit-content;
    }

    .card img{
        width: 100%;
        height: fit-content;
        margin-bottom: 20px;
    }

    .card-body{
        display: flex;
        flex-flow: column wrap;
    }

    .botoes{
        display: flex;
        justify-content: center;
        margin-top: 30px;
    }

    .descricao{
        display: flex;
        flex-flow: column wrap;
    }
</style>