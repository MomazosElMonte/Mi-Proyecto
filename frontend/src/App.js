import logo from './logo.svg';
import './App.css';
import React from 'react';
import ItemList from './pages/ItemList';
import ItemStats from './components/ItemStats';

function App() {
  return (
    <div style={{ padding: '2rem' }}>
      <h1>🛍️ Gestión de Items</h1>
      <ItemStats />
      <ItemList />
    </div>
  );
}

export default App;