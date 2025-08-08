import React ,{useState,useEffect}from "react";
import { topRatingMovie } from "./service/service";
import { useNavigate } from "react-router-dom";

let TopRating=()=>{
    let navigate=useNavigate();
    let [topMovie,setMovie]=useState([]);

            let TopRatingDetail=async()=>{

            let result=await topRatingMovie();
            setMovie(result);

            }
            useEffect(()=>{
                TopRatingDetail();
            },[]);

            let detailsPage=(data)=>{

           navigate("/topDetail",{state:{detail:data}})
    }

        return<>
           <div className="container-fluid bg-dark" style={{minHeight:"100vh"}}>
         <h1>Top Rating Movies</h1>

         <div className="container-fluid mt-5 text-light d-flex allMovie w-100">
            {
                topMovie.map((top)=>(
                    <div className="border mx-3 mb-3" style={{width:"20%",height:"350px"}} onClick={(e)=>{detailsPage(top)}}>
                        <img src={`https://image.tmdb.org/t/p/w500/${top.backdrop_path}`} alt="" className="w-100" style={{height:"75%"}}/>
                          <h6 className="mt-2 mx-2">  {top.title}</h6>
                          <p className="mt-2 mx-2">Rating : {top.vote_average}</p>
                    </div>
                ))
            }
         </div>
           </div>
        </>
}
export default TopRating;