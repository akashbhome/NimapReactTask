import React,{useState,useEffect} from 'react';
import{getAllMovies} from './service/service.js'
import { useNavigate } from 'react-router-dom';
let Popular=()=>{

        let navigate=useNavigate();

    let [allMovie,setMovie]=useState([]);

    let getMovies=async()=>{
       try{
         let result= await getAllMovies();
        setMovie(result);
       }
       catch(err){
        console.log(err);
       }
    }
    useEffect(()=>{
            getMovies();
    },[]);

    let detailsPage=(data)=>{
           navigate("/movieDetail",{state:{detail:data}})
    }
 
        return<>
        <div className='container-fluid w-100 p-5 allMovie bg-dark'>
            
              <div className="container-fluid allMovie bg-dark ">
                {
                  allMovie.map((item)=>(
                    <div className=' shoadow mx-3 bg-dark border mb-5 p-0' onClick={(e)=>{detailsPage(item)}} style={{width:"20%",height:"375px"}}>
                        <div className='container-fluid w-100  mt-2' style={{height:"250px"}}>
                            <img src={`https://image.tmdb.org/t/p/w500/${item.backdrop_path}`} alt="" style={{width:"100%",height:"100%"}} />
                        </div>
                      <center ><h5 className='mt-3 text-light'> {item.title}</h5></center> 
                      <p className='text-light mx-5'>Rating : {item.vote_average}</p>
                    </div>
                ))
            }
              </div>
            
        </div>
        
        </>
}
export default Popular;