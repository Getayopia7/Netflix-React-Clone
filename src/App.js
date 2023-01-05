import './App.css'
import requests from './requests';

import Nav from './Component/Nav/Nav';
import Footer from './Component/Footer/Footer';
import Banner from './Component/Banner/Banner';
import Row from './Component/Row/Row';

function App() {
  return (
    <div className="App">
       <Nav />
        <Banner/>
        <Row title='Netflix Orginals'
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow
        />
        <Row title='Trending Now'
        fetchUrl={requests.fetchTredding}/>
        <Row title='Top Rate Movies'
        fetchUrl={requests.fetchTopRateMovies}/>
        <Row title='Action Movies'
        fetchUrl={requests.fetchActionMovies}/>
        <Row title='Latest Movies'
        fetchUrl={requests.fetchLatestMovies}/>
        <Row title='Horror Movies'
        fetchUrl={requests.fetchHorrorMovies}/>
        <Row title='Romance Movies'
        fetchUrl={requests.fetchRomanceMovies}/>
        <Row title='Documentaries'
        fetchUrl={requests.fetchDocumentaries}/>
        <Row title='Popular Movies'
        fetchUrl={requests.fetchPopularMovies}/>
        <Footer />
    </div>
  );
}

export default App;
