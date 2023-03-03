import { useEffect } from "react";
import axios from "axios";
import "../profile.css";
import { useState } from "react";
import Grid from "./Grid";
import Content from "./Content";
import { useLocation } from "react-router";
import { useSelector } from "react-redux";

const MovieOrTvOrFavorites = () => {
  const user = useSelector((state) => state.user);

  const API_URL = "https://api.themoviedb.org/3";
  const API_KEY = "4f5f43495afcc67e9553f6c684a82f84";

  const [movies, setMovies] = useState([]);
  const [searchKey, setSearchKey] = useState("");
  const [trailer, setTrailer] = useState(null);
  const [movie, setMovie] = useState({ title: "Loading Movies" });

  let url = useLocation().pathname.split("/").pop();

  if (url === "movies") url = "movie";
  if (url === "tv_shows") url = "tv";
  if (url === "favorites") url = "favorites";

  // funcion para buscar peliculas o tvshows
  const fetchMovies = async (searchKey) => {
    const type = searchKey ? "search" : "discover";
    const {
      data: { results },
    } = await axios.get(`${API_URL}/${type}/${url}`, {
      params: {
        api_key: API_KEY,
        query: searchKey,
      },
    });
    setMovies(results);
    setMovie(results[0]);

    if (results.length) {
      await fetchMovie(results[0].id);
    }
  };

  //funcion para buscar la pelicula seleccionada
  const fetchMovie = async (id) => {
    const { data } = await axios.get(`${API_URL}/${url}/${id}`, {
      params: {
        api_key: API_KEY,
        append_to_response: "videos",
      },
    });

    if (data.videos && data.videos.results) {
      const trailer = data.videos.results.find(
        (vid) => vid.name === "Official Trailer"
      );
      //seteo trailer
      setTrailer(trailer ? trailer : data.videos.results[0]);
    }
    //return data
    setMovie(data);
  };

  const selectMovie = async (movie) => {
    fetchMovie(movie.id);
    setMovie(movie);
    window.scrollTo(0, 0);
  };

  // search
  const searchMovies = (e) => {
    e.preventDefault();
    fetchMovies(searchKey);
  };

  //renderizacion inicial
  useEffect(() => {
    if (url === "movie" || url === "tv") fetchMovies();
    if (url === "favorites") setMovies(user.favorites);
  }, [url]);

  return (
    <>
      {url === "favorites" ? (
        <Grid movies={user.favorites} url={url} />
      ) : (
        <div>
          <form
            className="container mt-5 mb-5"
            onSubmit={searchMovies}
            style={{ display: "flex", gap: "5px" }}
          >
            <input
              type="text"
              placeholder="search"
              onChange={(e) => setSearchKey(e.target.value)}
              style={{ borderRadius: "5px" }}
            />
            <button className="btn btn-primary">Search</button>
          </form>
          <div>
            <Content movie={movie} trailer={trailer} />
            <Grid movies={movies} selectMovie={selectMovie} url={url} />
          </div>
        </div>
      )}
    </>
  );
};

export default MovieOrTvOrFavorites;
