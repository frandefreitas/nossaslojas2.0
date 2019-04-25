const request = require('supertest');

    test('Métodos testados e funcionando', (done) => {
        request('localhost:3000').get('/lojas/loja').then((response) => {
            expect(response.statusCode).toBe(200);
            done();
        });

        request('localhost:3000').get('/lojas/loja/:id').then((response) => {
            expect(response.statusCode).toBe(200);
            done();
        });
        
        request('localhost:3000').get('/lojas/loja/estado/:estado').then((response) => {
            expect(response.statusCode).toBe(200);
            done();
        });


        request('localhost:3000').get('/lojas/loja/estado/nome/:estado').then((response) => {
            expect(response.statusCode).toBe(200);
            done();
        });


        request('localhost:3000').get('/lojas/loja/estado/cidade/:cidade').then((response) => {
            expect(response.statusCode).toBe(200);
            done();
        });

        request('localhost:3000')
            .post('/lojas/loja')
            .send({
                endereco:"Aaaaaaaaa",
                telefone:"12345567",
                cnpj: "12345678901234",
                horario: "12:29",
                idCidade: 5})
            .set('Accept', /application\/json/)
            .then((response) => {
                expect(response.statusCode).toBe(200);
                done();
            });

        request('localhost:3000')
            .post('/lojas/loja/estado/cidade')
            .send({
                cidade:["Pelotas", "Canoas"],
                estado:["Rio Grande do Sul"]})
            .set('Accept', /application\/json/)
            .then((response) => {
                expect(response.statusCode).toBe(200);
                done();
            });  
            
        
        request('localhost:3000')
            .post('/lojas/estado')
            .send({
                nome:"Rio Grande do Leste",
                sigla: "RL"})
            .set('Accept', /application\/json/)
            .then((response) => {
                expect(response.statusCode).toBe(200);
                done();
            });  
        

        request('localhost:3000')
            .post('/lojas/cidade')
            .send({
                nome:"Porto Leste",
                idEstado: "10"})
            .set('Accept', /application\/json/)
            .then((response) => {
                expect(response.statusCode).toBe(200);
                done();
            });  
        

        // request('localhost:3000').put('/lojas/estado/:id').then((response) => {
        //     expect(response.statusCode).toBe(200);
        //     done();
        // });

        // request('localhost:3000').put('/lojas/cidade/:id').then((response) => {
        //     expect(response.statusCode).toBe(200);
        //     done();
        // });
        
        // request('localhost:3000').put('/lojas/loja/:id').then((response) => {
        //     expect(response.statusCode).toBe(200);
        //     done();
        // });

        // request('localhost:3000').delete('/lojas/estado/:id').then((response) => {
        //     expect(response.statusCode).toBe(200);
        //     done();
        // });

        // request('localhost:3000').delete('/lojas/cidade/:id').then((response) => {
        //     expect(response.statusCode).toBe(200);
        //     done();
        // });
        
        // request('localhost:3000').delete('/lojas/loja/:id').then((response) => {
        //     expect(response.statusCode).toBe(200);
        //     done();
        // });

    });