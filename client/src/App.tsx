import  { useState, useEffect } from 'react';
import axios from 'axios';

interface BattleType {
  _id: string;
  name: string;
}
const App = () => {
  const [battles, setBattles] = useState<BattleType[]>([]);

  useEffect(() => {
    fetchBattles();
  }, []);

  const fetchBattles = async () => {
    try {
      const response = await axios.get('/api/battles');
      setBattles(response.data);
    } catch (error) {
      console.error('Error fetching battles:', error);
    }
  };
  return (
    <div>
      <h1>Battles</h1>
      <ul>
        {battles.map(battle => (
          <li key={battle._id} className="py-2">{battle.name}</li>
        ))}
      </ul> 
    </div>
  )
}

export default App
