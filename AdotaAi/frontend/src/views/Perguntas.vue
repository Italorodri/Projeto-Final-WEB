<template>
  <section class="perguntas">
    <div class="nome-secao">
      <h2>PERGUNTAS</h2>
    </div>
    <ul>
      <li>Por que é importante adotar um animal de estimação?</li>
      <p>
        A adoção de um animal de estimação é crucial porque oferece aos usuários
        a oportunidade de salvar vidas e dar um lar amoroso a animais que
        precisam de um novo começo. Ao adotar um animal através do "Adote Aí!",
        você está fazendo uma diferença real na vida de um animal e se tornando
        parte de um movimento que valoriza a adoção responsável.
      </p>

      <li>Como funciona o processo de adoção?</li>
      <p class="texto-superior">
        O processo de adoção no "Adote Aí!" é simples e direto para incentivar a
        adoção entre nossos usuários:
      </p>
      <ol>
        <li>Explore os perfis de animais disponíveis para adoção.</li>
        <li>Encontre o animal que mais combina com você e sua família.</li>
        <li>
          Entre em contato com o proprietário do animal para obter mais
          informações ou agendar uma visita.
        </li>
        <li>
          Quando você se sentir pronto, preencha o formulário de adoção e
          finalize o processo.
        </li>
      </ol>
      <p>
        Nossa equipe está aqui para ajudá-lo em cada etapa do processo de adoção
        e garantir uma experiência positiva.
      </p>

      <li>Qual é a diferença entre adotar e comprar um animal?</li>
      <p>
        A principal diferença é que, ao adotar um animal no "Adote Aí!", você
        está escolhendo dar um lar a um animal que realmente precisa, promovendo
        a adoção responsável. É uma alternativa ética e humana à compra de
        animais de estimação de fontes comerciais. Além disso, ao adotar, você
        se torna parte de uma comunidade comprometida em fazer a diferença na
        vida dos animais e em reduzir o número de animais abandonados.
      </p>

      <li>Que tipo de animais estão disponíveis para adoção?</li>
      <p>
        No "Adote Aí!", você encontrará uma ampla variedade de animais, desde
        cães e gatos até pequenos animais de estimação, como coelhos e pássaros.
        Todos os animais disponíveis para adoção são provenientes de lares
        amorosos e aguardam ansiosamente encontrar suas famílias adotivas. Nossa
        plataforma facilita a busca por animais de todas as idades, raças e
        tamanhos.
      </p>

      <li>Como posso me preparar para adotar um animal de estimação?</li>
      <p class="texto-superior">
        Para se preparar para a adoção de um animal através do "Adote Aí!", siga
        estas etapas:
      </p>
      <ol>
        <li>
          Explore os perfis dos animais e encontre o mais adequado ao seu estilo
          de vida.
        </li>
        <li>
          Prepare sua casa com todos os suprimentos necessários, como comida,
          tigelas e uma cama.
        </li>
        <li>
          Esteja disposto a dedicar tempo e atenção ao seu novo companheiro.
        </li>
        <li>
          Agende uma visita com o proprietário do animal para conhecê-lo
          pessoalmente.
        </li>
        <li>
          Quando se sentir confiante, preencha o formulário de adoção e dê as
          boas-vindas ao seu novo amigo.
        </li>
      </ol>
      <p>
        A preparação cuidadosa garantirá uma transição suave e bem-sucedida para
        a sua nova vida com seu animal de estimação adotado através do "Adote
        Aí!".
      </p>
    </ul>
  </section>
</template>

<script>
export default {
  name: "PerguntasSC",
};
</script>

<style scoped>
.perguntas {
  margin-left: 25px;
  margin-top: 25px;
  margin-right: 25px;
}

.nome-secao {
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
  margin-bottom: 25px;
  color: green;
  border: 5px double green;
}

.perguntas ul > li {
  font-weight: bold;
  font-size: 28px;
  color: green;
  margin-bottom: 15px;
}

.perguntas ol > li {
  font-weight: bold;
  font-size: 24px;
  color: rgb(0, 0, 0);
  margin-bottom: 15px;
}

p {
  margin-bottom: 10px;
  padding-bottom: 30px;
  font-size: 20px;
}

p.texto-superior {
  padding-bottom: 0px;
}

.perguntas ol {
  margin-bottom: 20px;
}
</style>
