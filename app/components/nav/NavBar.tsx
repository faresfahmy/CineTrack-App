"use client";
import { div } from 'motion/react-client'
import React, { useState } from 'react'
import Button from '../default/Button'
import { BiMenu } from 'react-icons/bi';
import { usePathname } from 'next/navigation';
import MenuCustom from '../default/MenuCustom';
export default function NavBar({ links }: { links: any[] }) {
  const pathName = usePathname()
  return (
    <div className='flex items-center'>
      
      <div className={`navbar navbar-col `}>
        {
          links.map((link, index) => (
            <Button className={`${pathName==link.link&&"bg-rose-400"} flex items-center gap-1`}  key={index} title={link.title} link={link.link} >
              {link.icon}
            </Button>
          ))
        }
       
      </div>
       <MenuCustom items={links} />
    </div>

  )
}
