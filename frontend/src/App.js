import './App.css';
import React, { useState } from 'react';
import ItemList from './pages/ItemList';
import ItemStats from './components/ItemStats';

function App() {
  const [items, setItems] = useState([]);

  return (
    <div style={{ padding: '2rem' }}>
      <h1>🛍️ Gestión de Items</h1>
      <ItemStats refreshTrigger={items.length} />
      <ItemList items={items} setItems={setItems} />
    </div>
  );
}

export default App;
