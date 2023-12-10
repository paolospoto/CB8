const httpGET = async (genreID) => {
  const res = await fetch(`${BASE_URL}${genreID}`, {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: AUTH,
    },
  });

  const data = await res.json();
  return data;
};

const BASE_URL =
  "https://api.themoviedb.org/3/discover/movie?api_key=e829985ea93062a29f485f595ae475d1&with_genres=";
const AUTH =
  "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlODI5OTg1ZWE5MzA2MmEyOWY0ODVmNTk1YWU0NzVkMSIsInN1YiI6IjY1NjRlMjczMjQ0MTgyMDBhZDVmODBhMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.0QG1neRQTQE_MPInQ8obEfgH33M0cjy2S2JLFEW13SQ";
export { httpGET };
