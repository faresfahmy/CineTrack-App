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
        <Image src={`https://image.tmdb.org/t/p/original/8ZTVqvhhQHmbAoRC6u6Xbpldv0g.jpg`} fill alt='s1' className='object-cover'/>
        </MotionItem>
        <CardInfo
        title={`Inception`}
        desc={`A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O., but his tragic past may doom the project.`}
        id={27205}
        />
        </>
  )},
  {
    card:(
        <>
        <MotionItem initial={{opacity:0}} whileInView={{ opacity:1,transition:{duration:0.9} }}>
        <Image src={`https://image.tmdb.org/t/p/original/p2fX6wUnj72Z9w3647Yw67B3vRk.jpg`} fill  alt='s1' className='object-cover'/>
        </MotionItem>
        <CardInfo
        title={`Interstellar`}
        desc={`The adventures of a group of explorers who make use of a newly discovered wormhole to surpass the limitations on human space travel and conquer the vast distances involved in an interstellar voyage.`}
        id={157336}
        />
        </>
  )},
  {
    card:(
        <>
        <MotionItem initial={{opacity:0}} whileInView={{ opacity:1,transition:{duration:0.9} }}>
        <Image src={`https://image.tmdb.org/t/p/original/hZ9536Zp07fO95fB6a166Pz8E.jpg`}  alt='s1' fill className='object-cover'/>
        </MotionItem>
        <CardInfo
        title={`Fight Club`}
        desc={`A ticking-time-bomb insomniac and a slippery soap salesman channel primal male aggression into a shocking new form of therapy. Their concept catches on, with underground "fight clubs" forming in every town.`}
        id={550}
        />
        </>
  )},
  {
    card:(
        <>
        <MotionItem initial={{opacity:0}} whileInView={{ opacity:1,transition:{duration:0.9} }}>
        <Image src={`https://image.tmdb.org/t/p/original/9faGSFi5r4vtfj8g9S60id6m6XW.jpg`}  alt='s1' fill className='object-cover'/>
        </MotionItem>
        <CardInfo
        title={`Breaking Bad`}
        desc={`Walter White, a New Mexico chemistry teacher, is diagnosed with stage III cancer and turns to manufacturing and selling methamphetamine with a former student, Jesse Pinkman, to secure his family's future.`}
        id={1396}
        />
        </>
  )},
  {
    card:(
        <>
        <MotionItem initial={{opacity:0}} whileInView={{ opacity:1,transition:{duration:0.9} }}>
        <Image src={`https://image.tmdb.org/t/p/original/mDfJG3LC3w668vG6mCcO1w0m8wF.jpg`} fill  alt='s1' className='object-cover'/>
        </MotionItem>
        <CardInfo
        title={`Avengers: Infinity War`}
        desc={`As the Avengers and their allies have continued to protect the world from threats too large for any one hero to handle, a new danger has emerged from the cosmic shadows: Thanos.`}
        id={299536}
        />
        </>
  )},
  {
    card:(
        <>
        <MotionItem initial={{opacity:0}} whileInView={{ opacity:1,transition:{duration:0.9} }}>
        <Image src={`https://image.tmdb.org/t/p/original/56v2aU606Y9hz9NuCYnZ6f6Sg0i.jpg`} fill  alt='s1' className='object-cover'/>
        </MotionItem>
        <CardInfo
        title={`Stranger Things`}
        desc={`When a young boy vanishes, a small town uncovers a mystery involving secret experiments, terrifying supernatural forces and one strange little girl.`}
        id={66732}
        />
        </>
  )},
  {
    card:(
        <>
        <MotionItem initial={{opacity:0}} whileInView={{ opacity:1,transition:{duration:0.9} }}>
        <Image src={`https://image.tmdb.org/t/p/original/6i7FFCH86wB08f969S6Iu979Y9q.jpg`}  alt='s1' fill className='object-cover'/>
        </MotionItem>
        <CardInfo
        title={`The Hobbit: An Unexpected Journey`}
        desc={`A reluctant Hobbit, Bilbo Baggins, sets out to the Lonely Mountain with a spirited group of dwarves to reclaim their mountain home, and the gold within it, from the dragon Smaug.`}
        id={49051}
        />
        </>
  )},
]}
      />
    </div>
  )
}
