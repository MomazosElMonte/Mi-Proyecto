
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const itemsRoutes = require('./routes/itemsRoutes');
const pool = require('./db'); // para verificar conexión

const app = express();
const PORT = process.env.PORT || 5000;

// Middlewares
app.use(cors());
app.use(bodyParser.json());


pool.query('SELECT NOW()')
.then(() => console.log('✅ Base de datos conectada exitosamente'))
.catch((err) => console.error('❌ Error al conectar la base de datos:', err));


// Rutas
app.use('/api/items', itemsRoutes);

//
app.get('/', (req, res) => {
  res.send('✅ API funcionando correctamente');
});


// Servidor
app.listen(PORT, () => {
console.log('🟡 Iniciando servidor...');
});