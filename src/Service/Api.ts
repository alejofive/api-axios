import axios from "axios";
import { useEffect, useState } from "react";

const Api = () => {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const response = await axios.get(
          "https://rickandmortyapi.com/api/character"
        );
        setCharacters(response.data.results);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching characters:", error);
        setLoading(false);
      }
    };

    fetchCharacters();
  }, []);

  return { characters, loading };
};

export default Api;
