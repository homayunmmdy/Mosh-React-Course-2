import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import SearchForm from "../components/SearchForm";

interface BattleType {
  _id: string;
  name: string;
  desc: string;
  imgUrl?: string;
  videoUrl?: string;
}

const Home = () => {
  const [battles, setBattles] = useState<BattleType[]>([]);

  useEffect(() => {
    fetchBattles();
  }, []);

  const fetchBattles = async (searchParams = {}) => {
    try {
      const response = await axios.get("api/battles", {
        params: searchParams,
      });
      setBattles(response.data);
    } catch (error) {
      console.error("Error fetching battles:", error);
    }
  };

  const handleSearch = (searchParams) => {
    fetchBattles(searchParams);
  };

  return (
    <div>
      <h1>Battles</h1>
      <SearchForm onSearch={handleSearch} />
      <ul>
        {battles.map((battle) => (
          <li key={battle._id} className="py-2">
            <Link to={`/battle/${battle._id}`}>
              <h2>{battle.name}</h2>
              <p>{battle.desc}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
