export const fetchPageOfMovies = async (
  page = 1,
  search?: string,
  type?: string
) => {
  try {
    let url = `${import.meta.env.VITE_API_URL}?page=${page}`;
    if (search) {
      url = url.concat("", `&s=${search}`);
    }
    if (type) {
      url = url.concat("", `&type=${type}`);
    }

    const response = await fetch(url, {
      method: "GET",
      mode: "cors",
      headers: {
        "X-RapidAPI-Host": "imdb-data-searching.p.rapidapi.com",
        "X-RapidAPI-Key": "5ed7a4a7c9msh2ff7d1d421a7e25p1c7d3bjsnd573601757e2",
      },
    });

    const data = await response.json();
    return { movies: data?.Search, totalResults: data?.totalResults };
  } catch (error) {
    console.log(error);
    return { movies: [], totalResults: 0 };
  }
};
