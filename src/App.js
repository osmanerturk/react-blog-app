import React from 'react'
import { Routes, Route} from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Posts from "./pages/Posts";
import Detail from './pages/Detail';
import Dashboard from "./pages/Dashboard"

function App() {
  return (
    <div style={{display: 'grid', gridTemplateRows: 'max-content auto max-content', minHeight: '100vh'}}>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/posts/:category/:category_id/" element={<Posts />} />
        <Route path="/posts/:category/:category_id/:title/:post_id" element={<Detail />} />
      </Routes>
      <div>
        <Footer/>
      </div>
      
    </div>
  );
}

export default App;
