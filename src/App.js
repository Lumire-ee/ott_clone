import "./App.css";
import requests from "./api/requests";
import Banner from "./components/Banner";
import Nav from "./components/Nav";
import Row from "./components/Row";

function App() {
  return (
    <div className="App">
      <Nav />
      <Banner />
      <Row
        title="오늘의 TOP20"
        id="TT"
        fetchUrl={requests.fetchTopRated}
        isLargeRow={true}
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
    </div>
  );
}

export default App;
