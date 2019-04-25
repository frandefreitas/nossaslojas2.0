
# Projeto Node - API Nossas Lojas
Reposit�rio criado com o prop�sito de realizar um e-commerce "Minhas Lojas", sua documenta��o com Swagger, o SGDB MySQL e a tecnologia interpretadora de c�digo JavaScript, Node.js.

## Descri��o do Projeto
A implementa��o de um API REST, consumindo microservi�o, utilizando a tecnologia de intepreta��o de c�digo JavaScript, Node.js, o banco de dados MySQL, este manipulado atrav�s da persist�ncia do projeto. 
Por este projeto ser� poss�vel criar, editar e excluir lojas. Tamb�m ser� poss�vel realizar sele��es, tais como selecionar todos as lojas, buscar por id, por estado e por estado/cidade.

## Criando a aplica��o
No primeiro commit foi criado o projeto Node. Onde foi iniciado o projeto com npm init. Ap�s isto, foi definido algumas caracter�sticas do projeto, e, por fim, foi baixado o arquivo atrav�s desse npm.
Antes de escrever o c�digo, ainda foi necess�rio instalar o express, depois criado o arquivo index.js e iniciado dentro dele o express.

Eu fiz este c�digo de teste:
var express = require('express');
var app = express();

app.listen(3000, function(){
  console.log('Servidor rodando na porta 3000.');
});

app.get('/teste', function(req, res){
  console.log('Recebida requisicao de teste na porta 3000.')
  res.send('OK.');
});

Depois instalei o Nodemon para agilizar na execu��o n�o precisa toda hora estar startando o c�digo. 

 sudo npm install -g nodemon

E para finalizar a instala��o foi criado o arquivo o custom-express numa pastar config onde ser�o definidas algumas configura��es e o consign, este �ltimo para carregar todos os arquivos da pasta controller.


## Instala��o do MySQL e configurando a persist�ncia
A primeira etapa para organizar a persist�ncia do projeto foi instalar o MySQL para isto foi necess�rio pelo terminal npm install --save mysql.
<br>
A pr�xima etapa foi no pr�prio PHPMyAdmin criar a base de dados e a tabela.  <br>
CREATE TABLE `lojas` (  <br>
  `id` int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT,   <br>
  `endere�o` varchar(100) NOT NULL,       <br>
  `telefone` varchar(100) NOT NULL,         <br>
  `cnpj` varchar(14) NOT NULL,             <br>
  `horario` varchar(255) NOT NULL,        <br>
  `cidade` varchar(30) NOT NULL,         <br>
  `estado` varchar(15) NOT NULL         <br>
) 


No c�digo fonte foi criado o arquivo connectionFactory.js para fazer a conex�o com o banco de dados com o c�digo abaixo.   <br>
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
Al�m do connectionFactory.js foi criado o LojaDao.js, este arquivo para manipular e ter acessos aos objetos da tabela Loja.       <br>


## Fazer Requisi��es HTTP


### M�todo POST
A primeira etapa das requ�si��es � o m�todo POST, onde foi realizado os cadastros. <br>
Nele foi criada a rota para cadastro, realizada a valida��o e depois salvo no banco de dados. <br>
O banco de dados foi manipulado para salvar no LojaDao, como havia dito anteriormente, na fun��o salva onde � feito o insert.
 
### M�todo GET
O metodo GET listou de quatro maneiras, a primeira consultando pelo id, onde foi usado o mesmo endere�o da fun��o de delete e atualiza. <br>
'/lojas/loja/:id' <br>
Este id foi passado para o LojaDao como parametro para utilizar no where para listagem. <br>

A segunda utiliza��o do m�todo GET foi com o mesmo endere�o da fun��o POST. <br>
 '/lojas/loja/' <br>
 Dispensando par�metro devido o fato de ser uma listagem geral de lojas.
 
A terceira utiliza��o do m�todo GET foi listando com estados, onde foi muito semelhante a consulta por id, que por sua vez tamb�m � get, por�m o par�metro passado foi o estado.
Neste caso foi necess�rio fazer da seguinte maneira: <br>
 '/lojas/loja/estado/:estado', ressaltando que n�o poderia listar o estado direto, sem o '/estado/' porque j� existe uma similar com id. <br>
Nessa fun��o foi utilizado um replace() pois no browser a pesquisa de estado fica onde teria espa�o o sinal '+'. Logo foi necess�rio converter para espa�o de novo e passar para o LojaDao como par�metro da fun��o de 'buscaPeloEstado'. <br>
Al�m do replace(), foi utilizando um while com indexOf('+') > -1 para passar por todos os sinais de mais e converter pra espa�o. <br>
A quarta utiliza��o do m�todo GET foi consultando a cidade junto ao estado. Nesse exemplo foi usado como endere�o '/lojas/loja/estado/:estado/:cidade', neste caso n�o precisou por '/cidade/' antes do par�metro pois n�o existia fun��o com endere�o semelhante e GET.
 
 
### M�todo DELETE
 O m�todo DELETE foi utilizado para excluir da base de dados. A sua rota, al�m do nome do m�todo HTTP, cita o endere�o identico ao PUT e GET para buscar por id, enviando esse id colocando par�metro para o LojaDao.
 
### M�todo PUT
 O m�todo PUT foi utilizado para update da base de dados. A sua rota, al�m do nome do m�todo HTTP, cita o endere�o identico ao PUT e GET para buscar por id, enviando esse id colocando par�metro para o LojaDao.
 
 
 ## Cria��o da Documenta��o
 Para a realiza��o documenta��o foi utilizado o Swagger atrav�s do site http://editor.swagger.io/ e depois baixado em "Generate Server" e inserido no projeto. <br>
 Por ele, foi poss�vel criar uma interface para a API explicando as funcionalidades e os erros.
 
 
 
 
 
 ## Separar em tabelas
Foi separado a lojas em 3 tabelas: loja, cidade e estado. <br>
Onde a loja tem uma chave estrangeira de cidade e cidade tem uma chave estrangeira de estado <br>.


## Cria��o um novo projeto com TypeORM
Ap�s criar as tabelas foi criado um projeto com TypeORM para usando os seguintes comandos. <br>

npm init <br>

npm install typeorm --save <br>

npm install reflect-metadata --save

npm install @types/node --save

npm install typescript --save-de
 
 
 
 ## Cria��o dos modelos
Foi criado os seguintes modelos: Loja, Cidade e Estado. Ap�s coloquei as chaves estrangeiras.


 ## Cria��o da DatabaseProject
Foi ai onde fiz as fun��es de conex�o com banco, simplifiquei ela pois utilizei em todas as consultas. Tamb�m fiz todas as consultas.

## Otimiza��o das rotas
Foi tirado de persistencia e colocado no DatabaseProject, no consign organizei isto tamb�m.

## Utiliza��o do Jest
A primeira atividade feita foi cria um arquivo install o pacote npm install --save-dev jest depois criei dois arquivos teste com uma fun��o sum e o outro testando ele. <br>
O arquivo com o teste tem um teste onde expect indica a fun��o e o toBe a resposta esperada. <br>
expect(sum(1, 2)).toBe(3);
