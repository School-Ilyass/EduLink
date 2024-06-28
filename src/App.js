import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

// Components
import Visitor from './Pages/Visitor'
import Scientific from './Pages/Scientific'
import Signup from './Pages/Signup'
import Authentification from './Pages/Authentification'

function App() {
  
  return (
    <Router>
      <Routes>
        {/************************************ Routing **********************************************/}
        <Route path="/" element={<Visitor />} />
        <Route path="/Scientific" element={<Scientific />} />
        {/* Auth */}
        <Route path="/Signup" element={<Signup />} />
        <Route path="/Authentification" element={<Authentification />} />
        
      </Routes>
    </Router>
  );
}

export default App;
