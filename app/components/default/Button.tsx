import Link from 'next/link'
import React from 'react'

export default function Button({className,title,link,children}:{className?:string,title:string,link:string, children?: React.ReactNode}) {
    return (
        <Link href={link||""} className={`  w-auto`}>
                <button className={`primary-button btn ${className||""}`}> 
                    {children||null} {title}
                </button>
        </Link>
    )
}
