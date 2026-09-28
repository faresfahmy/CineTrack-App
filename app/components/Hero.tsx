import React from 'react'
import SwiperCards from './SwiperCards'
import Image from 'next/image'
import CardInfo from './CardInfo'
import MotionItem from './default/MotionItem'

export default function Hero() {
  return (
    <div className='h-[600px]'>
      <SwiperCards
        slidesPerView={1}
        className='w-full h-full'
        isHero
        items={[
          {
            card: (
              <>
                <MotionItem initial={{ opacity: 0 }} whileInView={{ opacity: 1, transition: { duration: 0.9 } }}>
                  <Image src={`https://image.tmdb.org/t/p/original/zMwhWailP1WY7sb6AoE6b8ugoy.jpg`} fill alt='Swapped' className='object-cover' priority />
                </MotionItem>
                <CardInfo
                  title={`Swapped`}
                  desc={`A small woodland creature and a majestic bird, two natural sworn enemies of the Valley, magically trade places and set off on an adventure of a lifetime to switch back. Their journey soon uncovers a greater threat—one that could endanger not only their species, but the entire valley they call home.`}
                  id={1007757}
                />
              </>
            )
          },
          {
            card: (
              <>
                <MotionItem initial={{ opacity: 0 }} whileInView={{ opacity: 1, transition: { duration: 0.9 } }}>
                  <Image src={`https://image.tmdb.org/t/p/original/7TJjD2X9GTEqyLVIJKLS85J2V47.jpg`} fill alt='Madness' className='object-cover' />
                </MotionItem>
                <CardInfo
                  title={`Madness`}
                  desc={`An escaped convicted murderer invades the cottage of a man, his wife and the wife's sister, whereupon he proceeds to torment this already dysfunctional trio with rape and violence.`}
                  id={28322}
                />
              </>
            )
          },
          {
            card: (
              <>
                <MotionItem initial={{ opacity: 0 }} whileInView={{ opacity: 1, transition: { duration: 0.9 } }}>
                  <Image src={`https://image.tmdb.org/t/p/original/xugEpZk9YQ0DIz1aFvH5HGkqpZK.jpg`} alt="Lee Cronin's The Mummy" fill className='object-cover' />
                </MotionItem>
                <CardInfo
                  title={`Lee Cronin's The Mummy`}
                  desc={`The young daughter of a journalist disappears into the desert without a trace—eight years later, the broken family is shocked when she is returned to them, as what should be a joyful reunion turns into a living nightmare.`}
                  id={1304313}
                />
              </>
            )
          },
          {
            card: (
              <>
                <MotionItem initial={{ opacity: 0 }} whileInView={{ opacity: 1, transition: { duration: 0.9 } }}>
                  <Image src={`https://image.tmdb.org/t/p/original/4k99kV4R1bbbrsnjR205v91Xbin.jpg`} alt='Obsession' fill className='object-cover' />
                </MotionItem>
                <CardInfo
                  title={`Obsession`}
                  desc={`After breaking the mysterious "One Wish Willow" to win his crush's heart, a hopeless romantic finds himself getting exactly what he asked for but soon discovers that some desires come at a dark, sinister price.`}
                  id={1339713}
                />
              </>
            )
          },
          {
            card: (
              <>
                <MotionItem initial={{ opacity: 0 }} whileInView={{ opacity: 1, transition: { duration: 0.9 } }}>
                  <Image src={`https://image.tmdb.org/t/p/original/bq28ajZaoMyzEIm6REelqyqtEDZ.jpg`} fill alt='The Boys' className='object-cover' />
                </MotionItem>
                <CardInfo
                  title={`The Boys`}
                  desc={`A group of vigilantes known informally as “The Boys” set out to take down corrupt superheroes with no more than blue-collar grit and a willingness to fight dirty.`}
                  id={76479}
                />
              </>
            )
          },
          {
            card: (
              <>
                <MotionItem initial={{ opacity: 0 }} whileInView={{ opacity: 1, transition: { duration: 0.9 } }}>
                  <Image src={`https://image.tmdb.org/t/p/original/oTE4lNs4PSG5iIWjqaTdCIFJ4Bs.jpg`} fill alt="Apex" className='object-cover' />
                </MotionItem>
                <CardInfo
                  title={`Apex`}
                  desc={`A grieving woman pushing her limits on a solo adventure in the Australian wild is ensnared in a twisted game with a cunning killer who thinks she's prey.`}
                  id={1318447}
                />
              </>
            )
          },
          {
            card: (
              <>
                <MotionItem initial={{ opacity: 0 }} whileInView={{ opacity: 1, transition: { duration: 0.9 } }}>
                  <Image src={`https://image.tmdb.org/t/p/original/dd31qJxOarrHyGZwYsCzOjobQzP.jpg`} alt={`Tom Clancy's Jack Ryan: Ghost War`} fill className='object-cover' />
                </MotionItem>
                <CardInfo
                  title={`Tom Clancy's Jack Ryan: Ghost War`}
                  desc={`Jack Ryan is reluctantly pulled back into espionage when an international covert mission unravels a deadly conspiracy. Racing against time, he joins CIA allies Mike November & James Greer and sharp MI6 officer Emma Marlowe to battle a rogue black-ops unit in a high-stakes, deeply personal fight.`}
                  id={1380291}
                />
              </>
            )
          }
        ]}
      />
    </div>
  )
}
