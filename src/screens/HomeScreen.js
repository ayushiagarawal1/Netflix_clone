import React from "react";
import "../screens/HomeScreen.css";
import Nav from "../Nav.js";
import Banner from "../Banner";
import requests from "../Requests";
import Row from "../Row.js";

function HomeScreen() {
  return (
    <div className="HomeScreen">
      <Nav />

      <Banner />

      <Row
        title="NETFLIX ORIGINALS"
        fetchURL={requests.fetchNetflixOriginals}
        isLargeRow
      />
      <Row title="Trending Now" fetchURL={requests.fetchTrending} isLargeRow />
      <Row title="Top Rated" fetchURL={requests.fetchTopRated} isLargeRow />
      <Row
        title="Action Movies"
        fetchURL={requests.fetchActionMovies}
        isLargeRow
      />
      <Row
        title="Comedy Movies"
        fetchURL={requests.fetchComedyMovies}
        isLargeRow
      />
      <Row
        title="Horror Movies"
        fetchURL={requests.fetchHorrorMovies}
        isLargeRow
      />
      <Row
        title="Romance Movies"
        fetchURL={requests.fetchRomanceMovies}
        isLargeRow
      />
      <Row
        title="Documentaries"
        fetchURL={requests.fetchDocumentaries}
        isLargeRow
      />
    </div>
  );
}
export default HomeScreen;
