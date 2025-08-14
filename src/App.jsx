import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css';
import MovieDetail from './component/movieDetailPage';
import Upcoming from './component/upcaming';
import TopRating from './component/topRating';
import Nav from './component/nav';
import TopDetailPage from './component/topdetailsPage';
import Popular from './component/popular';
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
