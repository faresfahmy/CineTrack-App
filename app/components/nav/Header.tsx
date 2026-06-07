
import React, { ReactNode } from 'react'
import {BiHeart, BiMovie} from "react-icons/bi"
import {BiHome} from "react-icons/bi"
import {BiTv} from "react-icons/bi"
import {LuClapperboard} from "react-icons/lu"
import NavBar from './NavBar'
import Logo from '../default/Logo'
import SearchInput from '../default/SearchInput'

interface linksTypes {
  title:string,
  icon:ReactNode,
  link:string
}
const links:linksTypes[] = [
  {title:"Home",
    icon:<BiHome className="text-xl"/>,
    link:"/"
  },
  {title:"Movies",
    icon:<BiMovie className="text-xl"/>,
    link:"/movies"
  },
  {title:"TV Shows",
    icon:<BiTv className="text-xl"/>,
    link:"/tv-shows"
  },
  {title:"Now Playing",
    icon:<LuClapperboard className="text-xl"/>,
    link:"/now-playing"
  },
  {title:"WishList",
    icon:<BiHeart className="text-xl"/>,
    link:"/wishlist"
  }
]
export default function Header() {

  return (
    <div className="w-[100wv] bg-[#0e1822] sticky flex items-center gap-4 relative h-18 pr-20">
      <Logo />
      <SearchInput isSearch type='search'/>
      <NavBar links={links} />

    </div>
  )
}
