# Projeto Atv5 - Guia de Instalação

## Passo 1: Clonar o Repositório

Após clonar o repositório abra a pasta "backend" e crie o banco de dados usando o MySQL

## Passo 2: Criar o Banco de Dados no MySQL

- Abra o MySQL e faça login com suas credenciais.
- Clique em "File" no canto superior esquerdo e selecione "Open SQL Script".
- Navegue até a pasta onde o repositório foi clonado.
- Abra a pasta "backend" e selecione o arquivo "atividadegerson.sql".
- Após abrir o arquivo, clique no primeiro ícone amarelo (o primeiro raio) para executar o script SQL e criar o banco de dados.

## Passo 3: Configurar as Credenciais no Arquivo "server.js"

Dentro da pasta "backend", abra o arquivo "server.js" e ajuste as seguintes linhas:

```javascript
const db = mysql.createConnection({
  host: 'localhost',
  user: 'seu_nome_de_usuario',  //altere para o nome do seu usuario que você entrou quando abriu o MySQL e criou o banco
  password: 'sua_senha', //e altere para a respectiva senha do usuario logado
  database: 'atividadegerson',
});

const pool = mysql.createPool({
  host: 'localhost',
  user: 'seu_nome_de_usuario', //altere para o nome do seu usuario que você entrou quando abriu o MySQL e criou o banco
  password: 'sua_senha', //e altere para a respectiva senha do usuario logado
  database: 'atividadegerson',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});
```

## Passo 4: Instalar Dependências
Abra o prompt de comando na pasta raiz do projeto clonado e execute o comando:
~~~bash
npm install
~~~
E mantenha esse prompt aberto

## Passo 5: Iniciar o Servidor
Abra o prompt de comando dentra da pasta "backend" e execute:
~~~bash
node server.js
~~~
E mantenha esse prompt aberto

## Passo 6: Iniciar o Projeto
No prompt de comando da pasta raiz que você deixou aberto, execute:
~~~bash
npm start
~~~




















