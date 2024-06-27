import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

// Components
import Visitor from './Pages/Visitor'


function App() {
  
  return (
    <Router>
      <Routes>
        {/************************************ Routing **********************************************/}
        <Route path="/" element={<Visitor />} />
        
      </Routes>
    </Router>
  );
}

export default App;
