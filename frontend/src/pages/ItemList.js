import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ItemForm from '../components/ItemForm';

function ItemList({ items, setItems }) {
  const [editingItem, setEditingItem] = useState(null);

  const fetchItems = async () => {
    try {
      const res = await axios.get('/api/items');
      setItems(res.data);
    } catch (err) {
      alert('Error al obtener items');
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm('¿Estás seguro de eliminar este item?')) return;
    try {
      await axios.delete(`/api/items/${id}`);
      fetchItems();
    } catch {
      alert('Error al eliminar item');
    }
  };

  const handleEdit = (item) => {
    setEditingItem(item);
  };

  useEffect(() => {
    fetchItems();
  }, []); // Solo al montar

  return (
    <div>
      <h2>Lista de Items</h2>
      <ItemForm fetchItems={fetchItems} editingItem={editingItem} setEditingItem={setEditingItem} />
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            <strong>{item.nombre}</strong>: {item.descripcion} - ${item.precio}
            <button onClick={() => handleEdit(item)}>✏️ Editar</button>
            <button onClick={() => handleDelete(item.id)}>🗑️ Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ItemList;
