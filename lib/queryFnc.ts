"use client";
import { fetchCustom, getAllMovies, searchMovies, searchQuery } from "@/app/api/api";
import tmdbApi from "@/app/api/tmdbAxios";
import { useWishlsit } from "@/app/context/wishlistProvider";
import { useQuery } from "@tanstack/react-query";

interface moviesResTypes{
    query?:string|undefined,
    type?:string,
    page:number,
    filters?:{
        filterName:string,
        option:number[]
    },
    isNowPlaying?:boolean

}

const useMoviesRes = ({query,type,page,filters,isNowPlaying}:moviesResTypes)=>{
    const {data,isLoading}= useQuery({
        queryFn: async()=> await searchMovies(query,type,page,"en-US",filters,isNowPlaying),
        queryKey:[`movies-${filters?.option}-${page}`]
    })
    return {data,isLoading}
}
export default useMoviesRes;


interface searchQuery{
    query:string;
    page:number;
}
export const useSearchQuery = ({query,page}:searchQuery)=>{
    const {data,isLoading} = useQuery({
        queryFn: async()=>await searchQuery(query,page),
        queryKey:[`search-${query}-${page}`]
    })
    return {data,isLoading}
}
export const useGetWishlist = ()=>{
     const {wishlist}=useWishlsit();
     const {data, isLoading} = useQuery({
        queryFn:async()=> await getAllMovies(wishlist),
        queryKey:[`wishlist`,...(wishlist||[])],
        enabled:!!wishlist&&wishlist.length>0
     }) 
     return {data, isLoading}
}
