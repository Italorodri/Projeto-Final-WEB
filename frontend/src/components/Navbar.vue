<template>
    <nav>
        <router-link to="/">
            <img src="/img/logo.png" alt="Logo" id="logo">
        </router-link>
        <router-link to="/">Seja Bem-Vindo</router-link>
        <router-link to="/login">Login</router-link>
        <router-link to="/cadastro">Cadastro</router-link>
        <router-link to="/home">Home</router-link>
        <router-link to="/perfil">Perfil</router-link>
        <router-link to="/perguntas">Perguntas</router-link>
        <router-link to="/ajuda">Ajuda</router-link>
        <router-link to="/sobrenos">SobreNos</router-link>
    </nav>
</template>

<script>
    export default ({
        name: "Navbar"
    })
</script>