"use client";
import React, { useState } from 'react'
import tmdbApi from '../api/tmdbAxios'
import Heading from './default/Heading';
import useMoviesRes, { useSearchQuery } from '@/lib/queryFnc';
import CardMovie from './CardMovie';
import SkeletonCard from './default/skeletonCard';
import { useQueryClient } from '@tanstack/react-query';
import PaginationCustom from './PaginationCust';
import Link from 'next/link';
import Empty from './default/Empty';
interface PropsTypes{
  genres?:any[];
  type?:string;
  title:string;
  isNowPlaying?:boolean;
  isSearch?:boolean;
  query?:string;
}
export default function Filters({ genres,type,title,isNowPlaying=false,isSearch=false,query='' }:PropsTypes) {
  const [page, setPage] = useState<number>(1)
  const queryClient = useQueryClient();
  const [genresSelected, setGenresSelected] = useState<number[]>([])
  const { data: movies, isLoading } =isSearch? useSearchQuery({query,page}):useMoviesRes({
    query:'',
    type:type,
    page:page, filters: {
      filterName: "with_genres",
      option: genresSelected
    },
    isNowPlaying:isNowPlaying
  })
  const dateNow = new Date().toISOString().split('T')[0].toString().split('').slice(0, 7).join('')
  let totalPages = movies?.data?.total_pages;
  function handleChangePage(pageNew:number){
    setPage(pageNew)
    queryClient.invalidateQueries({queryKey:[`movies-${genresSelected}-${page}`],exact:false})
  }
  return (
    <div>
      {!isSearch?
      <div className='flex gap-3 overflow-x-auto py-5 px-5 genres-list'>
        {genres?.map((genre) => (
          <button onClick={
            () => {
              if(genresSelected.includes(genre.id)) {
                setGenresSelected((prev) => prev.filter((item) => item != genre.id))
              }
              else{
                setGenresSelected((prev) => [...prev, genre.id])
              }
              queryClient.invalidateQueries({queryKey:[`movies-${genresSelected}-${page}`],exact:false})
            }
          } key={genre.id} className={`${genresSelected.includes(genre.id) ? 'bg-rose-700' : 'bg-transparent'}   py-1 px-3 duration-200 rounded-3xl text-white text-[11px]`}>{genre.name}</button>
        ))}
      </div>
      :null}
      <Heading title={title} className='text-2xl font-bold text-gray-200 mt-10 mb-7 ml-5' />
      <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5 items-center justify-items-stretch">
        {isLoading ?
          <SkeletonCard items={20}  />
          :movies?.data?
          movies?.data?.results?.map((movie: any,i:number) => (
            <CardMovie
            className='w-full flex justify-center  '
             key={movie.id}
            src={movie.poster_path}
            title={movie?.title||movie?.name}
            wishlist id={movie.id}
            isNew={type=="tv"?movie?.first_air_date:movie?.release_date} 
            type={type||movie.media_type}
            />
          ))
        :(
          <Empty title='Not Found' />
        )}
      </div>
      <div className='flex justify-center mt-10 mb-10'>
        < PaginationCustom page={page} onPageChange={handleChangePage} pagesCount={totalPages} />
      </div>
    </div>
  )
}
