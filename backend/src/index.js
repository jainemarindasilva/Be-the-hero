const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

 /**
  * Tipos de parâmetros:
  * 
  * Query Params: Parâmetros nomeados enviados na rota após '?' (filtros, paginação)
  *               para acessa-los: request.query;
  * Route Params: Parâmetros utilizados para identificar recursos (no exemplo abaixo é o 'users')
  *               para acessa-los: request.params;
  */
app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);