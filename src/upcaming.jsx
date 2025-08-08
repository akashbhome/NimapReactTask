import React,{useState,useEffect} from 'react'
import { upcommingMovie } from './service/service';


let Upcoming=()=>{

    let [upcoming,setMovie]=useState([]);

    let upCommingDetail=async()=>{
        let result= await upcommingMovie();
        setMovie(result);
    }
    useEffect(()=>{
        upCommingDetail();
    },[]);
        return<>
                    <div className="container-fluid bg-dark">
                        <h1 className='text-light text-center'>Up-Comming Movies</h1>

                        <div className='container-fluid allMovie p-5 text-light'>
                            {
                                upcoming.map((up)=>(
                                    <div className='mx-3 mb-3 border rounded ' style={{width:"20%",height:"350px"}}>
                                        <img src={`https://image.tmdb.org/t/p/w500/${up.backdrop_path}`} alt="" className='w-100 border rounded' style={{height:"75%"}} />
                                        <h6 className='mt-1 mx-2'>{up.title}</h6>
                                        <p className='mt-2 mx-2'>Release Date : {up.release_date}</p>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
        </>
}

export default Upcoming;
