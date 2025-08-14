import React,{useState,useEffect}from 'react';
import { useLocation } from 'react-router-dom';

let TopDetailPage=()=>{
let location =useLocation();
let {detail}=location.state||{};

        return<>
                    <div className='container-fluid bg-dark pt-5 p-5 '>
                        <div className='container-fluid w-100 shadow  rounded bg-light movieContainer mt-5 p-0'>
                             <div className='movieImg  rounded'>
                                <img src={`https://image.tmdb.org/t/p/w500/${detail.poster_path}`} alt="" style={{width:"100%",height:"100%"}} />
                            </div>
                            <div className='movieDetail p-4 rounded' >
                                                       
                                    <h4>{detail.title}</h4>
                                    <p className='text-warning'>★ {detail.vote_average}</p>   
                                    <p>Release Date : {detail.release_date}</p>
                                             
                                    <h4 className='text-danger'>Overview</h4>
                                       <p className='text-justify'>{
                                                detail.overview
                                            }</p>
                                   

                            </div>
                           
                        </div>

                       
                    </div>
        </>
}
export default TopDetailPage;