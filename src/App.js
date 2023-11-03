import logo from './logo.svg';
// import './App.css';
import About from './components/About'
import Search from './components/search/Search';
import React from 'react';
import Services from './components/Services';
import Tours from './components/Tours';
import Navbar from './components/Navbar';
import Home from './components/Home';
import { people } from './data';
import { BrowserRouter, Routes, Route,Link } from 'react-router-dom'

import ErrorExample from './01-useState/starter/01-error-example'

function App() {


  const handleonSearchChange = (searchdata) => {
    console.log(searchdata)
  }

  return (
    <React.Fragment>
       <Navbar/>
      {/* <About/>  
      <Services/>
      <Tours/> */} 
      {/* <ErrorExample/> */}
      {/* <Search onSearchChange={handleonSearchChange} /> */}
      <BrowserRouter>
      <header>
      <Link to="/">#VANLIFE</Link>
      <nav>
        
        <Link to="/about">About</Link>
        <Link to="/navbar">Navbar</Link>
          </nav>

      </header>
       
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path='/about' element={<About />} />
          <Route path='/navbar' element={<Navbar />} />


        </Routes>

      </BrowserRouter>



    </React.Fragment>
  );
}

export default App;
