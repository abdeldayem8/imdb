import Image from "next/image";

export default async function Moviepage({params}) {
    const movieid = params.id;
    const res =await fetch(`https://api.themoviedb.org/3/movie/${movieid}?api_key=3d9045fd6c2bf3e0af3ebbedc3a99ec2&language=en-US&page=1`)
    const movie = await res.json();
    
  return <>
   <div className="w-full">
    <div className="flex flex-col md:flex-row items-center content-center max-w-6xl mx-auto md:space-x-6 md:pt-8 p-3">
    <Image src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path || movie.poster_path}`} alt="image" width={500} height={300} className="rounded-lg" />
    <div  className="p-2">
    <h2 className='text-lg font-bold truncate'>{movie.title || movie.name }</h2>
    <p className="line-clamp-3 text-md my-3"><strong>Overview:</strong>{movie.overview}</p>
    <p className="my-3"><strong>Date Released:</strong>{movie.release_date || movie.first_air_date}</p>
    <p><strong>Rating:</strong>{movie.vote_count}</p>
    </div>
    </div>
   </div>
  </>
}
