import { Route, Routes, BrowserRouter, Link } from 'react-router-dom';
import './App.scss'
import HomePage from './containers/HomePage/HomePage';
import Nav from './Components/Nav/Nav';
import ViewCars from './containers/ViewCars/ViewCars';
import FaveCar from "./assets/My Favourite Cars-3.png";
import ScrollToTop from "react-scroll-to-top";
import CreateCar from './containers/CreateCar/CreateCar';
import UpdateCar from './containers/UpdateCar/UpdateCar';
import RandomCar from './containers/RandomCar/RandomCar';

function App() {

  return (
    
    <BrowserRouter>
     <Link className="logo" to="/">
    <img src={FaveCar} alt='my favourite cars - full stack web app'/>
    </Link>
      <Nav/>
      <Routes>
  
          <Route path="/" element={<HomePage/>} />
          <Route path="/cars" element={<ViewCars/>} />
          <Route path="/car/create" element={<CreateCar/>} />
          <Route path="/car/:id" element={<UpdateCar/>} />
          <Route path="/car/random" element={<RandomCar/>} />
          
      </Routes>
      <ScrollToTop smooth />
    </BrowserRouter>
    
  );
}

export default App
