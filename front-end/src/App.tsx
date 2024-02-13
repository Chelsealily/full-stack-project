import { Route, Routes, BrowserRouter } from 'react-router-dom';
import './App.scss'
import HomePage from './containers/HomePage/HomePage';


function App() {

  return (
    <BrowserRouter>
      <Routes>
      <div className="App">
      
          <Route path="/" element={<HomePage/>} />
          {/* Add other routes */}
        
      </div>
      </Routes>
    </BrowserRouter>
  );
}

export default App
