<template>
    <div>
        <img :src="animal.imagem">
        <h2 class="reduzido">{{ animal.nome }}</h2>
        <p class="reduzido"><strong>Tipo de animal:</strong> {{ animal.tipo }}</p>
        <p class="reduzido"><strong>Idade:</strong> {{ animal.idade }}</p>
        <p class="reduzido"><strong>Sexo:</strong> {{ animal.sexo }}</p>
    </div>
</template>

<script>
    export default {
        name: "AnimalDetails",
        props: ['animal'],
    }
</script>

<style scoped>
    img{
        width: 100%;
        height: auto;
        border-radius: 20px;
    }

    h2{
        border: none;
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
</style>