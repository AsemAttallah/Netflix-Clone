import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './Component/Home';
import NavBar from './Component/NavBar';
import FavList from './Component/FavList';


function App() {
  return (
    <>
    <NavBar/>
    <br/>
    <br/>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Fav" element={<FavList />} />
    </Routes>
    </>
  );
}

export default App;
