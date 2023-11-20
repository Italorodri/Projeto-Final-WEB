<template>
  <div id="fotoSelect">
    <div class="lugarDeImagem" :style="{ 'background-image': `url(${imgSelecionada})` }" @click="selectImage">
      <img src="/img/IconHumanAnimal.png" id="icon">
    </div>

    <label for="fileInput" class="inputPersonalizado">
      Alterar foto
    </label>
    <input id="fileInput" ref="fileInput" type="file" @input="pickFile" accept="image/jpeg, image/png">

  </div>
</template>
 
<script>
export default {
  data() {
    return {
      imgSelecionada: null
    };
  },
  methods: {
      selectImage () {
          this.$refs.fileInput.click()
      },
      pickFile () {
        let input = this.$refs.fileInput
        let file = input.files
        if (file && file[0]) {
          let reader = new FileReader
          reader.onload = e => {
            this.imgSelecionada = e.target.result
            this.$emit("imagemSelecionada", this.imgSelecionada)
          }
          reader.readAsDataURL(file[0])
          this.$emit('input', file[0])
        }

        this.sumir();
      },
      sumir(){
        let icon = document.getElementById("icon");
        icon.style.display = "none";
      }
  }
}
</script>
 
<style>
  #fotoSelect{
    display: flex;
    flex-flow: column;
  }

  .lugarDeImagem {
      width: 200px;
      height: 200px;
      display: block;
      cursor: pointer;
      margin: 0 auto 30px;
      background-size: cover;
      background-position: center center;
      border-radius: 130px;
  }

  .inputPersonalizado {
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

  .inputPersonalizado:hover {
    background: #424649;
  }

  #icon{
    width: 100%;
    height: 100%;
    border-radius: 130px;
  }

  #fileInput{
    display: none;
  }
</style>