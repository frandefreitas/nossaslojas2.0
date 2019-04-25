
# Projeto Node - API Nossas Lojas
Repositório criado com o propósito de realizar um e-commerce "Minhas Lojas", sua documentação com Swagger, o SGDB MySQL e a tecnologia interpretadora de código JavaScript, Node.js.

## Descrição do Projeto
A implementação de um API REST, consumindo microserviço, utilizando a tecnologia de intepretação de código JavaScript, Node.js, o banco de dados MySQL, este manipulado através da persistência do projeto. 
Por este projeto será possível criar, editar e excluir lojas. Também será possível realizar seleções, tais como selecionar todos as lojas, buscar por id, por estado e por estado/cidade.

## Criando a aplicação
No primeiro commit foi criado o projeto Node. Onde foi iniciado o projeto com npm init. Após isto, foi definido algumas características do projeto, e, por fim, foi baixado o arquivo através desse npm.
Antes de escrever o código, ainda foi necessário instalar o express, depois criado o arquivo index.js e iniciado dentro dele o express.

Eu fiz este código de teste:
var express = require('express');
var app = express();

app.listen(3000, function(){
  console.log('Servidor rodando na porta 3000.');
});

app.get('/teste', function(req, res){
  console.log('Recebida requisicao de teste na porta 3000.')
  res.send('OK.');
});

Depois instalei o Nodemon para agilizar na execução não precisa toda hora estar startando o código. 

 sudo npm install -g nodemon

E para finalizar a instalação foi criado o arquivo o custom-express numa pastar config onde serão definidas algumas configurações e o consign, este último para carregar todos os arquivos da pasta controller.


## Instalação do MySQL e configurando a persistência
A primeira etapa para organizar a persistência do projeto foi instalar o MySQL para isto foi necessário pelo terminal npm install --save mysql.
<br>
A próxima etapa foi no próprio PHPMyAdmin criar a base de dados e a tabela.  <br>
CREATE TABLE `lojas` (  <br>
  `id` int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT,   <br>
  `endereço` varchar(100) NOT NULL,       <br>
  `telefone` varchar(100) NOT NULL,         <br>
  `cnpj` varchar(14) NOT NULL,             <br>
  `horario` varchar(255) NOT NULL,        <br>
  `cidade` varchar(30) NOT NULL,         <br>
  `estado` varchar(15) NOT NULL         <br>
) 


No código fonte foi criado o arquivo connectionFactory.js para fazer a conexão com o banco de dados com o código abaixo.   <br>
var mysql  = require('mysql');             <br>
<br>
  function createDBConnection(){              <br>
    return mysql.createConnection({            <br>
      host: 'localhost',          <br>
      user: 'root',            <br>
      password: '',            <br>
      database: 'projetonode'          <br>
    });            <br>
  }           <br>
<br>
  module.exports = function() {          <br>
    return createDBConnection;         <br>
  }                 <br>
<br>
Além do connectionFactory.js foi criado o LojaDao.js, este arquivo para manipular e ter acessos aos objetos da tabela Loja.       <br>


## Fazer Requisições HTTP


### Método POST
A primeira etapa das requísições é o método POST, onde foi realizado os cadastros. <br>
Nele foi criada a rota para cadastro, realizada a validação e depois salvo no banco de dados. <br>
O banco de dados foi manipulado para salvar no LojaDao, como havia dito anteriormente, na função salva onde é feito o insert.
 
### Método GET
O metodo GET listou de quatro maneiras, a primeira consultando pelo id, onde foi usado o mesmo endereço da função de delete e atualiza. <br>
'/lojas/loja/:id' <br>
Este id foi passado para o LojaDao como parametro para utilizar no where para listagem. <br>

A segunda utilização do método GET foi com o mesmo endereço da função POST. <br>
 '/lojas/loja/' <br>
 Dispensando parâmetro devido o fato de ser uma listagem geral de lojas.
 
A terceira utilização do método GET foi listando com estados, onde foi muito semelhante a consulta por id, que por sua vez também é get, porém o parâmetro passado foi o estado.
Neste caso foi necessário fazer da seguinte maneira: <br>
 '/lojas/loja/estado/:estado', ressaltando que não poderia listar o estado direto, sem o '/estado/' porque já existe uma similar com id. <br>
Nessa função foi utilizado um replace() pois no browser a pesquisa de estado fica onde teria espaço o sinal '+'. Logo foi necessário converter para espaço de novo e passar para o LojaDao como parâmetro da função de 'buscaPeloEstado'. <br>
Além do replace(), foi utilizando um while com indexOf('+') > -1 para passar por todos os sinais de mais e converter pra espaço. <br>
A quarta utilização do método GET foi consultando a cidade junto ao estado. Nesse exemplo foi usado como endereço '/lojas/loja/estado/:estado/:cidade', neste caso não precisou por '/cidade/' antes do parâmetro pois não existia função com endereço semelhante e GET.
 
 
### Método DELETE
 O método DELETE foi utilizado para excluir da base de dados. A sua rota, além do nome do método HTTP, cita o endereço identico ao PUT e GET para buscar por id, enviando esse id colocando parâmetro para o LojaDao.
 
### Método PUT
 O método PUT foi utilizado para update da base de dados. A sua rota, além do nome do método HTTP, cita o endereço identico ao PUT e GET para buscar por id, enviando esse id colocando parâmetro para o LojaDao.
 
 
 ## Criação da Documentação
 Para a realização documentação foi utilizado o Swagger através do site http://editor.swagger.io/ e depois baixado em "Generate Server" e inserido no projeto. <br>
 Por ele, foi possível criar uma interface para a API explicando as funcionalidades e os erros.
 
 
 
 
 
 ## Separar em tabelas
Foi separado a lojas em 3 tabelas: loja, cidade e estado. <br>
Onde a loja tem uma chave estrangeira de cidade e cidade tem uma chave estrangeira de estado <br>.


## Criação um novo projeto com TypeORM
Após criar as tabelas foi criado um projeto com TypeORM para usando os seguintes comandos. <br>

npm init <br>

npm install typeorm --save <br>

npm install reflect-metadata --save

npm install @types/node --save

npm install typescript --save-de
 
 
 
 ## Criação dos modelos
Foi criado os seguintes modelos: Loja, Cidade e Estado. Após coloquei as chaves estrangeiras.


 ## Criação da DatabaseProject
Foi ai onde fiz as funções de conexão com banco, simplifiquei ela pois utilizei em todas as consultas. Também fiz todas as consultas.

## Otimização das rotas
Foi tirado de persistencia e colocado no DatabaseProject, no consign organizei isto também.

## Utilização do Jest
A primeira atividade feita foi cria um arquivo install o pacote npm install --save-dev jest depois criei dois arquivos teste com uma função sum e o outro testando ele. <br>
O arquivo com o teste tem um teste onde expect indica a função e o toBe a resposta esperada. <br>
expect(sum(1, 2)).toBe(3);
