
import './App.css';
import MenuCategory from './Components/menupagecomponents/menucatagories';
import Navbar from './Components/navbar';
import Homepage from './pages/homepage';
import Menu from './pages/menupage';

function App() {
  return (
    <div className="App">
     <Navbar />
     {/* <Homepage /> */}
     {/* <MenuCategory/> */}
     <Menu />
    </div>
  );
}

export default App;
