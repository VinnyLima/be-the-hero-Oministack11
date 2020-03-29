const express = require('express');
const routes = express.Router();
const OngController = require('./Controllers/OngController');
const incidentsConstroller = require('./Controllers/IncidenteController');
const profileConstroller = require('./Controllers/ProfileControler');
const sessionConstroller = require('./Controllers/SessionController');

routes.post('/sessions', sessionConstroller.create);

//TRABALHANDO COM A ENTIDADE ONGS
routes.get('/ongs', OngController.List);
routes.post('/ongs',OngController.create);

//PESQUISA DE INCIDENTES DE UMA ONG ESPECIFICA
routes.get('/profile', profileConstroller.index);

//TRABALHANDO COM A ENTIDADE INCIDENTES

routes.get('/incidents', incidentsConstroller.index);
routes.post('/incidents', incidentsConstroller.create);
routes.delete('/incidents/:idreq',incidentsConstroller.delete);

module.exports = routes;