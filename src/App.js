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
import Vans from './components/Vans';
import VanDetail from './components/VanDetail';
import Layout from './components/Layout';
import Dashboard from './pages/host/Dashboard';
import Income from './pages/host/Income';
// import {NotesList} from './components/NotesList'
import ErrorExample from './01-useState/starter/01-error-example'
import NotesList from './components/NotesList';
import Reviews from './pages/host/Reviews';
import HostLayout from './pages/host/HostLayout';
import HostVans from './pages/host/HostVans';
import HostVanDetail from './pages/host/HostVanDetail';
import HostVanDetailLayout from './pages/host/HostVanDetailLayout';
import HostVanPhotos from './pages/host/HostVanPhotos';
import HostVanPricing from './pages/host/HostVanPricing';
import HostVanInfo from './pages/host/HostVanInfo';
import NotFound from './pages/host/NotFound';

function App() {


  const handleonSearchChange = (searchdata) => {
    console.log(searchdata)
  }

  return (
    <React.Fragment>
       {/* <Navbar/> */}
       {/* <NotesList/> */}
      {/* <About/>  
      <Services/>
      <Tours/> */} 
      {/* <ErrorExample/> */}
      {/* <Search onSearchChange={handleonSearchChange} /> */}
      {/* <Vans/> */}
      <BrowserRouter>
      {/* <header>
      <Link to="/">#VANLIFE</Link>
      <nav>
        
        <Link to="/about">About</Link>
        <Link to="/navbar">Navbar</Link>
        <Link to="/van">Van</Link>
        </nav>

      </header> */}
       
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route path="*" element={<NotFound/>}/>
          <Route index  element={<Home />}></Route>
          <Route path='about' element={<About />} />
          <Route path='vans' element={<Vans />} />
          <Route path="vans/:id" element={<VanDetail/>}/>
          <Route path='host' element={<HostLayout/>}>
            <Route index element={<Dashboard/>}/>
            <Route path='income' element={<Income/>}/>
            <Route path='reviews' element={<Reviews/>}/>
            <Route path='vans' element={<HostVans/>}/>
            <Route path='vans/:id' element={<HostVanDetail/>}>
              <Route index element={<HostVanInfo/>}/>
              <Route  path='pricing' element={<HostVanPricing/>}/>
              <Route path='photos' element={<HostVanPhotos/>}/>
            </Route>
            <Route path="*" element={<NotFound/>}/>
          </Route>
          </Route>
        </Routes>

      </BrowserRouter>



    </React.Fragment>
  );
}

export default App;
