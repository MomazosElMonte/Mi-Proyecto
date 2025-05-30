const pool = require('../db');

// GET /api/items
exports.getAllItems = async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM items');
    res.json(result.rows);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener los items' });
  }
};

// GET /api/items/:id
exports.getItemById = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await pool.query('SELECT * FROM items WHERE id = $1', [id]);

    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Item no encontrado' });
    }

    res.json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener el item' });
  }
};

// POST /api/items
exports.createItem = async (req, res) => {
  try {
    const { nombre, descripcion, precio } = req.body;
    const result = await pool.query(
      'INSERT INTO items (nombre, descripcion, precio) VALUES ($1, $2, $3) RETURNING *',
      [nombre, descripcion, precio]
    );
    res.status(201).json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ error: 'Error al crear el item' });
  }
};

// PUT /api/items/:id
exports.updateItem = async (req, res) => {
  try {
    const { id } = req.params;
    const { nombre, descripcion, precio } = req.body;
    const result = await pool.query(
      'UPDATE items SET nombre = $1, descripcion = $2, precio = $3 WHERE id = $4 RETURNING *',
      [nombre, descripcion, precio, id]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Item no encontrado' });
    }

    res.json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ error: 'Error al actualizar el item' });
  }
};

// DELETE /api/items/:id
exports.deleteItem = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await pool.query('DELETE FROM items WHERE id = $1 RETURNING *', [id]);

    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Item no encontrado' });
    }

    res.json({ message: 'Item eliminado exitosamente' });
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar el item' });
  }
};

// GET /api/items/stats
exports.getItemStats = async (req, res) => {
  try {
    const result = await pool.query('SELECT COUNT(*) AS total_items, AVG(precio) AS precio_promedio FROM items');
    res.json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener estadísticas' });
  }
};