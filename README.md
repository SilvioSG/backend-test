### 💻 Projeto:

Buscar dados de notebooks Lenovo ordenando do menor ao maior preço usando o site do webscraper.io.
link do site:
https://webscraper.io/test-sites/e-commerce/allinone/computers/laptops

### ⚙ Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/), [NPM](https://www.npmjs.com/) e/ou [Yarn](https://https://yarnpkg.com/)
Além disto é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/)

## Instruções:

A API funciona em http://localhost:3000/lenovo acessando essa rota é possível obter as informações desejadas dos produtos da Lenovo, ordenadas por produto mais barato até o produto mais caro.

## Observações:

É interessante que o robô possa ser consumido por outros serviços.
Foi criada uma pequena REST Ful API JSON para deixar mais otimizado.
Foi utilizado o puppeteer para a resolução do case.

### Vamos começar!! ✍

### 📙 Rodando o Backend

```bash
# Clone este repositório
$ git clone git@github.com:SilvioSG/backend-test.git

# Instale as dependências
$ yarn  Ou  $ npm install

# Execute a aplicação
$ yarn dev

```

### Informações Coletadas pelo bot:

- Model
- Url
- Description
- Price
- Reviews
- Stars


## :rocket: Tecnologias

Este projeto foi desenvolvido com as seguintes tecnologias:

[NodeJS][https://nodejs.org/en/] 💻 </br>
[JavaScript][https://www.javascript.com/] 📘 </br>
[Express.js][https://expressjs.com/pt-br/] </br>
[Puppeteer][https://pptr.dev/]</br>