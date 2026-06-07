import React from 'react'
import PosterImage from './PosterImage'
import MotionItem from './default/MotionItem';

interface PropTypes {
    title: string;
    className?: string;
    src: string;
    isMovies?:boolean;
}
export default function PopularList({ title, className, src,isMovies=false }:PropTypes) {
    return (

        <MotionItem initial={{opacity:0, y:-20} } whileInView={{opacity:60, y:0, duration:{transition:200}}} className={isMovies?`
        relative
        z-[-1]
        after:absolute
        after:inset-0
        after:bg-[linear-gradient(327deg,rgba(0,0,0,0.4)_0%,rgba(12,25,97,0.7)_100%)]
        overflow-hidden
        rounded-2xl
        border-2 
        border-rose-500
        before:absolute
        before:content-['Movies']
        before:top-[%50]
        before:left-[%50]
        before:flex
        before:justify-center
        before:items-center
        before:bg-black/60
        before:w-full
        cursor-pointer
        before:h-full
        before:text-rose-400
        before:text-3xl
        before:z-400
        `:`
        relative
        cursor-pointer
        z-[-1]
        after:absolute
        after:inset-0
        after:bg-[linear-gradient(327deg,rgba(0,0,0,0.4)_0%,rgba(12,25,97,0.7)_100%)]
        overflow-hidden
        rounded-2xl
        border-2 
        border-rose-500
        before:absolute
        before:content-['TV']
        before:top-[%50]
        before:left-[%50]
        before:flex
        before:justify-center
        before:items-center
        before:bg-black/60
        before:w-full
        before:h-full
        before:text-rose-400
        before:text-3xl
        before:z-200 
        `}>
                    {/* // before:opacity-0
        // before:duration-200
        // hover:before:opacity-60 */}
            <PosterImage isBig src={src||'/rZfmzpixLKLR3Hg2u0WgC7XLFl8.jpg'} className='h-full w-full' width='w-full' />
        </MotionItem>
    )
}
