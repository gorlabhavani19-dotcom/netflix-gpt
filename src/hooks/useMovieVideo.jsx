import React from 'react'
import { useEffect } from "react";
import { options } from "../utils/Constant"
import { useDispatch} from "react-redux";
import { addTrailerVideo } from "../utils/movieSlice";
const useMovieVideo = (movieId) => {
   
const dispatch=useDispatch();
const getMovieVideo= async()=>{
const filterdata = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos`, options);
const result=await filterdata.json();
console.log(result);
const filterData=result.results.filter((video)=>video.type=="Trailer");
const trailer=filterData[0];
console.log(trailer);
dispatch(addTrailerVideo(trailer))

}
useEffect(()=>{
getMovieVideo();
},[])
}
export default useMovieVideo;