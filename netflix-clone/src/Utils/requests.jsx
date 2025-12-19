const API_KEY = process.env.VITE_API_KEY;

const requests = {
  fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=211`,
  fetchTopRatedMovies: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
  fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
  fetchTvShow: `/tv/popular?api_key=${API_KEY}&language=en-US&page=1`,
};

export default requests;

// https://api.themoviedb.org/3/tv/popular?api_key=1fd201d518a693b562954ae5c1c66cda&language=en-US

 // API-KEY: https://api.themoviedb.org/3/movie/popular?api_key=1fd201d518a693b562954ae5c1c66cda//


// API: https://api.themoviedb.org/3/trending/all/week?api_key=1fd201d518a693b562954ae5c1c66cda&language=en-US

//https://api.themoviedb.org/3/trending/all/week?api_key=YOUR_V3_KEY&language=en-US//