import React, { useState } from "react";
import { fetchPageOfMovies } from "../api";
import { Movie } from "./MoviesTable";
import { StyledButton, StyledForm, StyledLoadMore } from "./styles";

interface FormProps {
  setMovies: React.Dispatch<React.SetStateAction<Movie[]>>;
  movies: Movie[] | [];
}
const Form = ({ setMovies, movies }: FormProps) => {
  const [search, setSearch] = useState("");
  const [type, setType] = useState("");
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);
  const [foundMatches, setFoundMatches] = useState<boolean | undefined>(
    undefined
  );

  const handleSubmit = async () => {
    setFoundMatches(undefined);
    setPage(1);
    const { movies: resultingMovies, totalResults } = await fetchPageOfMovies(
      page,
      search,
      type
    );

    setFoundMatches(!!resultingMovies);
    setMovies(resultingMovies);
    setTotalResults(totalResults);
  };

  const handleLoadMore = async () => {
    setPage(page+1)
    const { movies: resultingMovies } = await fetchPageOfMovies(
      page,
      search,
      type
    );

    setMovies(movies.concat(resultingMovies));
  };


  return (
    <>
      <StyledForm>
        <input
          placeholder="Search by title"
          onChange={(event) => setSearch(event.target.value)}
        ></input>
        <>
          <select
            onChange={(event) =>
              setType((event.target as unknown as HTMLInputElement)?.value)
            }
            placeholder="Type"
            name="Type"
            value={type}
          >
            <option value="series">series</option>
            <option value="movie">movie</option>
          </select>
        </>

        <StyledButton type="submit" onClick={handleSubmit}>
          Search
        </StyledButton>

        {search && movies?.length > 0 && totalResults > movies?.length && (
          <StyledLoadMore type="submit" onClick={handleLoadMore}>
            Load more
          </StyledLoadMore>
        )}
      </StyledForm>
      {search && typeof foundMatches === "boolean" && !foundMatches && (
        <p>No Results.</p>
      )}
    </>
  );
};

export default Form;
