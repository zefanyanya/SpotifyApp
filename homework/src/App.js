import Card from './components/Card'
import data from './data/data';

function App() {
  return (
    <div className="App">
      <Card
      img = {data.album.images[0].url}
      title = {data.name}
      artists = {data.album.artists[0].name}/>
    </div>
  );
}

export default App;