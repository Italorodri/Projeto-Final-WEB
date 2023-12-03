# :checkered_flag: Adota Aí

O projeto tem o intuito de ser ambiente de Adoção de animais, onde um usuário pode realizar doações e como também adotar.

## :technologist: Membros da equipe

Gabriel Cavalcantes alves - 495439

Ítalo Rodrigues Nascimento - 494845

## :people_holding_hands: Papéis ou tipos de usuário da aplicação

Usuário registrado

Usuário não registrado

## :spiral_calendar: Entidades ou tabelas do sistema

Usuário

Adoção

Comentário

## :triangular_flag_on_post: Principais funcionalidades da aplicação

Usuários não registrado poderão visualizar a lista de animais para adoção e também os comentários realizados pelos usuários registrados. Como também poderão ver as páginas que falam sobre o ambiente (ajudas, perguntas, sobre nós).

Usuário registrado poderá adotar algum animal da lista, como também pode colocar animais para adoção. Além disso poderá realizar comentários sobre algum animal. Esse usuário também poderá deletar, editar e remover os animais.

## :desktop_computer: Tecnologias e frameworks utilizados

**Frontend:**

VueJS, Vue-Router, Pinia

Axios

Vuetify

**Backend:**

Strapi

## :shipit: Operações implementadas para cada entidade da aplicação

| Entidade   | Criação | Leitura | Atualização | Remoção |
| ---------- | ------- | ------- | ----------- | ------- |
| Usuario |  X      |        |             |       |
| Adoçaao  | X       | X        | X           | X       |
| Comentário  | X       |  X       |             |         |


## :neckbeard: Rotas da API REST utilizadas

| Método HTTP | URL            |
| ----------- | -------------- |
| GET         | api/entidade1/ |
| POST        | api/entidade2  |
