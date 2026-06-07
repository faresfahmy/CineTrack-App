import Image from 'next/image'
import React from 'react'
import WishlistButton from './wishlistButton'
import Link from 'next/link'

export default function CardMovie({ src, className, title, wishlist, isNew, type, id }: { src?: string, className?: string, title?: string, wishlist?: boolean, isNew?: string, type: string, id: number }) {
    const dateNow = new Date().toISOString().split('T')[0].toString().split('').slice(0, 7).join('')

    return (
        <div className={`${className || ''}`}>
            <div className='flex flex-col gap-1 relative w-[190px] justify-center items-center'>
                {wishlist ?
                    <WishlistButton id={id} /> :
                    null
                }
                <Link href={`/${type == "movie" ? "movies" : "tv-shows"}/${id}`}>
                    {isNew?.split('').slice(0, 7).join("") == dateNow ?
                        (<span className="absolute right-2 top-2 bg-red-600 px-1 py-0.5 text-gray-50 rounded-2xl text-sm font-semibold z-300">
                            New
                        </span>) : null}
                    <div className="card" id="card">

                        <div className="content">
                            <Image src={`https://image.tmdb.org/t/p/w500${src}`} fill alt='s1' className={`object-cover w-full h-full`} />
                        </div>
                    </div>
                    <h1 className="text-white text-lg font-bold mt-2 line-clamp-1 w-full"> {title || "Default Title"} </h1>
                </Link>
            </div>

        </div>

    )
}