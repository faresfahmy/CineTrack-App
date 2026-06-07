"use client";
import React, { useMemo, useState } from 'react'
import PosterImage from './PosterImage'
import Heading from './default/Heading'
import RatingComponent from './Rating'
import { GiPerson } from 'react-icons/gi'
import { BiHeart, BiPlay } from 'react-icons/bi'
import { FaFilm, FaPlayCircle } from 'react-icons/fa'
import { GiCancel } from 'react-icons/gi'
import { useWishlsit } from '../context/wishlistProvider';
import SlidesDetails from './SlidesDetails';
import useMoviesRes from '@/lib/queryFnc';
import Empty from './default/Empty';
import MoviesSlide from './MoviesSlide';
import { v4 as ui4 } from "uuid";
import SkeletonCard from './default/skeletonCard';
import DialogVideo from './DialogVideo';
import ProductionCompanies from './ProductionCompanies';

export default function Details({ detailsRes }: { detailsRes: any }) {
    const { handleCheckWishlitItem, handleWislistUpdate } = useWishlsit()
    const isWishlistItem = handleCheckWishlitItem(detailsRes.id)
    const [open, setOpen] = useState(false);
    const genres = detailsRes?.genres?.map((genre: any) => genre.id) || []
    const { data: movies, isLoading } = useMoviesRes({
        query: '',
        type: detailsRes?.title ? "movie" : "tv",
        page: 1, filters: {
            filterName: "with_genres",
            option: genres || []
        }
    })
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    const filterSeasons = useMemo<any[]>(() => {
        return detailsRes?.seasons?.filter((_: any, i: number) => {
            return i != 0
        }) || []
    }, [detailsRes?.seasons])
    return (
        
        <div className={`w-full relative `}>
                <div className='w-full h-[400px] relative after:absolute after:inset-0  after:bg-[linear-gradient(327deg,rgba(0,0,0,0.4)_0%,rgba(12,25,97,0.7)_100%)] after:h-[400px] '>
                    <img src={detailsRes?.backdrop_path?`https://image.tmdb.org/t/p/original/${detailsRes?.backdrop_path}`:'/bg-nitflex.png'} alt={detailsRes?.title || detailsRes?.name} className='object-cover w-full h-full opacity-50' />
                </div>
            <PosterImage src={detailsRes?.poster_path} />
            <Heading
                title={`${detailsRes?.title || detailsRes?.name} ${(detailsRes?.original_name || detailsRes?.original_title) == (detailsRes?.name || detailsRes?.title) ? "" : `  (${detailsRes?.original_name || detailsRes?.original_title})`}`} className='text-4xl font-bold text-gray-300 text-2xl line-clamp-1 text-center relative bottom-[230px] z-400 ' />
            <div className='flex flex-col items-center '>
                <h1 className='text-white relative mt-5e bottom-[220px] z-400 flex justify-center text-rose-400 mt-7'>{detailsRes?.release_date || detailsRes?.first_air_date || detailsRes.air_date}</h1>
                <div className='relative bottom-[220px] z-400 flex justify-center mt-4 gap-4 items-center'>
                    <RatingComponent rate={detailsRes.vote_average / 2} className='' />
                    <div className='flex items-center gap-1 text-gray-300'>
                        <GiPerson />
                        {detailsRes.vote_count}
                    </div>
                </div>
            </div>
            <div className='flex gap-7 relative justify-center mt- bottom-[190px] '>
                {detailsRes?.videos?.results?.length ? (
                    <div className='flex flex-col gap-2 items-center'>
                        <BiPlay onClick={handleClickOpen} className='bg-rose-700 py-2 px-2 rounded-2xl text-5xl text-white' />
                        <h3 className='text-gray-300'>Watch the ad</h3>
                    </div>
                ) : null}

                {detailsRes?.id ?
                    !isWishlistItem ? (
                        <div className='flex flex-col gap-2 items-center'>
                            <BiHeart onClick={() => handleWislistUpdate(detailsRes?.id)} className='bg-rose-700 py-2 px-2 rounded-2xl text-5xl text-white' />
                            <h3 className='text-gray-300'>Add to Wishlist</h3>
                        </div>
                    ) : (
                        <div className='flex flex-col gap-2 items-center'>
                            <GiCancel onClick={() => handleWislistUpdate(detailsRes?.id)} className='bg-rose-700 py-2 px-2 rounded-2xl text-5xl text-white' />
                            <h3 className='text-gray-300'>Remove from  Wishlist</h3>
                        </div>
                    ) : null
                }

            </div>
            <div className='px-10 py-10 relative  bottom-[190px] z-400 '>
                {detailsRes?.overview ?
                    (<>
                        <Heading className='text-rose-400 text-2xl font-semibold mt-7' title='Overview' />
                        <p className='text-gray-400 px-2 mt-2'>{detailsRes?.overview}</p>

                    </>)
                    : null
                }

                <div className='flex gap-3 mt-5'>
                    {detailsRes?.genres?.map((genre: any) => (
                        <span key={ui4()} className=' bg-rose-700 text-[12px] rounded-2xl text-white px-[14px] py-[7px]'>{genre.name}</span>
                    ))
                    }
                </div>
                {detailsRes?.name ? (
                    <div className='flex items-center gap-5 mt-5 text-gray-300'>
                        <div className='flex items-center gap-1 bg-gray-700 rounded-2xl py-1 px-3'>
                            <FaFilm />
                            {detailsRes?.number_of_seasons}
                        </div>
                        <div className='flex items-center gap-1 bg-gray-700 rounded-2xl py-1 px-3'>
                            <FaPlayCircle />
                            {detailsRes?.number_of_episodes}
                        </div>

                        <h4 className='text-gray-400'>Status <span>{detailsRes?.status}</span></h4>
                    </div>
                ) : null
                }


                {detailsRes?.number_of_seasons > 1 ? (
                    <SlidesDetails isSeason details={detailsRes || []} detailsSeasons={filterSeasons || []} title='Seasons' />
                ) : null
                }
                {detailsRes.credits?.cast?.length ? (
                    <SlidesDetails details={detailsRes?.credits?.cast || []} title='Cast' />
                ) : null}
                {detailsRes.credits?.crew?.length ? (
                    <SlidesDetails details={detailsRes?.credits?.crew || []} title='Crew' />
                ) : null}
                {

                }
                <div className='relative bottom-[-40px]'>
                    {isLoading ? (
                        <div className="flex gap-5">
                            <SkeletonCard items={6} />
                        </div>) :
                        movies?.data ?
                            (<MoviesSlide results={movies?.data.results} title={detailsRes?.title ? "Similar Movies" : "Similar Series"} isMovies={detailsRes?.name ? false : true} />) :
                            (<Empty title={detailsRes?.title ? "Not Found Similar Movies" : "Not Found Similar Series"} />)

                    }
                </div>
                    <ProductionCompanies detailsProductionCompanies={detailsRes?.production_companies} title={"Production Companies"} />
            </div>
            <DialogVideo handleClose={handleClose} open={open} title={detailsRes.title || detailsRes.name} videos={detailsRes?.videos?.results} />
        </div>
    )
}
