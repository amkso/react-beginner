import { useState, useEffect } from "react";
import MovieShort from "../components/MovieShort";

function Home() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  
  useEffect(() => {
    async function fetchData() {
      const json = await(
        await fetch(
          `https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year`
        )
      ).json();
      setMovies(json.data.movies);
    }

    fetchData();
    setLoading(false);
  }, []);

  return (
    <div>
      {loading ? 
        <h1>Loading...</h1>
          : 
        <div>
          {movies.map((movie) => (
            <MovieShort 
              key={movie.id}
              id={movie.id}
              coverImg={movie.medium_cover_image} 
              title={movie.title} 
            />
          ))}
        </div>
      }
    </div>
  );
}

export default Home;