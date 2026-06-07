import React from 'react'
import Heading from './default/Heading'
import Link from 'next/link'
import PosterImage from './PosterImage'
import { v4 as ui4 } from "uuid";

export default function SlidesDetails({ isSeason=false, className, title, details,detailsSeasons }: { isSeason?: boolean, className?: string, title: string, details: any,detailsSeasons?:any[]  }) {
    return (
        <div className=' mt-10'>
            {isSeason ? (
                <>
                    <Heading className='text-rose-400 text-2xl font-semibold mt-7' title={title} />
                    <div className='flex gap-5 mt-3 overflow-x-auto py-5 px-2 scroll'>
                        {detailsSeasons?.map((se: any,i:number) => (
                            <Link key={ui4()} href={details?.name ? `/tv-shows/${details?.id}/${se?.season_number}` : ''}>
                                <div className='flex flex-col gap-2'>
                                    <PosterImage src={se?.poster_path} className='w-[180px] h-[360px] relative z-400 rounded-2xl' width='w-full h-full' />
                                    <h4 className=' font-semibold text-white text-2xl'>{se?.name}</h4>
                                </div>
                            </Link>

                        ))}
                    </div>
                </>
            ) : (
                <div className='relative bg-[#02264a] p-3 rounded-2xl'>
                    <Heading className='text-rose-400 text-2xl font-semibold ' title={title} />
                    <div className='flex gap-5 mt-3 overflow-x-auto py-5 px-2 scroll'>
                        {details?.map((person: any,i:number) => (
                            
                                <div key={ui4()} className='flex flex-col gap-2'>
                                    <PosterImage src={person?.profile_path} className='relative  z-400 rounded-full overflow-hidden h-[100px] w-[100px] border border-rose-500 border-2' width='w-full' hight='h-full'/>
                                    <h4 className=' font-semibold text-white text-sm w-full text-center'>{person?.character||person?.job}</h4>
                                    <h5 className='font-semibold text-gray-400 text-[10px] text-center'>{person?.name}</h5>
                                </div>
                        ))}
                    </div>
                </div>
            )
            }

        </div >
    )
}
