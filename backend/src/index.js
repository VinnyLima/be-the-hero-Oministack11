/**
 * GET: Buscar / Listar uma informação do back-end
 * POST : Criar uma informação no back-end
 * PUT  : ALTERAR UMA INFORMAÇÃO NO BACK-END 
 * DELETE: DELETAR UMA INFORMAÇÃO NO BACK-END
 * 
 * 
 * TIPOS DE PARAMENTROS
 * Query Params: Parametro nomeados enviados na tota apos "?" (Filtors, Paginação)
 * Route Params: Parametrops utilizados para identificar Recursos
 * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
 * 
 */


const express = require('express');
const routes = require('./routes');
const cors= require('cors');

const app = express();
app.use(cors());
app.use(express.json());
app.use(routes);




app.listen(3333);