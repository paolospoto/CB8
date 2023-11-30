const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlODI5OTg1ZWE5MzA2MmEyOWY0ODVmNTk1YWU0NzVkMSIsInN1YiI6IjY1NjRlMjczMjQ0MTgyMDBhZDVmODBhMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.0QG1neRQTQE_MPInQ8obEfgH33M0cjy2S2JLFEW13SQ",
  },
};

const httpGET = async () => {
  const res = await fetch(
    "https://api.themoviedb.org/3/movie/upcoming",
    options
  );
  const data = await res.json();

  const x = Math.floor(Math.random() * 20) + 1;

  const dataObj = {
    imageUrl: "https://image.tmdb.org/t/p/w500" + data.results[x].poster_path,
    titleEl: data.results[x].title,
    descriptionEl: data.results[x].overview,
  };

  return dataObj;
};

export { httpGET };

// https://api.themoviedb.org/3/movie/upcoming
// `https://image.tmdb.org/t/p/w500${data.results[15].poster_path}`
