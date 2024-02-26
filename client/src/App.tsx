import  { useState, useEffect } from 'react';
import axios from 'axios';

interface BattleType {
  _id: string;
  name: string;
  desc: string;
  imgUrl ?: string;
  videoUrl ?:string;
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
          <li key={battle._id} className="py-2">
           <h2> {battle.name}</h2>
           <p>{battle.desc}</p>
           <a href={battle.imgUrl}>img url</a>
           <a className={battle.videoUrl}>video url</a>
            </li>
        ))}
      </ul> 
    </div>
  )
}

export default App
