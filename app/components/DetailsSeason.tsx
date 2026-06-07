"use client";
import React, { useState } from 'react'
import PosterImage from './PosterImage'
import Heading from './default/Heading'
import RatingComponent from './Rating'
import { GiCancel, GiPerson } from 'react-icons/gi'
import { useWishlsit } from '../context/wishlistProvider';
import DialogVideo from './DialogVideo';
import { BiHeart, BiPlay } from 'react-icons/bi';
import { FaFilm, FaPlayCircle } from 'react-icons/fa';
import SlidesDetails from './SlidesDetails';
import ProductionCompanies from './ProductionCompanies';

export default function DetailsSeason({ results, id }: { results: any, id: number }) {
    const { handleCheckWishlitItem, handleWislistUpdate } = useWishlsit()
    const isWishlistItem = handleCheckWishlitItem(id)
    const [open, setOpen] = useState(false);
    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    return (
        <div>
            <div className='w-full relative pt-6'>
                <PosterImage src={results?.poster_path} className=' flex justify-center items-center' />
                <Heading
                    title={results?.name} className='text-4xl font-bold text-gray-300 text-2xl line-clamp-1 text-center   z-400 mt-3' />
                <div className='flex flex-col items-center'>
                    <h1 className='text-white  mt-5e  z-400 flex justify-center text-rose-400 mt-7'>{results?.air_date || "..."}</h1>
                    <div className='z-400 flex justify-center mt-4 gap-4 items-center'>
                        <RatingComponent rate={results.vote_average / 2} className='' />
                    </div>
                </div>
                <div className='mt-5 flex gap-5 justify-center'>
                    {results?.videos?.results?.length ? (
                        <div className='flex flex-col gap-2 items-center'>
                            <BiPlay onClick={handleClickOpen} className='bg-rose-700 py-2 px-2 rounded-2xl text-5xl text-white' />
                            <h3 className='text-gray-300'>Watch the ad</h3>
                        </div>
                    ) : null}

                    {id ?
                        !isWishlistItem ? (
                            <div className='flex flex-col gap-2 items-center'>
                                <BiHeart onClick={() => handleWislistUpdate(id)} className='bg-rose-700 py-2 px-2 rounded-2xl text-5xl text-white' />
                                <h3 className='text-gray-300'>Add to Wishlist</h3>
                            </div>
                        ) : (
                            <div className='flex flex-col gap-2 items-center'>
                                <GiCancel onClick={() => handleWislistUpdate(id)} className='bg-rose-700 py-2 px-2 rounded-2xl text-5xl text-white' />
                                <h3 className='text-gray-300'>Remove from  Wishlist</h3>
                            </div>
                        ) : null
                    }
                </div>
                <div className='px-10 pt-10 text-left'>
                    {results?.overview ?
                        (<>
                            <Heading className='text-rose-400 text-2xl font-semibold mt-7' title='Overview' />
                            <p className='text-gray-400 px-2 mt-2'>{results?.overview}</p>

                        </>)
                        : null
                    }
                </div>
                {results?.name ? (
                    <div className='flex items-center pl-10  gap-5 mt-5 text-gray-300'>
                        <div className='flex justify-center items-center gap-1 bg-gray-700 rounded-2xl px-2 py-1'>
                            <FaFilm />
                            {results?.season_number}
                        </div>
                        <div className='flex items-center gap-1 bg-gray-700 rounded-2xl px-2 py-1'>
                            <FaPlayCircle />
                            {results?.episodes?.length}
                        </div>
                    </div>
                ) : null
                }
                {results.credits?.cast?.length ? (
                    <div className='w-full px-10'>
                    <SlidesDetails details={results?.credits?.cast || []} title='Cast' />
                    </div>
                ) : null}
                {results.credits?.crew?.length ? (
                    <div className='w-full px-10'>
                    <SlidesDetails details={results?.credits?.crew || []} title='Crew' />
                     </div>
                ) : null}
                                    <ProductionCompanies detailsProductionCompanies={results?.networks} title={"Networks"} className='px-10' />
                
            </div>
            <DialogVideo handleClose={handleClose} open={open} title={results.title} videos={results?.videos?.results} />

        </div>
    )
}
