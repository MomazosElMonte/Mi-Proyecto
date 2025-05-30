import React, { useEffect, useState } from 'react';
import axios from 'axios';

function ItemForm({ fetchItems, editingItem, setEditingItem }) {
  const [nombre, setNombre] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [precio, setPrecio] = useState('');

  useEffect(() => {
    if (editingItem) {
      setNombre(editingItem.nombre);
      setDescripcion(editingItem.descripcion);
      setPrecio(editingItem.precio);
    }
  }, [editingItem]);

  const resetForm = () => {
    setNombre('');
    setDescripcion('');
    setPrecio('');
    setEditingItem(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editingItem) {
        await axios.put(`/api/items/${editingItem.id}`, {
          nombre, descripcion, precio,
        });
      } else {
        await axios.post('/api/items', {
          nombre, descripcion, precio,
        });
      }
      fetchItems();
      resetForm();
    } catch {
      alert('Error al guardar el item');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>{editingItem ? 'Editar Item' : 'Nuevo Item'}</h3>
      <input
        placeholder="Nombre"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
        required
      />
      <input
        placeholder="Descripción"
        value={descripcion}
        onChange={(e) => setDescripcion(e.target.value)}
      />
      <input
        placeholder="Precio"
        type="number"
        value={precio}
        onChange={(e) => setPrecio(e.target.value)}
        required
      />
      <button type="submit">{editingItem ? 'Actualizar' : 'Crear'}</button>
      {editingItem && <button onClick={resetForm}>Cancelar</button>}
    </form>
  );
}

export default ItemForm;