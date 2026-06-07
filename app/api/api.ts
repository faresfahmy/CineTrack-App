import { APIURL } from "@/app/constants/constants";

const fetchFn = (url: string, cache?: number) => fetch(url,
  {
    next: { revalidate: cache || 3600 },
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_TOKEN_AUTH!}`
    }
  }).then((res) => res.json());
export default fetchFn;
export const searchMovies = async function (
  query?: string,
  type = 'movie',
  page = 1,
  language = 'en-US',
  filters?: { filterName: string; option: number[] },
  isNowPlaying?:boolean,
  cache: number = 0
) {
//&primary_release_date.gte=2026-05-01&primary_release_date.lte=2026-06-06
let date = new Date()
  const data = await fetchFn(
    `${APIURL}${isNowPlaying&&(type=="tv")?'':'/discover'}/${type}${isNowPlaying&&(type=="movie")?'':isNowPlaying?'/airing_today':''}?page=${page}${isNowPlaying&&(type=="movie")?`&primary_release_date.gte=${date.getFullYear()}/${date.getMonth()>2?date.getMonth()-1:date.getMonth()+1}/1&primary_release_date.lte=${date.toISOString().split("T")[0]}`:''}${filters?.option.length ? `&${filters?.filterName}=${filters?.option.map((op, i) => `${op}${i + 1 == filters?.option.length ? '' : ','}`).join('')}` : ''}&language=${language}`,
    cache
  );
  console.log(filters)
  return { data };
};
export const fetchCustom = async (url: string) => {
  try {
    const data = await fetchFn(`${APIURL}${url}?language=en-US&append_to_response=credits,videos`)
    return { data }
  } catch (erorr) {
    return { data: {} }
  }
}
export const searchQuery = async(query:string,page=1)=>{
  try{
    const data = await fetchFn(`${APIURL}/search/multi?query=${query}&page=${page}&language=en-US`)
    return {data}
  }catch (erorr) {
    return { data: {} }
  }

}
const getDetails = async(id:number)=>{
  try{
     const res = await fetch(`${APIURL}/movie/${id}?language=en-US`,
    {
      next:{revalidate:3600},
      headers:{
        Accept:"application/json",
        Authorization:`Bearer ${process.env.NEXT_PUBLIC_TOKEN_AUTH!}`
      }
    }
  )
  if(res.ok){
    const response = await res.json()
    return {data:response,type:"movie"}
  }
  const res2 = await fetch(`${APIURL}/tv/${id}?language=en-US`,
    {
      next:{revalidate:3600},
      headers:{
        Accept:"application/json",
          Authorization:`Bearer ${process.env.NEXT_PUBLIC_TOKEN_AUTH!}`
      }
    }
  )
  if(res2.ok){
      const response = await res2.json()
  return {data:response,type:"tv"}
  }
  return null
  }catch(error){
    console.error(` ُError in Get Item ${id}:`, error)
    return null
  }
 
}
export const getAllMovies = async(ids:number[])=>{
  const items = ids.map((id)=>getDetails(id))
  const results = await Promise.all(items)
  return results.filter((item)=>item!=null)
}
// export const getGame = async function (id: string) {
//   try {
//     const data = await fetchFn(`${APIURL}games/${id}?key=${KEY}`); //details
//     const screenshots = await fetchFn(`${APIURL}games/${id}/screenshots?&key=${KEY}`); //screenshots
//     const similar = await fetchFn(`${APIURL}games/${id}/game-series?key=${KEY}`); //simimlar
//     return { data, screenshots, similar };
//   } catch (err) {
//     throw err;
//   }
// };
// export const getGameFromgenres = async function (genre = "51") {
//   const data = await fetchFn(`${APIURL}games?genres=${genre}&page_size=15&key=${KEY}`);
//   return data;
// };
// export const gamebyplatforms = async function (id: string, page = 1, page_size = 20) {
//   const data = await fetchFn(`${APIURL}games?platforms=${id}&page_size=${page_size || 40}&page=${page}&key=${KEY}`);
//   return data;
// };
// export const getGamesByIds = async function (ids: string[]) {
//   const data = await Promise.all(ids.map((id) => getGame(id)));
//   console.log(data)
//   return data;
// };
