import React from 'react'
import { fetchCustom } from '@/app/api/api';
import Details from '@/app/components/Details';
interface Props {
  params: Promise<{ id: string }>
}
export default async function page({ params }: Props) {
  const { id } = await params;
  const detailsRes = await fetchCustom(`/movie/${id}`)
  return (
   <Details detailsRes={detailsRes.data||[]}  />
  )
}
