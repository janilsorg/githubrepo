# Repositório base para API REST + JWT + MondoBD

<p>A ideia desse repositório é servir como base para desonvolvimento de API REST usando Nodejs e Express.</p>
<p>Para armazenamento de dados usei MongoDB Atlas (na nuvem)</p>
<p>Para validação de schemas usei hapi</p>
<p>para autenticação usei JWT</p>

## Como usar esse projeto



### Instale as dependências
```
npm install
```

### MongoDB Atlas
<p>
Visite o site https://www.mongodb.com/cloud/atlas e faça cadastro, procure a opção free. É suficiente para o projeto inicial
</p>

### Crie o arquivo .env na raiz do projeto com o conteúdo
<p>A string do DB_CONNECT é fornecida pelo próprio MongoDB atlas, restando apenas você inserir seu usuário e senha</p>

```
DB_CONNECT = mongodb+srv://<seu_login>:<sua_senha>@<nome_cluster>.mongodb.net/<dbname>?retryWrites=true&w=majority
TOKEN_SECRET = <seu_token_secret>
```

### Para desenvolvimento executa
<p>Esse script já reinicia o serviço a cada modificação feita</p>

```
npm run dev
```

### Para produção execute
```
npm start
```

### Caso haja demanda, crio opção de outro banco de dados, como PostgreSQL e/ou SQLite
