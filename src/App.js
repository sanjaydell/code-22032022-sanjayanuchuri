import './App.css';
import About from './components/About/About';
import Explore from './components/Explore/Explore';
import Home from './components/Home/Home';

function App() {
  return (
    <div className="App">
      <Home />
      <Explore />
      <About />
    </div>
  );
}

export default App;
