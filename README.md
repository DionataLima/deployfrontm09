![](https://i.imgur.com/xG74tOh.png)

# Desafio | Front-end - Módulo 9

- Este repositório deverá servir de base para ser realizado o fork para desenvolvimento do desafio. O desafio deve ser feito utilizando o [`vite`](https://vitejs.dev/) como templete para o [`react`](https://react.dev/) podendo ser feito com arquivos em `Javascript` ou `Typescript` ou com [`Next`](https://nextjs.org/), ficando a sua escolha.

- Você também pode escolher como vai ser feito a estilização do projeto podendo utilizar `css` ou [`sass`](https://sass-lang.com/).

- Caso escolha realizar o projeto em [`Next`](https://nextjs.org/) utilize este framework do início até o fim por conta das diferenças de estrutura que existem em comparação ao [`react`](https://react.dev/) (o desafio pode ser feito com qualquer um destes dois frameworks - o resultado final será o mesmo, independente da escolha).

- Não se esqueça de criar testes ao longo do projeto como `Teste de unidade` e `Teste de integração` no qual podem ser criados com [`Jest`](https://jestjs.io/docs/tutorial-react) e `Teste de ponta a ponta / E2E` no qual podem ser criados com [`Cypress`](https://docs.cypress.io/guides/overview/why-cypress), como visto nas aulas anteriores.

- Exemplos de possíveis testes: verificar se o email cadastrado é válido e também se o mesmo é permitido ou não, verificar se número de telefone é permitido, verificar se o modal de edição de usuário abre corretamente, entre outros.

- Deploy do projeto pode ser feito no site [`netlify`](https://www.netlify.com/) ou [`vercel`](https://vercel.com/docs/deployments/overview), ou em algum outro similar de sua escolha.

---

Favor alterar este README para adicionar os links correspondentes para os seguintes itens:

**Repositório de Backend: https://github.com/cubos-academy/desafio-front-modulo4-next-parteBack-v3-resolucao**

**Repositório de Frontend**:

**URL da aplicação funcionando**:

---

<b>[Figma Desafio](https://www.figma.com/file/EsX2ltIJ6gSGFzXXCU1pQH/M05-SPRINT-03?node-id=410%3A47347)</b>

<details>
<summary><b>[Usuário] Cadastro do usuário</b></summary>
<br>

### `Na posição de usuário do sistema, desejo cadastrar meus dados, afim de ter acesso ao sistema.`

---

- <b>Critérios de aceite</b>
  - O cadastro deverá funcionar em formulário web que funcione em um navegador padrão
  - Para acessar este formulário de cadastro não deverá ser exigida autenticação
  - Os dados do cadastro deverão ser persistidos de maneira que possam ser consultados em qualquer momento no futuro até que sejam excluídos.
  - O usuário poderá visualizar sua senha enquanto a escreve (Ex: Material UI Input Adornment https://v4.mui.com/pt/api/input-adornment/)
  - A senha do usuário deverá ser persistida utilizando algum algoritmo de criptografia confiável

---

- Campos necessários para o cadastro inicial (obrigatórios):

  - Nome do usuário (obrigatório)
  - Email (obrigatório)
  - Senha (obrigatório)

- Deverão ser informadas mensagens de erro em casos de:

  - Campos obrigatórios em branco
  - E-mail informado já existir cadastrado
  - Após realizado o cadastro com sucesso o usuário deverá receber uma mensagem de confirmação e um botão para ser redirecionado para a página de Login.

</details>

<details>
<summary><b>[Usuário] Login do usuário</b></summary>

### `Na posição de usuário do sistema, devo ser capaz de realizar login no Dashboard, afim de acessar o sistema.`

---

- <b>Critérios de aceite</b>
  - O login do usuário deverá ser realizado em formulário web funcionando em navegador padrão
- Campos obrigatórios:

  - E-mail
  - Senha
  - Deverá ser possível informar os dados de acesso (e-mail e senha) e então clicar em botão para realização do login

- Deverão ser informadas mensagens de erro em casos de:

  - Campos obrigatórios em branco
  - E-mail não existe no cadastro
  - Senha incorreta para o e-mail
  - Criação de token de autenticação após validação dos dados (credenciais) de acesso (e-mail e senha).

- Após realização de login com sucesso, deverá ser retornado ao navegador o token de autenticação de forma que possa ser utilizado em outras funcionalidades que exigem autenticação. O usuário deverá ser redirecionado para a home do sistema
</details>

<details>
<summary><b>[Dashboard] Home e Menu</b></summary>

### `Na posição de usuário do sistema, desejo visualizar uma tela inicial, afim de poder navegar pelo sistema através do menu.`

---

- <b>Critérios de aceite</b>

  - A página deverá funcionar em um navegador web padrão.
  - Apenas usuários autenticados deverão conseguir acessar esta página

- Esta tela deverá ter uma imagem padrão de usuário e o primeiro nome do usuário no canto superior direito, que ao clicar, abrirá um menu com dois botões:

  - O primeiro é o "Editar", que abrirá um modal de atualização do cadastro do usuário logado.
  - O segundo é o botão "Sair", que irá deslogar o usuário do sistema

- Deverá existir um menu lateral que permitirá o usuário navegar pelos módulos do sistema, contendo os links:

  - Home
  - Clientes
  - Cobranças

- Esta tela deverá ter 8 cards com as seguintes informações:

  Resumo do Valor Total das Cobranças

  - Pagas
  - Vencidas
  - Previstas

  - Cobranças Vencidas
  - Cobranças Previstas
  - Cobranças Pagas

  - Clientes Inadimplentes
  - Clientes Em dia

</details>

<details>
<summary><b>[Usuário] Edição do usuário logado</b></summary>

#### `Na posição de usuário dos sistema, desejo editar meus dados de usuário, quando logado no sistema.`

- <b>Critérios de aceite</b>
  - Através de um clique no perfil da Dashboard serão abertos dois botões:
    - Editar
    - Sair
  - Ao clicar em "Editar" o formulário de edição dos dados do usuário deverá ser aberto.
  - A edição deverá funcionar em formulário web que funcione em um navegador padrão
  - Ao abrir o formulário, os dados do usuário logado deverão ser carregados nos respectivos campos
  - Para acessar este formulário de cadastro será exigido autenticação.
- Os dados da atualização deverão ser persistidos de maneira que possam ser consultados em qualquer momento no futuro até que sejam excluídos.

- O usuário poderá ou não visualizar sua senha enquanto a escreve (Ex: Material UI Input Adornment)

  - Caso seja informado uma nova senha do usuário, a mesma deverá ser persistida utilizando algum algoritmo de criptografia confiável
  - O usuário poderá atualizar os respectivos dados a seguir :

    - Nome do usuário (obrigatório)
    - E-mail (obrigatório)
    - Senha (obrigatório - apenas se for alterar a senha)
    - CPF
    - Telefone

- Deverão ser informadas mensagens de erro em casos de:

  - Campos obrigatórios passados em branco
  - E-mail informado for diferente do usuário logado e já existir cadastrado para outro usuário

- Após realizado a atualização com sucesso o usuário deverá receber uma mensagem de confirmação
</details>

<details>
<summary><b>[Cliente] Cadastro do cliente</b></summary>

#### `Na posição de usuário do sistema, desejo cadastrar clientes, afim de acessar suas informações no futuro.`

- <b>Critérios de aceite</b>

  - O cadastro deverá funcionar em formulário web que funcione em um navegador padrão
  - Para acessar este formulário de cadastro deverá ser exigida autenticação
  - Os dados do cadastro deverão ser persistidos de maneira que possam ser consultados em qualquer momento no futuro até que sejam excluídos.

  - Campos necessários para o cadastro (<b>\*</b> obrigatórios):

    - Nome do usuário (<b>\*</b>)
    - Email (<b>\*</b>)
    - Cpf (<b>\*</b>)
    - Telefone (<b>\*</b>)
    - Cep
    - Logradouro
    - Complemento
    - Bairro
    - Cidade
    - Estado

  - Opcionalmente, poderá ter a busca do endereço ao digitar o CEP utilizando a api do ViaCEP

  - Deverão ser informadas mensagens de erro em casos de:
    - Campos obrigatórios em branco
    - E-mail informado já existir cadastrado
    - Após realizado o cadastro com sucesso o usuário deverá receber uma mensagem de confirmação.

</details>

<details>
<summary><b>[Dashboard] Configuração do Deploy</b></summary>

#### `Na posição de usuário do sistema, devo ser capaz de acessar o sistema através da internet, afim de usar o sistema em qualquer dispositivo com acesso a internet.`

- <b>Critérios de aceite</b>

  - O frontend deverá ser hospedado na <b>Netlify</b> ou <b>Vite</b>
  - O frontend hospedado na netlify deverá ser <b>integrado</b> ao backend fornecido

</details>

</details>

</details>

<br>

<details>
<summary><b>[Cliente] Listagem do cliente</b></summary>
<br>

### `Na posição de usuário do sistema, desejo visualizar uma listagem com todos os clientes cadastrados.`

- <b>Critérios de aceite</b>
- A página deverá funcionar em um navegador web padrão.
- Apenas <b>usuários autenticados</b> deverão conseguir acessar esta página
  - Ao clicar no item <b>"clientes"</b> do menu lateral deverá ser redirecionado para uma página com a listagem de todos os clientes cadastrados no sistema.
  - Deverá existir um botão</b> "Adicionar Cliente"</b>, que ao clicado, será aberto um modal para cadastro de cliente.
  - Na listagem de clientes, cada item deverá mostrar:
  - O nome do cliente
  - O e-mail do cliente
  - O telefone do cliente
  - CPF
  - Status
    - Se houver alguma cobrança vencida (com status <b>pendente</b> e com data de vencimento anterior a data atual), deverá exibir <b>"Inadimplente"</b>, caso contrário, deverá exibir "Em dia".
  - Botão de atalho, dentro da listagem, para <b>"adicionar cobranças"</b>
- Cada nome do cliente na listagem deverá poder ser clicado de forma que ao fazê-lo, abra uma página com todos os detalhes do cliente

</details>

<details>
<summary><b>[Cliente] Detalhamento do cliente</b></summary>

#### `Na posição de usuário do sistema, desejo visualizar todos os detalhes de um cliente cadastrado, a fim de consultar seus dados e suas respectivas cobranças.`

- <b>Critérios de aceite</b>:
  - A página deverá funcionar em um navegador web padrão.
  - Apenas usuários autenticados deverão conseguir acessar esta página
  - Ao clicar no nome do cliente na listagem deverá abrir uma nova página com todos os detalhes do cliente clicado
  - A página deverá mostrar <b/>2 cards:</b>
    - O <b>primeiro</b> com um botão para editar cliente (ao clicar no botão, deverá abrir um modal de edição do cliente e os campos do formulário preenchidos com seus respectivos dados) e os dados do cliente:
    - Um título com o nome do cliente
    - CPF
    - E-mail
    - Telefone
    - Endereço completo
    - O <b>segundo</b> com um botão para adicionar nova cobrança e a listagem de cobranças para o cliente em questão. Cada listagem deverá mostrar:
      - Identificador da Cobrança
      - Descrição
      - Data
      - Valor
      - Status
      - Descrição

</details>

<details>
<summary><b>[Cliente] Atualização do cliente</b></summary>

#### `Na posição de usuário do sistema, desejo atualizar os dados de um cliente cadastrado.`

- <b>Critérios de aceite:</b>
  - O formulário deverá ser aberto através de um clique no <b>ícone de editar</b> no detalhe de clientes.
  - A atualização deverá funcionar em formulário web que funcione em um navegador padrão.
  - Ao abrir o formulário, <b>os dados do cliente deverão ser carregados nos respectivos campos</b>
  - Para acessar este formulário de cadastro será exigido <b>autenticação</b>
  - Os dados da atualização deverão ser persistidos de maneira que possam ser consultados em qualquer momento no futuro até que sejam excluídos.
  - Na atualização do cliente, poderá atualizar os respectivos dados a seguir (campos com <b>\*</b> são obrigatórios):
    - Nome (<b>\*</b>)
    - E-mail (<b>\*</b>)
    - CPF (<b>\*</b>)
    - Telefone (<b>\*</b>)
    - CEP
    - Endereço
    - Complemento
    - Bairro
    - Cidade
    - Estado
  - Deverão ser informadas <b>mensagens de erro</b> em casos de:
    - Campos obrigatórios passados em branco
    - E-mail informado for diferente do cliente em questão e já existir cadastrado para outro cliente
    - CPF informado for diferente do cliente em questão e já existir cadastrado para outro cliente
  - Após realizado a atualização com sucesso o usuário deverá receber uma mensagem de confirmação

</details>

<details>
<summary><b>[Cobranças] Cadastro de cobranças</b></summary>

#### `Na posição de usuário do sistema, desejo cadastrar cobranças para um cliente, afim de acessar suas informações no futuro.`

- <b>Critérios de aceite</b>
  - O cadastro deverá funcionar em formulário web que funcione em um navegador padrão
  - Para acessar este formulário de cadastro deverá ser exigida autenticação
  - Os dados do cadastro deverão ser persistidos de maneira que possam ser consultados em qualquer momento no futuro até que sejam excluídos.
  - O cadastro de cobrança deverá ser exibido em modal.
  - Para abrir este modal do cadastro de cobrança, o usuário deverá poder proceder de uma das duas formas:
    - Clique no ícone de cadastrar cobrança, da coluna <b>"Criar Cobrança"</b> da listagem de clientes.
    - Clique no botão <b>"+ Nova Cobrança"</b> da listagem de cobranças da tela de detalhamento do cliente.
  - Campos necessários para o cadastro (<b>\*</b> obrigatórios):
    - Cliente (<b>\*</b>)
      - Deverá ser um campo de texto somente leitura exibindo o nome do cliente para o qual se está cadastrando a cobrança.
    - Descrição (<b>\*</b>)
    - Status (<b>\*</b>)
    - Deverá existir duas opções: <b>"pago" e "pendente"</b>
    - Valor (<b>\*</b>)
    - Vencimento (<b>\*</b>)
  - Deverão ser informadas <b>mensagens de erro</b> em casos de:
    - Campos obrigatórios em branco
  - Após realizado o <b>cadastro com sucesso</b> o usuário deverá receber uma mensagem de confirmação.

</details>

<details>
<summary><b>[Cobranças] Listagem de cobranças</b></summary>

#### `Na posição de usuário do sistema, desejo visualizar uma listagem com todos as cobranças cadastradas.`

- <b>Critérios de aceite</b>:
  - A página deverá funcionar em um navegador web padrão.
  - Apenas usuários autenticados deverão conseguir acessar esta página
  - Ao clicar no item <b>"cobranças"</b> do menu lateral, deverá ser redirecionado para uma página com a listagem de todas as cobranças cadastradas no sistema.
  - Na listagem de cobranças, cada item deverá mostrar:
    - O identificador da cobrança
    - O nome do cliente
    - Descrição
    - Valor
    - Vencimento
    - Status
    - Pendente
    - Pago
    - Vencido (Caso o status seja pendente e a data de vencimento for anterior a data atual)

</details>

</details>

<br>

<details>
<summary><b>[Cobranças] Edição de cobranças</b></summary>
<br>

### `Na posição de usuário do sistema, desejo atualizar os dados de uma cobrança cadastrada.`

- <b>Critérios de aceite</b>:
  - Ao clicar no botão <b>"editar"</b> na tabela da listagem de cobranças ou na listagem de cobranças da página de detalhe do cliente, abrirá um modal para edição da cobrança.
  - A atualização deverá funcionar em formulário web que funcione em um navegador padrão
  - Ao abrir o formulário, os dados da cobrança deverão ser carregados nos respectivos campos
  - Para acessar este formulário de cadastro será exigido autenticação.
  - Os dados da atualização deverão ser persistidos de maneira que possam ser consultados em qualquer momento no futuro até que sejam excluídos.
  - Na <b>atualização da cobrança</b>, poderá atualizar os respectivos dados (campos com <b>\*</b> são obrigatórios):
    - Descrição (<b>\*</b>)
    - Status (<b>\*</b>)
    - Valor (<b>\*</b>)
    - Vencimento (<b>\*</b>)
  - Deverão ser informadas mensagens de erro em casos de:
    - Campos obrigatórios passados em branco
  - Após realizado a atualização com sucesso o usuário deverá receber uma mensagem de confirmação
  </details>

<details>
<summary><b>[Cobranças] Exclusão de cobranças</b></summary>

#### `Na posição de usuário do sistema, desejo excluir uma cobrança cadastrada.`

- <b>Critérios de aceite</b>:
  - Na tabela da página de <b>"listagem de cobranças"</b> ou na tabela da página de <b>"detalhes do cliente"</b> existe um botão <b>"excluir"</b> que ao clicar, irá abrir um modal para confirmação da exclusão.
  - Só poderá excluir a cobrança, se:
    - A cobrança estiver com status <b>pendente</b>
    - A data de vencimento for <b>igual</b> ou <b>posterior a data atual</b>
  - Cobranças com status <b>"pagas"</b>, não poderão ser apagadas
  - Após realizada a exclusão com sucesso o usuário deverá receber uma <b>mensagem de confirmação</b> e a <b>cobrança excluída deverá ser removida da listagem</b>.

</details>

<details>
<summary><b>[Cobranças] Detalhe da cobrança</b></summary>

#### `Na posição de usuário do sistema, desejo atualizar os dados de uma cobrança cadastrada.`

- <b>Critérios de aceite:</b>
  - Ao clicar na <b>linha</b> referente a cobrança da tabela da listagem de cobranças ou na listagem de cobranças da <b>página de detalhe do cliente</b>, abrirá um modal com os detalhes das cobranças.
  - Deve aparecer <b>todos os campos</b> da cobrança cadastrada
  - O modal deve ter um <b>botão de fechar</b> o detalhe da cobrança

</details>

<details>
<summary><b>[Cobranças/Clientes] Botão "ver todos" - Home</b></summary>
<br>

#### `Na posição de usuário do sistema, desejo visualizar um relatório personalizado de cobranças e clientes.`

- <b>Critérios de aceite</b>:
  - A página deverá funcionar em um navegador web padrão.
  - Apenas usuários <b>autenticados</b> deverão conseguir acessar esta página
  - Em cada elemento dos cards <b>"Total Vencidas"</b>, <b>"Total Pagas"</b> e <b>"Total Prevista"</b>, deverá ter o somatório das contas de acordo com a sua categoria
  - Em cada elemento dos cards da home, deverá exibir a <b>contagem de cobranças e clientes</b> de acordo com seus respectivos status
  - Ao clicar no nome <b>"Ver Todos"</b> no card de <b>"clientes inadimplentes”</b> ou “clientes em dia", deverá ser redirecionado para a página clientes com a listagem dos clientes filtrados, por cada categoria.
  - Ao clicar no nome <b>"Ver Todos"</b> no card de <b>"cobranças vencidas"</b> ou <b>cobranças previstas"</b> ou <b>"cobranças pagas"</b>, deverá ser redirecionado para a página cobranças com a listagem de todas as cobranças já filtrada por cada categoria.
  </details>
