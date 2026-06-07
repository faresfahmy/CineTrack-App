import React from 'react'
import SwiperCards from './SwiperCards'
import CardMovie from './CardMovie'
import Heading from './default/Heading'
import MotionItem from './default/MotionItem'
import { v4 as ui4 } from "uuid";

export default function MoviesSlide({ results, title, isMovies=true }: { results?: any[], title?: string, isMovies?:boolean}) {
    return (
    <div>
      <Heading title={`${title || " Movies"}`} className="text-3xl font-bold text-gray-200 mt-10 mb-4 ml-5" />
      <SwiperCards
        slidesPerView={6}
        className='w-full h-full'
        items={results?.map((card) => {
          return {
            card: (
              <MotionItem key={ui4()} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0, transition: { duration: 1 } }} className='flex justify-center' >
                <CardMovie
                  title={card.title||card.name}
                  src={card.poster_path}
                  wishlist
                  isNew={card?.release_date}
                  type={isMovies?"movie":'tv'}
                  id={card.id}
                />
              </MotionItem>
            )
          }
        })
        }
      />
    </div>
  )
}
