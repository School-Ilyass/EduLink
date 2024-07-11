import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

// Components
import Visitor from './Pages/Visitor'
import Scientific from './Pages/Scientific'
import Signup from './Pages/Signup'
import Authentification from './Pages/Authentification'
import AddArticle from "./Pages/Scientific/Components/AddArticle"
import Admin from "./Pages/Admin/index"
import AddEditor from "./Pages/Admin/Components/AddEditor"
import AddJournal from "./Pages/Admin/Components/AddJournal"
import Editor from "./Pages/Editor"
import Profile from "./Pages/CommunComponent/Profile"

function App() {
  
  return (
    <Router>
      <Routes>
        {/************************************ Routing **********************************************/}
        <Route path="/" element={<Visitor />} />
        <Route path="/Scientific" element={<Scientific />} />
        <Route path="/Editor" element={<Editor />} />
        <Route path="/Admin" element={<Admin />} />
        <Route path="/Profile" element={<Profile />} />
        {/* Auth */}
        <Route path="/Signup" element={<Signup />} />
        <Route path="/Authentification" element={<Authentification />} />
        {/* Signed in */}
        <Route path="/AddArticle" element={<AddArticle />} />
        {/* Admin */}
        <Route path="/AddJournal" element={<AddJournal />} />
        <Route path="/AddEditor" element={<AddEditor />} />
        
      </Routes>
    </Router>
  );
}

export default App;
