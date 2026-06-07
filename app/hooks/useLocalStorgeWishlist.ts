"use client";
import { useEffect, useState } from "react"
const useWishlistLocalStorge  = <T>(key: string, initialValue: T): [T, React.Dispatch<React.SetStateAction<T>>] => {
    const [wishlist,setWislist] = useState<T>(():any=>{
        const storedValue = global?.window?.localStorage?.getItem(key)
        return storedValue? JSON.parse(storedValue): initialValue
    })
    useEffect(()=>{
        global?.window?.localStorage?.setItem(key,JSON.stringify(wishlist))
    },[key,wishlist])
    return [wishlist,setWislist]
}
export default useWishlistLocalStorge
