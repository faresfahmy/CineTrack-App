import React from 'react'
import Heading from '../components/default/Heading'
import Filters from '../components/filters'
interface Props{
    params:Promise<{search:string}>
}
export default async function page({params}:Props) {
    const {search} = await params;

  return (
    <div>
        <Filters  title='Search Page' isSearch query={search||''} />
    </div>
  )
}
