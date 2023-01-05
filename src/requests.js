 const API_KEY ="63b48b5bdb9912bfb8c6a88261101a0f"

 const requests = {
    fetchTredding: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
    fetchTopRateMovies: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchLatestMovies: `/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`,
    fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
    fetchPopularMovies: `/movie/popular?api_key=${API_KEY}&language=en-US`,
  };
  
  export default requests;

  