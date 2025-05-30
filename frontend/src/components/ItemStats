import React, { useEffect, useState } from 'react';
import axios from 'axios';

function ItemStats() {
  const [stats, setStats] = useState(null);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const res = await axios.get('/api/items/stats/data');
        setStats(res.data);
      } catch (err) {
        console.error(err);
        alert('Error al obtener estadísticas');
      }
    };
    fetchStats();
  }, []);

  if (!stats) return <p>Cargando estadísticas...</p>;

  return (
    <div>
      <h3>📈 Estadísticas</h3>
      <p>Total de items: {stats.total_items}</p>
      <p>Precio promedio: ${parseFloat(stats.precio_promedio).toFixed(2)}</p>
    </div>
  );
}

export default ItemStats;