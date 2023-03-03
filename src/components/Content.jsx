import YouTube from "react-youtube";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addFavorites } from "../state/user";

const Content = ({ movie, trailer }) => {
  const IMAGE_PATH = "https://image.tmdb.org/t/p/original";
  const [playing, setPlaying] = useState(false);

  const dispatch = useDispatch();

  const addToFavorite = (movie) => {
    dispatch(addFavorites(movie));
  };

  return (
    <main>
      {movie ? (
        <div
          className="viewtrailer"
          style={{
            backgroundImage: `url("${IMAGE_PATH}${movie.backdrop_path}")`,
          }}
        >
          <button
            onClick={() => addToFavorite(movie)}
            className="boton btn btn-outline-dark bg-success"
          >
            Add to favorites
          </button>
          {playing ? (
            <>
              <YouTube
                videoId={trailer.key}
                className="reproductor container"
                containerClassName={"youtube-container amru"}
                opts={{
                  width: "100%",
                  height: "100%",
                  playerVars: {
                    autoplay: 1,
                    controls: 0,
                    cc_load_policy: 0,
                    fs: 0,
                    iv_load_policy: 0,
                    modestbranding: 0,
                    rel: 0,
                    showinfo: 0,
                  },
                }}
              />
              <button
                onClick={() => setPlaying(false)}
                className="boton btn btn-outline-dark bg-danger"
              >
                Close
              </button>
            </>
          ) : (
            <div className="container">
              <div className="">
                {trailer ? (
                  <button
                    className="boton btn btn-outline-dark bg-success"
                    onClick={() => setPlaying(true)}
                    type="button"
                  >
                    Play Trailer
                  </button>
                ) : (
                  "There is no trailer available"
                )}
                <h1 className="text-white">{movie.title}</h1>
                <p className="text-white">{movie.overview}</p>
              </div>
            </div>
          )}
        </div>
      ) : null}
    </main>
  );
};

export default Content;
