const express = require('express');
app = express();
const cors = require('cors')

const dotenv = require('dotenv');

// Importando rotas
usersRoute = require('./api/users');

// Recebendo dados do .env
dotenv.config()

// Caso PORT seja definido no .env considerar, senão, usar 5000
const PORT = process.env.PORT || 5000;


// Middlewares
app.use(express.json());
const corsOptions = {
    exposedHeaders: 'proximo',
};
app.use(cors(corsOptions));

// Rotas middlewares
app.use('/api/users', usersRoute);

app.listen(PORT, () => console.log(`Server is running on ${PORT}`));