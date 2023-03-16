👨‍🚀 **Repositório para estudos pessoais**

# ⚔️ Desafio

Criar um API com integração ao openIA **(ChatGPT)** com Node.

```
# Routes
POST     /api/prompt

# Resquest Body
{
    "prompt": "Sua pergunta aqui"
}
```

# 🚀 Tecnologias

### ⚛️ Principais tecnologias

- [Node.js](https://nodejs.org/en/)
- [Javascript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

### 📚 Biliotecas e dependências

- [openAI](https://npmjs.com/package/openai) - Para integração com os algoritmos da openAi
- [express](https://.npmjs.com/package/express) - Para criação de APIs Rest
- [cors](https://.npmjs.com/package/cors) - Controle o acesso a solicitações/recursos de API
- [dotenv](https://.npmjs.com/package/dotenv) - Arquivo personalizado de configuração

## Como usar

Para clonar e executar a aplicação, você precisará do [Git](https://git-scm.com), [Node.js v18.14](https://nodejs.org/en/) ou maior + [NPM v9](https://nodejs.org/en/) ou maior, intalados em seu computador. Na sua linha de comando

```bash
# Clonar este repositório
# Acessar o repósitrio local
$ cd node-chatgpt-api

# Instalar as dependências
$ npm install

# Inicializar o Servidor
$ npm start

```
Feito isso o serviço de backend estará funcionando na porta :5000.

* Para usar a biblioteca openAi
```bash
A biblioteca precisa ser configurada com a chave 'secret key', que está disponível no site da openAi, informando a chave da API como uma variável de ambiente em .env. antes da execução
```