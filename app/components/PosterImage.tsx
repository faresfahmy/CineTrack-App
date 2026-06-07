import React from 'react'
import Image from 'next/image'

interface Props {
  src: string
  className?: string
  width?: string
  hight?: string
  isBig?: boolean
}

export default function PosterImage({ src, className, width, hight, isBig = false }: Props) {
  return (
    <>
      {
        !isBig ? (
          <div className={className || ' relative bottom-[250px]  z-400  flex justify-center items-center w-full '} >
            <img src={src ? `https://image.tmdb.org/t/p/w500${src}` : '/unknown_person.jpg'} alt="Poster" className={`object-cover ${width || 'w-[250px]'} ${hight || 'h-[400px]'}  rounded-2xl`} />
          </div >
        ) : (
          <div className={className || ' relative bottom-[250px]  z-400  flex justify-center items-center w-full '} >
            <img src={src ? `https://image.tmdb.org/t/p/original${src}` : '/unknown_person.jpg'} alt="Poster" className={`object-cover ${width || 'w-[250px]'} ${hight || 'h-[400px]'}  rounded-2xl`} />
          </div >
        )
      }
    </>

  )
}
