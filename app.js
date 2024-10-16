const express = require('express');
const photoRoutes = require('./routes/photoRoutes');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Usando as rotas de fotos
app.use('/photos', photoRoutes);

// Iniciar o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
