import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import MovieFull from "../components/MovieFull";

function Detail(){
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState([]);
  const {id} = useParams();

  useEffect(() => {
    async function fetchData() {
      const json = await(
        await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
      ).json();
      setMovie(json.data.movie);
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
          <MovieFull 
            key={movie.id}
            coverImg={movie.medium_cover_image} 
            title={movie.title} 
            genres={movie.genres}
            url={movie.url}
          />
        </div>
      }
    </div>
  );
}


export default Detail;