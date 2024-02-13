import { Route, Routes, BrowserRouter } from 'react-router-dom';
import './App.scss'
import HomePage from './containers/HomePage/HomePage';
import Nav from './Components/Nav/Nav';
import ViewCars from './containers/ViewCars/ViewCars';


function App() {

  return (
    <BrowserRouter>
      <Nav/>
      <Routes>
  
          <Route path="/" element={<HomePage/>} />
          <Route path="/cars" element={<ViewCars/>} />
          {/* Add other routes */}
          
      </Routes>
    </BrowserRouter>
  );
}

export default App
