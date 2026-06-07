import React from 'react'
import SwiperCards from './SwiperCards'
import Image from 'next/image'
import CardInfo from './CardInfo'
import MotionItem from './default/MotionItem'

export default function Hero({results}:{results:any[]}) {
  return (
    <div className='h-[600px]'>
      <SwiperCards
      slidesPerView={1}
      className='w-full h-full'
      isHero
      items={[
        {
            card:(
                <>
                <MotionItem initial={{opacity:0}} whileInView={{ opacity:1,transition:{duration:0.9} }}>
                <Image src={`https://image.tmdb.org/t/p/original${results[0].backdrop_path}`} fill alt='s1' className='object-cover'/>
                </MotionItem>
                <CardInfo
                title={`${results[0].title}`}
                desc={results[0].overview}
                id={results[0].id}
                />
                </>
        )},
        {
            card:(
                <>
                <MotionItem initial={{opacity:0}} whileInView={{ opacity:1,transition:{duration:0.9} }}>
                <Image src={`https://image.tmdb.org/t/p/original${results[1].backdrop_path}`} fill  alt='s1' className='object-cover'/>
                </MotionItem>
                <CardInfo
                title={`${results[1].title}`}
                desc={results[1].overview}
                id={results[1].id}
                />
                </>
        )},
        {
            card:(
                <>
                <MotionItem initial={{opacity:0}} whileInView={{ opacity:1,transition:{duration:0.9} }}>
                <Image src={`https://image.tmdb.org/t/p/original${results[2].backdrop_path}`}  alt='s1' fill className='object-cover'/>
                </MotionItem>
                <CardInfo
                title={`${results[2].title}`}
                desc={results[2].overview}
                id={results[2].id}
                />
                </>
        )},
        {
            card:(
                <>
                <MotionItem initial={{opacity:0}} whileInView={{ opacity:1,transition:{duration:0.9} }}>
                <Image src={`https://image.tmdb.org/t/p/original${results[3].backdrop_path}`}  alt='s1' fill className='object-cover'/>
                </MotionItem>
                <CardInfo
                title={`${results[3].title}`}
                desc={results[3].overview}
                id={results[3].id}
                />
                </>
        )},
        {
            card:(
                <>
                <MotionItem initial={{opacity:0}} whileInView={{ opacity:1,transition:{duration:0.9} }}>
                <Image src={`https://image.tmdb.org/t/p/original${results[4].backdrop_path}`} fill  alt='s1' className='object-cover'/>
                </MotionItem>
                <CardInfo
                title={`${results[4].title}`}
                desc={results[4].overview}
                id={results[4].id}
                />
                </>
        )},
        {
            card:(
                <>
                <MotionItem initial={{opacity:0}} whileInView={{ opacity:1,transition:{duration:0.9} }}>
                <Image src={`https://image.tmdb.org/t/p/original${results[5].backdrop_path}`} fill  alt='s1' className='object-cover'/>
                </MotionItem>
                <CardInfo
                title={`${results[5].title}`}
                desc={results[5].overview}
                id={results[5].id}
                />
                </>
        )},
        {
            card:(
                <>
                <MotionItem initial={{opacity:0}} whileInView={{ opacity:1,transition:{duration:0.9} }}>
                <Image src={`https://image.tmdb.org/t/p/original${results[6].backdrop_path}`}  alt='s1' fill className='object-cover'/>
                </MotionItem>
                <CardInfo
                title={`${results[6].title}`}
                desc={results[6].overview}
                id={results[6].id}
                />
                </>
        )},
      ]}
      />
    </div>
  )
}
