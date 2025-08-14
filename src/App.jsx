import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css';
import MovieDetail from './movieDetailPage';
import Upcoming from './upcaming';
import TopRating from './topRating';
import Nav from './nav';
import TopDetailPage from './topdetailsPage';
import Popular from './popular';
import SearchMovie from './component/searchPage';
import { BrowserRouter,Routes,Route } from 'react-router-dom'
function App() {


        return<>
          <BrowserRouter>
               <Nav/>
            <Routes>
              <Route path="/" element={<Popular/>}/>
              <Route path="/toprating" element={<TopRating/>}/>
              <Route path="upcoming" element={<Upcoming/>}/>

              <Route path="/movieDetail" element={<MovieDetail/>}/>
              <Route path="/topDetail" element={<TopDetailPage/>}/>

              <Route path="/search" element={<SearchMovie/>}/>
            </Routes>
          
          </BrowserRouter>


        </>
}

export default App
