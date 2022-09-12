import { StyledR, StyledTable } from "./styles";

export type Movie = {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
};

interface MovieRowProps {
  movie: Movie;
}

interface MoviesTableProps {
  movies: Movie[];
}

const getKeyValue = (key: string) => (obj: Record<string, any>) => obj[key];

const MovieRow = ({ movie }: MovieRowProps) => {
  return (
    <StyledR>
      {Object.keys(movie)?.map((movieKey: string) => {
        const fieldValue = getKeyValue(movieKey)(movie);
        if (movieKey === "Poster") {
          return (
            <th>
              <img alt={`poster-${fieldValue}`} src={fieldValue} />
            </th>
          );
        } else {
          return <th>{fieldValue}</th>;
        }
      })}
    </StyledR>
  );
};
const MoviesTable = ({ movies }: MoviesTableProps) => {
  if(!movies || movies?.length < 1){
    return null;
  }
  return (
    <StyledTable>
      <thead>
        <StyledR>
          <th>Title</th>
          <th>Year</th>
          <th>imdbID</th>
          <th>Type</th>
          <th>Poster</th>
        </StyledR>
      </thead>
      <tbody>
        {movies?.map((movie: Movie) => <MovieRow movie={movie} />) || null}
      </tbody>
    </StyledTable>
  );
};

export default MoviesTable;
