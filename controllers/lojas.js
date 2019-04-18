module.exports = function(app){
    app.get('/lojas', function(req, res){
      console.log('Recebida requisicao de teste na porta 3000.')
      res.send('OK.');
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




    app.get('/lojas/loja/', function(req, res){
      var connection = new app.src.DatabaseProject();
      connection.listaLojas(res);   
      // resultado(function(erro, resultado){  
      //     if(erro){
      //         console.log('erro ao consultar no banco: ' + erro);
      //         res.status(500).send(erro);
      //         return;
      //     }
          // console.log('Loja: '+ JSON.stringify(resultado));
          // res.json(resultado);
          // return;
      // })
      // console.log('consultando loja pelo id:' + id);
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



    app.delete('/lojas/loja/:id', function(req, res){
        var id = req.params.id;
        var connection = new app.src.DatabaseProject();
        connection.deleteLoja(id, res);
    });


    // app.get('/lojas/loja/:id', function(req, res){
    //     var id = req.params.id;
    //     var connection = app.persistencia.connectionFactory();
    //     var lojaDao = new app.persistencia.LojaDao(connection);    
    //     lojaDao.buscaPorId(id, function(erro, resultado){ 
    //         if(erro){
    //             console.log('erro ao consultar no banco: ' + erro);
    //             res.status(500).send(erro);
    //             return;
    //         }
    //         console.log('Loja: '+ JSON.stringify(resultado));
    //         res.json(resultado);
    //         return;
    //     })
    //     console.log('consultando loja pelo id:' + id);
    // });


    // app.get('/lojas/loja/estado/:estado', function(req, res){
    //     var estado = req.params.estado;
    //     while (estado.indexOf('+') > -1) {   //retorna o índice da primeira ocorrência do valor especificado
    //         estado = estado.replace('+', ' ');
    //     }  
    //     var connection = app.persistencia.connectionFactory();
    //     var lojaDao = new app.persistencia.LojaDao(connection);    
    //     lojaDao.buscaPeloEstado(estado, function(erro, resultado){ 
    //         if(erro){
    //             console.log('erro ao consultar no banco: ' + erro);
    //             res.status(500).send(erro);
    //             return;
    //         }
    //         console.log('Loja: '+ JSON.stringify(resultado));
    //         res.json(resultado);
    //         return;
    //     })
    //     console.log('consultando loja pelo estado:' + estado);
    // });


    // app.get('/lojas/loja/estado/:estado/:cidade', function(req, res){
    //     var estado = req.params.estado;
    //     while (estado.indexOf('+') > -1) estado = estado.replace('+', ' ');
    //     var cidade = req.params.cidade;
    //     while (cidade.indexOf('+') > -1) cidade = estado.replace('+', ' ');
    //     var connection = app.persistencia.connectionFactory();
    //     var lojaDao = new app.persistencia.LojaDao(connection);    
    //     lojaDao.buscaPeloEstadoCidade([estado, cidade], function(erro, resultado){ 
    //         if(erro){
    //             console.log('erro ao consultar no banco: ' + erro);
    //             res.status(500).send(erro);
    //             return;
    //         }
    //         console.log('Loja: '+ JSON.stringify(resultado));
    //         res.json(resultado);
    //         return;
    //     })
    //     console.log('consultando loja pelo estado:' + cidade +' / '+ estado);
    // });


    // app.get('/lojas/loja/estado', function(req, res){
    //     var connection = app.persistencia.connectionFactory();
    //     var lojaDao = new app(connection);    
    //     lojaDao.listaEstados( function(erro, resultado){  
    //         if(erro){
    //             console.log('erro ao consultar no banco: ' + erro);
    //             res.status(500).send(erro);
    //             return;
    //         }
    //         console.log('Loja: '+ JSON.stringify(resultado));
    //         res.json(resultado);
    //         return;
    //     })
    // });




}

