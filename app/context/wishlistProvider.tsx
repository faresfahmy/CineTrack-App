"use client"
import React, { ReactNode, useEffect, useState } from 'react'
import useWishlistLocalStorge from '../hooks/useLocalStorgeWishlist'
import { createContext,useContext } from "react";
import LoadingThreeDotsJumping from '../components/default/LoadingThreeDotsJumping';

interface wishlistTypes{
  wishlist:number[],
  handleWislistUpdate:(value:number)=>void,
  handleCheckWishlitItem:(value:number)=>boolean,
}


const wishlistContext = createContext<wishlistTypes|null>(null)

export const useWishlsit = () => {
  const context = useContext(wishlistContext);
  if (!context) {
    throw new Error("useWishlsit must be used within a WishlistProvider");
  }
  return context;
};
export default function WishlistProvider({children}:{children:ReactNode}) {
  const [mouted,setMouted] = useState<boolean>(false)
  const [wishlist, setWishlist] = useWishlistLocalStorge<number[]>("wishlist",[])
  useEffect(()=>{
    setMouted(true)
  },[])
    function handleCheckWishlitItem(value:number):boolean{
      return wishlist.some((w)=>w==value)
    }
  
  function handleWislistUpdate(value:number):void{
    const isitemInWishlist = handleCheckWishlitItem(value)
    console.log(isitemInWishlist)
    if(isitemInWishlist){
      setWishlist((prev:any)=>prev.filter((w:number)=>w!=value))
      console.log("Deleted")
    }
    else{
      setWishlist((prev)=>[...prev,value])
      console.log("Add")
    }
  }
  if(!mouted){
    return <LoadingThreeDotsJumping />
  }
 if(!mouted)
  return null;
  return <wishlistContext.Provider value={{wishlist,handleWislistUpdate,handleCheckWishlitItem}}>{children}</wishlistContext.Provider>
  }

