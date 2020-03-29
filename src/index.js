const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);


// Tipos de Parametros:

// Query Params: Parametros nomeados enviados na rota apos ? (filtros, paginação)
// Route Params: Parametros utilizados para identificar recursos
// Request Body: Corpo da requisicao, utilizado para criar ou alterar recursos


app.listen(3333);
