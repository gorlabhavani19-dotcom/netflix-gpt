//fetching the triler video and updating the store
import { useSelector } from "react-redux";
import useMovieVideo from "../hooks/useMovieVideo.jsx";
export const VideoBack=({movieId})=>{
const trailerVideo=useSelector((store)=>store.movie?.trailerVideo)
useMovieVideo(movieId);
return(
    <div className="w-screen h-screen"> 
    <iframe className="w-screen h-screen" src={"https://www.youtube.com/embed/"+trailerVideo?.key+"?autoplay=1&mute=1"}
    title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    </div>
)
}
