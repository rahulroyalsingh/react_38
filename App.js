import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './component/Home'
import About from './component/About'
import NavBar from './component/Navbar'
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
