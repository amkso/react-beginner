import PropTyps from "prop-types";
import { Link } from "react-router-dom";

  function MovieFull({coverImg, title, url, genres}){
    return (
      <div>
        <img src={coverImg} alt={title}/>
        <h2>
          {title}
        </h2>
        <ul>
          {genres?.map((genre) => (<li key={genre}>{genre}</li>))}
        </ul>
        <hr />
        <Link to={url}>hyper-Link</Link>
      </div>
  )}
  MovieFull.PropTyps = {
    coverImg: PropTyps.string.isRequired,
    title: PropTyps.string.isRequired,
    summary: PropTyps.string.isRequired,
    genres: PropTyps.arrayOf(PropTyps.string).isRequired,
  };

export default MovieFull;
