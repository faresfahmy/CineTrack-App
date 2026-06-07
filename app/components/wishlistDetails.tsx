"use client";
import { useGetWishlist } from '@/lib/queryFnc';
import SkeletonCard from './default/skeletonCard';
import CardMovie from './CardMovie';
import Empty from './default/Empty';
import Heading from './default/Heading';
export default function wishlistDetails() {
    const { data: movies, isLoading } = useGetWishlist()
    return (
        <div className=''>
            <Heading title='My Wishlist' className='text-2xl font-bold text-gray-200 mt-10 mb-7 ml-5'  />
      <div className="grid sm:justify-center grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5 justify-items-stretch">
                {isLoading ?
                    <SkeletonCard items={20} />
                    : movies ?
                        movies?.map((movie: any, i: number) => (
                            <CardMovie
                                className='w-full flex justify-center  '
                                key={movie?.data?.id}
                                src={movie?.data?.poster_path}
                                title={movie?.data?.title || movie?.data?.name}
                                wishlist 
                                id={movie?.data?.id}
                                isNew={movie?.type == "tv" ? movie?.data?.first_air_date : movie?.data?.release_date
                                }
                                type={movie?.type}
                            />
                        ))
                        : (
                            <Empty title='Not Found' />
                        )}
            </div>
        </div>
    )
}
