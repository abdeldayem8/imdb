import Results from "@/components/Results/results";


const API_KEY = process.env.API_KEY;

export default async function Home({searchParams}) {

  const genre= searchParams.genre || 'fetchTrending';
 
  const res = await fetch(`https://api.themoviedb.org/3${genre === 'fetchTopRated' ? `/movie/top_rated` : `/trending/all/week`}?api_key=3d9045fd6c2bf3e0af3ebbedc3a99ec2&language=en-US&page=1`,
  {next:{revalidate:10000}})
  
  const data = await res.json();

  if(!res.ok){
    throw new Error('Failed To Fetch Data');
  }
  const results = data.results;

  return <>
  <div>
    <Results results={results} />
  </div>
  </>
}

