import React from "react";
import Banner from "../components/Banner";
import Row from "../components/Row";
import requests from "../api/requests";

function Main() {
  return (
    <div>
      <Banner />
      <Row
        title="오늘의 TOP20"
        id="TT"
        fetchUrl={requests.fetchTopRated}
        isLargeRow={true}
      />
      <Row
        title="Netflix Original"
        id="NO"
        fetchUrl={requests.fetchNetflixOriginals}
      />
      <Row title="Trending Now" id="AS" fetchUrl={requests.fetchTrending} />
      <Row
        title="Action Movies"
        id="AN"
        fetchUrl={requests.fetchActionMovies}
      />
      <Row
        title="Comedy Movies"
        id="CM"
        fetchUrl={requests.fetchComedyMovies}
      />
      <Row
        title="Horror Movies"
        id="HR"
        fetchUrl={requests.fetchHorrorMovies}
      />
      <Row
        title="Adventure Movies"
        id="AV"
        fetchUrl={requests.fetchAdventureMovies}
      />
      <Row
        title="Documentaries Movies"
        id="DC"
        fetchUrl={requests.fetchDocumentariesMovies}
      />
      <Row
        title="Romance Movies"
        id="RM"
        fetchUrl={requests.fetchRomanceMovies}
      />
      <Row title="Drama Movies" id="DR" fetchUrl={requests.fetchDramaMovies} />
    </div>
  );
}

export default Main;
