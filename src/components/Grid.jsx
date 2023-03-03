import { useDispatch } from "react-redux";
import { removeFavorites } from "../state/user";

const Grid = ({ movies = [], selectMovie, url }) => {
  const URL_IMAGE = "https://image.tmdb.org/t/p/original";
  const dispatch = useDispatch();

  const removeFromFavorites = (movie) => {
    dispatch(removeFavorites(movie));
  };

  return (
    <>
      {url === "favorites" ? (
        <div className="container mt-3">
          <div className="row">
            {movies.map((movie) => (
              <div key={movie.id} className="col-md-3 mb-3">
                <img
                  src={`${URL_IMAGE + movie.poster_path}`}
                  alt=""
                  height={500}
                  width="100%"
                />
                <h4 className="text-center">{movie.title}</h4>
                <button
                  onClick={() => removeFromFavorites(movie)}
                  className="btn btn-danger"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="container mt-3">
          <div className="row">
            {movies.map((movie) => (
              <div
                key={movie.id}
                className="col-md-3 mb-3"
                onClick={() => selectMovie(movie)}
              >
                <img
                  src={`${URL_IMAGE + movie.poster_path}`}
                  alt=""
                  height={500}
                  width="100%"
                />
                <h4 className="text-center">{movie.title}</h4>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Grid;
