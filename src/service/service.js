import axios from "axios";


let Api_key="c45a857c193f6302f2b5061c3b85e743";

export let getAllMovies=async()=>{

    let repote= await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${Api_key}&language=en-US&page=1`);
        return repote.data.results;
}


   export let moviesDetail=async(movie_id)=>{

    let repote= await axios.get(`https://api.themoviedb.org/3/movie/${movie_id}?api_key=${Api_key}&language=en-US`);
        return repote.data;
}


export let castDetail=async(movie_id)=>{

   let report=await axios.get(`https://api.themoviedb.org/3/movie/${movie_id}/credits?api_key=${Api_key}&language=en-US`);
   return report.data.cast;
}



export let upcommingMovie=async(movie_id)=>{

   let report=await axios.get(`https://api.themoviedb.org/3/movie/upcoming?api_key=${Api_key}&language=en-US&page=1`);
   return report.data.results;
}


export let topRatingMovie=async(movie_id)=>{

   let report=await axios.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=${Api_key}&language=en-US&page=1`);
   return report.data.results;
}