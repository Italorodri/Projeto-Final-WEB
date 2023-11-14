<template>
    <section class="sobrenos">
        <div class="nome-secao">
            <h2>SOBRE NÓS</h2>
        </div>
        <p><strong>Bem-vindo à página "Sobre Nós" do "Adote Aí!" - O seu guia para a adoção responsável de animais de estimação. Aqui você encontrará informações sobre a equipe por trás do projeto, nossa missão, objetivos e compromissos.</strong></p>
        <ul>
            <li>Quem somos:</li>
            <p>A equipe do "Adote Aí!" é composta por um grupo apaixonado de amantes de animais que acreditam na importância da adoção responsável. Nossa equipe é formada por veterinários, especialistas em comportamento animal, desenvolvedores de software e entusiastas do mundo animal. Unimos nossas habilidades e paixões para criar uma plataforma que torna a adoção de animais mais acessível, ética e recompensadora.</p>
            
            <li>Nossa Missão:</li>
            <p>A missão do "Adote Aí!" é dupla: promover a adoção responsável de animais de estimação e melhorar o bem-estar dos animais em todo o mundo. Acreditamos que todos os animais merecem um lar amoroso, e trabalhamos incansavelmente para facilitar essa união. Além disso, estamos comprometidos em combater o abandono de animais e reduzir a exploração de criadouros.</p>
            
            <li>Nossos Objetivos:</li>
            <p class="texto-superior">Nossos objetivos a curto e longo prazo são:</p>
            <ol>
                <li><strong>Aumentar as Adoções:</strong> Queremos ver mais animais encontrando lares felizes e responsáveis através do "Adote Aí!". Estamos comprometidos em aumentar o número de adoções bem-sucedidas.</li>
                <li><strong>Educação e Conscientização:</strong> Acreditamos que a educação é a chave para uma adoção bem-sucedida. Vamos fornecer recursos educacionais abrangentes para ajudar os adotantes a cuidar de seus novos amigos peludos.</li>
                <li><strong>Colaborações e Parcerias:</strong> Estabelecer parcerias com abrigos, resgates e outras organizações de proteção animal é fundamental para atingir nossos objetivos.</li>
                <li><strong>Melhorias Contínuas:</strong> Estamos comprometidos em aprimorar constantemente o "Adote Aí!" para tornar a experiência de adoção mais fácil e eficaz para nossos usuários.</li>
            </ol>

            <li>Entre em contato conosco:</li>
            <p class="texto-superior">Queremos ouvir de você! Se você tiver perguntas, sugestões ou desejar colaborar conosco, não hesite em entrar em contato. A comunicação aberta com nossos usuários é essencial para o nosso sucesso e para melhorar a vida dos animais de estimação.</p>
            <p>A equipe do "Adote Aí!" agradece por seu apoio e compartilha sua paixão pela adoção responsável de animais de estimação. Juntos, estamos fazendo a diferença na vida dos animais e criando lares felizes em todo o mundo. Obrigado por ser parte dessa jornada com a gente!</p>
        </ul>
    </section>
</template>

<script>
    export default ({
        name: "SobreNos"
    })
</script>

<style scoped>
    .sobrenos{
        margin-left: 25px;
        margin-top: 25px;
        margin-right: 25px;
    }

    .nome-secao{
        display: flex;
        justify-content: center;
        align-content: center;
        align-items: center;
        margin-bottom: 25px;
        color: rgb(0, 86, 199);
        border: 5px double rgb(0, 86, 199);
    }

    .sobrenos ul > li{
        font-weight: bold;
        font-size: 28px;
        color: rgb(0, 86, 199);
        margin-bottom: 15px;
    }

    .sobrenos ol > li{
        font-size: 20px;
        margin-bottom: 15px;
    }

    p{
        margin-bottom: 10px;
        padding-bottom: 30px;
        font-size: 20px;
    }

    p.texto-superior{
        padding-bottom: 0px;
    }

    .sobrenos ol{
        margin-bottom: 20px;
    }

    div + p{
        margin-top: 40px;
        margin-bottom: 10px;
    }
</style>