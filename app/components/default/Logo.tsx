

import Link from 'next/link'
import React from 'react'

export default function Logo() {
  return (
    <Link href='/'>
    <h1 className='text-white text-2xl m-3 font-semibold cursor-pointer logo'>Cine<span className='text-rose-400'>Track</span></h1>
    </Link>
  )
}
