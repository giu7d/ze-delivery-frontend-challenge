# Zé Delivery Front-End Challenge

Este repositório faz parte do desafio de desenvolvimento front-end do Zé Delivery.

A aplicação desenvolvida também pode ser acessada [por aqui!](https://ze-delivery-frontend-challenge-mu.vercel.app/).

Por se tratar de uma aplicação dinâmica, uma api também foi desenvolvida e disponibilizada [aqui](https://ze-delivery-challenge-api.herokuapp.com/) e o código fonte disponibilizado [aqui](https://github.com/giu7d/ze-delivery-frontend-challenge-api)

## Instruções de Uso

### 1. Clone o repositório

```bash
git clone https://github.com/giu7d/ze-delivery-frontend-challenge ze-frontend-challenge

cd ze-frontend-challenge
```

### 2. Instale as dependências do projeto

```bash
# yarn
yarn
# npm
npm install
```

### 3. Configure as variáveis de ambiente

Copie as variáveis do arquivo `.env.example` para o arquivo `.env`

```bash
cp .env.example .env
```

### 4. Inicie a aplicação

```bash
# yarn
yarn dev
# npm
npm run dev
```

### 5. Pronto!

A aplicação estará disponível em http://localhost:3000/

## API / Mock

Por padrão o `.env.example` está configurado com a api online (https://ze-delivery-challenge-api.herokuapp.com/), caso deseje utilizar o `json-server` para prover dados localmente em um novo terminal utilize o comando

```bash
# yarn
yarn start:server
# npm
npm run start:server
```

Lembre-se de adicionar a nova url do servidor na variável de ambiente `API_URL` no arquivo `.env`
