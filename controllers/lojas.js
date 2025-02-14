module.exports = function(app){

    app.get('/lojas', function(req, res){
      console.log('Recebida requisicao de teste na porta 3000.')
      res.send('OK.');
    });

    app.get('/lojas/loja/:id', function(req, res){
      var id = req.params.id;
      let connection = new app.src.DatabaseProject();
      connection.listaLojaId(id, res);
    });


    app.get('/lojas/loja/estado/:estado', function(req, res){
      var estado = req.params.estado;
      let connection = new app.src.DatabaseProject();
      connection.buscaPorIdEstado(estado, res);
    });


    app.get('/lojas/loja/estado/nome/:estado', function(req, res){
      var estado = req.params.estado;
      while (estado.indexOf('+') > -1) {  
          estado = estado.replace('+', ' ');
      }  
      let connection = new app.src.DatabaseProject();
      connection.buscaPorNomeEstado(estado, res);
    });


    // {
    //   "cidade":["Pelotas", "Canoas"],
    //   "estado":["Rio Grande do Sul"]
    // }  
    app.post('/lojas/loja/estado/cidade', function(req, res){
      var loja = req.body;
      var cidade = loja.cidade;
      var estado = loja.estado;
      console.log(cidade);
      console.log(estado);

      let connection = new app.src.DatabaseProject();
      connection.buscaPorNomeCidade(estado, cidade, res);
    });



    app.get('/lojas/loja/estado/cidade/:cidade', function(req, res){
      var cidade = req.params.cidade;
      let connection = new app.src.DatabaseProject();
      connection.buscaPorIdCidade(cidade, res);
    });

    app.get('/lojas/loja/', function(req, res){
      var connection = new app.src.DatabaseProject();
      connection.listaLojas(res);
    });

    app.get('/lojas/cidade/', function(req, res){
      var connection = new app.src.DatabaseProject();
      connection.listaCidades(res);
    });


    app.get('/lojas/estado/', function(req, res){
      var connection = new app.src.DatabaseProject();
      connection.listaEstados(res);
    });


    app.post("/lojas/loja",function(req, res) {
      var loja = req.body;
      req.assert("endereco", "Endereço é obrigatória.").notEmpty();
      req.assert("telefone", "Telefone é obrigatória.").notEmpty();
      req.assert("cnpj", "CNPJ é obrigatório ter 14 digitos.").notEmpty().len(14,14);
      req.assert("horario", "Horário é obrigatório.").notEmpty();
      req.assert("idCidade", "O id da cidade é obrigatório").notEmpty();
      var errors = req.validationErrors();
      if (errors){
          console.log("Erros de validação encontrados");
          res.status(400).send(errors);
          return;
      }
      console.log('Coletando lojas');
      var connection = new app.src.DatabaseProject();
      connection.insertLoja(loja, res);
    });


    app.delete('/lojas/loja/:id', function(req, res){
      var id = req.params.id;
      let connection = new app.src.DatabaseProject();
      connection.deleteLoja(id, res);
    });


    app.delete('/lojas/estado/:id', function(req, res){
      var id = req.params.id;
      let connection = new app.src.DatabaseProject();
      connection.deleteEstado(id, res);
    });


    app.delete('/lojas/cidade/:id', function(req, res){
      var id = req.params.id;
      let connection = new app.src.DatabaseProject();
      connection.deleteCidade(id, res);
    });


    app.post("/lojas/estado",function(req, res) {
        var estado = req.body;
        console.log('Coletando estado');
        var connection = new app.src.DatabaseProject();
        connection.insertEstado(estado, res);
    });

    app.post("/lojas/cidade",function(req, res) {
      var cidade = req.body;
      console.log('Coletando cidade');
      console.log(cidade.nome + cidade.idEstado)
      var connection = new app.src.DatabaseProject();
      connection.insertCidade(cidade, res);
    });



    app.put('/lojas/estado/:id', function(req, res){
      var estado = req.body;
      var id = req.params.id;
      estado.id = id;
      var connection = new app.src.DatabaseProject();
      connection.updateEstado(estado, res);
    });



    app.put('/lojas/cidade/:id', function(req, res){
      var cidade = req.body;
      var id = req.params.id;
      cidade.id = id;
      var connection = new app.src.DatabaseProject();
      connection.updateCidade(cidade, res);
    });


    app.put("/lojas/loja/:id",function(req, res) {
      var loja = req.body;
      req.assert("endereco", "Endereço é obrigatória.").notEmpty();
      req.assert("telefone", "Telefone é obrigatória.").notEmpty();
      req.assert("cnpj", "CNPJ é obrigatório ter 14 digitos.").notEmpty().len(14,14);
      req.assert("horario", "Horário é obrigatório.").notEmpty();
      req.assert("idCidade", "O id da cidade é obrigatório").notEmpty();
      var errors = req.validationErrors();
      if (errors){
          console.log("Erros de validação encontrados");
          res.status(400).send(errors);
          return;
      }
      var id = req.params.id;
      loja.id = id;
      console.log('Coletando lojas');
      var connection = new app.src.DatabaseProject();
      connection.updateLoja(loja, res);
    });

}

