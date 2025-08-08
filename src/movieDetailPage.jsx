import React,{useState,useEffect}from 'react';
import { useLocation } from 'react-router-dom';
import {castDetail} from './service/service.js'
let MovieDetail=()=>{
let location =useLocation();
let {detail}=location.state||{};


let [cast,setDetail]=useState([]);

let  getDetail=async()=>{
    
    let result=await castDetail(detail.genre_ids);

        setDetail(result);
}

useEffect(()=>{
    getDetail();
},[]);


        return<>
                    <div className='container-fluid bg-dark pt-5 p-5 ' style={{minHeight:"150vh"}}>
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

                        <h1 className='mt-5 mx-5 text-light'>cast</h1>
                        <div className='container-fluid d-flex w-100 castDetail p-3'>
                        
                        {

                            cast.map((cdetail)=>(
                                <div className='cast text-light'>
                                        <img src={`https://image.tmdb.org/t/p/w500/${cdetail.profile_path}`} alt="" style={{width:"100%",height:"70%"}} />
                                        {cdetail.name}<br/>
                                        Character : {cdetail.character}
                                </div>
                            ))
                        }
                        </div>
                    </div>
        </>
}
export default MovieDetail;