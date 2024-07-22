# Setup e Execução do Projeto

## Pré-requisitos

Antes de iniciar o frontend, certifique-se de que o servidor backend esteja funcionando. O backend deve estar inicializado e corretamente configurado.

## Configuração do Ambiente

### 1. Inicializar o Backend

Garanta que o servidor backend esteja em execução. Siga as instruções do repositório do backend para iniciar o servidor.

### 2. Criar o Arquivo de Variáveis de Ambiente

Copie o arquivo de exemplo de variáveis de ambiente e crie o seu próprio arquivo `.env.local` com a configuração necessária:

```bash
 cp .env.local.example .env.local
```

Abra o arquivo .env.local e configure as variáveis de ambiente de acordo com a sua configuração local. Este arquivo é usado para configurar detalhes de conexão e outras configurações específicas do seu ambiente.


## Executando o Frontend

### 1. Instalar Dependências

Instale as dependências necessárias para o projeto frontend:

```bash
npm install
```

### 2. Construir e Iniciar o Frontend

Construa o projeto para produção e inicie o servidor usando o seguinte comando:

```bash
npm run build && npm run start
```

Este comando constrói o projeto para produção e depois inicia o servidor. A aplicação estará acessível no endereço especificado, normalmente `http://localhost:3000`.

## Notas Adicionais

* Certifique-se de que o arquivo `.env.local` esteja configurado corretamente com a URL base da API do backend e outras variáveis de ambiente necessárias.

* Consulte a documentação do repositório do backend para quaisquer requisitos adicionais de configuração ou instalação.