"use client";
import React from 'react'
import {FaPlus} from "react-icons/fa"
import {GiCancel} from "react-icons/gi"
import { useWishlsit} from '../context/wishlistProvider'
export default function wishlistButton({id}:{id:number}) {
  const {wishlist,handleWislistUpdate,handleCheckWishlitItem} = useWishlsit();
  const isWishlistItem = handleCheckWishlitItem(id)
  return (
    <>
    {isWishlistItem?
          <GiCancel onClick={()=>{
        handleWislistUpdate(id)
      }} className="bg-red-600 text-white absolute top-1 left-2 z-300  text-2xl py-1 px-1  rounded-2xl cursor-pointer" />:
      <FaPlus onClick={()=>{
        handleWislistUpdate(id)
      }} className="bg-gray-400 text-white absolute top-1 left-2  z-300 py-1 px-1 text-2xl rounded-2xl cursor-pointer" />

    }
    </>
  )
}
