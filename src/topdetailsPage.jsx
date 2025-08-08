import React,{useState,useEffect}from 'react';
import { useLocation } from 'react-router-dom';

let TopDetailPage=()=>{
let location =useLocation();
let {detail}=location.state||{};

        return<>
                    <div className='container-fluid bg-dark pt-5 p-5 ' style={{minHeight:"93vh"}}>
                        <div className='container w-100 border  rounded d-flex mt-5 p-0' style={{height:"69vh",backgroundColor:"black"}}>
                            <div className='w-50 border p-2 rounded' style={{height:"100%"}}>
                                    <div className=' mt-4 w-100 d-flex text-light' style={{minHeight:"200px"}}>
                                             <img src={`https://image.tmdb.org/t/p/w500/${detail.backdrop_path}`} alt="" className='w-25 mx-3' style={{height:"200px"}} />

                                                 <div>
                                                    <h4>{detail.title}</h4>
                                                    <p>Rating : {detail.vote_average}</p>
                                                    <br />
                                                    <br />
                                                    <br />
                                                    
                                                    <p>Release Date : {detail.release_date}</p>
                                                 </div>
                                     </div>
                                     <div className='w-100 text-justify p-4 text-light'>
                                            <h4>Overview</h4>
                                            {
                                                detail.overview
                                            }
                                     </div>

                            </div>
                            <div className='w-50 border rounded'style={{height:"100%"}}>
                                <img src={`https://image.tmdb.org/t/p/w500/${detail.poster_path}`} alt="" style={{width:"100%",height:"100%"}} />
                            </div>
                        </div>

                       
                    </div>
        </>
}
export default TopDetailPage;