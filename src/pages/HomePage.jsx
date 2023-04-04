import React from "react";
import requests from "../app/request";
import Banner from "../components/Banner";
import "./homepage.css";
import Nav from "../components/Nav";
import Raw from "../components/Raw";
const HomePage = () => {
  return (
    <div>
      <Nav />
      <Banner />
      <Raw title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Raw title="Originals" fetchUrl={requests.fetchNetflixOriginals} />
      <Raw title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Raw title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Raw title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Raw title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Raw title="Romantic Movies" fetchUrl={requests.fetchRomanceMovies} />
      <Raw title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
    </div>
  );
};

export default HomePage;
