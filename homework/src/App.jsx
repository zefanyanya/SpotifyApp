import './App.css';
import Home from './pages/Home';

function App() {
  console.log(process.env.REACT_APP_GIPHY_KEY);
  return (
    <div className="App">
      <Home/>
      
    </div>
  );
}

export default App;
