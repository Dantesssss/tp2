const express = require('express');
const cors = require('cors');
const mysql = require('mysql2');
const authMiddleware = require('./middleware/auth');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Conexión a la base de datos
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'myapp'
});

db.connect((err) => {
    if (err) throw err;
    console.log('MySQL connected');
});

// Rutas
app.use('/api/auth', require('./routes/auth')(db));
app.use('/api/users', require('./routes/users')(db));

// Ruta protegida de ejemplo
app.get('/api/protected', authMiddleware, (req, res) => {
    res.send('This is a protected route');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
