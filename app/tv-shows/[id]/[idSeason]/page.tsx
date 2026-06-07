import React from 'react'
import { fetchCustom } from '@/app/api/api';
import Details from '@/app/components/Details';
import Heading from '@/app/components/default/Heading';
import DetailsSeason from '@/app/components/DetailsSeason';
interface Props {
  params: Promise<{ 
    id: string; 
    idSeason: string 
  }>;
}
export default async function page({ params }: Props) {
  const { id, idSeason} = await params;
  const detailsRes = await fetchCustom(`/tv/${id}/season/${idSeason}`)
  console.log(detailsRes.data);
  return (
   <DetailsSeason results={detailsRes.data} id={Number(id)} />
  )
}
