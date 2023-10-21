# matchpet_backend


### Descrição
Projeto desenvolvido usando  Sistema Especialista para ajudar na escola de animal de estimação

Você pode listar os pré-requisitos necessários para rodar o projeto, incluindo as versões específicas dos softwares e ferramentas da seguinte forma:

### Pré-requisitos

Antes de começar, certifique-se de ter as seguintes ferramentas e serviços instalados e configurados em sua máquina:

- [Node.js](https://nodejs.org/) (v16.16.0 ou versão posterior) - Você pode verificar a versão do Node.js instalada com o seguinte comando:
  ```bash
  node --version
  ```

- [Prisma](https://www.prisma.io/) - Um ORM (Object-Relational Mapping) para interagir com o banco de dados. Você pode instalá-lo globalmente com o seguinte comando:
  ```bash
  npm install -g prisma
  ```

- [TypeScript](https://www.typescriptlang.org/) - Uma linguagem de programação que estende o JavaScript. Você pode instalar o TypeScript globalmente com o seguinte comando:
  ```bash
  npm install -g typescript
  ```

- [Docker](https://www.docker.com/) - Uma plataforma para desenvolvimento, envio e execução de aplicativos em contêineres. Certifique-se de ter o Docker instalado e em execução na sua máquina.

- [PostgreSQL](https://www.postgresql.org/) - Um sistema de gerenciamento de banco de dados relacional. Você pode usar o Docker para executar uma instância do PostgreSQL em um contêiner. Por exemplo:
  ```bash
  docker run --name my-postgres-container -e POSTGRES_PASSWORD=mysecretpassword -d -p 5432:5432 postgres
  ```

Certifique-se de que todas essas ferramentas e serviços estejam devidamente configurados em sua máquina antes de prosseguir com a configuração e instalação do projeto.


### A configuração do projeto pode ser feita da seguinte forma:

1. Clone o projeto do repositório:

   ```bash
   git clone https://github.com/Cicera1987/matchpet_backend.git
   ```

2. Navegue para o diretório do projeto:

   ```bash
   cd nome-do-projeto
   ```

3. Instale as dependências do projeto usando o `npm`:

   ```bash
   npm install
   ```

4. Configure o Prisma para usar o PostgreSQL. Certifique-se de que o arquivo `schema.prisma` esteja configurado corretamente com as informações de conexão ao banco de dados. Você pode editar o arquivo `schema.prisma` para definir a configuração do banco de dados. Por exemplo:

   ```prisma
   datasource db {
     provider = "postgresql"
     url      = env("DATABASE_URL")
   }
   ```

5. Execute a migração do Prisma para criar as tabelas no banco de dados:

   ```bash
   npx prisma migrate dev
   ```

   Isso irá criar as tabelas no banco de dados com base nas definições do Prisma em seu arquivo `schema.prisma`.

6. Após a configuração e migração do Prisma, você pode iniciar o servidor do projeto:

   ```bash
   npm run start
   ```

Isso deve configurar e iniciar o projeto, permitindo que você comece a usar o sistema especialista de adoção de animais.

Certifique-se de que todas as etapas anteriores foram concluídas com sucesso e de que todas as configurações, como as variáveis de ambiente, estão corretamente definidas para o ambiente em que você está trabalhando.


### Uso do Postman para a rota `NewRule`

1. Abra o Postman.

2. Crie uma nova solicitação:
   - Clique em "Request" (Solicitação) no canto superior esquerdo.
   - Dê um nome à sua solicitação, por exemplo, "Nova Regra".

3. Selecione o método HTTP apropriado:
   - No lado direito da solicitação, selecione o método POST.

4. Insira a URL da rota `NewRule`:
   - No campo de URL, insira a URL da rota `NewRule`. Por exemplo: `http://localhost:porta/api/rules`.

5. Configure o corpo da solicitação:
   - Clique na guia "Body" (Corpo) abaixo da URL.
   - Selecione "raw" (bruto) e escolha o tipo de conteúdo JSON (application/json).
   - Insira o corpo da solicitação no formato JSON. Por exemplo:

   ```json
   {
     "name": "Minha Nova Regra",
     "Condition": [
       {
         "id_rule": 1,
         "outra_propriedade": "valor"
       },
       {
         "id_rule": 2,
         "outra_propriedade": "valor"
       }
     ]
   }
   ```

   Certifique-se de que o corpo da solicitação corresponda aos requisitos da sua API.

6. Enviar a solicitação:
   - Clique no botão "Send" (Enviar) para enviar a solicitação.

O Postman enviará a solicitação para o seu servidor. Certifique-se de que o servidor esteja em execução e que a porta esteja configurada corretamente. Você receberá uma resposta que mostrará se a solicitação foi bem-sucedida ou se ocorreram erros.

Você pode seguir um processo semelhante para testar outras rotas, como `List` e `UpdateRule`, e adaptar os métodos e URLs conforme necessário. O processo no Insomnia é bastante semelhante, permitindo que você crie e teste solicitações da mesma forma.


#Autor

### Emanuel Leffa Backend (https://github.com/EmanoelMittmann/ExpertSysApi)
### Cicera Ribeiro no frontend (https://github.com/Cicera1987/matchpet.git)


Agradecimentos
(Obrigada por chegar até aqui!)


