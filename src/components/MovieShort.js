import PropTyps from "prop-types";
import { Link } from "react-router-dom";

function MovieShort({id, coverImg, title}){
    return (
      <div>
        <img src={coverImg} alt={title}/>
        <h2>
          <Link to={`/movie/${id}`}>{title}</Link>
        </h2>
      </div>
  )}
  MovieShort.PropTyps = {
    id: PropTyps.number.isRequired,
    coverImg: PropTyps.string.isRequired,
    title: PropTyps.string.isRequired,
  };

export default MovieShort;
