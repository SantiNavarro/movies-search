import { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import MoviesTable, { Movie } from "./components/MoviesTable";

function App() {
  const [movies, setMovies] = useState<Movie[]>([]);

  return (
    <div className="App">
      <Form movies={movies} setMovies={setMovies} />
      <MoviesTable movies={movies} />
    </div>
  );
}

export default App;
