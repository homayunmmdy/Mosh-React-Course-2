import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

interface BattleType {
  _id: string;
  name: string;
  desc: string;
  imgUrl?: string;
  videoUrl?: string;
}

const Battle = () => {
  const { id } = useParams(); // Get the battle ID from the URL
  const [battle, setBattle] = useState<BattleType | null>(null);

  useEffect(() => {
    fetchBattle();
  }, [id]); // Fetch the battle whenever the ID changes

  const fetchBattle = async () => {
    try {
      const response = await axios.get(`/api/battles/${id}`);
      setBattle(response.data);
    } catch (error) {
      console.error("Error fetching battle:", error);
    }
  };

  if (!battle) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Link to="/">
        Back to home
      </Link>
      <h1>{battle.name}</h1>
      <p>{battle.desc}</p>
      {battle.imgUrl && <img src={battle.imgUrl} alt={battle.name} />}
      {battle.videoUrl && (
        <video  controls>
          <source src={battle.videoUrl} title={battle.name} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )}
    </div>
  );
};

export default Battle;
