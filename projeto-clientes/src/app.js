const express = require('express');
const clienteRoutes = require('./routes/clienteRoutes');
const app = express();

app.use(express.json());
app.use('/api', clienteRoutes);
module.exports = app;