
import './App.css';
import Navbar from './Components/navbar';
import Homepage from './pages/homepage';
import Menu from './pages/menupage';

function App() {
  return (
    <div className="App">
     <Navbar />
     {/* <Homepage /> */}
     <Menu />
    </div>
  );
}

export default App;
