import React from 'react'
import Heading from '../components/default/Heading'
import PosterImage from '../components/PosterImage'
import PopularList from '../components/PopularList'
import Link from 'next/link'

export default function page() {
    return (
        <div className=''>
            <Heading title={'Now Playing'} className='text-2xl font-bold text-gray-200 mt-10 mb-7 ml-5' />
            <div className='flex flex-wrap justify-center p-2 gap-5 w-full'>
                <Link href={'/now-playing/movies-now-playing'} className='lg:w-[48%] w-full'>
                <PopularList isMovies src='/1yktYsxkmUtUFTUnCAUaqG6FEiz.jpg' title='Movies' />
                </Link>
                <Link href={'/now-playing/tv-now-playing'}  className='lg:w-[48%] w-full'>  
                <PopularList src='/bq28ajZaoMyzEIm6REelqyqtEDZ.jpg' title='TV' />
                </Link>
            </div>
        </div>
    )
}
