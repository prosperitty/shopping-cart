import homeImage from './images/nzxt-computers.avif';

const App = (prop) => {
  return (
    <div className="App">
      <div className="jumbotron">
        <header>
          <h1 className="home-title">Welcome to Computer World.</h1>
          <h1 className="home-title">Experience power.</h1>
          <p className="home-description">
            Search for the perfect machine from a variety of retailers.
          </p>
        </header>
        <img className="home-image" src={homeImage} alt="images of computers" />
      </div>
    </div>
  );
};

export default App;
