import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './Component/Home';
import NavBar from './Component/NavBar';


function App() {
  return (
    <>
    <NavBar/>
    <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/Fav" element={<Fav />} /> */}
    </Routes>
    </>
  );
}

export default App;
