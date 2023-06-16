import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './components/Landing';
import Skills from './components/Skills';
import Contact from './components/Contact';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Landing />
        <Skills />
        <Contact />
        <Routes>
        <Route path='/' exact element={<div style={{ background: 'black' }}> </div>} />

        </Routes>
      </Router> 
    </>
  );
}

export default App;
