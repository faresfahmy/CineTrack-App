import React from 'react'
import tmdbApi from '../api/tmdbAxios'
import Filters from '../components/filters'
import { fetchCustom } from '../api/api';

export default async function page() {
  let geresRes = await fetchCustom('/genre/movie/list');
  return (
    <div>
      <Filters genres={geresRes.data.genres} type='movie' title='Top trending blockbusters'/>
    </div>
  )
}
