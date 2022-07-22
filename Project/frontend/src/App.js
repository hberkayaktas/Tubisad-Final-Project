import './App.css';
import { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from './Pages/MainPage/MainPage';

import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import BackToTop from './Components/BackToTop/BackToTop';
import AboutMePage from './Pages/AboutMePage/AboutMePage';
import WOW from 'wowjs';
import TodoPage from './Pages/TodoPage/TodoPage';
import ProfilePage from './Pages/ProfilePage/ProfilePage';
function App() {

  useEffect(() => {
    new WOW.WOW({
      live: false
    }).init();
  }, [])
  return (
    <BrowserRouter>
      <div data-bs-spy="scroll" data-bs-target="#navbar-example">
        <Navbar />

        <div data-bs-spy="scroll" data-bs-target="#navbar-example"
          data-bs-smooth-scroll="true" className="scrollspy-example" tabIndex="0">


          <Routes>
            <Route path='/' exact element={<MainPage />} />
            <Route path='/todo' element={<TodoPage />} />
            <Route path='/aboutme' element={<AboutMePage />} />
            <Route path='/profile' element={<ProfilePage/>} />
          </Routes>
          
          <Footer/>
          <BackToTop/>
      </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
