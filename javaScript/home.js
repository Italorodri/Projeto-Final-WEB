document.addEventListener("DOMContentLoaded", function () {

    const opcoes_nav = document.querySelectorAll("nav a");
    const conteudo_secoes = document.querySelectorAll(".conteudo");

    opcoes_nav.forEach(function (opcao, index) {

        opcao.addEventListener("click", function (event) {
            event.preventDefault();
            
            //Ocultando as seções
            conteudo_secoes.forEach(function (secao) {
                secao.style.display = "none";
            });
            
            //Exibindo a seção de acordo com o índice da nav
            conteudo_secoes[index].style.display = "block";
        });

    });

});