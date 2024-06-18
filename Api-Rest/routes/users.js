const express = require('express');
const auth = require('../middleware/auth');

module.exports = function(db) {
    const router = express.Router();

    // Obtener todos los usuarios
    router.get('/', auth, (req, res) => {
        db.query('SELECT id, name, email FROM users', (error, results) => {
            if (error) throw error;
            res.json(results);
        });
    });

    // Obtener un usuario por ID
    router.get('/:id', auth, (req, res) => {
        const { id } = req.params;
        db.query('SELECT id, name, email FROM users WHERE id = ?', [id], (error, results) => {
            if (error) throw error;
            if (results.length === 0) {
                return res.status(404).json({ msg: 'User not found' });
            }
            res.json(results[0]);
        });
    });

    // Actualizar un usuario por ID
    router.put('/:id', auth, (req, res) => {
        const { id } = req.params;
        const { name, email } = req.body;
        db.query('UPDATE users SET name = ?, email = ? WHERE id = ?', [name, email, id], (error, results) => {
            if (error) throw error;
            res.json({ msg: 'User updated' });
        });
    });

    // Eliminar un usuario por ID
    router.delete('/:id', auth, (req, res) => {
        const { id } = req.params;
        db.query('DELETE FROM users WHERE id = ?', [id], (error, results) => {
            if (error) throw error;
            res.json({ msg: 'User deleted' });
        });
    });

    return router;
};
